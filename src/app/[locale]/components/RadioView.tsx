import CheckBox from '@/components/radio/CheckBox';
import Radio from '@/components/radio/Radio';
import { useState } from 'react';

export default function RadioView() {
  const [radioValue, setRadioValue] = useState<boolean>(false);

  return (
    <div className='flex flex-1 flex-col gap-4'>
      {/* Radio */}
      <h2>Radio</h2>
      <div className='border-1 border-grey-300 flex flex-1 flex-wrap justify-between rounded-s-lg p-4'>
        <div className='flex flex-1 flex-col gap-4'>
          <Radio
            value='Button'
            isCheck={radioValue}
            onClick={() => setRadioValue(!radioValue)}
            size='s'
          />
          <Radio
            value='Button'
            isCheck={false}
            onClick={() => setRadioValue(!radioValue)}
            isDisabled
            size='s'
          />
          <Radio
            value='Button'
            isCheck={true}
            onClick={() => setRadioValue(!radioValue)}
            isDisabled
            size='s'
          />
          <Radio
            value='Button'
            isCheck={radioValue}
            onClick={() => setRadioValue(!radioValue)}
            style='primary500'
            size='s'
          />
          <Radio
            value='Button'
            isCheck={radioValue}
            onClick={() => setRadioValue(!radioValue)}
            style='primary600'
            size='s'
          />
        </div>
        <div className='flex flex-1 flex-col gap-4'>
          <Radio value='Button' isCheck={radioValue} onClick={() => setRadioValue(!radioValue)} />
          <Radio
            value='Button'
            isCheck={false}
            onClick={() => setRadioValue(!radioValue)}
            isDisabled
          />
          <Radio
            value='Button'
            isCheck={true}
            onClick={() => setRadioValue(!radioValue)}
            isDisabled
          />
          <Radio
            value='Button'
            isCheck={radioValue}
            onClick={() => setRadioValue(!radioValue)}
            style='primary500'
          />
          <Radio
            value='Button'
            isCheck={radioValue}
            onClick={() => setRadioValue(!radioValue)}
            style='primary600'
          />
        </div>
        <div className='flex flex-1 flex-col gap-4'>
          <CheckBox
            value='Button'
            isCheck={radioValue}
            onClick={() => setRadioValue(!radioValue)}
            size='s'
          />
          <CheckBox
            value='Button'
            isCheck={false}
            onClick={() => setRadioValue(!radioValue)}
            isDisabled
            size='s'
          />
          <CheckBox
            value='Button'
            isCheck={true}
            onClick={() => setRadioValue(!radioValue)}
            isDisabled
            size='s'
          />
          <CheckBox
            value='Button'
            isCheck={radioValue}
            onClick={() => setRadioValue(!radioValue)}
            style='primary500'
            size='s'
          />
          <CheckBox
            value='Button'
            isCheck={radioValue}
            onClick={() => setRadioValue(!radioValue)}
            style='primary600'
            size='s'
          />
        </div>
        <div className='flex flex-1 flex-col gap-4'>
          <CheckBox
            value='Button'
            isCheck={radioValue}
            onClick={() => setRadioValue(!radioValue)}
          />
          <CheckBox
            value='Button'
            isCheck={false}
            onClick={() => setRadioValue(!radioValue)}
            isDisabled
          />
          <CheckBox
            value='Button'
            isCheck={true}
            onClick={() => setRadioValue(!radioValue)}
            isDisabled
          />
          <CheckBox
            value='Button'
            isCheck={radioValue}
            onClick={() => setRadioValue(!radioValue)}
            style='primary500'
          />
          <CheckBox
            value='Button'
            isCheck={radioValue}
            onClick={() => setRadioValue(!radioValue)}
            style='primary600'
          />
        </div>
      </div>
    </div>
  );
}
