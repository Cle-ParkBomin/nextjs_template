import Slider from '@/components/slider/Slider';
import { useState } from 'react';

export default function SliderView() {
  const [sliderValue, setSliderValue] = useState<number>(0);

  return (
    <div className='flex flex-col gap-4'>
      {/* Slider */}
      <h2>Slider</h2>
      <div className='border-1 border-grey-300 flex flex-wrap gap-10 rounded-s-lg p-10'>
        <Slider value={sliderValue} onChange={(value: number) => setSliderValue(value)} />
        <Slider value={sliderValue} onChange={(value: number) => setSliderValue(value)} isNumber />
        <Slider
          value={sliderValue}
          onChange={(value: number) => setSliderValue(value)}
          isDisabled
        />
        <Slider
          value={sliderValue}
          onChange={(value: number) => setSliderValue(value)}
          isNumber
          isDisabled
        />
      </div>
    </div>
  );
}
