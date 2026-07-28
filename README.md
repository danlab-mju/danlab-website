# DAN Lab Website

Distributed AI and Networked Robotics Lab @ Myongji University 공식 홈페이지.
Astro 정적 사이트 + GitHub Pages 자동 배포.

## 로컬 실행

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ 에 정적 파일 생성
```

## 콘텐츠 관리 (학생용 가이드)

- **논문 추가**: `src/content/publications/`에 `.md` 파일 생성
  ```yaml
  ---
  title: "논문 제목"
  authors: "저자1, 저자2, Hyunhee Park"
  venue: "IEEE Access"
  year: 2026
  type: journal          # journal | conference
  pillar: distributed-ai # distributed-ai | networked-robotics | on-device (선택)
  note: "NRF No. ..."    # 과제번호 (선택)
  link: "https://..."    # DOI 링크 (선택)
  ---
  ```
- **뉴스 추가**: `src/content/news/`에 `.md` 파일 생성 (`date`, `sort`(YYYYMM), `body`)
- **수상 추가**: `src/pages/awards.astro` 상단 배열에 항목 추가
- **멤버 수정**: `src/pages/team.astro` 상단 배열 수정. 사진은 `public/team/<slug>.jpg`
- **사진 추가**: `public/photos/`에 이미지 넣고 `src/data/photos.json`에 항목 추가
  (기존 Google Sites 사진 원본 백업: `[홈페이지]/photos-backup/`)
- **영상 추가**: `src/pages/media.astro` 상단 배열에 YouTube ID 추가

main 브랜치에 push하면 GitHub Actions가 자동으로 빌드·배포합니다.

## 최초 배포 절차

1. GitHub에 새 저장소 생성 (예: `danlab-mju/danlab-website`)
2. 이 폴더를 push
3. 저장소 Settings → Pages → Source를 **GitHub Actions**로 설정
4. push하면 `https://<계정명>.github.io/danlab-website/` 로 배포됨
   - 프로젝트 페이지로 쓸 경우 `astro.config.mjs`에 `base: '/danlab-website'` 추가 필요

## 커스텀 도메인 (danlab.mju.ac.kr) 연결

1. `public/CNAME` 파일 생성, 내용은 `danlab.mju.ac.kr` 한 줄
2. 저장소 Settings → Pages → Custom domain에 `danlab.mju.ac.kr` 입력
3. **명지대 전산팀에 DNS 변경 요청**: `danlab.mju.ac.kr`의 CNAME 레코드를
   `<계정명>.github.io` 로 변경 요청 (현재 Google Sites로 연결되어 있음)
4. 적용 후 `astro.config.mjs`의 `site`를 확인하고 `base`는 `'/'`로

## 남은 작업 (TODO)

- [x] Team 페이지: 멤버 사진, 연구 주제, 개인 링크 채우기 (2026.07)
- [x] Publications: 학회논문(conference) 목록 이관 — 2018–2026, 78편 (2026.07)
- [x] 과거 뉴스(2024 이전) 이관 — 수상 5건, awards 페이지에도 반영 (2026.07)
- [x] Photos 페이지 — 기존 사이트 91장 백업(`[홈페이지]/photos-backup/`) 후 89장 게시 (2026.07)
- [x] Media: 연구실 결산 영상 3편 + 데모 5편 + 소개 기사 2건 (2026.07)
- [x] OG 이미지 — `public/og.png`, Base 레이아웃에 메타태그 추가 (2026.07)
- [ ] 김덕중·김영훈 박사과정: 연구 주제·사진 (기존 사이트에도 정보 없음 — 본인 확인 필요)
- [ ] 기존 사이트 사진 1장 다운로드 실패(403) — 필요 시 수동 백업
