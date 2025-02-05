import {useTheme} from 'next-themes';
import {FiSun, FiMoon} from 'react-icons/fi';
import style from './style.module.scss';
import {TbDeviceDesktop} from 'react-icons/tb';

const DarkModeToggle = () => {
  const {theme, setTheme} = useTheme();

  return (
    <button
      className={style.button}
      type="button"
      aria-label="Dark Mode Toggle"
      onClick={() => {
        switch (theme) {
          case 'light':
            setTheme('dark');
            break;
          case 'dark':
            setTheme('system');
            break;
          case 'system':
            setTheme('light');
            break;
          default:
            setTheme('light');
        }
      }}
    >
      <FiSun
        size={20}
        className={`${style.icon}`}
        data-active={theme == 'light'}
      />
      <FiMoon
        size={20}
        className={`${style.icon}`}
        data-active={theme == 'dark'}
      />
      <TbDeviceDesktop
        size={20}
        className={`${style.icon}`}
        data-active={theme == 'system'}
      />
    </button>
  );
};

export default DarkModeToggle;
