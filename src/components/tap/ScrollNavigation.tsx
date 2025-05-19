import { TabType } from '@/type/components';

interface ScrollNavigationProps {
  value: TabType;
  valueList: TabType[];
  onClick?: (value: TabType) => void;
  align?: 'left' | 'right';
}

export default function ScrollNavigation({
  value,
  valueList,
  onClick,
  align = 'left',
}: ScrollNavigationProps) {
  const variantStyle = {
    check: 'text-grey-950 underline',
    uncheck: 'text-grey-500',
    left: 'text-left',
    right: 'text-right',
  };

  return (
    <ul className='flex flex-col gap-2'>
      {Object.values(valueList).map((item, index) => (
        <button
          className={`cursor-pointer px-1 py-0.5 hover:bg-grey-950/4 ${variantStyle[value.key === item.key ? 'check' : 'uncheck']} ${
            variantStyle[align === 'right' ? 'right' : 'left']
          }`}
          key={`ScrollNavigation_${item.key}`}
          onClick={() => onClick && onClick(item)}
        >
          {index}.&nbsp;{item.value}
        </button>
      ))}
    </ul>
  );
}
