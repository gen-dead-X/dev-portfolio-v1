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
    <div className="theme-button-container relative w-full">
      <button type="button" onClick={handleThemeChange} className="w-full">
        <div
          className={
            'w-fill theme-toggle-button absolute top-0 h-auto transition-all duration-200'
          }
        >
          <Image
            className="h-full w-full object-cover"
            src={darkMode ? '/light_bulb_dark.svg' : '/light_bulb_light.svg'} // Path to the image in the public folder
            alt="Light Bulb"
            width={'50'}
            height={'200'}
          />
        </div>
      </button>
    </div>
  );
}
