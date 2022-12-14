import CircleButton from 'components/CircleButton';
import styles from 'styles/pages/Home.module.scss';
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaSpotify,
  FaMailchimp,
  FaEnvelope,
  FaHandshake,
} from 'react-icons/fa';
import {SiDevpost} from 'react-icons/si';
import Button from 'components/Button';

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

const Hero = () => {
  return (
    <section className={styles.hero}>
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
      <div className={styles.actions}>
        <Button
          title="Let's Talk"
          href="mailto:fashai@ucsd.edu"
          type="link"
          variant="primary"
          icon={<FaEnvelope size={30} />}
        />
        <Button
          title="Let's Meet"
          href="https://koalendar.com/e/coffee-chat-with-faris-ashai"
          type="link"
          variant="secondary"
          icon={<FaHandshake size={30} />}
        />
      </div>
    </section>
  );
};

export default Hero;
