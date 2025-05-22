'use client';

import BadgeView from '@/app/[locale]/(protected)/components/BadgeView';
import ButtonView from '@/app/[locale]/(protected)/components/ButtonView';
import CalendarView from '@/app/[locale]/(protected)/components/CalendarView';
import CardRadioView from '@/app/[locale]/(protected)/components/CardRadioView';
import DropButtonView from '@/app/[locale]/(protected)/components/DropButtonView';
import InputSmallView from '@/app/[locale]/(protected)/components/InputSmallView';
import InputView from '@/app/[locale]/(protected)/components/InputView';
import LabelView from '@/app/[locale]/(protected)/components/LabelView';
import LinkButtonView from '@/app/[locale]/(protected)/components/LinkButtonView';
import ModalView from '@/app/[locale]/(protected)/components/ModalView';
import RadioView from '@/app/[locale]/(protected)/components/RadioView';
import SliderView from '@/app/[locale]/(protected)/components/SliderView';
import TableView from '@/app/[locale]/(protected)/components/TableView';
import TabView from '@/app/[locale]/(protected)/components/TabView';
import TextFieldView from '@/app/[locale]/(protected)/components/TextFieldView';
import ToggleView from '@/app/[locale]/(protected)/components/ToggleView';

export default function Components() {
  return (
    <div className='flex flex-col gap-8'>
      <h1>Design System Components</h1>
      <div className='flex flex-col gap-8'>
        <InputView />
        <InputSmallView />
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
