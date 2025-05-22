import Badge from '@/components/badge/Badge';
import IconBadge from '@/components/badge/IconBadge';
import { AiOutlinePlus } from 'react-icons/ai';

export default function BadgeView() {
  return (
    <div className='flex flex-col gap-4'>
      {/* Badge */}
      <h2>Badge</h2>
      <div className='border-1 border-grey-300 flex flex-col gap-12 rounded-s-lg p-4'>
        <div className='flex flex-1 flex-wrap gap-4'>
          <div className='flex flex-1 flex-col gap-4'>
            <Badge value='Badge' color='yellow' size='s' />
            <Badge value='Badge' color='yellow' size='m' />
            <Badge value='Badge' color='yellow' size='l' />
          </div>
          <div className='flex flex-1 flex-col gap-4'>
            <Badge value='Badge' color='blue' size='s' />
            <Badge value='Badge' color='blue' size='m' />
            <Badge value='Badge' color='blue' size='l' />
          </div>
          <div className='flex flex-1 flex-col gap-4'>
            <Badge value='Badge' color='green' size='s' />
            <Badge value='Badge' color='green' size='m' />
            <Badge value='Badge' color='green' size='l' />
          </div>
          <div className='flex flex-1 flex-col gap-4'>
            <Badge value='Badge' color='purple' size='s' />
            <Badge value='Badge' color='purple' size='m' />
            <Badge value='Badge' color='purple' size='l' />
          </div>
          <div className='flex flex-1 flex-col gap-4'>
            <Badge value='Badge' color='grey' size='s' />
            <Badge value='Badge' color='grey' size='m' />
            <Badge value='Badge' color='grey' size='l' />
          </div>
          <div className='flex flex-1 flex-col gap-4'>
            <Badge value='Badge' color='red' size='s' />
            <Badge value='Badge' color='red' size='m' />
            <Badge value='Badge' color='red' size='l' />
          </div>
          <div className='flex flex-1 flex-col gap-4'>
            <Badge value='Badge' color='neo-green' size='s' />
            <Badge value='Badge' color='neo-green' size='m' />
            <Badge value='Badge' color='neo-green' size='l' />
          </div>
        </div>
        <div className='flex flex-1 flex-wrap gap-4'>
          <div className='flex flex-1 flex-col gap-4'>
            <IconBadge value='Badge' color='yellow' size='s' icon={<AiOutlinePlus />} />
            <IconBadge value='Badge' color='yellow' size='m' icon={<AiOutlinePlus />} />
            <IconBadge value='Badge' color='yellow' size='l' icon={<AiOutlinePlus />} />
          </div>
          <div className='flex flex-1 flex-col gap-4'>
            <IconBadge value='Badge' color='blue' size='s' icon={<AiOutlinePlus />} />
            <IconBadge value='Badge' color='blue' size='m' icon={<AiOutlinePlus />} />
            <IconBadge value='Badge' color='blue' size='l' icon={<AiOutlinePlus />} />
          </div>
          <div className='flex flex-1 flex-col gap-4'>
            <IconBadge value='Badge' color='green' size='s' icon={<AiOutlinePlus />} />
            <IconBadge value='Badge' color='green' size='m' icon={<AiOutlinePlus />} />
            <IconBadge value='Badge' color='green' size='l' icon={<AiOutlinePlus />} />
          </div>
          <div className='flex flex-1 flex-col gap-4'>
            <IconBadge value='Badge' color='purple' size='s' icon={<AiOutlinePlus />} />
            <IconBadge value='Badge' color='purple' size='m' icon={<AiOutlinePlus />} />
            <IconBadge value='Badge' color='purple' size='l' icon={<AiOutlinePlus />} />
          </div>
          <div className='flex flex-1 flex-col gap-4'>
            <IconBadge value='Badge' color='grey' size='s' icon={<AiOutlinePlus />} />
            <IconBadge value='Badge' color='grey' size='m' icon={<AiOutlinePlus />} />
            <IconBadge value='Badge' color='grey' size='l' icon={<AiOutlinePlus />} />
          </div>
          <div className='flex flex-1 flex-col gap-4'>
            <IconBadge value='Badge' color='red' size='s' icon={<AiOutlinePlus />} />
            <IconBadge value='Badge' color='red' size='m' icon={<AiOutlinePlus />} />
            <IconBadge value='Badge' color='red' size='l' icon={<AiOutlinePlus />} />
          </div>
          <div className='flex flex-1 flex-col gap-4'>
            <IconBadge value='Badge' color='neo-green' size='s' icon={<AiOutlinePlus />} />
            <IconBadge value='Badge' color='neo-green' size='m' icon={<AiOutlinePlus />} />
            <IconBadge value='Badge' color='neo-green' size='l' icon={<AiOutlinePlus />} />
          </div>
        </div>
      </div>
    </div>
  );
}
