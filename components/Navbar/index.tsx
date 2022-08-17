import DarkModeToggle from 'components/DarkModeToggle';
import Link from 'next/link';
import styles from './styles.module.scss';
import {useRouter} from 'next/router';

const Navbar = () => {
  const router = useRouter();
  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/">
          <a className={router.route === '/' ? styles.active : ''}>FA</a>
        </Link>
        <div className={styles.navlinks}>
          <Link href="/resume.pdf">Resume</Link>
          <Link href="/projects">
            <a className={router.route === '/projects' ? styles.active : ''}>Projects</a>
          </Link>
          <Link href="/playground">
            <a className={router.route === '/playground' ? styles.active : ''}>Fun</a>
          </Link>
          <DarkModeToggle />
        </div>
      </nav>
      {/* <Image
        src={'https://api.unsplash.com/random'}
        alt=""
      /> */}
    </>
  );
};

export default Navbar;
