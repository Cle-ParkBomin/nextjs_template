import Button from '@/components/button/Button';

export default function ButtonView() {
  return (
    <div className='flex flex-col gap-4'>
      {/* Button */}
      <h2>Button</h2>
      <div className='flex flex-col flex-wrap gap-12 rounded-s-lg border-1 border-grey-300 p-4'>
        <div className='flex flex-1 gap-4'>
          <div className='flex flex-1 flex-col gap-4'>
            <Button value='Button' />
            <Button value='Button' isDisabled />
            <Button value='Button' isLoading />
          </div>
          <div className='flex flex-1 flex-col gap-4'>
            <Button value='Button' style='secondary' />
            <Button value='Button' isDisabled style='secondary' />
            <Button value='Button' isLoading style='secondary' />
          </div>
          <div className='flex flex-1 flex-col gap-4'>
            <Button value='Button' style='tertiary' />
            <Button value='Button' isDisabled style='tertiary' />
            <Button value='Button' isLoading style='tertiary' />
          </div>
          <div className='flex flex-1 flex-col gap-4'>
            <Button value='Button' style='outline' />
            <Button value='Button' isDisabled style='outline' />
            <Button value='Button' isLoading style='outline' />
          </div>
          <div className='flex flex-1 flex-col gap-4'>
            <Button value='Button' style='ghost' />
            <Button value='Button' isDisabled style='ghost' />
            <Button value='Button' isLoading style='ghost' />
          </div>
        </div>
        <div className='flex flex-1 gap-4'>
          <div className='flex flex-1 flex-col gap-4'>
            <Button value='Button' isIcon />
            <Button value='Button' isDisabled isIcon />
            <Button value='Button' isLoading isIcon />
          </div>
          <div className='flex flex-1 flex-col gap-4'>
            <Button value='Button' style='secondary' isIcon />
            <Button value='Button' isDisabled style='secondary' isIcon />
            <Button value='Button' isLoading style='secondary' isIcon />
          </div>
          <div className='flex flex-1 flex-col gap-4'>
            <Button value='Button' style='tertiary' isIcon />
            <Button value='Button' isDisabled style='tertiary' isIcon />
            <Button value='Button' isLoading style='tertiary' isIcon />
          </div>
          <div className='flex flex-1 flex-col gap-4'>
            <Button value='Button' style='outline' isIcon />
            <Button value='Button' isDisabled style='outline' isIcon />
            <Button value='Button' isLoading style='outline' isIcon />
          </div>
          <div className='flex flex-1 flex-col gap-4'>
            <Button value='Button' style='ghost' isIcon />
            <Button value='Button' isDisabled style='ghost' isIcon />
            <Button value='Button' isLoading style='ghost' isIcon />
          </div>
        </div>
        <div className='flex flex-1 gap-4'>
          <div className='flex flex-1 flex-col gap-4'>
            <Button value='Button' size='s' />
            <Button value='Button' isDisabled size='s' />
            <Button value='Button' isLoading size='s' />
          </div>
          <div className='flex flex-1 flex-col gap-4'>
            <Button value='Button' style='secondary' size='s' />
            <Button value='Button' isDisabled style='secondary' size='s' />
            <Button value='Button' isLoading style='secondary' size='s' />
          </div>
          <div className='flex flex-1 flex-col gap-4'>
            <Button value='Button' style='tertiary' size='s' />
            <Button value='Button' isDisabled style='tertiary' size='s' />
            <Button value='Button' isLoading style='tertiary' size='s' />
          </div>
          <div className='flex flex-1 flex-col gap-4'>
            <Button value='Button' style='outline' size='s' />
            <Button value='Button' isDisabled style='outline' size='s' />
            <Button value='Button' isLoading style='outline' size='s' />
          </div>
          <div className='flex flex-1 flex-col gap-4'>
            <Button value='Button' style='ghost' size='s' />
            <Button value='Button' isDisabled style='ghost' size='s' />
            <Button value='Button' isLoading style='ghost' size='s' />
          </div>
        </div>
        <div className='flex flex-1 gap-4'>
          <div className='flex flex-1 flex-col gap-4'>
            <Button value='Button' isIcon size='s' />
            <Button value='Button' isDisabled isIcon size='s' />
            <Button value='Button' isLoading isIcon size='s' />
          </div>
          <div className='flex flex-1 flex-col gap-4'>
            <Button value='Button' style='secondary' isIcon size='s' />
            <Button value='Button' isDisabled style='secondary' isIcon size='s' />
            <Button value='Button' isLoading style='secondary' isIcon size='s' />
          </div>
          <div className='flex flex-1 flex-col gap-4'>
            <Button value='Button' style='tertiary' isIcon size='s' />
            <Button value='Button' isDisabled style='tertiary' isIcon size='s' />
            <Button value='Button' isLoading style='tertiary' isIcon size='s' />
          </div>
          <div className='flex flex-1 flex-col gap-4'>
            <Button value='Button' style='outline' isIcon size='s' />
            <Button value='Button' isDisabled style='outline' isIcon size='s' />
            <Button value='Button' isLoading style='outline' isIcon size='s' />
          </div>
          <div className='flex flex-1 flex-col gap-4'>
            <Button value='Button' style='ghost' isIcon size='s' />
            <Button value='Button' isDisabled style='ghost' isIcon size='s' />
            <Button value='Button' isLoading style='ghost' isIcon size='s' />
          </div>
        </div>
      </div>
    </div>
  );
}
