// import DarkModeToggle from 'components/DarkModeToggle';
import Link from 'next/link';
import styles from './styles.module.scss';
import {useRouter} from 'next/router';
import Image from 'next/image';

import {Popover, Transition} from '@headlessui/react';
import {fetcher} from 'utils';
import {NowPlayingResponse} from 'types';
import useSWR from 'swr';
import {FaSpotify} from 'react-icons/fa';

import dynamic from 'next/dynamic';
const DarkModeToggle = dynamic(() => import('components/DarkModeToggle'), {ssr: false});
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="35"
            viewBox="0 0 34 35"
            fill="none"
            style={{
              transition: '300ms ease-in-out',
            }}
          >
            <g filter="url(#filter0_d_1201_12)">
              <path
                d="M0.552471 32.9298L9.6849 14.9579L9.73131 14.8666L9.69246 14.7718L8.06391 10.798H27.9702L26.3996 14.633H14.265H14.1269L14.0651 14.7564L10.1444 22.5812L9.98217 22.9051H10.3443H19.6109L21.4205 26.8179H8.14131H8.00619L7.94335 26.9375L4.79499 32.9298H0.552471ZM27.4371 32.9298L20.1096 17.6885H24.6159L31.8346 32.9298H27.4371ZM20.0614 8.63784H12.9851L16.5063 1.64858L20.0614 8.63784Z"
                fill="rgb(var(--secondary))"
                stroke="rgb(var(--primary))"
                strokeWidth="0.447259"
              />
              <path
                d="M32.0386 33.2992H32.3923L32.2406 32.9797L24.8847 17.4858L24.8241 17.358H24.6827H19.9779H19.6226L19.7763 17.6784L27.2068 33.1723L27.2677 33.2992H27.4085H32.0386ZM20.2393 8.96831H20.6044L20.4385 8.64305L16.7045 1.32432L16.5043 0.93191L16.3057 1.32513L12.6091 8.64386L12.4452 8.96831H12.8087H20.2393Z"
                fill="rgb(var(--primary))"
                stroke="rgb(var(--secondary))"
                strokeWidth="0.447259"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_1201_12"
                x="0.0202663"
                y="0.43787"
                width="33.2289"
                height="33.8118"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood
                  floodOpacity="0"
                  result="BackgroundImageFix"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset
                  dx="0.167722"
                  dy="0.391351"
                />
                <feGaussianBlur stdDeviation="0.167722" />
                <feComposite
                  in2="hardAlpha"
                  operator="out"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1201_12"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1201_12"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
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
      <Link href="/music">
        <a className={router.route === '/music' ? styles.active : ''}>Music</a>
      </Link>
      <div className={styles.toggleBox}>
        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
