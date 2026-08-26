# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## 언어

사용자와의 모든 대화는 한국어로 진행한다.

## 프로젝트 개요

`create-next-app`으로 생성된 프로젝트입니다. 현재 `app/page.tsx`, `app/layout.tsx`는 기본 템플릿 그대로이며 아직 커스텀 기능이 추가되지 않은 초기 상태입니다.

## 기술 스택

- Next.js 16.3.0 (App Router)
- React 19.2.8
- TypeScript (strict mode)
- Tailwind CSS v4

## 명령어

- `npm run dev` — 개발 서버 실행 (http://localhost:3000). Next.js 16부터 **Turbopack이 기본 번들러**이므로 별도 플래그 없이 Turbopack으로 동작합니다. Webpack을 쓰려면 `next dev --webpack`.
- `npm run build` — 프로덕션 빌드 (`next build`)
- `npm run start` — 빌드된 앱 실행 (`next start`)
- `npm run lint` — ESLint 실행 (`eslint`)
- 테스트 러너/설정은 아직 없습니다.

## 컴포넌트 규칙

- 기본은 서버 컴포넌트
- `useState`, `useEffect`, 이벤트 핸들러 등이 필요할 때만 파일 최상단에 `'use client'` 추가

## 하지 말 것

- 별도 상태관리 라이브러리(Redux 등) 임의 도입 금지
- Tailwind 외 CSS 방식(styled-components, CSS Modules 등) 임의 도입 금지
- 이유를 설명할 수 없는 라이브러리 추가 금지

## 아키텍처 메모

- App Router 구조(`app/` 디렉터리)를 사용하며, 라우트 파일은 `app/layout.tsx`, `app/page.tsx`에 위치합니다.
- `app/layout.tsx`의 `RootLayout`은 `{ children }: LayoutProps<"/">` 형태의 타입을 사용합니다. 이는 Next.js의 타입이 지정된 라우트(typed routes) props 규칙으로, 이전 버전의 `{ children: React.ReactNode }` 방식과 다릅니다. 새 라우트 세그먼트를 추가할 때는 해당 경로에 맞는 `LayoutProps<"/경로">` / `PageProps<"/경로">` 타입을 사용해야 합니다.
- 스타일링은 Tailwind CSS v4를 `@import "tailwindcss"` + `@theme inline` 방식(`app/globals.css`)으로 설정하며, 별도의 `tailwind.config.js` 파일 없이 CSS 안에서 테마 토큰(`--color-background` 등)을 정의합니다. PostCSS는 `@tailwindcss/postcss` 플러그인만 사용합니다(`postcss.config.mjs`).
- 경로 별칭 `@/*`가 `tsconfig.json`에 설정되어 있어 루트 기준 절대 경로 임포트가 가능합니다.
- ESLint는 flat config(`eslint.config.mjs`)로 `eslint-config-next`의 `core-web-vitals`, `typescript` 규칙 세트를 사용합니다.

## 중요: 이 저장소만의 규칙

`AGENTS.md`(위 `@AGENTS.md`로 포함됨)에 명시된 대로, 이 프로젝트의 Next.js 버전은 학습 데이터 기준과 다른 breaking change를 포함할 수 있습니다. 코드를 작성하기 전에 이 파일의 디렉터리를 기준으로 `node_modules/next/dist/docs/`에 있는 관련 가이드를 반드시 확인하세요(모노레포에서는 `next` 패키지가 루트에서 보이지 않을 수 있으니 주의). deprecation 안내도 반드시 따르세요.
