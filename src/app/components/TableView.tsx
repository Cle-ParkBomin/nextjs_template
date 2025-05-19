import Pagination from '@/components/table/Pagination';
import { useState } from 'react';

export default function TableView() {
  const [page1, setPage1] = useState<number>(1);
  const [page2, setPage2] = useState<number>(1);
  const [page3, setPage3] = useState<number>(1);
  const [page4, setPage4] = useState<number>(1);
  const [page5, setPage5] = useState<number>(1);

  return (
    <div className='flex flex-col gap-4'>
      {/* Table */}
      <h2>Table</h2>
      <div className='flex flex-col flex-wrap gap-12 rounded-s-lg border-1 border-grey-300 p-4'>
        <p>
          Table 컴포넌트는 데이터 형태에 따라 구조가 크게 달라지므로, 본 문서에서는 구현 예시를
          생략합니다.
        </p>
        <Pagination selectPage={page1} setSelectPage={setPage1} totalPages={1} />
        <Pagination selectPage={page2} setSelectPage={setPage2} totalPages={5} />
        <Pagination selectPage={page3} setSelectPage={setPage3} totalPages={7} />
        <Pagination selectPage={page4} setSelectPage={setPage4} totalPages={20} />
        <Pagination selectPage={page5} setSelectPage={setPage5} totalPages={35} />
      </div>
    </div>
  );
}
