import Link from 'next/link';
import style from './style.module.scss';

interface ButtonProps {
  title: string;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'link';
  onClick?: (EventListenerOrEventListenerObject?) => any;
  href?: string;
  icon?: any;
  size?: 'default' | 'small';
}
const Button = ({
  title,
  onClick,
  href,
  icon,
  size = 'default',
  variant = 'primary',
  type = 'button',
}: ButtonProps) => {
  if (type === 'button') {
    if (!onClick) {
      console.error('Missing onClick handler');
      return null;
    }
    return (
      <button
        className={`${style.button}`}
        onClick={onClick}
        data-size={size}
        data-variant={variant}
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
        <a
          className={`${style.button}`}
          data-size={size}
          data-variant={variant}
        >
          {title}
          <div>{icon}</div>
        </a>
      </Link>
    );
  }
  return null;
};

export default Button;
