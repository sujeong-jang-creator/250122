# 250122 프로젝트

이 프로젝트는 React를 사용하여 프론트엔드를 구축하고, GitHub Pages를 통해 배포되는 Todo 애플리케이션입니다.

## 프로젝트 구조

- `public/index.html`: React 애플리케이션의 메인 HTML 파일.
- `public/manifest.json`: 웹 애플리케이션에 대한 메타데이터.
- `src/components/TodoItem.tsx`: 단일 할 일 항목을 나타내는 컴포넌트.
- `src/App.tsx`: 할 일 목록 상태를 관리하는 메인 컴포넌트.
- `src/index.tsx`: React 애플리케이션의 진입점.
- `src/styles/App.css`: 애플리케이션의 CSS 스타일.
- `package.json`: npm 설정 파일.
- `tsconfig.json`: TypeScript 설정 파일.

## 설정 방법

### 프론트엔드

1. `frontend` 디렉토리로 이동합니다.
2. `npm install`을 사용하여 종속성을 설치합니다.
3. `npm start`로 개발 서버를 시작합니다.

## 배포

프론트엔드는 GitHub Pages를 통해 배포됩니다. 다음 단계를 따르세요:

1. `package.json` 파일에 다음 스크립트를 추가합니다:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
2. GitHub Pages를 사용하여 배포합니다:
   ```sh
   npm run deploy
   ```

## 기여

기여를 환영합니다! 버그를 발견하거나 기능 요청이 있으면 이슈를 제출해 주세요.

## 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.
