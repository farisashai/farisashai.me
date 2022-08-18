import Link from 'next/link';
import style from './style.module.scss';

interface ButtonProps {
  title: string;
  variant: 'primary' | 'secondary';
  type: 'button' | 'link';
  onClick?: (EventListenerOrEventListenerObject?) => any;
  href?: string;
  icon?: any;
}
const Button = ({title, onClick, href, icon, variant, type}: ButtonProps) => {
  if (type === 'button') {
    if (!onClick) {
      console.error('Missing onClick handler');
      return null;
    }
    return (
      <button
        className={`${style.button} ${variant === 'primary' ? style.primary : ''}`}
        onClick={onClick}
      >
        {title}
        <div>{icon}</div>
      </button>
    );
  }
  if (type === 'link') {
    if (!href) {
      console.error('Missing href attribute');
      return null;
    }
    return (
      <Link href={href}>
        <a className={`${style.button} ${variant === 'primary' ? style.primary : ''}`}>
          {title}
          <div>{icon}</div>
        </a>
      </Link>
    );
  }
  return null;
};

export default Button;
