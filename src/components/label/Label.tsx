import Tooltip from '@/components/modal/Tooltip';
import { useColorByTheme } from '@/hooks/useColorByTheme';
import { useRef, useState } from 'react';
import { BsInfoCircle } from 'react-icons/bs';

interface LabelProps {
  title: string;
  subtitle?: string;
  description?: { title: string; detail: string };
  isMark?: boolean;
  isIcon?: boolean;
  size?: 'l' | 'm' | 's';
}

export default function Label({
  title,
  subtitle,
  description,
  isMark = false,
  isIcon = false,
  size = 'm',
}: LabelProps) {
  const iconRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const grey500 = useColorByTheme('grey-500');

  const sizeStyle = {
    l: {
      label: 'text-20 leading-28',
      icon: 20,
      popupTitle: 'text-[15px] leading-20',
      popupDetail: 'text-[17.5px] leading-[25px]',
    },
    m: {
      label: 'text-16 leading-24',
      icon: 16,
      popupTitle: 'text-12 leading-16',
      popupDetail: 'text-14 leading-20',
    },
    s: {
      label: 'text-14 leading-20 text-grey-500',
      icon: 16,
      popupTitle: 'text-12 leading-16',
      popupDetail: 'text-14 leading-20',
    },
  };

  return (
    <div className='flex flex-col gap-0.5'>
      <div className='flex items-center gap-1'>
        <p className='flex gap-0.5'>
          <span className={sizeStyle[size].label}>{title}</span>
          {isMark && <span className='text-primary-500'>*</span>}
        </p>
        {isIcon && (
          <div className='relative flex justify-center' ref={iconRef}>
            <BsInfoCircle
              size={sizeStyle[size].icon}
              color={grey500}
              cursor='pointer'
              onMouseEnter={() => {
                setIsOpen(true);
              }}
              onMouseLeave={() => {
                setIsOpen(false);
              }}
            />
            {isOpen && description && (
              <div className='absolute bottom-5'>
                <Tooltip
                  title={description.title}
                  detail={description.detail}
                  titleStyle={sizeStyle[size].popupTitle}
                  detailStyle={sizeStyle[size].popupDetail}
                />
              </div>
            )}
          </div>
        )}
      </div>
      {subtitle && <p className='text-12 leading-16 text-grey-700'>{subtitle}</p>}
    </div>
  );
}
