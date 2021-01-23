import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState();

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    let checkDarkMode = () => {
      setDarkMode(media.matches);
    };
    checkDarkMode();
    media.addEventListener('change', checkDarkMode);

    return () => media.removeEventListener('change', checkDarkMode);
  }, []);

  return darkMode;
};

export default useDarkMode;
