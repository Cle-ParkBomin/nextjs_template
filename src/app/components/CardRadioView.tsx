import CardRadio from '@/components/radio/CardRadio';
import { useState } from 'react';

export default function CardRadioView() {
  const [value, setValue] = useState<boolean>(false);
  const [valueOn, setValueOn] = useState<boolean>(true);

  return (
    <div className='flex flex-col gap-4'>
      {/* CardRadio */}
      <h2>CardRadio</h2>
      <div className='flex flex-col gap-10 rounded-s-lg border-1 border-grey-300 p-10'>
        <CardRadio
          value={value}
          onClick={() => setValue(!value)}
          title='Title'
          subTitle='Description'
        />
        <CardRadio
          value={valueOn}
          onClick={() => setValueOn(!valueOn)}
          title='Title'
          subTitle='Description'
        />
        <CardRadio
          value={value}
          onClick={() => setValue(!value)}
          title='Title'
          subTitle='Description'
          style='dark'
        />
        <CardRadio
          value={valueOn}
          onClick={() => setValueOn(!valueOn)}
          title='Title'
          subTitle='Description'
          style='dark'
        />
      </div>
    </div>
  );
}
