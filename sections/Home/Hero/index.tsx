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
  {link: 'https://www.linkedin.com/in/farisashai/', icon: <FaLinkedinIn />},
  {link: 'https://github.com/farisashai/', icon: <FaGithub />},
  {link: 'https://devpost.com/farisashai', icon: <SiDevpost />},
  {link: 'https://www.facebook.com/farisashai/', icon: <FaFacebookF />},
  {link: 'https://www.instagram.com/farisashai/', icon: <FaInstagram />},
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
        Software Engineer at Apple
        <svg
          width={24}
          height={24}
          fill="rgb(var(--primary))"
          style={{
            transition: '0.3s ease-in-out fill',
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
        </svg>
      </h2>
      <br />
      {/* <h2 className={styles.subtitle}>Let&apos;s get in touch!</h2> */}
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
          href="mailto:fashai@ucsd.com?subject=Let's%20chat!"
          type="link"
          variant="primary"
          icon={<FaEnvelope size={30} />}
        />
        <Button
          title="Let's Meet"
          href="https://calendly.com/farisashai/30min"
          type="link"
          variant="secondary"
          icon={<FaHandshake size={30} />}
        />
      </div>
    </section>
  );
};

export default Hero;
