/* eslint-disable @next/next/no-img-element */
import type {NextPage} from 'next';
import styles from 'styles/pages/Projects.module.scss';
import MySEO from 'components/MySEO';
import ProjectCard from 'components/ProjectCard';
import Button from 'components/Button';
import {FaArrowDown, FaEnvelope} from 'react-icons/fa';

const Projects: NextPage = () => {
  return (
    <>
      <MySEO
        description="Some of my projects and highlighted work"
        page="Projects"
        path="/project"
      />
      <main className={styles.main}>
        <h1 className={styles.dropin}>Hello! </h1>
        <h3
          className={styles.dropin}
          style={{
            animationDelay: '1s',
          }}
        >
          Here&apos;s all of the projects I&apos;ve worked on (that I can share publicly)
        </h3>
        <Button
          title="Start"
          href="mailto:farisashai@gmail.com?subject=Let's%20chat!"
          type="link"
          variant="primary"
          icon={<FaArrowDown />}
          className={styles.dropin}
        />
      </main>
    </>
  );
};

export default Projects;
