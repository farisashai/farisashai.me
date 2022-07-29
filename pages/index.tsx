import type {NextPage} from 'next';
import styles from 'styles/pages/Home.module.scss';
import {FaInstagram, FaFacebookF, FaLinkedinIn, FaGithub, FaSpotify} from 'react-icons/fa';
import {SiDevpost} from 'react-icons/si';
import CircleButton from 'components/CircleButton';
import MySEO from 'components/MySEO';

const links = [
  {link: 'https://www.instagram.com/farisashai/', icon: <FaInstagram />},
  {link: 'https://www.facebook.com/farisashai/', icon: <FaFacebookF />},
  {link: 'https://www.linkedin.com/in/farisashai/', icon: <FaLinkedinIn />},
  {link: 'https://devpost.com/farisashai', icon: <SiDevpost />},
  {link: 'https://github.com/farisashai/', icon: <FaGithub />},
  {
    link: 'https://open.spotify.com/user/ksjumrnqm89h68mommnjevzqg?si=2442253c04f34d21',
    icon: <FaSpotify width={200} />,
  },
];

const Home: NextPage = () => {
  return (
    <>
      <MySEO
        description="'My portfolio. Current Software Engineering Intern at Apple and Vice President of Development at ACM UCSD'"
        page="Home"
      />
      <main className={styles.main}>
        <h1 className={styles.name}>Faris Ashai</h1>
        <h2 className={styles.subtitle}>
          Hey, it&apos;s nice to see you! This website is still a work in progress. In the meantime,
          feel free to reach out to me or stay in touch below.
        </h2>
        <div className={styles.links}>
          {links.map(({link, icon}, index) => (
            <CircleButton
              link={link}
              icon={icon}
              key={`${link}-${index}`}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
