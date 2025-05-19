// Prettier가 코드 포맷팅을 담당하므로, ESLint는 문법 오류 및 잠재적 문제 검사에 집중합니다.
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  {
    ignores: ['eslint.config.mjs', 'postcss.config.mjs', 'prettier.config.mjs'],
  },
  ...compat.extends(
    'next/core-web-vitals', // Next.js 핵심 웹 바이탈 관련 권장 규칙
    'next/typescript', // Next.js TypeScript 관련 권장 규칙
    'eslint:recommended', // ESLint 기본 권장 규칙
    'eslint-config-prettier', // Prettier와 ESLint 통합 (충돌 방지)
    'plugin:@typescript-eslint/recommended-type-checked', // TypeScript 타입 검사 강화 규칙 (tsconfig.json 필요)
    'plugin:@typescript-eslint/stylistic-type-checked', // TypeScript 코드 스타일 관련 규칙
    'plugin:react/recommended', // React 권장 규칙
    'plugin:react-hooks/recommended', // React Hooks 규칙
    'plugin:jsx-a11y/recommended', // JSX 접근성 관련 권장 규칙
    'plugin:import/recommended', // import 구문 관련 권장 규칙
    'plugin:import/typescript', // import 구문 관련 TypeScript 규칙
    'prettier/prettier', // Prettier 규칙을 ESLint 에러로 처리
  ),
  {
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json'], // TypeScript 프로젝트 설정 파일 경로 (type-checked 규칙에 필요)
      },
    },
    rules: {
      // --- ESLint 자체 규칙 강화 ---
      'no-template-curly-in-string': 'error', // 문자열 템플릿 내 표현식 오류 방지
      'no-dupe-keys': 'error', // 객체 리터럴 내 중복 키 금지
      'no-duplicate-case': 'error', // switch 문 내 중복 case 금지
      'no-unreachable': 'error', // 도달 불가능한 코드 방지
      'no-unsafe-finally': 'error', // finally 블록 내 제어 흐름 변경 위험 방지
      'no-console': 'warn', // console 사용에 대한 경고 (production 빌드 시 제거 권장)
      'no-debugger': 'warn', // debugger 구문 사용에 대한 경고 (production 빌드 시 제거 권장)

      // --- @typescript-eslint 규칙 강화 ---
      '@typescript-eslint/no-unused-vars': 'error', // 사용하지 않는 변수 오류 (더 상세 설정 가능)
      // '@typescript-eslint/explicit-function-return-type': 'off', // 함수 반환 타입 명시 권장
      '@typescript-eslint/no-explicit-any': 'error', // 'any' 타입 사용에 대한 경고 (엄격한 타입 사용 권장)
      '@typescript-eslint/no-unsafe-assignment': 'error', // 'any' 타입으로부터의 안전하지 않은 할당 금지
      '@typescript-eslint/no-unsafe-call': 'error', // 'any' 타입의 함수 호출 방지
      '@typescript-eslint/no-unsafe-member-access': 'error', // 'any' 타입 멤버 접근 방지
      '@typescript-eslint/no-unsafe-return': 'error', // 'any' 타입 반환 방지
      '@typescript-eslint/no-floating-promises': 'error', // 처리되지 않은 Promise 경고
      '@typescript-eslint/restrict-plus-operands': 'error', // '+' 연산자 사용 시 타입 제한
      '@typescript-eslint/no-misused-promises': 'error', // Promise 잘못된 사용 방지
      '@typescript-eslint/no-non-null-assertion': 'error', // non-null 단언 연산자 '!' 사용 금지 (null 가능성 명시)
      '@typescript-eslint/no-inferrable-types': 'error', // 명확히 추론 가능한 타입에 대한 명시적 타입 금지 (코드 간결성)

      // --- React 관련 규칙 강화 ---
      'react/jsx-key': 'error', // 반복되는 JSX 엘리먼트에 'key' prop 필수
      'react/jsx-no-duplicate-props': 'error', // JSX 엘리먼트 내 중복된 prop 금지
      'react/jsx-no-constructed-context-values': 'error', // 렌더링 시 생성되는 Context 값 사용 금지
      'react/no-unstable-nested-components': 'error', // 불안정한 중첩 컴포넌트 사용 금지
      'react/jsx-no-useless-fragment': 'warn', // 불필요한 Fragment 사용 경고
      'react/no-array-index-key': 'warn', // 배열 index를 key로 사용하는 것에 대한 경고
      'react/no-danger': 'warn', // dangerouslySetInnerHTML 사용에 대한 경고
      'react/no-deprecated': 'warn', // deprecated된 React API 사용에 대한 경고
      'react/no-direct-mutation-state': 'warn', // state 직접 수정 금지
      'react/no-unknown-property': 'warn', // 알 수 없는 HTML/SVG prop 사용에 대한 경고
      'react/no-children-prop': 'warn', // 'children' prop 사용에 대한 경고
      'react/no-multi-comp': 'warn', // 하나의 파일에 여러 컴포넌트 정의에 대한 경고
      'react/no-typos': 'warn', // React API 오타 경고
      'react/no-unsafe': 'warn', // 안전하지 않은 React API 사용 경고
      'react/no-unused-prop-types': 'warn', // 사용하지 않는 prop types 경고
      'react/no-unused-state': 'warn', // 사용하지 않는 state 경고

      // --- React Hooks 규칙 강화 ---
      'react-hooks/rules-of-hooks': 'error', // React Hooks 사용 규칙 위반 시 에러 발생
      'react-hooks/exhaustive-deps': 'warn', // useEffect, useCallback 등의 의존성 배열 경고

      // --- jsx-a11y 규칙 강화 ---
      'jsx-a11y/alt-text': 'warn', // <img> 태그에 'alt' 속성 필수
      'jsx-a11y/anchor-is-valid': 'warn', // <a> 태그의 'href' 속성 유효성 검사
      'jsx-a11y/no-static-element-interactions': 'warn', // 정적 요소에 상호작용 이벤트 시 role 및 키보드 이벤트 처리 요구
      'jsx-a11y/click-events-have-key-events': 'warn', // onClick 이벤트 사용 시 키보드 이벤트 처리 요구

      // --- import 규칙 강화 ---
      'import/no-unresolved': 'error', // import 경로 오류 시 에러 발생
      'import/named': 'error', // 명명된 import가 실제 존재하는지 확인
      'import/namespace': 'error', // namespace import가 올바르게 사용되었는지 확인
      'import/default': 'error', // default import가 실제 존재하는지 확인
      'import/export': 'error', // 존재하지 않는 export 사용 금지
      'import/no-duplicates': 'error', // 중복된 import 구문 금지
      'import/no-namespace': 'error', // namespace import 사용 금지
      'import/no-self-import': 'error', // 자기 자신을 import 금지
      'import/no-useless-path-segments': 'error', // 불필요한 경로 세그먼트 사용 금지
      'import/no-extraneous-dependencies': 'error', // package.json에 명시되지 않은 외부 패키지 import 금지

      // --- 기타 엄격한 규칙 (선택 사항) ---
      'no-undef': 'error', // 정의되지 않은 변수 사용 시 에러
      'react/react-in-jsx-scope': 'off', // React import 불필요
      eqeqeq: 'error', // '==', '!=' 대신 '===', '!==' 사용 강제
      'no-caller': 'error', // arguments.callee, arguments.caller 사용 금지 (strict mode 에러)
      'no-eval': 'error', // eval() 사용 금지 (보안 위험)
      'no-implied-eval': 'error', // setTimeout, setInterval 등의 문자열 인자 사용 금지 (eval과 유사한 위험)
      'no-new-wrappers': 'error', // String, Number, Boolean 등의 래퍼 객체 생성 지양
      'no-param-reassign': 'error', // 함수 매개변수 재할당 금지
      'no-shadow': 'error', // 변수 섀도잉 경고
      'no-restricted-syntax': [
        'error',
        {
          selector: "JSXExpressionContainer Literal[value=' ']",
          message: "JSX에서 {' '} 대신 &nbsp;으로 처리하세요.",
        },
      ], // {' '} 오타 검증
    },
  },
];

export default eslintConfig;
