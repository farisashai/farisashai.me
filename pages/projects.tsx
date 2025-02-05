/* eslint-disable @next/next/no-img-element */
import type {NextPage} from 'next';
import styles from 'styles/pages/Projects.module.scss';
import MySEO from 'components/MySEO';

import {useState} from 'react';
import Image from 'next/image';

const RadioButton = () => {
  return <button>Hackathons</button>;
};

const Projects: NextPage = () => {
  const [radioValue, setRadioValue] = useState<string>(null);
  console.log(radioValue);
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
        <div className={styles.container}>
          <div className={styles.radioContainer}>
            <input
              type="radio"
              name="Section"
              id="Hackathons"
              onChange={() => setRadioValue('Hackathons')}
            />
            <label htmlFor="Hackathons">Hackathons</label>
          </div>
          <div className={styles.radioContainer}>
            <input
              type="radio"
              name="Section"
              id="College"
              onChange={() => setRadioValue('College')}
            />
            <label htmlFor="College">College</label>
          </div>

          <div className={styles.radioContainer}>
            <input
              type="radio"
              name="Section"
              id="Work"
              onChange={e => setRadioValue('Work')}
            />
            <label htmlFor="Work">Work</label>
          </div>
        </div>
      </main>
      <section className={styles.projects}>
        <div className={styles.card}>
          <Image
            src={'https://www.farisashai.me/projects/eceday.jpg'}
            // width={160}
            // height={160}
            layout="fill"
          />
        </div>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
      </section>
    </>
  );
};

export default Projects;
