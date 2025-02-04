import type {NextPage} from 'next';
import styles from 'styles/pages/Playground.module.scss';
import MySEO from 'components/MySEO';
import useSWR from 'swr';
import {TopTracksResponse, TrackInfo} from 'types';
import {fetcher} from 'utils';
import TopTracks from 'sections/Fun/TopTracks';
import {useMemo} from 'react';

const Projects: NextPage = () => {
  const {data: topTracks, error: topTracksError} = useSWR<TopTracksResponse>(
    '/api/topTracks',
    fetcher
  );

  return (
    <>
      <MySEO
        description="My interests and hobbies"
        page="Playground"
        path="/music"
      />
        <main className={styles.main}>
          <TopTracks
            topTracksError={topTracksError}
            topTracks={topTracks}
          />
        </main>
    </>
  );
};

export default Projects;
