export type Window = {
  title: string;
  name: string;
  bundleId: string;
};

export const normalizeText = (str: string) =>
  str.replace(/ /g, '').toLowerCase();

export const mapToWindow = ({
  title,
  owner: { bundleId, name },
}: any): Window => ({
  title,
  bundleId,
  name,
});
