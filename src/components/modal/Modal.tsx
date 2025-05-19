import Button from '@/components/button/Button';
import useClickOutside from '@/hooks/useClickOutside';
import { useColorByTheme } from '@/hooks/useColorByTheme';
import useScrollLock from '@/hooks/useScrollLock';
import { Dispatch, JSX, SetStateAction, useRef } from 'react';
import { IoCloseCircle } from 'react-icons/io5';

interface ModalProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  title: string;
  context: JSX.Element;
  onCancel?: () => void;
  onConfirm?: () => void;
  cancelLabel?: string;
  confirmLabel?: string;
}

export default function Modal({
  visible,
  setVisible,
  title,
  context,
  onCancel,
  onConfirm,
  cancelLabel = '취소',
  confirmLabel = '확인',
}: ModalProps) {
  const grey300 = useColorByTheme('grey-300');
  const modalRef = useRef<HTMLDivElement>(null);

  useClickOutside({ ref: modalRef, onClick: () => setVisible(false) });
  useScrollLock(visible);

  if (!visible) return null;
  return (
    <div className='fixed top-0 right-0 bottom-0 left-0 z-20 bg-grey-950/40'>
      <div
        className='absolute top-1/2 left-1/2 flex w-[830px] -translate-x-1/2 -translate-y-1/2 transform flex-col rounded-2xl bg-grey-0 shadow-strong'
        ref={modalRef}
      >
        {/* header */}
        <div className='flex items-center justify-between gap-4 px-4 py-[26px]'>
          <h2>{title}</h2>
          <IoCloseCircle
            size={24}
            color={grey300}
            className='cursor-pointer'
            onClick={() => setVisible(false)}
          />
        </div>
        {/* context */}
        <div className='max-h-[511px] overflow-y-auto px-6 pb-10'>{context}</div>
        {/* button */}
        <div className='flex items-center justify-end gap-2.5 px-6 py-4'>
          {onCancel && (
            <div className='flex w-[120px]'>
              <Button
                value={cancelLabel}
                style='outline'
                onClick={() => {
                  onCancel();
                  setVisible(false);
                }}
              />
            </div>
          )}
          <div className='flex w-[120px]'>
            <Button
              value={confirmLabel}
              style='secondary'
              onClick={() => {
                onConfirm?.();
                setVisible(false);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
