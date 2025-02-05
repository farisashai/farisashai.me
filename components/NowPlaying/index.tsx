import {Popover} from '@headlessui/react';
import styles from './styles.module.scss';
import useSWR from 'swr';
import {type NowPlayingResponse} from 'types';
import {fetcher} from 'utils';
import Image from 'next/image';
import {FaSpotify} from 'react-icons/fa';

const NowPlaying = () => {
  const {data: nowPlaying, error: nowPlayingError} = useSWR<NowPlayingResponse>(
    '/api/nowPlaying',
    fetcher
  );

  const activeTrack = !nowPlayingError && nowPlaying && nowPlaying?.isPlaying == true;

  return (
    <Popover className={`${styles.pop} ${activeTrack ? '' : styles.hidden}`}>
      <Popover.Button
        className={styles.popButton}
        aria-label="Now Playing Indicator"
      />
      <Popover.Panel className={styles.popPanel}>
        <Image
          width={152}
          height={152}
          src={nowPlaying?.albumImageUrl}
          className={styles.popAlbumCover}
          alt={nowPlaying?.title}
        />
        <div className={styles.popTextContent}>
          <p className={styles.currently}>I&apos;m Currently Playing ...</p>
          <p className={styles.title}>{nowPlaying?.title}</p>
          <a className={styles.artist}>{nowPlaying?.artist}</a>
          <a
            href={nowPlaying?.songUrl}
            className={styles.listenNow}
          >
            <FaSpotify size={16} />
            Listen Now
          </a>
        </div>
        {/* <h2>{nowPlaying?.title}</h2>
        <p>{nowPlaying?.artist}</p>
        <a href={nowPlaying?.songUrl}>Listen Now</a> */}
      </Popover.Panel>
    </Popover>
  );
};
export default NowPlaying;
