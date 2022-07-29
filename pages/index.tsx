import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaGithub, FaSpotify } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import { NextSeo } from "next-seo";

const links = [
  { link: "https://www.instagram.com/farisashai/", icon: <FaInstagram /> },
  { link: "https://www.facebook.com/farisashai/", icon: <FaFacebookF /> },
  { link: "https://www.linkedin.com/in/farisashai/", icon: <FaLinkedinIn /> },
  { link: "https://devpost.com/farisashai", icon: <SiDevpost /> },
  { link: "https://github.com/farisashai/", icon: <FaGithub /> },
  { link: "https://www.facebook.com", icon: <FaSpotify width={200} /> },
];

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Home"
        titleTemplate="Faris Ashai | %s"
        defaultTitle="Faris Ashai"
        description="My portfolio. Current Software Engineering Intern at Apple and Vice President of Development at ACM UCSD"
        canonical="https://www.farisashai.me/"
        openGraph={{
          url: "https://www.farisashai.me/",
          title: "Faris Ashai | Home",
          description:
            "My portfolio. Current Software Engineering Intern at Apple and Vice President of Development at ACM UCSD",
          site_name: "Faris Ashai",
        }}
      />
      <main className={styles.main}>
        <h1 className={styles.name}>Faris Ashai</h1>
        <h3 className={styles.subtitle}>
          Hey, it&apos;s nice to see you! This website is still a work in progress. In the meantime,
          feel free to reach out to me or stay in touch below.
        </h3>
        <div className={styles.links}>
          {links.map(({ link, icon }, index) => (
            <a
              key={`${link}-${index}`}
              href={link}
              target="_blank"
              rel="noopener, noreferrer"
              aria-label="Link to social media platform"
            >
              {icon}
            </a>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
