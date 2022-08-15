import Link from 'next/link';
import styles from './styles.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">Home</Link>
      <div className={styles.navlinks}>
        <Link href="https://drive.google.com/file/d/1JII5zavhs-pZSX_oZ3tWi8l0zH1v6qZR/view?usp=sharing">
          Resume
        </Link>
        <Link href="/projects">Projects</Link>
        <Link href="/playground">Fun</Link>
      </div>
    </nav>
  );
};

export default Navbar;
