import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

interface Messages {
  [key: string]: string | Messages;
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  const messages = ((await import(`../../messages/${locale}.json`)) as { default: Messages })
    .default;

  return {
    locale,
    messages,
  };
});
