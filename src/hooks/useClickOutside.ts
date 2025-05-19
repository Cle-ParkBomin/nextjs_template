import { RefObject, useEffect } from 'react';

interface useClickOutsideProps {
  ref: RefObject<HTMLElement | null>;
  onClick: () => void;
}

export default function useClickOutside({ ref, onClick }: useClickOutsideProps) {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && e.target instanceof Node && !ref.current.contains(e.target)) {
        onClick();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [ref, onClick]);

  return;
}
