import { useEffect } from 'react';

export default function useScrollLock(isLock: boolean) {
  useEffect(() => {
    if (!isLock) return;

    const originalStyle = window.getComputedStyle(document.body);
    const originalOverflow = originalStyle.overflow;

    document.body.style.overflow = 'hidden';
    document.body.style.marginRight = '4px'; // global.css: scrollbar width = 4px

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.marginRight = '0px';
    };
  }, [isLock]);
}
