# 🛠️ **시작하기**

### 실행 명령어 (npx 생략)
1. 터미널에서 `npm i` 실행합니다.
2. 터미널에서 `npx next dev` 실행합니다.
3. localhost:3000 에 진입합니다.

- **`next dev`** : 개발 서버 시작 [http://localhost:3000](http://localhost:3000)
- **`next build`** : 프로덕션을 위한 애플리케이션 빌드
- **`next start`** : 프로덕션 서버 시작
- **`next lint`** : ESLint 실행
- **`lint-staged`** : 스테이징된 파일 코드 컨벤션 검사

---

# ✨ **코드 컨벤션**

### 구성 파일

- **`tsconfig.json`** : 타입 검사
- **`eslint.config.mjs`** : 문법 검사
- **`prettier.config.mjs`** : 코드 포맷팅

### 자동 포맷팅 적용 목록

1. **import**: 순서 정렬, 사용하지 않는 목록 삭제
2. **tailwindcss**: 순서 정렬, 중복 제거, 띄어쓰기 통일  
   (prettier.config.mjs 파일 참조)

### 규칙

1. **사용하지 않는 서드파티 패키지는 `package.json`에서 제거합니다.**
2. **동일한 기능의 라이브러리를 혼용하지 않습니다.**  
   예) `tailwindcss`, `css`, `scss`, `sass` 등을 함께 사용하지 않음

> 💡 **Husky + lint-staged**  
> 커밋 전 `npx lint-staged`를 실행합니다.  
> ESLint 오류 발생 시 Git 커밋이 차단됩니다.

---

# 🎨 **스타일 가이드**

### Tailwind CSS

**Next.js 15**부터 `tailwind.config.js`가 제거되고 `global.css`만 사용합니다.

### 사용자 지정 색상 (Custom Colors)

`global.css`의 `:root` 에서 다크/라이트 모드에 따른 색상 설정 후, `theme`에서 정의

### 디자인 가이드

- [CLE Design system](https://www.figma.com/design/tbtPLjPDYOK9qm76OjHwxI/Design-system?node-id=7-316&m=dev)

### 공통 컴포넌트 규칙

1. 단일 책임 원칙
- 하나의 컴포넌트는 하나의 목적만 가집니다.
- 예) `textInput`, `DateInput`, `SelectInput`

2. 내부 상태 최소화
- 내부 상태를 최소화 하고, 외부에서 제어 가능하도록 합니다.
- 예) `value`, `onChange`, `isOpen`

3. 점진적인 추상화
- 반복되는 사용 패턴이 생길 때, 추상화 및 리팩터링 합니다.

### icon

`react-icons` 라이브러리사용

### UI Libraray

ui 라이브러리는 되도록 사용하지 않습니다.
기능 구현이 복잡하여 사용해야 하는 경우, Headless UI Library 를 권장합니다.
(단, 의존성 충돌이 일어나면 안됩니다.)

---

# 📁 **Git**

(내용 필요 시 추가)

---

# 🧩 **주요 라이브러리**

- **Typia** : 런타임 타입 검증
- **GraphQL** : API 런타임 환경
- **Immer**: 상태의 불변성 관리

---

# 🚀 **배포**

(추후 추가 예정)

- [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying)
