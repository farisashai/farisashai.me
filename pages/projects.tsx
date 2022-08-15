import type {NextPage} from 'next';
import styles from 'styles/pages/Projects.module.scss';
import MySEO from 'components/MySEO';

const Projects: NextPage = () => {
  return (
    <>
      <MySEO
        description=""
        page="Projects"
      />
      <main className={styles.main}>Projects Here Soon!</main>
    </>
  );
};

export default Projects;
