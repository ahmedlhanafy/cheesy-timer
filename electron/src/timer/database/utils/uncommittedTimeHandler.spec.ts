import { Observable, of } from 'rxjs';
import { uncommittedTimeHandler } from './uncommittedTimeHandler';
import database, { Activity } from '..';
import { Window } from '../../../utils';
import { msToText } from '../../../../../src/shared/utils';
jest.mock('..');

describe('UncommittedTimeHanlder', () => {
  let func: (
    {
      window,
      active,
    }: {
      window: Window | undefined;
      active: boolean;
    },
  ) => Observable<void>;
  let promptDialog;

  beforeEach(() => {
    (database.save as any).mockImplementation(() => {
      return of();
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should display prompt if the user becomes active after long inactivity', async () => {
    const uncommittedTime = 11 * 60 * 1000;
    promptDialog = jest.fn().mockReturnValue(of(0));
    func = uncommittedTimeHandler(database, promptDialog);

    (database.read as any).mockImplementation(() => {
      return of({ uncommittedTime });
    });

    await func({
      window: { title: 'Youtube', name: '', bundleId: '' },
      active: true,
    }).toPromise();
    expect(promptDialog).toBeCalledWith(
      `Do you want to add ${msToText(uncommittedTime)} to your focus time?`,
    );
    expect(database.saveUncommittedTime).toBeCalled();
    expect(database.flushUncommittedTime).not.toBeCalled();
  });

  it(`should'nt display prompt if the user becomes active after less than 10 minutes`, async () => {
    const uncommittedTime = 9 * 60 * 1000;

    promptDialog = jest.fn().mockReturnValue(of(0));
    func = uncommittedTimeHandler(database, promptDialog);

    (database.read as any).mockImplementation(() => {
      return of({ uncommittedTime });
    });

    await func({
      window: { title: 'Youtube', name: '', bundleId: '' },
      active: true,
    }).toPromise();
    expect(promptDialog).not.toBeCalled();
    expect(database.flushUncommittedTime).toBeCalled();
    expect(database.saveUncommittedTime).not.toBeCalled();
  });

  it(`should add to the uncommitted time if the user is'nt active`, async () => {
    const uncommittedTime = 9 * 60 * 1000;

    promptDialog = jest.fn().mockReturnValue(of(0));
    func = uncommittedTimeHandler(database, promptDialog);

    (database.read as any).mockImplementation(() => {
      return of({ uncommittedTime });
    });

    await func({
      window: { title: 'Youtube', name: '', bundleId: '' },
      active: false,
    }).toPromise();

    expect(promptDialog).not.toBeCalled();
    expect(database.flushUncommittedTime).not.toBeCalled();
    expect(database.saveUncommittedTime).not.toBeCalled();
    expect(database.save).toBeCalledWith(
      { title: 'Youtube', name: '', bundleId: '' },
      Activity.Uncommited,
    );
  });
});
