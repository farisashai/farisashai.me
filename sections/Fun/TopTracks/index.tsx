import styles from './style.module.scss';
import Image from 'next/image';
import {Parallax} from 'react-scroll-parallax';

const TopTracks = ({topTracksError, topTracks}) => (
  <div className={styles.songSection}>
    {/* <Parallax
      speed={100}
      translateY={[-85, 100]}
    >
      <div className={styles.songLeft}>Top Tracks</div>
    </Parallax> */}
    <div className={styles.container}>
      {topTracksError ? (
        <p>Error Fetching Data</p>
      ) : !topTracks ? (
        <p>Loading</p>
      ) : (
        topTracks.map((track, index) => (
          <div
            className={styles.songCard}
            key={`${track.albumImageUrl}-${index}`}
          >
            <div className={styles.trackOverlay}>
              <span className={styles.mainText}>{track.title}</span>
              <span className={styles.subText}>{track.artist}</span>
            </div>
            <a href={track.songUrl}>
              Song Link
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
    {/* <Parallax
      speed={-30}
      translateY={[100, -75]}
    >
      <div className={styles.songRight}>Updated in real-time</div>
    </Parallax> */}
  </div>
);

export default TopTracks;
