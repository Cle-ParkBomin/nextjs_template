import { defineRouting } from 'next-intl/routing';

export const LOCALES = ['en', 'ko'];

export const routing = defineRouting({
  locales: LOCALES,

  defaultLocale: 'en',
});
