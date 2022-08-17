import {PropsWithChildren} from 'react';
import style from './style.module.scss';

interface ButtonProps {
  title: string;
  onClick: (EventListenerOrEventListenerObject?) => any;
  type: 'primary' | 'secondary';
  icon?: any;
}
const Button = ({title, onClick, icon, type, ...rest}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={style.button}
      onClick={onClick}
      {...rest}
    >
      {title}
      <div className={style.icon}>{icon}</div>
    </button>
  );
};

export default Button;
