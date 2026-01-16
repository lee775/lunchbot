# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

"오늘 뭐 먹지?" - 랜덤 메뉴 선택 앱 (Expo/React Native)

## Commands

```bash
# 개발 서버 시작
npm start

# 플랫폼별 실행
npm run android    # Android
npm run ios        # iOS (macOS 필요)
npm run web        # 웹 브라우저
```

## Architecture

- **App.js**: 메인 앱 컴포넌트 (메뉴 리스트, 랜덤 선택 로직, UI)
- **1.txt**: 원본 메뉴 데이터 (참고용)

## Key Features

- 118개 한식/양식/일식/중식 메뉴
- 룰렛 효과 애니메이션 (15회 빠른 전환 후 최종 선택)
- 다크 테마 UI
