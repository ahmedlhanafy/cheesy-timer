import { EventEmitter } from 'events';
import { Observable, of } from 'rxjs';
import { parser } from './utils';
import { Window } from '../../utils';
import {
  DatabaseStore,
  Category,
  inititalDatabaseStore,
} from '../../../../src/shared/database';

export enum Activity {
  Active = 'active',
  Uncommited = 'uncommitted',
}

class Database extends EventEmitter {
  private backingStore: DatabaseStore = inititalDatabaseStore;
  private static readonly CHANGE = 'change';

  constructor(private readonly incrementVal: number = 60000) {
    super();
  }

  public onChange(cb: (database: DatabaseStore) => any): () => void {
    this.on(Database.CHANGE, cb);

    return () => this.removeListener(Database.CHANGE, cb);
  }

  private saveStartTime() {
    if (this.backingStore.startTime === undefined) {
      this.backingStore.startTime = Date.now();
    }
  }

  public saveUncommittedTime() {
    this.backingStore.all.focus =
      this.backingStore.all.focus + this.backingStore.uncommittedTime;
    this.backingStore.uncommittedTime = 0;
  }

  public flushUncommittedTime() {
    this.backingStore.all.unFocus =
      this.backingStore.all.unFocus + this.backingStore.uncommittedTime;
    this.backingStore.uncommittedTime = 0;
  }

  public read(): Observable<DatabaseStore> {
    return of(this.backingStore);
  }

  public save(window: Window, activity: Activity): Observable<void> {
    const category = parser(window);

    this.write(category, activity);

    this.write(
      Category.All,
      category === Category.Meetings ? Activity.Active : activity,
    );

    this.emit(Database.CHANGE, this.backingStore);

    this.saveStartTime();

    return of();
  }

  private write(category: Category, activity: Activity): void {
    // Distraction time
    if (category === Category.All) {
      this.backingStore.uncommittedTime =
        activity === Activity.Uncommited
          ? this.backingStore.uncommittedTime + this.incrementVal
          : this.backingStore.uncommittedTime;
    }

    // Save the time regardless of the activity
    if (category === Category.Youtube || category === Category.Meetings) {
      this.backingStore[category].focus =
        this.backingStore[category].focus + this.incrementVal;
      return;
    }

    // Focus time
    this.backingStore[category].focus =
      activity === Activity.Active
        ? this.backingStore[category].focus + this.incrementVal
        : this.backingStore[category].focus;
  }
}

export default new Database();
