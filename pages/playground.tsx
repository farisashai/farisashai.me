import type {NextPage} from 'next';
import styles from 'styles/pages/Playground.module.scss';
import MySEO from 'components/MySEO';
import useSWR from 'swr';
import {TopTracksResponse, TrackInfo} from 'types';
import {fetcher} from 'utils';
import {ParallaxProvider} from 'react-scroll-parallax';
import TopTracks from 'sections/Fun/TopTracks';
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

const chooseUniqueCovers = (num: number, start: number, arr: TrackInfo[]) => {
  return arr
    .filter((value, index) => arr.findIndex(e => e.albumImageUrl === value.albumImageUrl) === index)
    .slice(start, start + num);
};

const Projects: NextPage = () => {
  const {data: topTracks, error: topTracksError} = useSWR<TopTracksResponse>(
    '/api/topTracks',
    fetcher
  );

  const startIndex = useMemo(
    () => Math.floor(Math.random() * (topTracks?.length - 5)),
    [topTracks?.length]
  );

  return (
    <>
      <MySEO
        description="My interests and hobbies"
        page="Playground"
        path="/playground"
      />
      <ParallaxProvider>
        <main className={styles.main}>
          {/* <TopTracks
            topTracksError={topTracksError}
            topTracks={shuffle(topTracks).slice(startIndex, startIndex + 5)}
          /> */}
          <TopTracks
            topTracksError={topTracksError}
            topTracks={chooseUniqueCovers(5, startIndex, shuffle(topTracks))}
          />
          {/* <TopTracks
            topTracksError={topTracksError}
            topTracks={shuffle(topTracks).slice(startIndex, startIndex + 5)}
          /> */}
        </main>
      </ParallaxProvider>
    </>
  );
};

export default Projects;
