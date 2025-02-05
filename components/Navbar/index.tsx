import DarkModeToggle from 'components/DarkModeToggle';
import Link from 'next/link';
import styles from './styles.module.scss';
import {useRouter} from 'next/router';
import Image from 'next/image';
import {Popover, Transition} from '@headlessui/react';
import {NowPlayingResponse} from 'types';
import useSWR from 'swr';
import {FaSpotify} from 'react-icons/fa';
import NowPlaying from 'components/NowPlaying';

const Navbar = () => {
  const router = useRouter();

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
      <NowPlaying />
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
      <Link href="/music">
        <a className={router.route === '/music' ? styles.active : ''}>Music</a>
      </Link>
      <DarkModeToggle />
    </nav>
  );
};

export default Navbar;
