import { useState, useEffect } from "react";
import sortBy from 'lodash.sortby';
import { Release } from "../../../src/shared/types/github-api";

function isMacintosh() {
    return navigator.platform.indexOf('Mac') > -1;
  }
  
  function isWindows() {
    return navigator.platform.indexOf('Win') > -1;
  }
  
  const MacAsset: DownloadAsset = {
    os: 'mac',
    extension: 'dmg',
  };
  
  const WinAsset: DownloadAsset = {
    os: 'win',
    extension: 'exe',
  };
  
  const OtherAsset: DownloadAsset = {
    os: 'linux',
    extension: 'zip',
  };
  
  type DownloadAsset = {
    os: 'mac' | 'win' | 'linux';
    extension: 'dmg' | 'exe' | 'zip';
  };
  
  export default (): string | void => {
    const [downloadLink, setDownloadLink] = useState(undefined);
  
    useEffect(() => {
      fetch('https://api.github.com/repos/ahmedlhanafy/cheesy-timer/releases')
        .then(res => res.json())
        .then((releases: Release[]) => {
          const [lastRelease] = sortBy(releases, ['published_at']).reverse();
          const downloadAsset: DownloadAsset = isMacintosh()
            ? MacAsset
            : isWindows()
            ? WinAsset
            : OtherAsset;
  
          const {
            browser_download_url: releaseDownloadLink,
          } = lastRelease.assets.find(({ name }) =>
            name.includes(downloadAsset.extension),
          );
  
          setDownloadLink(releaseDownloadLink || lastRelease.html_url);
        });
    }, []);
  
    return downloadLink;
  };