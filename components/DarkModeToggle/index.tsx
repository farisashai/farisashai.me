import {useEffect, useState} from 'react';
import {FiSun, FiMoon} from 'react-icons/fi';
import style from './style.module.scss';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const currentTheme = window.localStorage.getItem('theme');
    if (currentTheme == 'dark') {
      document.body.classList.toggle('dark-theme', true);
    } else if (currentTheme == 'light') {
      document.body.classList.toggle('light-theme', true);
    }
  }, []);

  return (
    <button
      className={style.button}
      type="button"
      onClick={() => {
        const prefersDarkScheme =
          window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
        if (prefersDarkScheme.matches) {
          document.body.classList.toggle('light-theme');
          var theme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
        } else {
          document.body.classList.toggle('dark-theme');
          var theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        }
        window.localStorage.setItem('theme', theme);

        setDarkMode(d => !d);
      }}
    >
      <FiSun
        size={20}
        className={`${style.icon} ${!darkMode ? style.active : ''}`}
      />
      <FiMoon
        size={20}
        className={`${style.icon} ${darkMode ? style.active : ''}`}
      />
    </button>
  );
};

export default DarkModeToggle;
