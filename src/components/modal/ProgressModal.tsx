import Button from '@/components/button/Button';
import useClickOutside from '@/hooks/useClickOutside';
import useScrollLock from '@/hooks/useScrollLock';
import { Dispatch, SetStateAction, useRef } from 'react';

interface ProgressModalProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  title: string;
  count: number;
  total: number;
  onClick?: () => void;
  handleSecondary?: () => void;
  buttonLabel?: string;
  secondaryLabel?: string;
}

export default function ProgressModal({
  visible,
  setVisible,
  title,
  count,
  total,
  onClick,
  handleSecondary,
  buttonLabel = 'Button',
  secondaryLabel = 'Button',
}: ProgressModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleFirstButton = () => {
    if (onClick) onClick();
    setVisible(false);
  };
  const handleSecondButton = () => {
    if (handleSecondary) handleSecondary();
    setVisible(false);
  };

  useClickOutside({ ref: modalRef, onClick: () => setVisible(false) });
  useScrollLock(visible);

  if (!visible) return null;
  return (
    <div className='fixed top-0 right-0 bottom-0 left-0 z-20 bg-grey-950/40'>
      <div
        className='absolute top-1/2 left-1/2 flex flex-1 -translate-x-1/2 -translate-y-1/2 transform items-center justify-between gap-10 rounded-lg border border-grey-700 bg-grey-0 px-8 py-6 shadow-strong'
        ref={modalRef}
      >
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-2'>
            <h3>{title}</h3>
            <p className='text-14 leading-20 font-400 text-grey-700'>
              ({count}/{total})
            </p>
          </div>
          <div className='relative flex h-1.5 w-[416px] rounded-full bg-grey-300'>
            <div
              className={`absolute top-0 left-0 z-10 h-1.5 rounded-full bg-primary-500`}
              style={{ width: `${416 * (count / total)}px` }}
            />
          </div>
        </div>
        <div className='flex w-72 items-center justify-between gap-2'>
          <Button
            value={buttonLabel}
            style='outline'
            onClick={handleFirstButton}
            isIcon={handleSecondary ? false : true}
          />
          {handleSecondary && (
            <Button value={secondaryLabel} style='secondary' onClick={handleSecondButton} />
          )}
        </div>
      </div>
    </div>
  );
}
