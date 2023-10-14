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
        <div className={styles.section}>
          <h1>Projects</h1>

          <div className={styles.grid}>
            <ProjectCard
              name="ACM Membership Portal"
              link="https://members.acmucsd.com/"
              coverImage="/projects/membershipportal.jpg"
              date="Jun 2022 - Jun 2023"
            />
            <ProjectCard
              name="ECE Day 2022 Event Website"
              link="http://eceday.ucsd.edu/"
              coverImage="/projects/eceday.jpg"
              date="April 2023"
            />
            <ProjectCard
              name="Space Event Website"
              link="http://space.acmucsd.com/"
              coverImage="/projects/space.jpg"
              date="Sept - Nov 2022"
            />
            <ProjectCard
              name="ACM Main Website"
              link="https://acmucsd.com/"
              coverImage="/projects/mainwebsite.jpg"
              date="Mar - Jun 2022"
            />
            <ProjectCard
              name="TritonHacks 2022"
              link="https://www.tritonhacks.org/"
              coverImage="/projects/tritonhacks.jpg"
              date="Sept 2021 - Mar 2022"
            />
            <ProjectCard
              name="Rentalscape"
              link="https://rentalscape.com/"
              coverImage="/projects/rentalscape.png"
              date="Jun - Aug 2021"
            />
          </div>
        </div>
        <div className={styles.section}>
          <h1>Hackathons</h1>
          <div className={styles.grid}>
            <ProjectCard
              name="wanderlust"
              link="https://devpost.com/software/wanderlust-dj0ol3"
              coverImage="/projects/wanderlust.jpeg"
              date="April 2023"
            />
            <ProjectCard
              name="ignis"
              link="https://devpost.com/software/ignis-1kn83b"
              coverImage="/projects/ignis.jpg"
              date="Oct 2022"
            />
            <ProjectCard
              name="Matcha"
              link="https://devpost.com/software/matcha-3wdl49"
              coverImage="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/908/699/datas/gallery.jpg"
              date="April 2022"
            />
            <ProjectCard
              name="ASAP Response"
              link="https://devpost.com/software/asap-response"
              coverImage="/projects/asapresponse.png"
              date="April 2021"
            />
            <ProjectCard
              name="Quizlash"
              link="https://devpost.com/software/quizlash"
              coverImage="/projects/quizlash.jpg"
              date="Feb 2022"
            />
            <ProjectCard
              name="Melting Pot"
              link="https://www.kendallarata.com/melting-pot"
              coverImage="/projects/meltingpot.jpg"
              date="July 2021"
            />
            <ProjectCard
              name="ResReview"
              link="https://devpost.com/software/resreview"
              coverImage="/projects/resreview.jpg"
              date="Feb 2021"
            />
            <ProjectCard
              name="Holiday Soundbound"
              link="https://devpost.com/software/holiday-soundboard"
              coverImage="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/320/284/datas/original.jpg"
              date="Dec 2020"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Projects;
