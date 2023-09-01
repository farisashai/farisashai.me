/* eslint-disable @next/next/no-img-element */
import type {NextPage} from 'next';
import styles from 'styles/pages/Projects.module.scss';
import MySEO from 'components/MySEO';
import ProjectCard from 'components/ProjectCard';

const Projects: NextPage = () => {
  return (
    <>
      <MySEO
        description="Some of my projects and highlighted work"
        page="Projects"
        path="/projects"
      />
      <main className={styles.main}>
        <div className={styles.grid}>
          <ProjectCard
            name="ignis"
            link="https://ignis-bigred.vercel.app/"
            coverImage="/projects/ignis.jpg"
          />
          <ProjectCard
            name="ACM Membership Portal"
            link="https://members.acmucsd.com/"
            coverImage="/projects/membershipportal.jpg"
          />
          <ProjectCard
            name="ACM Main Website"
            link="https://acmucsd.com/"
            coverImage="/projects/mainwebsite.jpg"
          />
          <ProjectCard
            name="TritonHacks"
            link="https://www.tritonhacks.org/"
            coverImage="/projects/tritonhacks.jpg"
          />
          <ProjectCard
            name="Quizlash"
            link="https://devpost.com/software/quizlash"
            coverImage="/projects/quizlash.jpg"
          />
          <ProjectCard
            name="wanderlust"
            link="https://devpost.com/software/wanderlust-dj0ol3"
            coverImage="/projects/wanderlust.jpeg"
          />
          <ProjectCard
            name="ASAP Response"
            link="https://devpost.com/software/asap-response"
            coverImage="/projects/asapresponse.png"
          />
          <ProjectCard
            name="Matcha"
            link="https://devpost.com/software/matcha-3wdl49"
            coverImage="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/908/699/datas/gallery.jpg"
          />
          <ProjectCard
            name="ResReview"
            link="https://devpost.com/software/resreview"
            coverImage="/projects/resreview.jpg"
          />
          <ProjectCard
            name="Holiday Soundbound"
            link="https://devpost.com/software/holiday-soundboard"
            coverImage="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/320/284/datas/original.jpg"
          />
        </div>
      </main>
    </>
  );
};

export default Projects;
