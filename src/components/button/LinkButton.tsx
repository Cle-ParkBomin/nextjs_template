import React, { JSX, MouseEventHandler } from 'react';
import { CgChevronRight } from 'react-icons/cg';

interface LinkButtonProps {
  value: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
  size?: 'm' | 's';
  style?: 'default' | 'primary';
  icon?: JSX.Element;
  iconPosition?: 'none' | 'right' | 'left';
}

export default function LinkButton({
  value,
  onClick,
  isDisabled = false,
  size = 'm',
  style = 'default',
  icon = <CgChevronRight />,
  iconPosition = 'none',
}: LinkButtonProps) {
  const variantStyle = {
    default: isDisabled
      ? 'cursor-not- text-grey-300'
      : 'cursor-pointer text-grey-700 hover:text-grey-800 hover:bg-grey-950/4',
    primary: isDisabled
      ? 'cursor-not-allowed text-primary-300'
      : 'cursor-pointer text-primary-500 hover:text-primary-600 hover:bg-grey-950/4',
  };
  const sizeStyle = {
    m: { text: 'text-16 leading-24', iconSize: 20 },
    s: { text: 'text-14 leading-20', iconSize: 16 },
  };

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
      className={`flex w-fit items-center justify-center gap-1 py-0.5 pr-0.5 ${variantStyle[style]}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {iconPosition === 'left' && styledIcon}
      <p className={`whitespace-nowrap underline ${sizeStyle[size].text}`}>{value}</p>
      {iconPosition === 'right' && styledIcon}
    </button>
  );
}
