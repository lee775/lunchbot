# 오늘 뭐 먹지? (lunchbot)

> 버튼 한 번으로 점심 메뉴를 골라 주는 Expo(React Native) 랜덤 메뉴 선택 앱

## 소개

- 매일 반복되는 "점심 뭐 먹지?" 고민을 덜기 위한 간단한 메뉴 추천 앱
- 한식 · 중식 · 일식 · 양식 · 분식 등 **117개 메뉴** 중 하나를 무작위로 선택
- Expo 기반으로 하나의 코드로 Android · iOS · 웹에서 실행, EAS Build로 Android APK 빌드 구성

## 주요 기능

- **랜덤 메뉴 선택**: "랜덤 선택!" 버튼을 누르면 메뉴 하나를 추천
- **룰렛 연출**: 결과가 나오기 전 0.1초 간격으로 메뉴 이름이 15번 빠르게 바뀌는 셔플 효과
- **중복 실행 방지**: 선택이 진행되는 동안 버튼 비활성화 및 "선택 중..." 표시
- **다크 테마 UI**: 다크 배경 위 강조색 카드와 버튼, 전체 메뉴 개수 표시

## 핵심 구현

- [`App.js`](App.js) 한 파일에 메뉴 데이터, 선택 로직, 화면을 구성
  - `MENU_LIST`: 원본 메뉴 목록([`1.txt`](1.txt))에서 중복 항목을 제거해 배열로 정의
  - `pickRandomMenu`: `setInterval`로 100ms마다 임의 메뉴를 표시하고, 15회 후 타이머를 정리한 뒤 최종 메뉴 확정
  - `isSpinning` 상태로 버튼 비활성화와 결과 텍스트 스타일 전환을 함께 제어
- [`app.json`](app.json): 앱 이름 · 세로 고정 · 다크 UI · 스플래시/아이콘 · Android 패키지명 설정, React Native New Architecture 활성화
- [`eas.json`](eas.json): `preview` 프로필은 APK, `production` 프로필은 AAB(App Bundle)로 빌드

## 기술 스택

- React Native 0.81, React 19
- Expo SDK 54 (`expo-status-bar`), React Native Web
- EAS Build (Android APK / AAB)

## 프로젝트 구조

```
lunchbot/
├─ index.js      # 앱 진입점 (registerRootComponent)
├─ App.js        # 메뉴 데이터 · 랜덤 선택 로직 · UI
├─ 1.txt         # 원본 메뉴 목록
├─ app.json      # Expo 앱 설정
├─ eas.json      # EAS Build 프로필
└─ assets/       # 아이콘 · 스플래시 이미지
```

## 실행 방법

```bash
npm install

npm start          # Expo 개발 서버 (Expo Go 앱으로 QR 스캔)
npm run android    # Android
npm run ios        # iOS (macOS 필요)
npm run web        # 웹 브라우저
```

Android APK 빌드 (Expo 계정 로그인 필요):

```bash
npx eas build -p android --profile preview
```

- 별도의 환경 변수나 API 키는 필요하지 않습니다.

## 개발 기간

- 2026-01-16 (1일, 개인 프로젝트)
