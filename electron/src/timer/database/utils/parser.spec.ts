import { parser } from './parser';
import { Category } from '../../../../../src/shared/database';

describe('Parser', () => {
  it('parses social media titles', () => {
    expect(
      parser({
        title: '(2) Home / Twitter',
        bundleId: 'com.google.Chrome',
        name: 'Google Chrome',
      }),
    ).toEqual(Category.Social);

    expect(
      parser({
        title:
          'Dan Abramov on Twitter: "Note you want useLayoutEffect for this particular use case. It forces to run synchronously (a bit worse for perf but unavoidable for layout use case).… https://t.co/ufRdi5K5G5"',
        bundleId: 'com.google.Chrome',
        name: 'Google Chrome',
      }),
    ).toEqual(Category.Social);

    expect(
      parser({
        title: 'Facebook',
        bundleId: 'com.google.Chrome',
        name: 'Google Chrome',
      }),
    ).toEqual(Category.Social);

    expect(
      parser({
        title: 'Messenger',
        bundleId: 'com.google.Chrome',
        name: 'Google Chrome',
      }),
    ).toEqual(Category.Social);

    expect(
      parser({
        title:
          'Ahmed Magdy Elhanafy (@ahmedmagdy) • Instagram photos and videos',
        bundleId: 'com.google.Chrome',
        name: 'Google Chrome',
      }),
    ).toEqual(Category.Social);
  });

  it('parses code editors names', () => {
    expect(
      parser({
        title: 'parser.spec.ts — timer-app',
        bundleId: 'com.microsoft.VSCode',
        name: 'Code',
      }),
    ).toBe(Category.Coding);

    expect(
      parser({
        title:
          'sample.qna — ~/Documents/Development/Microsoft/BotBuilder-Samples/javascript_ts/11.qnamaker/cognitiveModels',
        bundleId: 'com.github.atom',
        name: 'Atom',
      }),
    ).toBe(Category.Coding);
  });

  it('parses pull request titles', () => {
    expect(
      parser({
        title:
          'A ahelh/lg resolver by ahmedlhanafy · Pull Request #6 · ahmedlhanafy/botbuilder-js',
        bundleId: 'com.google.Chrome',
        name: 'Google Chrome',
      }),
    ).toBe(Category.CodeReview);

    expect(
      parser({
        title:
          'Add angle bracket at the beginning of each line when using quote button (!1264) · Merge Requests · GitLab.org / gitter / webapp · GitLab',
        bundleId: 'com.google.Chrome',
        name: 'Google Chrome',
      }),
    ).toBe(Category.CodeReview);
  });

  it('parses meetings apps', () => {
    expect(
      parser({
        title: 'Skype Preview',
        bundleId: 'com.skype.s4l',
        name: 'Skype',
      }),
    ).toBe(Category.Meetings);

    expect(
      parser({
        title: '@ar-maged - Discord',
        bundleId: 'com.hnc.Discord',
        name: 'Discord',
      }),
    ).toBe(Category.Meetings);
  });

  it('parses article websites and apps', () => {
    expect(
      parser({
        title: 'Pocket',
        bundleId: 'com.google.Chrome',
        name: 'Google Chrome',
      }),
    ).toBe(Category.Articles);

    expect(
      parser({
        title: '',
        bundleId: 'com.readitlater.PocketMac',
        name: 'Pocket',
      }),
    ).toBe(Category.Articles);
  });

  it('parses youtube titles', () => {
    expect(
      parser({
        title: '(3) YouTube',
        bundleId: 'com.google.Chrome',
        name: 'Google Chrome',
      }),
    ).toEqual(Category.Youtube);

    expect(
      parser({
        title:
          '(3) Jennifer Lawrence Squashes Her Beef with Jimmy Fallon - YouTube',
        bundleId: 'com.google.Chrome',
        name: 'Google Chrome',
      }),
    ).toEqual(Category.Youtube);
  });
});
