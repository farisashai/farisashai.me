/* eslint-disable @next/next/no-img-element */
import styles from './style.module.scss';

interface ProjectCardProps {
  name: string;
  link: string;
  coverImage: string;
  date: string;
}

const ProjectCard: React.FC<ProjectCardProps> = props => {
  return (
    <div className={styles.card}>
      <a
        href={props.link}
        className={styles.item}
      >
        <img
          alt={props.name}
          src={props.coverImage}
        />
      </a>
      <div className={styles.desc}>
        <span>{props.name}</span>
        <span>{props.date}</span>
      </div>
    </div>
  );
};

export default ProjectCard;
