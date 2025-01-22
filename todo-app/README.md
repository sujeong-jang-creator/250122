# Todo 애플리케이션

이 애플리케이션은 프론트엔드로 React를 사용하고, 백엔드는 AWS CDK를 사용하여 AWS 서비스를 이용해 구축된 Todo 애플리케이션입니다.

## 프로젝트 구조

프로젝트는 `frontend`와 `backend` 두 개의 주요 디렉토리로 구성되어 있습니다.

### 프론트엔드

프론트엔드는 사용자가 할 일 항목을 관리할 수 있는 React 애플리케이션입니다. 다음 파일들로 구성되어 있습니다:

- `public/index.html`: React 애플리케이션의 메인 HTML 파일.
- `public/manifest.json`: 웹 애플리케이션에 대한 메타데이터.
- `src/components/TodoItem.tsx`: 단일 할 일 항목을 나타내는 컴포넌트.
- `src/App.tsx`: 할 일 목록 상태를 관리하는 메인 컴포넌트.
- `src/index.tsx`: React 애플리케이션의 진입점.
- `src/styles/App.css`: 애플리케이션의 CSS 스타일.
- `package.json`: npm 설정 파일.
- `tsconfig.json`: TypeScript 설정 파일.

### 백엔드

백엔드는 AWS 서비스와 AWS CDK를 사용하여 구축되었습니다. 다음 파일들로 구성되어 있습니다:

- `bin/todo-app.ts`: AWS CDK 애플리케이션의 진입점.
- `lib/todo-app-stack.ts`: 주요 AWS 리소스를 정의하는 스택.
- `lib/cognito-setup.ts`: 로그인 없이 AWS Cognito를 설정.
- `package.json`: npm 설정 파일.
- `tsconfig.json`: TypeScript 설정 파일.

## 설정 방법

### 프론트엔드

1. `frontend` 디렉토리로 이동합니다.
2. `npm install`을 사용하여 종속성을 설치합니다.
3. `npm start`로 개발 서버를 시작합니다.

### 백엔드

1. `backend` 디렉토리로 이동합니다.
2. `npm install`을 사용하여 종속성을 설치합니다.
3. `cdk deploy`를 사용하여 AWS 리소스를 배포합니다.

## 사용법

프론트엔드와 백엔드가 모두 설정되면, Todo 애플리케이션을 사용하여 할 일 항목을 생성, 조회 및 관리할 수 있습니다. 프론트엔드는 백엔드 서비스와 통신하여 할 일 데이터를 저장하고 검색합니다.

## Todo 체크리스트

- [ ] 프로젝트 구조 설정
- [ ] 프론트엔드 React 애플리케이션 생성
- [ ] `public/index.html` 파일 작성
- [ ] `public/manifest.json` 파일 작성
- [ ] `src/components/TodoItem.tsx` 컴포넌트 작성
- [ ] `src/App.tsx` 메인 컴포넌트 작성
- [ ] `src/index.tsx` 진입점 작성
- [ ] `src/styles/App.css` 스타일 작성
- [ ] 프론트엔드 종속성 설치 및 개발 서버 시작
- [ ] 백엔드 AWS CDK 애플리케이션 생성
- [ ] `bin/todo-app.ts` 파일 작성
- [ ] `lib/todo-app-stack.ts` 스택 작성
- [ ] `lib/cognito-setup.ts` 파일 작성
- [ ] 백엔드 종속성 설치
- [ ] AWS 리소스 배포

## 배포

### 프론트엔드

프론트엔드는 GitHub Pages를 통해 배포됩니다. 다음 단계를 따르세요:

1. `package.json` 파일에 다음 스크립트를 추가합니다:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }