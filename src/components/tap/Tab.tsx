import { TabType } from '@/type/components';

interface TabProps {
  value: TabType;
  valueList: TabType[];
  onClick?: (value: TabType) => void;
}

export default function Tab({ value, valueList, onClick }: TabProps) {
  return (
    <div className='flex-fit flex items-center justify-between gap-4'>
      {valueList?.map((item) => (
        <button
          key={`Tab_${item.key}`}
          className='cursor-pointer px-3 py-2 hover:bg-grey-950/4'
          onClick={() => onClick && onClick(item)}
        >
          <h3
            className={`border-b-2 pb-1.5 ${
              value.key === item.key ? 'border-primary-500' : 'border-transparent text-grey-500'
            }`}
          >
            {item.value}
          </h3>
        </button>
      ))}
    </div>
  );
}
