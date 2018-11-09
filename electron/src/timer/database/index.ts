import { EventEmitter } from 'events';
import { Observable, of } from 'rxjs';
import { parser } from './parser';
import { Window } from '../utils';
import { DatabaseStore, Category, FocusType } from '../../../../src/shared/database';

const inititalDatabaseStore: DatabaseStore = {
  all: { focus: 0, unfocus: 0, uncomminted: 0 },
  articles: { focus: 0, unfocus: 0, uncomminted: 0 },
  code_review: { focus: 0, unfocus: 0, uncomminted: 0 },
  code: { focus: 0, unfocus: 0, uncomminted: 0 },
  meetings: { focus: 0 },
  other: { focus: 0, unfocus: 0, uncomminted: 0 },
  social: { focus: 0, unfocus: 0, uncomminted: 0 },
  youtube: { focus: 0 },
};

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

  public save(window: Window, active: boolean): Observable<void> {
    const category = parser(window);
    this.write(category, active);
    this.write(Category.All, active);

    this.emit(Database.CHANGE, this.backingStore);

    this.saveStartTime();

    return of();
  }

  private write(category: Category, active: boolean): void {
    if (category === Category.Youtube || category === Category.Meetings) {
      this.backingStore[category].focus =
        this.backingStore[category].focus + this.incrementVal;
      return;
    }

    // Focus time
    this.backingStore[category].focus = active
      ? this.backingStore[category].focus + this.incrementVal
      : this.backingStore[category].focus;

    // Distraction time
    (this.backingStore[category] as FocusType).unfocus = !active
      ? (this.backingStore[category] as FocusType).unfocus + this.incrementVal
      : (this.backingStore[category] as FocusType).unfocus;
  }
}

export default new Database();
