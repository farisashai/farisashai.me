/* eslint-disable @next/next/no-img-element */
import styles from './style.module.scss';

interface ProjectCardProps {
  name: string;
  link: string;
  coverImage: string;
}

const ProjectCard: React.FC<ProjectCardProps> = props => {
  return (
    <a
      href={props.link}
      className={styles.item}
    >
      <img
        alt={props.name}
        src={props.coverImage}
      />
    </a>
  );
};

export default ProjectCard;
