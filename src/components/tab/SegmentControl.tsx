import { FaCheck } from 'react-icons/fa6';

export interface SegmentControlType {
  key?: number;
  value?: string;
}

interface SegmentControlProps {
  value: SegmentControlType;
  valueList: SegmentControlType[];
  onClick?: (value: SegmentControlType) => void;
  isIcon?: boolean;
  isDisabled?: boolean;
}

export default function SegmentControl({
  value,
  valueList,
  onClick,
  isIcon = false,
  isDisabled = false,
}: SegmentControlProps) {
  const variantStyle = {
    check: { wrapper: 'border-grey-300 bg-grey-200', button: 'cursor-pointer bg-grey-0' },
    uncheck: {
      wrapper: 'border-grey-300 bg-grey-200',
      button: 'cursor-pointer text-grey-500 bg-transparent hover:bg-grey-950/4 hover:text-grey-700',
    },
    disabled: {
      wrapper: 'border-grey-200 bg-grey-100',
      button: 'cursor-not-allowed text-grey-300 bg-transparent',
    },
  };

  return (
    <div
      className={`border-1 flex flex-1 flex-wrap justify-between gap-1 rounded-sm p-1 ${variantStyle[isDisabled ? 'disabled' : 'check'].wrapper}`}
    >
      {valueList?.map((item) => (
        <button
          key={`SegmentControl_${item.key}`}
          className={`rounded-xs text-14 leading-20 flex flex-1 items-center justify-center gap-1 px-4 py-2 ${variantStyle[isDisabled ? 'disabled' : value.key === item.key ? 'check' : 'uncheck'].button}`}
          onClick={() => onClick && onClick(item)}
          disabled={isDisabled}
        >
          {isIcon && <FaCheck size={16} />}
          <p>{item.value}</p>
        </button>
      ))}
    </div>
  );
}
