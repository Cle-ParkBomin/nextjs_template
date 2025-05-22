import '@/app/[locale]/globals.css';
import Footer from '@/components/layout/Footer';
import { routing } from '@/i18n/routing';

import type { Metadata } from 'next';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';

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
    <html lang={locale} className='bg-background relative'>
      <body className='min-w-3xl flex h-screen flex-col justify-between px-40 pt-9'>
        <main className='flex flex-1 flex-col'>
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </main>
        <footer className='my-10'>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
