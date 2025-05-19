import useClickOutside from '@/hooks/useClickOutside';
import { useRef, useState } from 'react';
import { FaCheck } from 'react-icons/fa6';

interface DropButtonProps {
  title: string;
  value: string;
  valueList: string[];
  onClick: (value: string) => void;
}

export default function DropButton({ title, value, valueList, onClick }: DropButtonProps) {
  const dropdownRef = useRef<HTMLUListElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClickButton = () => {
    setIsOpen(true);
  };

  const handleClickOption = (selected: string) => {
    onClick(selected);
    setIsOpen(false);
  };

  useClickOutside({ ref: dropdownRef, onClick: () => setIsOpen(false) });

  return (
    <div className='relative'>
      <button
        className='cursor-pointer text-14 leading-20 whitespace-nowrap text-grey-700 underline'
        onClick={handleClickButton}
      >
        {title}
      </button>

      {/* dropDown */}
      {isOpen && (
        <ul
          className='absolute flex max-h-48 w-fit flex-col gap-1 overflow-auto rounded-sm border border-grey-300 bg-grey-0 p-1 shadow-strong'
          ref={dropdownRef}
        >
          {valueList.map((item) => (
            <button
              key={item}
              className={`flex flex-1 cursor-pointer items-center gap-1 px-4 py-2 hover:bg-grey-950/4 ${item === value && 'text-primary-500 hover:text-primary-600'}`}
              onClick={() => handleClickOption(item)}
            >
              <p>{item}</p>
              {item === value && <FaCheck size={16} />}
            </button>
          ))}
        </ul>
      )}
    </div>
  );
}
