import Button from '@/components/button/Button';
import { Dispatch, SetStateAction } from 'react';
import { DayPicker } from 'react-day-picker';
import { ko } from 'react-day-picker/locale';

export interface DateRange {
  from: Date | undefined;
  to?: Date | undefined;
}

interface CalendarProps {
  selected: DateRange | undefined;
  setSelected: Dispatch<SetStateAction<DateRange | undefined>>;
}

export default function Calendar({ selected, setSelected }: CalendarProps) {
  return (
    <div className='flex w-fit flex-col rounded-lg border border-grey-300 bg-grey-0 pt-4 shadow-strong'>
      <DayPicker
        mode='range'
        selected={selected}
        onSelect={setSelected}
        locale={ko}
        fixedWeeks
        showOutsideDays
        captionLayout='dropdown'
        classNames={{
          root: 'relative',
          // body
          month_grid: 'flex flex-col py-2 mt-2 border-t border-grey-200',
          // month arrow style
          nav: 'absolute top-3 right-0 px-5 flex gap-3',
          button_previous: 'cursor-pointer',
          button_next: 'cursor-pointer',
          // year month select style
          caption_label: 'hidden',
          dropdown_root: 'flex h-12',
          month_caption: 'flex mx-12',
          dropdowns: 'flex flex-row-reverse place-self-start',
          dropdown: 'cursor-pointer outline-none flex items-center hover:bg-grey-950/4',
          // week style
          week: 'flex mx-[18px]',
          weeks: 'flex flex-col gap-2 my-4',
          weekdays: 'flex mx-[18px] justify-between',
          weekday: 'text-14 font-400 leading-16 text-grey-500 w-8 h-4 my-1 mx-0.5',
          // day button style
          day: 'text-14 leading-20',
          day_button:
            'w-11 h-11 cursor-pointer flex justify-center items-center hover:text-grey-0 hover:bg-primary-200 rounded-full',
          today: 'text-blue-500 font-700',
          outside: 'text-grey-300',
          range_start: 'bg-primary-500 rounded-l-full text-grey-0 hover:bg-primary-200',
          range_middle: 'bg-primary-500 text-grey-0 hover:bg-primary-200',
          range_end: 'bg-primary-500 rounded-r-full text-grey-0 hover:bg-primary-200',
        }}
      />
      <div className='flex items-center justify-end gap-8 p-4'>
        <div className='flex w-[100px]'>
          <Button value='초기화' style='ghost' size='s' />
        </div>
        <div className='flex w-[100px]'>
          <Button value='확인' size='s' />
        </div>
      </div>
    </div>
  );
}
