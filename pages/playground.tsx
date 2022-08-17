import type {NextPage} from 'next';
import styles from 'styles/pages/Playground.module.scss';
import MySEO from 'components/MySEO';
import useSWR from 'swr';
import {TopTracksResponse} from 'types';
import {fetcher} from 'utils';
import Image from 'next/image';

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

const Projects: NextPage = () => {
  const {data: topTracks, error: topTracksError} = useSWR<TopTracksResponse>(
    '/api/topTracks',
    fetcher
  );

  const startIndex = Math.floor(Math.random() * (topTracks?.length - 5));

  return (
    <>
      <MySEO
        description="My interests and hobbies"
        page="Playground"
        path="/playground"
      />
      <main className={styles.main}>
        <div className={styles.container}>
          {topTracksError ? (
            <p>Error Fetching Data</p>
          ) : !topTracks ? (
            <p>Loading</p>
          ) : (
            shuffle(topTracks)
              .slice(startIndex, startIndex + 5)
              .map((track, index) => (
                <div key={`${track.albumImageUrl}-${index}`}>
                  <a href={track.songUrl}>
                    <Image
                      layout="fill"
                      src={track.albumImageUrl}
                      alt=""
                    />
                  </a>
                </div>
              ))
          )}
        </div>
        <br />
        <p>Some of my top tracks right now, updated in real time.</p>
      </main>
    </>
  );
};

export default Projects;
