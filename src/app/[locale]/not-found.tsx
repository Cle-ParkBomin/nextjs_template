'use client';

import Button from '@/components/button/Button';
import { useRouter } from 'next/navigation';
import { TiHome } from 'react-icons/ti';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className='flex flex-1 flex-col items-center justify-center gap-12'>
      <p className='text-primary-500 animate-bounce text-9xl font-extrabold'>Oops!</p>
      <h1>404 PAGE NOT FOUND</h1>
      <div className='flex flex-col justify-center gap-4'>
        <p>존재하지 않는 페이지 입니다.</p>
        <div className='flex'>
          <Button
            value='GO TO HOME'
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
