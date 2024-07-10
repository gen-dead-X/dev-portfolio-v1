import { useContext } from 'react';
import Image from 'next/image';

import './_ThemeToggleButton.scss';
import { UserContext } from '@/app/Context/UserContext';

export default function ThemeToggleButton() {
  const { darkMode, setDarkMode } = useContext(UserContext);

  function handleThemeChange() {
    if (darkMode) {
      document.querySelector('body')?.classList.remove('dark');
      localStorage.setItem('dark', 'false');
      setDarkMode(false);

      return;
    }

    document.querySelector('body')?.classList.add('dark');
    setDarkMode(true);
    localStorage.setItem('dark', 'true');
  }

  return (
    <button
      type="button"
      onClick={handleThemeChange}
      className="theme-button-container h-fit w-fit"
    >
      <Image
        className="h-full w-full object-cover"
        src={darkMode ? '/light_bulb_dark.svg' : '/light_bulb_light.svg'} // Path to the image in the public folder
        alt="theme-toggler"
        width={0}
        height={0}
      />
    </button>
  );
}
