import DropButton from '@/components/button/DropButton';
import { useState } from 'react';

export default function DropButtonView() {
  const valueList = ['Option1', 'Option2', 'Option3', 'Option4', 'Option5', 'Option6'];
  const [value, setValue] = useState<string>(valueList[0]);

  return (
    <div className='flex flex-col gap-4'>
      {/* Drop Button */}
      <h2>Drop Button</h2>
      <div className='flex flex-col flex-wrap gap-12 rounded-s-lg border-1 border-grey-300 p-4'>
        <DropButton
          title='Button'
          value={value}
          valueList={valueList}
          onClick={(item: string) => setValue(item)}
        />
      </div>
    </div>
  );
}
