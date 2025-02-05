import style from './style.module.scss';

interface LoadingProps {
  size?: number;
  speed?: number;
}

export const Loading = ({size = 1, speed = 1}: LoadingProps) => {
  return (
    <div
      className={style.loading}
      style={{
        transform: `scale(calc(${size}/80))`,
        animationDuration: `calc(${speed} * 1)s`,
      }}
    >
      <div></div>
      <div></div>
    </div>
  );
};
