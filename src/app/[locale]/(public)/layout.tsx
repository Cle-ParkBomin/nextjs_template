import DarkModeToggle from '@/app/[locale]/ThemeMode';
import { ReactNode } from 'react';
import LanguageSwitch from '../LanguageSwitch';

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <div className='flex items-center justify-end gap-4'>
        <LanguageSwitch />
        <DarkModeToggle />
      </div>

      <div className='flex flex-1'>{children}</div>
    </>
  );
}
