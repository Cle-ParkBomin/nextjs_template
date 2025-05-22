import Label from '@/components/label/Label';

export default function LabelView() {
  return (
    <div className='flex flex-col gap-4'>
      {/* Label */}
      <h2>Label</h2>
      <div className='border-1 border-grey-300 flex flex-wrap gap-4 rounded-s-lg p-4'>
        <div className='flex flex-1 flex-col gap-4'>
          <Label title='Label' size='l' />
          <Label title='Label' isMark size='l' />
          <Label title='Label' isMark subtitle='Description' size='l' />
          <Label title='Label' subtitle='Description' size='l' />
          <Label title='Label' isIcon description={{ title: 'Title', detail: 'Detail' }} size='l' />
          <Label
            title='Label'
            isIcon
            subtitle='Description'
            description={{ title: 'Title', detail: 'Detail' }}
            size='l'
          />
          <Label
            title='Label'
            isMark
            isIcon
            description={{ title: 'Title', detail: 'Detail' }}
            size='l'
          />
          <Label
            title='Label'
            subtitle='Description'
            isMark
            isIcon
            description={{ title: 'Title', detail: 'Detail' }}
            size='l'
          />
        </div>
        <div className='flex flex-1 flex-col gap-4'>
          <Label title='Label' />
          <Label title='Label' isMark />
          <Label title='Label' isMark subtitle='Description' />
          <Label title='Label' subtitle='Description' />
          <Label title='Label' isIcon description={{ title: 'Title', detail: 'Detail' }} />
          <Label
            title='Label'
            isIcon
            subtitle='Description'
            description={{ title: 'Title', detail: 'Detail' }}
          />
          <Label title='Label' isMark isIcon description={{ title: 'Title', detail: 'Detail' }} />
          <Label
            title='Label'
            subtitle='Description'
            isMark
            isIcon
            description={{ title: 'Title', detail: 'Detail' }}
          />
        </div>
        <div className='flex flex-1 flex-col gap-4'>
          <Label title='Label' size='s' />
          <Label title='Label' isMark size='s' />
          <Label title='Label' isMark subtitle='Description' size='s' />
          <Label title='Label' subtitle='Description' size='s' />
          <Label title='Label' isIcon description={{ title: 'Title', detail: 'Detail' }} size='s' />
          <Label
            title='Label'
            isIcon
            subtitle='Description'
            description={{ title: 'Title', detail: 'Detail' }}
            size='s'
          />
          <Label
            title='Label'
            isMark
            isIcon
            description={{ title: 'Title', detail: 'Detail' }}
            size='s'
          />
          <Label
            title='Label'
            subtitle='Description'
            isMark
            isIcon
            description={{ title: 'Title', detail: 'Detail' }}
            size='s'
          />
        </div>
      </div>
    </div>
  );
}
