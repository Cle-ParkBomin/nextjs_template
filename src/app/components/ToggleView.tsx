import Toggle from '@/components/toggle/Toggle';
import { useState } from 'react';

export default function ToggleView() {
  const [value, setValue] = useState<boolean>(false);
  const [valueOn, setValueOn] = useState<boolean>(true);

  return (
    <div className='flex flex-col gap-4'>
      <h2>Toggle</h2>
      <div className='flex flex-1 flex-col rounded-s-lg border-1 border-grey-300 p-4'>
        <div className='flex flex-wrap justify-between'>
          <div className='flex flex-col gap-4'>
            <Toggle value={value} onClick={() => setValue(!value)} title='Button' />
            <Toggle value={valueOn} onClick={() => setValueOn(!valueOn)} title='Button' />
            <Toggle value={value} onClick={() => setValue(!value)} title='Button' isDisable />
          </div>
          <div className='flex flex-col gap-4'>
            <Toggle
              value={value}
              title='Button'
              onClick={() => setValue(!value)}
              subTitle='Description'
            />
            <Toggle
              value={valueOn}
              title='Button'
              onClick={() => setValueOn(!valueOn)}
              subTitle='Description'
            />
            <Toggle
              value={value}
              title='Button'
              onClick={() => setValue(!value)}
              isDisable
              subTitle='Description'
            />
          </div>

          <div className='flex flex-col gap-4'>
            <Toggle value={value} onClick={() => setValue(!value)} title='Button' style='dark' />
            <Toggle
              value={valueOn}
              title='Button'
              onClick={() => setValueOn(!valueOn)}
              style='dark'
            />
            <Toggle
              value={value}
              title='Button'
              onClick={() => setValue(!value)}
              isDisable
              style='dark'
            />
          </div>
          <div className='flex flex-col gap-4'>
            <Toggle
              value={value}
              title='Button'
              onClick={() => setValue(!value)}
              style='dark'
              subTitle='Description'
            />
            <Toggle
              value={valueOn}
              title='Button'
              onClick={() => setValueOn(!valueOn)}
              style='dark'
              subTitle='Description'
            />
            <Toggle
              value={value}
              title='Button'
              onClick={() => setValue(!value)}
              isDisable
              style='dark'
              subTitle='Description'
            />
          </div>
        </div>

        <div className='flex flex-wrap justify-between'>
          <div className='flex flex-col gap-4'>
            <Toggle value={value} title='Button' onClick={() => setValue(!value)} color='green' />
            <Toggle
              value={valueOn}
              title='Button'
              onClick={() => setValueOn(!valueOn)}
              color='green'
            />
            <Toggle
              value={value}
              title='Button'
              onClick={() => setValue(!value)}
              isDisable
              color='green'
            />
          </div>
          <div className='flex flex-col gap-4'>
            <Toggle
              value={value}
              title='Button'
              onClick={() => setValue(!value)}
              color='green'
              subTitle='Description'
            />
            <Toggle
              value={valueOn}
              title='Button'
              onClick={() => setValueOn(!valueOn)}
              color='green'
              subTitle='Description'
            />
            <Toggle
              value={value}
              title='Button'
              onClick={() => setValue(!value)}
              isDisable
              color='green'
              subTitle='Description'
            />
          </div>

          <div className='flex flex-col gap-4'>
            <Toggle
              value={value}
              title='Button'
              onClick={() => setValue(!value)}
              color='green'
              style='dark'
            />
            <Toggle
              value={valueOn}
              title='Button'
              onClick={() => setValueOn(!valueOn)}
              color='green'
              style='dark'
            />
            <Toggle
              value={value}
              title='Button'
              onClick={() => setValue(!value)}
              isDisable
              color='green'
              style='dark'
            />
          </div>
          <div className='flex flex-col gap-4'>
            <Toggle
              value={value}
              title='Button'
              onClick={() => setValue(!value)}
              color='green'
              style='dark'
              subTitle='Description'
            />
            <Toggle
              value={valueOn}
              title='Button'
              onClick={() => setValueOn(!valueOn)}
              color='green'
              style='dark'
              subTitle='Description'
            />
            <Toggle
              value={value}
              title='Button'
              onClick={() => setValue(!value)}
              isDisable
              color='green'
              style='dark'
              subTitle='Description'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
