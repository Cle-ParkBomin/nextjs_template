import type { Metadata } from 'next';

import Footer from '@/components/layout/Footer';
import Navigation from '@/components/layout/Navigation';
import { MENU } from '@/dummy/Menu';
import { ReactNode } from 'react';
import DarkModeToggle from './DarkModeToggle';
import './globals.css';

export const metadata: Metadata = {
  title: 'CLE',
  description: 'CLE 관리자 페이지',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='ko' className='relative bg-background'>
      <body className='flex h-screen min-w-3xl flex-col justify-between px-40 pt-9'>
        <div className='fixed top-0 bottom-0 left-0 z-10'>
          <Navigation menu={MENU} />
        </div>
        <div className='flex justify-end'>
          <DarkModeToggle />
        </div>
        <div className='flex flex-1'>{children}</div>
        <footer className='my-10'>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
