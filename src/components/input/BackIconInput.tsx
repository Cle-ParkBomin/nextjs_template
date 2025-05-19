'use client';
import { useColorByTheme } from '@/hooks/useColorByTheme';
import React, { ChangeEventHandler, JSX, useState } from 'react';

interface BackIconInputProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  icon: JSX.Element; // 아이콘 컴포넌트 (아이콘 클릭 시 이벤트 함수 전달)
  isDisabled?: boolean;
  isError?: boolean;
  errorMessage?: string;
  placeholder?: string;
  style?: 'default' | 'blue' | 'ghost';
}

export default function BackIconInput({
  value,
  onChange,
  icon,
  isDisabled = false,
  isError = false,
  errorMessage,
  placeholder = 'Text',
  style = 'default',
}: BackIconInputProps) {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const grey300 = useColorByTheme('grey-300');
  const grey500 = useColorByTheme('grey-500');

  const variantStyle = {
    default: {
      wrapper: 'border-grey-200 bg-grey-50',
      input: 'placeholder:text-grey-500 text-grey-950',
    },
    disabled: {
      wrapper: 'border-grey-100 bg-grey-100',
      input: 'cursor-not-allowed placeholder:text-grey-300 text-grey-700',
    },
    error: {
      wrapper: 'border-primary-500 bg-primary-50',
      input: 'placeholder:text-grey-500 text-grey-950',
    },
    focus: {
      wrapper: 'border-grey-400 bg-grey-0',
      input: 'placeholder:text-grey-500 text-grey-950',
    },
    blue: {
      wrapper: 'border-grey-200 bg-grey-50',
      input: 'placeholder:text-blue-300 text-blue-500',
    },
    ghost: {
      wrapper: 'border-grey-100 bg-grey-100',
      input: 'placeholder:text-grey-500 text-grey-700',
    },
  };
  const variantKey = isDisabled ? 'disabled' : isError ? 'error' : isFocus ? 'focus' : style;

  const getIconStyle = () => {
    // 상태에 따라 아이콘 색상 변경
    const baseStyle = {
      width: 20,
      height: 20,
      color: grey500,
      margin: 14,
    };

    if (isDisabled) {
      return {
        width: 20,
        height: 20,
        color: grey300,
        margin: 14,
      };
    }

    return baseStyle;
  };

  const styledIcon = React.cloneElement(icon, {
    style: getIconStyle(),
    className: `${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}`,
  });

  return (
    <div className='flex flex-1 flex-col gap-1'>
      <div className='flex flex-1 items-center'>
        <div
          className={`flex h-12 flex-1 items-center gap-1 rounded-sm border-1 px-4 py-3 ${variantStyle[variantKey].wrapper}`}
        >
          <input
            className={`flex flex-1 text-16 caret-blue-500 outline-0 ${variantStyle[variantKey].input}`}
            placeholder={placeholder}
            disabled={isDisabled}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
          />
        </div>
        {styledIcon}
      </div>
      {errorMessage ? (
        <p className='ml-2 animate-fade-in text-14 leading-20 break-words text-primary-600'>
          {errorMessage}
        </p>
      ) : (
        <div className='h-5' />
      )}
    </div>
  );
}
