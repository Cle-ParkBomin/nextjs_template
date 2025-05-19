import Button from '@/components/button/Button';
import useClickOutside from '@/hooks/useClickOutside';
import useScrollLock from '@/hooks/useScrollLock';
import { Dispatch, SetStateAction, useRef } from 'react';

interface PopupProps {
  title: string;
  content: string;
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  onCancel?: () => void;
  onConfirm?: () => void;
  cancelLabel?: string;
  confirmLabel?: string;
}

export default function Popup({
  title,
  content,
  visible,
  setVisible,
  onCancel,
  onConfirm,
  cancelLabel = '취소',
  confirmLabel = '확인',
}: PopupProps) {
  const popupRef = useRef<HTMLDivElement>(null);

  useClickOutside({ ref: popupRef, onClick: () => setVisible(false) });
  useScrollLock(visible);

  if (!visible) return null;
  return (
    <div className='fixed top-0 right-0 bottom-0 left-0 z-20 bg-grey-950/40'>
      <div
        className='absolute top-1/2 left-1/2 flex max-h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 transform flex-col gap-8 rounded-2xl border border-grey-200 bg-grey-0 p-6 shadow-strong'
        ref={popupRef}
      >
        {/* context */}
        <div className='flex flex-1 flex-col gap-2'>
          <h2>{title}</h2>
          <p className='text-16 leading-24 text-grey-700'>{content}</p>
        </div>

        {/* button */}
        <div className='flex items-center justify-end gap-2.5'>
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
