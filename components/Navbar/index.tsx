import Link from 'next/link';
import styles from './styles.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">Home</Link>
      <div className={styles.navlinks}>
        <Link href="/projects">Projects</Link>
        <Link href="/playground">Fun</Link>
      </div>
    </nav>
  );
};

export default Navbar;