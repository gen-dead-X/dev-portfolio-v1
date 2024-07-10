'use client';

import { useEffect } from 'react';
import Navbar from './ui/Navbar/navbar';
import { UserContextProvider } from './Context/UserContext';

export default function Home() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const blob = document.getElementById('blob');

      blob?.animate(
        { left: `${e.clientX - 150}px`, top: `${e.clientY - 150}px` },
        { duration: 3000, fill: 'forwards' }
      );
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <UserContextProvider>
      <Navbar />
      <div id="blob" className="blob" />
      <div className="blob-blur__overlay" />
    </UserContextProvider>
  );
}
