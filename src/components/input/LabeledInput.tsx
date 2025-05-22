'use client';
import { ChangeEventHandler, useState } from 'react';

interface LabeledInputProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  label: string;
  isDisabled?: boolean;
  isError?: boolean;
  errorMessage?: string;
  placeholder?: string;
  style?: 'default' | 'blue' | 'ghost';
  size?: 'm' | 's';
}

export default function LabeledInput({
  value,
  onChange,
  label,
  isDisabled = false,
  isError = false,
  errorMessage,
  placeholder = 'Text',
  style = 'default',
  size = 'm',
}: LabeledInputProps) {
  const [isFocus, setIsFocus] = useState<boolean>(false);

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
      input: style === 'blue' ? ' text-blue-500' : ' text-grey-950',
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
  const sizeStyle = {
    m: 'h-12 px-4 py-3',
    s: 'h-9 px-3 py-1.5',
  };
  const variantKey = isDisabled ? 'disabled' : isError ? 'error' : isFocus ? 'focus' : style;

  return (
    <div className='flex flex-1 flex-col gap-1'>
      <div
        className={`border-1 flex items-center gap-1 rounded-sm ${variantStyle[variantKey].wrapper} ${sizeStyle[size]}`}
      >
        <input
          className={`text-16 flex flex-1 caret-blue-500 outline-0 ${variantStyle[variantKey].input}`}
          placeholder={placeholder}
          disabled={isDisabled}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        />
        <span className='text-grey-500'>{label}</span>
      </div>
      {errorMessage ? (
        <p className='animate-fade-in text-14 leading-20 text-primary-600 ml-2 break-words'>
          {errorMessage}
        </p>
      ) : (
        <div className='h-5' />
      )}
    </div>
  );
}
