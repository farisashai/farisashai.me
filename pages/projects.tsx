import type {NextPage} from 'next';
import styles from 'styles/pages/Projects.module.scss';
import MySEO from 'components/MySEO';

const Projects: NextPage = () => {
  return (
    <>
      <MySEO
        description="Some of my projects and highlighted work"
        page="Projects"
        path="/projects"
      />
      <main className={styles.main}>Projects Here Soon!</main>
    </>
  );
};

export default Projects;

export const config = {
  unstable_runtimeJS: false,
};
