import type {NextPage} from 'next';
import styles from 'styles/pages/Home.module.scss';
import MySEO from 'components/MySEO';
import Hero from 'sections/Home/Hero';
import About from 'sections/Home/About';

const Home: NextPage = () => {
  return (
    <>
      <MySEO
        description="My portfolio. Current Software Engineering Intern at Apple and Vice President of Development at ACM UCSD"
        page="Home"
        path="/"
      />
      <main className={styles.main}>
        <Hero />
        {/* <About /> */}
      </main>
    </>
  );
};

export default Home;

export const config = {
  unstable_runtimeJS: false,
};
