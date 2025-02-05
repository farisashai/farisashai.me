import {TbRefresh} from 'react-icons/tb';
import {Loading} from 'components/Loading';
import styles from './style.module.scss';
import Image from 'next/image';
import {TopTracksResponse} from 'types';
import Link from 'next/link';
import {useMemo} from 'react';

function shuffle(array) {
  if (!array) return [];
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

interface TopTracksProps {
  topTracks: TopTracksResponse;
  topTracksError;
}

const TopTracks = ({topTracksError, topTracks}: TopTracksProps) => {
  const loading = !(topTracks?.length > 0);

  const uniqueAlbumTracks = useMemo(
    () =>
      topTracks?.reduce((acc, current) => {
        if (acc.map(track => track.album).includes(current.album)) return acc;
        return [...acc, current];
      }, []),
    [topTracks]
  );

  return (
    <div className={styles.songSection}>
      <div
        className={styles.container}
        style={{
          placeItems: loading ? 'center' : 'initial',
        }}
      >
        {topTracksError ? (
          <p>Error Fetching Data: {topTracksError}</p>
        ) : loading ? (
          <div className={styles.loading}>
            <p>Loading</p>
            <Loading size={40} />
          </div>
        ) : (
          shuffle(uniqueAlbumTracks)
            .slice(0, 5)
            .map((track, index) => (
              <div
                className={styles.songCard}
                key={`${track.albumImageUrl}-${index}`}
              >
                <div className={styles.trackOverlay}>
                  <span className={styles.mainText}>{track.title}</span>
                  <span className={styles.subText}>{track.artist}</span>
                </div>
                <a href={track.songUrl}>
                  <Image
                    priority
                    layout="fill"
                    src={track.albumImageUrl}
                    alt=""
                  />
                </a>
              </div>
            ))
        )}
      </div>
      <div>
        My top tracks right now, updated in real-time &middot;{' '}
        <Link href="/music">
          <span
            style={{
              textDecoration: 'underline',
              fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            Shuffle <TbRefresh />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default TopTracks;
