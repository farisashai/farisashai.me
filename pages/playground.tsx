import type {NextPage} from 'next';
import styles from 'styles/pages/Playground.module.scss';
import MySEO from 'components/MySEO';
import useSWR from 'swr';
import {NowPlayingResponse, TopTracksResponse} from 'types';
import {fetcher} from 'utils';

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

const Projects: NextPage = () => {
  // const {data: nowPlaying, error: nowPlayingError} = useSWR<NowPlayingResponse>(
  //   '/api/nowPlaying',
  //   fetcher
  // );
  const {data: topTracks, error: topTracksError} = useSWR<TopTracksResponse>(
    '/api/topTracks',
    fetcher
  );

  console.log({topTracks});
  const startIndex = Math.floor(Math.random() * (topTracks?.length - 5));

  return (
    <>
      <MySEO
        description=""
        page="Playground"
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
              .map(track => (
                <div>
                  <img
                    onClick={() => window.open(track.songUrl)}
                    src={track.albumImageUrl}
                  />
                </div>
              ))
          )}
        </div>
        <br />
        <p>A few of the top tracks I'm listening to on repeat, updated in real time.</p>
      </main>
    </>
  );
};

export default Projects;
