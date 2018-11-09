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

type PartialFocusType = { focus: number };

export type DatabaseStore = {
  [key in Category]: FocusType | PartialFocusType
} & {
  startTime?: number;
};
