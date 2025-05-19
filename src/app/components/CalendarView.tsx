'use client';

import Calendar, { DateRange } from '@/components/headless/Calendar';
import { useState } from 'react';

export default function CalendarView() {
  const [selected, setSelected] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });

  return (
    <div className='flex flex-col gap-4'>
      {/* Calendar */}
      <h2>Calendar</h2>
      <div className='flex flex-col flex-wrap gap-12 rounded-s-lg border-1 border-grey-300 p-4'>
        <p>
          Calendar는 라이브러리를 활용하여 디자인과 최대한 유사하게 구현하였으나, 다소 부족한 부분이
          있을 수 있습니다. 이 점 고려하시어 피드백 주시면 감사하겠습니다.
        </p>
        <Calendar selected={selected} setSelected={setSelected} />
      </div>
    </div>
  );
}
