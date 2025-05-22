'use client';

import LoadingIcon from '@/components/svg/LoadingIcon';
import useScrollLock from '@/hooks/useScrollLock';

export default function Loading() {
  useScrollLock(true);

  return (
    <div className='bg-grey-950/40 fixed bottom-0 left-0 right-0 top-0 z-20'>
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform flex-col'>
        <LoadingIcon size={44} />
      </div>
    </div>
  );
}
