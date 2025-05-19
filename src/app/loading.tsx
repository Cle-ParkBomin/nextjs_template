'use client';

import LoadingIcon from '@/components/svg/LoadingIcon';
import useScrollLock from '@/hooks/useScrollLock';

export default function Loading() {
  useScrollLock(true);

  return (
    <div className='fixed top-0 right-0 bottom-0 left-0 z-20 bg-grey-950/40'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform flex-col'>
        <LoadingIcon size={44} />
      </div>
    </div>
  );
}
