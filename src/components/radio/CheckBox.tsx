import { useColorByTheme } from '@/hooks/useColorByTheme';
import { MouseEventHandler } from 'react';
import { FaCheck } from 'react-icons/fa6';

interface CheckBoxProps {
  value: string;
  isCheck: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
  style?: 'default' | 'primary500' | 'primary600';
  size?: 'm' | 's';
}

export default function CheckBox({
  value,
  isCheck,
  onClick,
  isDisabled = false,
  style = 'default',
  size = 'm',
}: CheckBoxProps) {
  const grey0 = useColorByTheme('grey-0');

  const variantStyle = {
    default: {
      button: 'cursor-pointer',
      box: isCheck ? 'border-grey-500 bg-grey-500' : 'border-grey-500 bg-grey-0',
      text: 'text-grey-950',
    },
    primary500: {
      button: 'cursor-pointer',
      box: isCheck ? 'border-primary-500 bg-primary-500' : 'border-primary-500 bg-grey-0',
      text: 'text-grey-950',
    },
    primary600: {
      button: 'cursor-pointer',
      box: isCheck ? 'border-primary-600 bg-primary-600' : 'border-primary-600 bg-grey-0',
      text: 'text-grey-950',
    },
    disabled: {
      button: 'cursor-not-allowed',
      box: isCheck ? 'border-grey-300 bg-grey-300' : 'border-grey-300 bg-grey-200',
      text: 'text-grey-300',
    },
  };
  const variantKey = isDisabled ? 'disabled' : style;

  const sizeStyle = {
    m: 'text-16 leading-24',
    s: 'text-14 leading-20',
  };

  return (
    <button
      className={`flex items-center gap-2 ${variantStyle[variantKey].button}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      <div
        className={`flex h-5 w-5 items-center justify-center rounded-xs border-2 ${variantStyle[variantKey].box}`}
      >
        {isCheck && <FaCheck size={14} color={grey0} />}
      </div>
      <p className={`${variantStyle[variantKey].text} ${sizeStyle[size]}`}>{value}</p>
    </button>
  );
}
