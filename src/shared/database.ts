export enum Category {
  All = 'all',
  Articles = 'articles',
  CodeReview = 'code_review',
  Coding = 'code',
  Meetings = 'meetings',
  Social = 'social',
  Youtube = 'youtube',
  Other = 'other',
}

export type FocusType = {
  focus: number;
};

export type DatabaseStore = { [key in Category]: FocusType } & {
  all: { focus: number; unFocus: number };
  startTime?: number;
  uncommittedTime: number;
};

export const inititalDatabaseStore: DatabaseStore = {
  all: { focus: 0, unFocus: 0 },
  articles: { focus: 0 },
  code_review: { focus: 0 },
  code: { focus: 0 },
  meetings: { focus: 0 },
  other: { focus: 0 },
  social: { focus: 0 },
  youtube: { focus: 0 },
  uncommittedTime: 0,
};
