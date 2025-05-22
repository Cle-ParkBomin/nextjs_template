import type { Metadata } from 'next';

import '@/app/[locale]/globals.css';
import Footer from '@/components/layout/Footer';
import Navigation from '@/components/layout/Navigation';
import { MENU } from '@/dummy/Menu';
import { routing } from '@/i18n/routing';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import LanguageSwitch from './LanguageSwitch';
import ThemeMode from './ThemeMode';

export const metadata: Metadata = {
  title: 'CLE',
  description: 'CLE 관리자 페이지',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang='ko' className='bg-background relative'>
      <NextIntlClientProvider>
        <body className='min-w-3xl flex h-screen flex-col justify-between px-40 pt-9'>
          <div className='fixed bottom-0 left-0 top-0 z-10'>
            <Navigation menu={MENU} />
          </div>

          <div className='flex items-center justify-end gap-4'>
            <LanguageSwitch />
            <ThemeMode />
          </div>

          <div className='flex flex-1'>{children}</div>

          <footer className='my-10'>
            <Footer />
          </footer>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
