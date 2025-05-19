import { useColorByTheme } from '@/hooks/useColorByTheme';
import { MouseEventHandler } from 'react';
import { AiOutlineMinus } from 'react-icons/ai';

interface ToggleProps {
  value: boolean;
  title: string;
  subTitle?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isDisable?: boolean;
  style?: 'default' | 'dark';
  color?: 'primary' | 'green';
}

export default function Toggle({
  value,
  title,
  subTitle,
  onClick,
  isDisable = false,
  style = 'default',
  color = 'primary',
}: ToggleProps) {
  const grey200 = useColorByTheme('grey-200');

  const variantStyle = {
    default: {
      wrapper: value
        ? color === 'primary'
          ? 'cursor-pointer border-primary-600 bg-primary-500'
          : 'cursor-pointer border-neo-green-600 bg-neo-green-500'
        : 'cursor-pointer border-grey-300 bg-grey-200',
      button: value
        ? color === 'primary'
          ? 'border-grey-100 bg-grey-0'
          : 'border-neo-green-100 bg-grey-0'
        : 'border-grey-100 bg-grey-0',
      title: 'text-grey-700',
      subTitle: 'text-grey-500',
    },
    dark: {
      wrapper: value
        ? color === 'primary'
          ? 'cursor-pointer border-primary-700 bg-primary-600'
          : 'cursor-pointer border-neo-green-700 bg-neo-green-600'
        : 'cursor-pointer border-grey-400 bg-grey-300',
      button: value
        ? color === 'primary'
          ? 'border-primary-100 bg-grey-0'
          : 'border-neo-green-100 bg-grey-0'
        : 'border-grey-200 bg-grey-0',
      title: 'text-grey-700',
      subTitle: 'text-grey-500',
    },
    disabled: {
      wrapper: 'border-grey-200 bg-grey-200',
      button: 'cursor-not-allowed border-grey-100 bg-grey-0',
      title: 'text-grey-300',
      subTitle: 'text-grey-300',
    },
  };
  const variantKey = isDisable ? 'disabled' : style;

  return (
    <div className={`flex gap-2 py-1 ${subTitle ? 'items-start' : 'items-center'}`}>
      {/* toggle vector */}
      <button
        className={`flex h-6 w-9 items-center rounded-3xl border ${value ? 'justify-end' : 'justify-start'} ${variantStyle[variantKey].wrapper}`}
        onClick={onClick}
        disabled={isDisable}
      >
        <div
          className={`mx-0.5 flex h-4.5 w-4.5 items-center justify-center rounded-full border shadow-strong ${variantStyle[variantKey].button}`}
        >
          {isDisable && <AiOutlineMinus size={14} color={grey200} />}
        </div>
      </button>
      <div className='flex flex-col gap-1'>
        <p className={`text-14 leading-20 ${variantStyle[variantKey].title}`}>{title}</p>
        <p className={`text-12 leading-16 ${variantStyle[variantKey].subTitle}`}>{subTitle}</p>
      </div>
    </div>
  );
}
