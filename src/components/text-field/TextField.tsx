import LoadingIcon from '@/components/svg/LoadingIcon';
import { ChangeEventHandler, useRef } from 'react';

interface TextFieldProps {
  value: string; // 입력값
  onChange: ChangeEventHandler<HTMLTextAreaElement>; // 입력값 변경 핸들러
  isLoading?: boolean; // 로딩 상태 여부
  isDisabled?: boolean; // 입력 비활성화 여부
  placeholder?: string; // 플레이스홀더 텍스트
  size?: 'm' | 's'; // 폰트 사이즈
}

export default function TextField({
  value,
  onChange,
  isLoading = false,
  isDisabled = false,
  placeholder = 'Text',
  size = 'm',
}: TextFieldProps) {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const variantStyle = {
    default: {
      wrapper: 'bg-grey-0',
      textarea: '',
    },
    disabled: {
      wrapper: 'bg-grey-100',
      textarea: 'cursor-not-allowed text-grey-300',
    },
  };
  const variantKey = isDisabled ? 'disabled' : 'default';

  const fontStyle = {
    m: 'text-14 leading-20',
    s: 'text-12 leading-20', // leading-16 일 경우, scrollbar 가 발생하여 20으로 통일시킵니다.
  };

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    onChange(event);

    if (textareaRef.current) {
      // 사용자 입력에 따라 textarea 높이가 변경됩니다.
      const MAX_HEIGHT = 200;
      const textarea = textareaRef.current;

      textarea.style.height = 'auto';
      textarea.style.height = `${Math.min(textarea.scrollHeight, MAX_HEIGHT)}px`;
    }
  };

  return (
    <div
      className={`flex min-h-11 items-center justify-center border-b-1 border-b-grey-200 px-4 py-3 ${variantStyle[variantKey].wrapper}`}
    >
      {isLoading ? (
        <LoadingIcon />
      ) : (
        <textarea
          className={`flex flex-1 resize-none caret-blue-500 outline-none placeholder:text-grey-500 ${variantStyle[variantKey].textarea} ${fontStyle[size]}`}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={isDisabled}
          rows={1}
          ref={textareaRef}
        />
      )}
    </div>
  );
}
