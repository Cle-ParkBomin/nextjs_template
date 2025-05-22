import GhostButton from '@/components/button/GhostButton';
import LinkButton from '@/components/button/LinkButton';

export default function LinkButtonView() {
  return (
    <div className='flex flex-col gap-4'>
      {/* Link Button */}
      <h2>Link Button</h2>
      <div className='border-1 border-grey-300 flex flex-col flex-wrap gap-12 rounded-s-lg p-4'>
        <div className='flex flex-1 gap-4'>
          <div className='flex flex-1 flex-col gap-4'>
            <LinkButton value='Button' style='primary' size='s' />
            <LinkButton value='Button' isDisabled style='primary' size='s' />
            <LinkButton value='Button' iconPosition='right' style='primary' size='s' />
            <LinkButton value='Button' isDisabled iconPosition='right' style='primary' size='s' />
            <LinkButton value='Button' iconPosition='left' style='primary' size='s' />
            <LinkButton value='Button' isDisabled iconPosition='left' style='primary' size='s' />
          </div>
          <div className='flex flex-1 flex-col gap-4'>
            <LinkButton value='Button' size='s' />
            <LinkButton value='Button' isDisabled size='s' />
            <LinkButton value='Button' iconPosition='right' size='s' />
            <LinkButton value='Button' isDisabled iconPosition='right' size='s' />
            <LinkButton value='Button' iconPosition='left' size='s' />
            <LinkButton value='Button' isDisabled iconPosition='left' size='s' />
          </div>
          <div className='flex flex-1 flex-col gap-4'>
            <LinkButton value='Button' style='primary' />
            <LinkButton value='Button' isDisabled style='primary' />
            <LinkButton value='Button' iconPosition='right' style='primary' />
            <LinkButton value='Button' isDisabled iconPosition='right' style='primary' />
            <LinkButton value='Button' iconPosition='left' style='primary' />
            <LinkButton value='Button' isDisabled iconPosition='left' style='primary' />
          </div>
          <div className='flex flex-1 flex-col gap-4'>
            <LinkButton value='Button' />
            <LinkButton value='Button' isDisabled />
            <LinkButton value='Button' iconPosition='right' />
            <LinkButton value='Button' isDisabled iconPosition='right' />
            <LinkButton value='Button' iconPosition='left' />
            <LinkButton value='Button' isDisabled iconPosition='left' />
          </div>
        </div>
        <div className='flex flex-1 gap-4'>
          <div className='flex flex-1 flex-col gap-4'>
            <GhostButton value='Button' style='primary' size='s' />
            <GhostButton value='Button' isDisabled style='primary' size='s' />
            <GhostButton value='Button' iconPosition='right' style='primary' size='s' />
            <GhostButton value='Button' isDisabled iconPosition='right' style='primary' size='s' />
            <GhostButton value='Button' iconPosition='left' style='primary' size='s' />
            <GhostButton value='Button' isDisabled iconPosition='left' style='primary' size='s' />
          </div>
          <div className='flex flex-1 flex-col gap-4'>
            <GhostButton value='Button' size='s' />
            <GhostButton value='Button' isDisabled size='s' />
            <GhostButton value='Button' iconPosition='right' size='s' />
            <GhostButton value='Button' isDisabled iconPosition='right' size='s' />
            <GhostButton value='Button' iconPosition='left' size='s' />
            <GhostButton value='Button' isDisabled iconPosition='left' size='s' />
          </div>
          <div className='flex flex-1 flex-col gap-4'>
            <GhostButton value='Button' style='primary' />
            <GhostButton value='Button' isDisabled style='primary' />
            <GhostButton value='Button' iconPosition='right' style='primary' />
            <GhostButton value='Button' isDisabled iconPosition='right' style='primary' />
            <GhostButton value='Button' iconPosition='left' style='primary' />
            <GhostButton value='Button' isDisabled iconPosition='left' style='primary' />
          </div>
          <div className='flex flex-1 flex-col gap-4'>
            <GhostButton value='Button' />
            <GhostButton value='Button' isDisabled />
            <GhostButton value='Button' iconPosition='right' />
            <GhostButton value='Button' isDisabled iconPosition='right' />
            <GhostButton value='Button' iconPosition='left' />
            <GhostButton value='Button' isDisabled iconPosition='left' />
          </div>
        </div>
      </div>
    </div>
  );
}
