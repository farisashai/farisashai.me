import {ReactNode} from 'react';
import style from './style.module.scss';

interface CircleButtonProps {
  link: string;
  icon: ReactNode;
}

const CircleButton = ({link, icon}: CircleButtonProps) => {
  return (
    <a
      className={style.button}
      href={link}
      target="_blank"
      rel="noopener, noreferrer"
      aria-label="Link to social media platform"
    >
      {icon}
    </a>
  );
};

export default CircleButton;
