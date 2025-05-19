import { MouseEventHandler } from 'react';

interface CardRadioProps {
  value: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  title: string;
  subTitle: string;
  style?: 'default' | 'dark';
}

export default function CardRadio({
  value,
  onClick,
  title,
  subTitle,
  style = 'default',
}: CardRadioProps) {
  const variantStyle = {
    default: {
      button: value ? 'border-primary-500 bg-grey-0' : 'border-grey-200 bg-grey-0',
      circle: value ? 'border-primary-500' : 'border-grey-500',
      circleIn: value ? 'bg-primary-500' : 'bg-grey-0',
    },
    dark: {
      button: value ? 'border-primary-600 bg-grey-950/4' : 'border-grey-200 bg-grey-950/4',
      circle: value ? 'border-primary-600' : 'border-grey-500',
      circleIn: value ? 'bg-primary-500' : 'bg-grey-0',
    },
  };

  return (
    <button
      className={`flex h-20 cursor-pointer items-center gap-2 rounded-lg border p-4 ${variantStyle[style].button}`}
      onClick={onClick}
    >
      <div
        className={`flex h-5 w-5 items-center justify-center rounded-full border-2 bg-grey-0 ${variantStyle[style].circle}`}
      >
        {value && <div className={`h-2.5 w-2.5 rounded-full ${variantStyle[style].circleIn}`} />}
      </div>
      <div className='flex flex-1 flex-col text-start'>
        <p className='text-20 leading-28'>{title}</p>
        <p className='text-14 leading-20 text-grey-700'>{subTitle}</p>
      </div>
    </button>
  );
}
