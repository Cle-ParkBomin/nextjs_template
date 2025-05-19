import { MouseEventHandler } from 'react';

interface RadioProps {
  value: string;
  isCheck: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
  style?: 'default' | 'primary500' | 'primary600';
  size?: 'm' | 's';
}

export default function Radio({
  value,
  isCheck,
  onClick,
  isDisabled = false,
  style = 'default',
  size = 'm',
}: RadioProps) {
  const variantStyle = {
    default: {
      button: 'cursor-pointer',
      circle: 'border-grey-500 bg-grey-0',
      circleIn: 'bg-grey-500',
      text: 'text-grey-950',
    },
    primary500: {
      button: 'cursor-pointer',
      circle: 'border-primary-500 bg-grey-0',
      circleIn: 'bg-primary-500',
      text: 'text-grey-950',
    },
    primary600: {
      button: 'cursor-pointer',
      circle: 'border-primary-600 bg-grey-0',
      circleIn: 'bg-primary-600',
      text: 'text-grey-950',
    },
    disabled: {
      button: 'cursor-not-allowed',
      circle: 'border-grey-300 bg-grey-200',
      circleIn: 'bg-grey-300',
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
        className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${variantStyle[variantKey].circle}`}
      >
        {isCheck && (
          <div className={`h-2.5 w-2.5 rounded-full ${variantStyle[variantKey].circleIn}`} />
        )}
      </div>
      <p className={`${variantStyle[variantKey].text} ${sizeStyle[size]}`}>{value}</p>
    </button>
  );
}
