/** @type {import('prettier').Config} */

const config = {
  printWidth: 100, // 최대 줄 길이
  useTabs: false, // 공백 들여쓰기
  tabWidth: 2, // 공백 너비
  semi: true, // 세미콜론 사용
  singleQuote: true, // 작은따옴표 사용
  jsxSingleQuote: true, // JSX 작은따옴표 사용
  bracketSpacing: true, // 괄호 안 공백
  jsxBracketSameLine: false, // JSX 닫는 괄호 위치
  arrowParens: 'always', // 화살표 함수 괄호
  diff: false, // diff 출력 안 함
  requirePragma: false, // 특수 주석 불필요
  htmlWhitespaceSensitivity: 'css', // HTML 공백 처리
  endOfLine: 'lf', // 줄 끝 문자
  trailingComma: 'all', // 후행 쉼표 항상
  embeddedLanguageFormatting: 'auto', // 내장 언어 자동 포맷
  proseWrap: 'always', // 긴 텍스트 줄바꿈
  indentInnerHtml: false, // HTML 내부 들여쓰기 안 함
  parser: 'typescript', // TypeScript 파서
  plugins: [
    'prettier-plugin-organize-imports',
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ], // 사용할 플러그인
  importOrder: [
    // import 정렬 순서
    '^(react|react-dom)$', // React 관련
    '^@?\\w+(.*)$', // npm 패키지
    '', // 그룹 분리
    '^@/components/(.*)$', // 컴포넌트
    '^@/hooks/(.*)$', // 훅
    '^@/utils/(.*)$', // 유틸
    '^[./]', // 상대 경로
  ],
  importOrderSeparation: true, // import 그룹 간 공백
  importOrderSortSpecifiers: true, // 그룹 내 알파벳 정렬
  overrides: [
    {
      files: '*.json', // 모든 .json 파일에 대해
      options: {
        parser: 'json', // JSON 파서 사용
      },
    },
    {
      files: '*.css', // 모든 .json 파일에 대해
      options: {
        parser: 'css', // JSON 파서 사용
      },
    },
  ],

  tailwindStylesheet: './src/app/globals.css', // tailwindcss 정렬
};

export default config; // 설정 내보내기
