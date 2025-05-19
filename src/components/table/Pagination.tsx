import { Dispatch, SetStateAction, useState } from 'react';
import {
  CgChevronDoubleLeft,
  CgChevronDoubleRight,
  CgChevronLeft,
  CgChevronRight,
} from 'react-icons/cg';

interface PaginationProps {
  selectPage: number;
  setSelectPage: Dispatch<SetStateAction<number>>;
  totalPages: number;
}

export default function Pagination({ selectPage, setSelectPage, totalPages }: PaginationProps) {
  const STEP = 10;
  const [startPage, setStartPage] = useState<number>(1);

  const variantStyle = {
    default: 'cursor-pointer border-transparent hover:bg-grey-950/4',
    selected:
      'cursor-pointer border-primary-500 bg-primary-50 text-primary-500 hover:border-primary-600 hover:bg-primary-100 hover:text-primary-600',
    disabled: 'cursor-not-allowed text-grey-300',
  };

  const isDisabled = {
    doublePre: selectPage === 1,
    pre: selectPage === 1,
    next: selectPage === totalPages,
    doubleNext: selectPage === totalPages,
  };

  const generatePages = () => {
    const pages: number[] = [];
    for (let i = startPage; i < startPage + STEP; i++) {
      if (i <= totalPages) pages.push(i);
    }

    return pages;
  };
  const pages: number[] = generatePages();

  const onClickButton = (step: number) => {
    const nextPage = Math.max(1, Math.min(selectPage + step, totalPages));
    const newStartPage = Math.floor((nextPage - 1) / STEP) * STEP + 1;

    setSelectPage(nextPage);
    setStartPage(newStartPage);
  };

  return (
    <div className='flex flex-wrap justify-center px-1 py-4'>
      <button
        className={`font-16 flex h-10 w-10 items-center justify-center rounded-lg border-transparent leading-20 ${variantStyle[isDisabled.doublePre ? 'disabled' : 'default']}`}
        disabled={isDisabled.doublePre}
        onClick={() => onClickButton(-STEP)}
      >
        <CgChevronDoubleLeft />
      </button>
      <button
        className={`font-16 flex h-10 w-10 items-center justify-center rounded-lg border-transparent leading-20 ${variantStyle[isDisabled.pre ? 'disabled' : 'default']}`}
        disabled={isDisabled.pre}
        onClick={() => onClickButton(-1)}
      >
        <CgChevronLeft />
      </button>
      {pages.map((page) => (
        <button
          key={`pagination_${page}`}
          className={`font-14 flex h-10 w-10 items-center justify-center rounded-lg border leading-20 ${variantStyle[page === selectPage ? 'selected' : 'default']}`}
          onClick={() => setSelectPage(page)}
        >
          {page}
        </button>
      ))}
      <button
        className={`font-16 flex h-10 w-10 items-center justify-center rounded-lg border-transparent leading-20 ${variantStyle[isDisabled.next ? 'disabled' : 'default']}`}
        disabled={isDisabled.next}
        onClick={() => onClickButton(1)}
      >
        <CgChevronRight />
      </button>
      <button
        className={`font-16 flex h-10 w-10 items-center justify-center rounded-lg border-transparent leading-20 ${variantStyle[isDisabled.doubleNext ? 'disabled' : 'default']}`}
        disabled={isDisabled.doubleNext}
        onClick={() => onClickButton(STEP)}
      >
        <CgChevronDoubleRight />
      </button>
    </div>
  );
}
