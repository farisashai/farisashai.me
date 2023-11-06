import DarkModeToggle from 'components/DarkModeToggle';
import Link from 'next/link';
import styles from './styles.module.scss';
import {useRouter} from 'next/router';
import Image from 'next/image';
import {Popover, Transition} from '@headlessui/react';
import {fetcher} from 'utils';
import {NowPlayingResponse} from 'types';
import useSWR from 'swr';
import {FaSpotify} from 'react-icons/fa';

const Navbar = () => {
  const router = useRouter();

  const {data: nowPlaying, error: nowPlayingError} = useSWR<NowPlayingResponse>(
    '/api/nowPlaying',
    fetcher
  );

  const activeTrack = !nowPlayingError && nowPlaying && nowPlaying?.isPlaying == true;

  if (activeTrack) {
    console.log(nowPlaying);
  }

  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a className={styles.logo}>
          <Image
            src="/logo.svg"
            width="32"
            height="32"
            alt="logo"
          />
        </a>
      </Link>
      <Popover className={`${styles.pop} ${activeTrack ? '' : styles.hidden}`}>
        <Popover.Button className={styles.popButton} />
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
      <Link href="https://read.cv/faris">
        <a
          href="https://read.cv/faris"
          className={styles.firstLink}
        >
          Resume
        </a>
      </Link>
      <Link href="/projects">
        <a className={router.route === '/projects' ? styles.active : ''}>Projects</a>
      </Link>
      <Link href="/playground">
        <a className={router.route === '/playground' ? styles.active : ''}>Fun</a>
      </Link>
      <DarkModeToggle />
    </nav>
  );
};

export default Navbar;
