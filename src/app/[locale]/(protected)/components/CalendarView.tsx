'use client';

import Calendar from '@/components/headless/Calendar';
import CalendarInput from '@/components/headless/CalendarInput';
import { DateRange } from '@/types/date';
import { useState } from 'react';

export default function CalendarView() {
  const [value1, setValue1] = useState<DateRange>({
    from: new Date(),
    to: new Date(),
  });
  const [value2, setValue2] = useState<DateRange>({
    from: new Date(),
    to: new Date(),
  });
  const [value3, setValue3] = useState<DateRange>({
    from: new Date(),
    to: new Date(),
  });

  return (
    <div className='flex flex-col gap-4'>
      {/* Calendar */}
      <h2>Calendar</h2>
      <div className='border-1 border-grey-300 flex flex-col flex-wrap gap-12 rounded-s-lg p-4'>
        <p>
          Calendar는 라이브러리를 활용하여 디자인과 최대한 유사하게 구현하였으나, 다소 부족한 부분이
          있을 수 있습니다. 이 점 고려하시어 피드백 주시면 감사하겠습니다.
        </p>
        <div className='flex w-64 flex-col gap-12'>
          <CalendarInput value={value1} setValue={setValue1} />
          <CalendarInput value={value2} setValue={setValue2} size='s' />
        </div>
        <Calendar value={value3} setValue={setValue3} />
      </div>
    </div>
  );
}
