import DropLineTextField from '@/components/text-field/DropLineTextField ';
import LineTextField from '@/components/text-field/LineTextField';
import TextField from '@/components/text-field/TextField';
import { useState } from 'react';

export default function TextFieldView() {
  const [inputValue1, setInputValue1] = useState<string>('');
  const [inputValue2, setInputValue2] = useState<string>('');
  const [inputValue3, setInputValue3] = useState<string>('');
  const [inputValue4, setInputValue4] = useState<string>('');
  const [inputValue5, setInputValue5] = useState<string>('');
  const [inputValue6, setInputValue6] = useState<string>('');
  const [inputValue7, setInputValue7] = useState<string>('');
  const [inputValue8, setInputValue8] = useState<string>('');
  const [inputValue9, setInputValue9] = useState<string>('');
  const [inputValue10, setInputValue10] = useState<string>('');
  const [inputValue11, setInputValue11] = useState<string>('');
  const [dropValue, setDropValue] = useState<string>('');
  return (
    <div className='flex flex-col gap-4'>
      {/* TextFlied */}
      <h2>TextFlied</h2>
      <div className='border-1 border-grey-300 flex flex-col flex-wrap gap-4 rounded-s-lg p-4'>
        <p>Enter 시, 줄 바꿈 기능</p>
        <div className='flex gap-4'>
          <div className='flex flex-1 flex-col gap-4'>
            <TextField value={inputValue1} onChange={(e) => setInputValue1(e.target.value)} />
            <TextField
              value={inputValue2}
              onChange={(e) => setInputValue2(e.target.value)}
              isLoading
            />
            <TextField
              value={inputValue3}
              onChange={(e) => setInputValue3(e.target.value)}
              isDisabled
            />
          </div>
          <div className='flex flex-1 flex-col gap-4'>
            <TextField
              value={inputValue4}
              onChange={(e) => setInputValue4(e.target.value)}
              size='s'
            />
            <TextField
              value={inputValue5}
              onChange={(e) => setInputValue5(e.target.value)}
              isLoading
              size='s'
            />
            <TextField
              value={inputValue6}
              onChange={(e) => setInputValue6(e.target.value)}
              isDisabled
              size='s'
            />
          </div>
          <div className='flex flex-1 flex-col gap-4'>
            <LineTextField value={inputValue7} onChange={(e) => setInputValue7(e.target.value)} />
            <LineTextField
              value={inputValue8}
              onChange={(e) => setInputValue8(e.target.value)}
              style='line'
            />
            <LineTextField
              value={inputValue9}
              onChange={(e) => setInputValue9(e.target.value)}
              style='gray'
            />
            <LineTextField
              value={inputValue10}
              onChange={(e) => setInputValue10(e.target.value)}
              style='blue'
            />
            <LineTextField
              value={inputValue11}
              onChange={(e) => setInputValue11(e.target.value)}
              isDisabled
            />
          </div>
          <div className='flex flex-1 flex-col gap-4'>
            <DropLineTextField
              value={dropValue}
              valueList={['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6']}
              onClick={setDropValue}
            />
            <DropLineTextField
              value={dropValue}
              valueList={['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6']}
              onClick={setDropValue}
              style='line'
            />
            <DropLineTextField
              value={dropValue}
              valueList={['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6']}
              onClick={setDropValue}
              style='gray'
            />
            <DropLineTextField
              value={dropValue}
              valueList={['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6']}
              onClick={setDropValue}
              style='blue'
            />
            <DropLineTextField
              value={dropValue}
              valueList={['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6']}
              onClick={setDropValue}
              isDisabled
            />
          </div>
        </div>
      </div>
    </div>
  );
}
