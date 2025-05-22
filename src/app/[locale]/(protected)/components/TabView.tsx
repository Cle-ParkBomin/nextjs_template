import ScrollNavigation from '@/components/tap/ScrollNavigation';
import SegmentControl from '@/components/tap/SegmentControl';
import Tab from '@/components/tap/Tab';
import { TabType } from '@/types/components';
import { useState } from 'react';

export default function TabView() {
  const valueList: TabType[] = [
    { key: 1, value: 'Red' },
    { key: 2, value: 'Orange' },
    { key: 3, value: 'Yellow' },
    { key: 4, value: 'Green' },
    { key: 5, value: 'Blue' },
  ];
  const [value, setValue] = useState<TabType>(valueList[0]);

  return (
    <div className='flex flex-col gap-4'>
      {/* Tab */}
      <h2>Tab</h2>
      <div className='border-1 border-grey-300 flex flex-col flex-wrap gap-4 rounded-s-lg p-4'>
        <div className='flex flex-1 justify-between gap-4'>
          <ScrollNavigation
            value={value}
            valueList={valueList}
            onClick={(item: TabType) => setValue(item)}
          />
          <ScrollNavigation
            value={value}
            valueList={valueList}
            onClick={(item: TabType) => setValue(item)}
            align='right'
          />
        </div>
        <div className='flex flex-1 gap-4'>
          <SegmentControl
            value={value}
            valueList={valueList}
            onClick={(item: TabType) => setValue(item)}
          />
          <SegmentControl value={value} valueList={valueList} isDisabled />
        </div>
        <div className='flex flex-1 gap-4'>
          <SegmentControl
            value={value}
            valueList={valueList}
            onClick={(item: TabType) => setValue(item)}
            isIcon
          />
          <SegmentControl value={value} valueList={valueList} isIcon isDisabled />
        </div>
        <div className='flex flex-1 gap-4'>
          <Tab value={value} valueList={valueList} onClick={(item: TabType) => setValue(item)} />
        </div>
      </div>
    </div>
  );
}
