import DarkModeToggle from 'components/DarkModeToggle';
import Link from 'next/link';
import styles from './styles.module.scss';
import {useRouter} from 'next/router';
import Image from 'next/image';

const Navbar = () => {
  const router = useRouter();
  return (
    <>
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
        <Link href="/resume.pdf">Resume</Link>
        <Link href="/projects">
          <a className={router.route === '/projects' ? styles.active : ''}>Projects</a>
        </Link>
        <Link href="/playground">
          <a className={router.route === '/playground' ? styles.active : ''}>Fun</a>
        </Link>
        <DarkModeToggle />
      </nav>
      {/* <Image
        src={'https://api.unsplash.com/random'}
        alt=""
      /> */}
    </>
  );
};

export default Navbar;
