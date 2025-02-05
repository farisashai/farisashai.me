/* eslint-disable @next/next/no-img-element */
import type {NextPage} from 'next';
import styles from 'styles/pages/Projects.module.scss';
import MySEO from 'components/MySEO';

import {useState} from 'react';
import Image from 'next/image';
import Button from 'components/Button';

const RadioButton = () => {
  return <button>Hackathons</button>;
};

interface ProjectInfo {
  title: string;
  description: string;
  date?: string;
  imgSrc: string;
  links?: {
    text: string;
    href: string;
  }[];
}

const projects: ProjectInfo[] = [
  {
    title: 'ECE Day 2023 Event Website',
    description: 'Built the public website for Jacobs School of Engineering at UC San Diego',
    imgSrc: '/projects/eceday.jpg',
    date: 'April 2023',
    links: [
      {
        text: 'Live Website',
        href: 'https://eceday.ucsd.edu/',
      },
      {
        text: 'Source Code',
        href: 'https://github.com/eceday/website',
      },
    ],
  },
  {
    title: 'ECE Day 2023 Event Website2',
    description:
      'Built the public website for Jacobs School of Engineering at UC San Diego\n\nTech Stack: Nextjs',
    imgSrc: '',
    links: [
      {
        text: 'Live Website',
        href: 'https://eceday.ucsd.edu/',
      },
      {
        text: 'Source Code',
        href: 'https://github.com/eceday/website',
      },
    ],
  },
];

const ProjectCard = (event: ProjectInfo) => {
  return (
    <div className={styles.card}>
      <div className={styles.cover}>
        <Image
          src="https://www.farisashai.me/projects/eceday.jpg"
          alt="Cover Image"
          layout="fill"
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.header}>{event.title}</h1>
        <span className={styles.description}>{event.description}</span>
        <p className={styles.date}>{event.date}</p>
        <div className={styles.buttons}>
          {event?.links?.map(link => (
            <Button
              key={link.href}
              variant="secondary"
              title={link.text}
              type="link"
              size="small"
              href={link.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
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
            animationDelay: '750ms',
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
        {projects.map(project => (
          <ProjectCard
            key={project.title}
            {...project}
          />
        ))}
      </section>
    </>
  );
};

export default Projects;
