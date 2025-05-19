interface TooltipProps {
  title?: string;
  detail: string;
  titleStyle?: string;
  detailStyle?: string;
  style?: 'dark' | 'light';
}

export default function Tooltip({
  title,
  detail,
  titleStyle = 'text-12 leading-16',
  detailStyle = 'text-14 font-700 leading-20',
  style = 'dark',
}: TooltipProps) {
  const variantStyle = {
    dark: {
      wrapper: 'bg-grey-900/90',
      title: 'text-grey-500',
      detail: 'text-grey-0',
      triangle: 'border-t-grey-900/90',
    },
    light: {
      wrapper: 'bg-grey-0/60',
      title: 'text-grey-700',
      detail: 'text-grey-950',
      triangle: 'border-t-grey-0/60',
    },
  };

  return (
    <div className='flex flex-col items-center'>
      <div
        className={`flex max-h-52 max-w-52 flex-col gap-1 overflow-auto rounded-lg px-3 py-2 shadow-strong ${variantStyle[style].wrapper}`}
      >
        {title && (
          <p
            className={`break-words whitespace-pre-wrap ${titleStyle} ${variantStyle[style].title}`}
          >
            {title}
          </p>
        )}
        <p
          className={`break-words whitespace-pre-wrap ${detailStyle} ${variantStyle[style].detail}`}
        >
          {detail}
        </p>
      </div>
      <div
        className={`h-0 w-0 border-t-[12px] border-r-[8px] border-b-0 border-l-[8px] border-solid border-r-transparent border-b-transparent border-l-transparent shadow-strong ${variantStyle[style].triangle}`}
      />
    </div>
  );
}
