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
  unfocus: number;
  uncomminted?: number;
};


export type DatabaseStore = { [key in Category]: FocusType } & {
  startTime?: number;
};

export const inititalDatabaseStore: DatabaseStore = {
  all: { focus: 0, unfocus: 0, uncomminted: 0 },
  articles: { focus: 0, unfocus: 0, uncomminted: 0 },
  code_review: { focus: 0, unfocus: 0, uncomminted: 0 },
  code: { focus: 0, unfocus: 0, uncomminted: 0 },
  meetings: { focus: 0, unfocus: 0, uncomminted: 0 },
  other: { focus: 0, unfocus: 0, uncomminted: 0 },
  social: { focus: 0, unfocus: 0, uncomminted: 0 },
  youtube: { focus: 0, unfocus: 0, uncomminted: 0 },
};
