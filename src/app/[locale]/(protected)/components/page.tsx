'use client';

import BadgeView from './BadgeView';
import ButtonView from './ButtonView';
import CalendarView from './CalendarView';
import CardRadioView from './CardRadioView';
import DropButtonView from './DropButtonView';
import InputView from './InputView';
import LabelView from './LabelView';
import LinkButtonView from './LinkButtonView';
import ModalView from './ModalView';
import RadioView from './RadioView';
import SliderView from './SliderView';
import TableView from './TableView';
import TabView from './TabView';
import TextFieldView from './TextFieldView';
import ToggleView from './ToggleView';

export default function Components() {
  return (
    <div className='flex flex-col gap-8'>
      <h1>Design System Components</h1>
      <div className='flex flex-col gap-8'>
        <InputView />
        <TextFieldView />
        <LabelView />
        <SliderView />
        <ButtonView />
        <LinkButtonView />
        <RadioView />
        <ToggleView />
        <CardRadioView />
        <TabView />
        <DropButtonView />
        <CalendarView />
        <TableView />
        <ModalView />
        <BadgeView />
      </div>
    </div>
  );
}
