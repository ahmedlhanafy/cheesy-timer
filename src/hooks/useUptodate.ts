import { useEffect, useState } from 'react';
import packageJSON from '../../package.json';
import { Release } from '../types/github-api.js';
import { sortBy } from 'lodash';

export enum UPDATE_STATUS {
  PENDING,
  UPTODATE,
  NEEDS_UPDATE,
}

export default (): [UPDATE_STATUS, string | void] => {
  const [state, setState] = useState(UPDATE_STATUS.PENDING);
  const [downloadUrl, setDownloadUrl] = useState<string | void>(undefined);

  useEffect(() => {
    fetch('https://api.github.com/repos/ahmedlhanafy/cheesy-timer/releases')
      .then(res => res.json())
      .then((res: Release[]) => {
        const [lastRelease] = sortBy(res, ['published_at']).reverse();
        if (lastRelease.name === `v${packageJSON.version}`) {
          setState(UPDATE_STATUS.UPTODATE);
        } else {
          setState(UPDATE_STATUS.NEEDS_UPDATE);
          setDownloadUrl(lastRelease.html_url)
        }
      });
  }, []);

  return [state, downloadUrl];
};
