'use client';

import Toggle from '@/components/toggle/Toggle';
import UseSystemDarkMode from '@/hooks/useSystemDarkMode';
import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const systemIsDark = UseSystemDarkMode();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(systemIsDark);
  }, [systemIsDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
    localStorage.theme = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
  };

  return <Toggle value={isDark} title='Dark Mode' onClick={toggleTheme} color='green' />;
}
