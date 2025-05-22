'use client';

import Button from '@/components/button/Button';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { TiHome } from 'react-icons/ti';

export default function NotFound() {
  const router = useRouter();
  const t = useTranslations('not-found');

  return (
    <div className='flex flex-1 flex-col items-center justify-center gap-12'>
      <p className='text-primary-500 animate-bounce text-9xl font-extrabold'>Oops!</p>
      <h1>{t('title')}</h1>
      <div className='flex flex-col justify-center gap-4'>
        <p>{t('content')}</p>
        <div className='flex'>
          <Button
            value={t('button')}
            onClick={() => router.push('/')}
            isIcon
            icon={<TiHome />}
            style='secondary'
          />
        </div>
      </div>
    </div>
  );
}
