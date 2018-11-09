import { Category } from '../../../../src/shared/database';
import { normalizeText, Window } from '../utils';

type Parser = (window: Window) => Category;

const socialParser: Parser = window => {
  const values = ['facebook', 'twitter', 'instagram'];
  const windowTitle = normalizeText(window.title);
  const isSocial = values.reduce(
    (acc, val) => windowTitle.includes(val) || acc,
    false,
  );

  return isSocial ? Category.Social : undefined;
};

const codingParser: Parser = window => {
  const values = ['code', 'atom'];
  const windowName = normalizeText(window.name);
  const isCoding = values.reduce(
    (acc, val) => windowName.includes(val) || acc,
    false,
  );

  return isCoding ? Category.Coding : undefined;
};

const codeReviewParser: Parser = window => {
  const values = ['pullrequest'];
  const windowTitle = normalizeText(window.title);
  const isCodeReview = values.reduce(
    (acc, val) => windowTitle.includes(val) || acc,
    false,
  );

  return isCodeReview ? Category.CodeReview : undefined;
};

const youtubeParser: Parser = window => {
  const values = ['youtube'];
  const windowTitle = normalizeText(window.title);
  const isYoutube = values.reduce(
    (acc, val) => windowTitle.includes(val) || acc,
    false,
  );

  return isYoutube ? Category.Youtube : undefined;
};

const articlesParser: Parser = window => {
  const values = ['pocket', 'medium'];
  const windowTitle = normalizeText(window.title);
  const windowName = normalizeText(window.name);
  const isArticles = values.reduce(
    (acc, val) => windowTitle.includes(val) || windowName.includes(val) || acc,
    false,
  );

  return isArticles ? Category.Articles : undefined;
};

const meetingsParser: Parser = window => {
  const values = ['lync', 'teams', 'skype'];
  const windowName = normalizeText(window.name);
  const isMeetings = values.reduce(
    (acc, val) => windowName.includes(val) || acc,
    false,
  );

  return isMeetings ? Category.Meetings : undefined;
};

export const parser: Parser = window => {
  const parsers: Parser[] = [
    socialParser,
    codingParser,
    codeReviewParser,
    youtubeParser,
    articlesParser,
    meetingsParser,
  ];

  return parsers.reduce((acc, func) => {
    const category = func(window);
    if (category !== undefined) {
      acc = category;
    }
    return acc;
  }, Category.Other);
};
