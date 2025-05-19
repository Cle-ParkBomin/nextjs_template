import LoadingIcon from '@/components/svg/LoadingIcon';
import React, { JSX, MouseEventHandler } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

interface ButtonProps {
  value: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  size?: 'm' | 's';
  style?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'ghost';
  isDisabled?: boolean;
  isLoading?: boolean;
  isIcon?: boolean;
  icon?: JSX.Element;
}

export default function Button({
  value,
  onClick,
  size = 'm',
  style = 'primary',
  isDisabled = false,
  isLoading = false,
  isIcon = false,
  icon = <AiOutlinePlus />,
}: ButtonProps) {
  const variantStyle = {
    primary: {
      button: 'cursor-pointer bg-grey-700 text-grey-0 hover:bg-grey-800',
    },
    secondary: {
      button: 'cursor-pointer bg-primary-500 text-grey-0 hover:bg-primary-600',
    },
    tertiary: {
      button:
        'cursor-pointer border-1 border-primary-500 bg-grey-0 text-primary-500 hover:border-primary-600 hover:bg-primary-50 hover:text-primary-600',
    },
    outline: {
      button:
        'cursor-pointer border-1 border-grey-300 bg-grey-0 text-grey-600 hover:border-grey-400 hover:bg-grey-50 hover:{button:text-grey-700',
    },
    ghost: {
      button: 'cursor-pointer bg-grey-0 text-grey-600 hover:bg-grey-50 hover:text-grey-700',
    },
    disabled: {
      button: 'cursor-not-allowed bg-grey-100 text-grey-300',
    },
  };
  const sizeStyle = {
    m: { button: 'h-12 px-4 py-3 text-16 leading-24', iconSize: 20 },
    s: { button: 'h-9 px-4 py-2 text-14 leading-20', iconSize: 16 },
  };
  const variantKey = isDisabled ? 'disabled' : style;

  const getIconStyle = () => {
    return { width: sizeStyle[size].iconSize, height: sizeStyle[size].iconSize };
  };
  const styledIcon = icon
    ? React.cloneElement(icon, {
        style: getIconStyle(),
      })
    : null;

  return (
    <button
      className={`flex flex-1 items-center justify-center gap-1 rounded-lg ${variantStyle[variantKey].button} ${sizeStyle[size].button}`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {isLoading ? <LoadingIcon /> : <p className='whitespace-nowrap'>{value}</p>}
      {isIcon && styledIcon}
    </button>
  );
}
