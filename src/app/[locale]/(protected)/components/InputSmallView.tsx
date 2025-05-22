import BackIconInput from '@/components/input/BackIconInput';
import DropInput from '@/components/input/DropInput';
import IconInput from '@/components/input/IconInput';
import Input from '@/components/input/Input';
import InputHide from '@/components/input/InputHide';
import LabeledInput from '@/components/input/LabeledInput';
import PasswordInput from '@/components/input/PasswordInput';
import StepperInput from '@/components/input/StepperInput';
import UploadFile from '@/components/input/UploadFile';
import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { PiFolder } from 'react-icons/pi';

export default function InputSmallView() {
  const [inputValue, setInputValue] = useState<string>('');
  const [dropValue, setDropValue] = useState<string>('');
  const [stepperValue, setStepperValue] = useState<number>(0);

  return (
    <div className='flex flex-col gap-4'>
      {/* Text Input */}
      <h2>Small Text Input</h2>
      <div className='border-1 border-grey-300 flex flex-wrap gap-4 rounded-s-lg p-4'>
        <div className='flex flex-1 flex-col gap-4'>
          <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} size='s' />
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            isDisabled
            size='s'
          />
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            isError
            errorMessage='Error Message'
            size='s'
          />
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style='ghost'
            size='s'
          />
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style='blue'
            size='s'
          />
        </div>
        <div className='flex flex-1 flex-col gap-4'>
          <DropInput
            value={dropValue}
            onClick={setDropValue}
            valueList={['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6']}
            size='s'
          />
          <DropInput
            value={dropValue}
            onClick={setDropValue}
            valueList={['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6']}
            isError
            errorMessage='Error Message'
            size='s'
          />
          <DropInput
            value={dropValue}
            onClick={setDropValue}
            valueList={['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6']}
            isDisabled
            size='s'
          />
          <DropInput
            value={dropValue}
            onClick={setDropValue}
            valueList={['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6']}
            style='ghost'
            size='s'
          />
          <DropInput
            value={dropValue}
            onClick={setDropValue}
            valueList={['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6']}
            style='blue'
            size='s'
          />
        </div>
        <div className='flex flex-1 flex-col gap-4'>
          <IconInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            icon={
              <AiOutlinePlus
                onClick={() => {
                  return;
                }}
              />
            }
            size='s'
          />
          <IconInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            icon={
              <AiOutlinePlus
                onClick={() => {
                  return;
                }}
              />
            }
            isDisabled
            size='s'
          />
          <IconInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            icon={
              <AiOutlinePlus
                onClick={() => {
                  return;
                }}
              />
            }
            isError
            errorMessage='Error Message'
            size='s'
          />
          <IconInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            icon={
              <AiOutlinePlus
                onClick={() => {
                  return;
                }}
              />
            }
            style='ghost'
            size='s'
          />
          <IconInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            icon={
              <AiOutlinePlus
                onClick={() => {
                  return;
                }}
              />
            }
            style='blue'
            size='s'
          />
        </div>
        <div className='flex flex-1 flex-col gap-4'>
          <PasswordInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            size='s'
          />
          <PasswordInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            isDisabled
            size='s'
          />
          <PasswordInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            isError
            errorMessage='Error Message'
            size='s'
          />
          <PasswordInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style='ghost'
            size='s'
          />
          <PasswordInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style='blue'
            size='s'
          />
        </div>
        <div className='flex flex-1 flex-col gap-4'>
          <UploadFile size='s' />
          <UploadFile isDisabled size='s' />
          <UploadFile isError errorMessage='Error Message' size='s' />
          <UploadFile isUploading size='s' />
          <UploadFile style='blue' size='s' />
        </div>
        <div className='flex flex-1 flex-col gap-4'>
          <LabeledInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            label='Day(s)'
            size='s'
          />
          <LabeledInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            label='Day(s)'
            isDisabled
            size='s'
          />
          <LabeledInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            label='Day(s)'
            isError
            errorMessage='Error Message'
            size='s'
          />
          <LabeledInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            label='Day(s)'
            style='ghost'
            size='s'
          />
          <LabeledInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            label='Day(s)'
            style='blue'
            size='s'
          />
        </div>
        <div className='flex flex-1 flex-col gap-4'>
          <BackIconInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            icon={
              <PiFolder
                onClick={() => {
                  return;
                }}
              />
            }
            size='s'
          />
          <BackIconInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            icon={
              <PiFolder
                onClick={() => {
                  return;
                }}
              />
            }
            isDisabled
            size='s'
          />
          <BackIconInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            icon={
              <PiFolder
                onClick={() => {
                  return;
                }}
              />
            }
            isError
            errorMessage='Error Message'
            size='s'
          />
          <BackIconInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            icon={
              <PiFolder
                onClick={() => {
                  return;
                }}
              />
            }
            style='ghost'
            size='s'
          />
          <BackIconInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            icon={
              <PiFolder
                onClick={() => {
                  return;
                }}
              />
            }
            style='blue'
            size='s'
          />
        </div>
        <div className='flex flex-1 flex-col gap-4'>
          <StepperInput
            value={stepperValue}
            onChange={(e) => setStepperValue(Number(e.target.value))}
            clickPlus={() => setStepperValue((prev) => prev + 1)}
            clickMinus={() => setStepperValue((prev) => prev - 1)}
            size='s'
          />
          <StepperInput
            value={stepperValue}
            onChange={(e) => setStepperValue(Number(e.target.value))}
            clickPlus={() => setStepperValue((prev) => prev + 1)}
            clickMinus={() => setStepperValue((prev) => prev - 1)}
            isError
            errorMessage='Error Message'
            size='s'
          />
          <StepperInput
            value={stepperValue}
            onChange={(e) => setStepperValue(Number(e.target.value))}
            clickPlus={() => setStepperValue((prev) => prev + 1)}
            clickMinus={() => setStepperValue((prev) => prev - 1)}
            isDisabled
            size='s'
          />
          <StepperInput
            value={stepperValue}
            onChange={(e) => setStepperValue(Number(e.target.value))}
            clickPlus={() => setStepperValue((prev) => prev + 1)}
            clickMinus={() => setStepperValue((prev) => prev - 1)}
            style='ghost'
            size='s'
          />
          <StepperInput
            value={stepperValue}
            onChange={(e) => setStepperValue(Number(e.target.value))}
            clickPlus={() => setStepperValue((prev) => prev + 1)}
            clickMinus={() => setStepperValue((prev) => prev - 1)}
            style='blue'
            size='s'
          />
        </div>
        <div className='flex flex-1 flex-col gap-4'>
          <InputHide value={inputValue} onChange={(e) => setInputValue(e.target.value)} size='s' />
          <InputHide
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style='primary'
            size='s'
          />
        </div>
      </div>
    </div>
  );
}
