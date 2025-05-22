import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('locale');

  return (
    <div className='flex flex-1 flex-col gap-4'>
      <h1>{t('title')}</h1>
      <p>{t('content')}</p>
    </div>
  );
}
