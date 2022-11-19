import {useTheme} from 'next-themes';
import {FiSun, FiMoon} from 'react-icons/fi';
import style from './style.module.scss';

const DarkModeToggle = () => {
  const {resolvedTheme, setTheme} = useTheme();
  const darkMode = resolvedTheme == 'dark';

  return (
    <button
      className={style.button}
      type="button"
      aria-label="Dark Mode Toggle"
      onClick={() => setTheme(darkMode ? 'light' : 'dark')}
    >
      <FiSun
        size={20}
        className={`${style.icon} ${darkMode ? style.active : ''}`}
      />
      <FiMoon
        size={20}
        className={`${style.icon} ${!darkMode ? style.active : ''}`}
      />
    </button>
  );
};

export default DarkModeToggle;
