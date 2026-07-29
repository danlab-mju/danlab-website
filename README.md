# DAN Lab Website

Distributed AI and Networked Robotics Lab @ Myongji University 공식 홈페이지.

- **저장소**: https://github.com/danlab-mju/danlab-website
- **배포 주소**: https://danlab-mju.github.io/danlab-website/ (추후 danlab.mju.ac.kr 연결 예정)
- Astro 정적 사이트 · main 브랜치에 push하면 GitHub Actions가 1분 내 자동 빌드·배포

## 참여 방법 (학생용)

1. GitHub 계정을 만들고 교수님께 알려주면 `danlab-mju` 조직에 초대됩니다.
2. 간단한 수정은 GitHub 웹에서 바로: 파일 열기 → 연필 아이콘 → 수정 → **Commit changes**.
   커밋하면 자동으로 배포됩니다 (반영까지 1–2분 + 브라우저 캐시 최대 10분).
3. 큰 수정은 로컬에서:

```bash
git clone https://github.com/danlab-mju/danlab-website.git
cd danlab-website
npm install
npm run dev      # http://localhost:4321/danlab-website/
```

## 콘텐츠 관리

- **논문 추가**: `src/content/publications/`에 `.md` 파일 하나 생성
  ```yaml
  ---
  title: "논문 제목"
  authors: "저자1, 저자2, Hyunhee Park"
  venue: "IEEE Access"
  year: 2026
  type: journal          # journal | conference | submitted(심사 중)
  pillar: distributed-ai # distributed-ai | networked-robotics | on-device (선택)
  note: "Under review · SCI · submitted July 2026"  # 상태·과제번호 등 (선택)
  link: "https://..."    # DOI 링크 (선택)
  ---
  ```
  심사 중 논문이 게재 확정되면 `type: submitted`를 `journal`로 바꾸고 note만 수정하면 됩니다.
- **뉴스 추가**: `src/content/news/`에 `.md` 파일 생성 — `date`("2026.07"), `sort`(202607), `body`(한글), `en`(영문 병기, 선택)
- **수상 추가**: `src/pages/awards.astro` 상단 `awards` 배열에 항목 추가.
  수상 사진은 `public/awards/`에 넣고 같은 파일의 `photos` 배열에 추가
- **멤버 수정**: `src/pages/team.astro` 상단 배열(phd/ms/alumni) 수정. 사진은 `public/team/<slug>.jpg` (3:4 비율 권장)
- **교수님 프로필**: `src/pages/professor.astro` (경력·활동) + `src/data/professor.json` (표준화 기고·특허)
- **연구과제 추가**: `src/pages/research.astro` 상단 `ongoing`/`completed` 배열 (한글 title + 영문 en)
- **사진 추가**: `public/photos/`에 이미지 넣고 `src/data/photos.json`에 항목 추가
- **영상 추가**: `src/pages/media.astro` 상단 배열에 YouTube ID 추가
- **블랙샌드랩스 페이지**: `src/pages/blacksand.astro`

## 디자인 규칙

- 팔레트: 미색 종이 `#f2f1eb` · 잉크 `#121210` · 파랑 `#1d39f5` 한 가지 포인트 (`src/styles/global.css` 상단 토큰)
- 서체: Geist(영문) · Pretendard(한글) · Geist Mono(라벨)
- 섹션 라벨은 `<span class="eyebrow"><i>01</i> / Name</span>`, 버튼·링크는 `[ 대괄호 ]` 모티프

## 커스텀 도메인 (danlab.mju.ac.kr) 연결 절차

1. **명지대 전산원에 DNS 변경 요청**: `danlab.mju.ac.kr`의 CNAME 레코드를
   `ghs.googlehosted.com`(현 Google Sites) → `danlab-mju.github.io` 로 변경
2. DNS 적용 확인 후 저장소에서:
   - `public/CNAME` 파일 생성 (내용: `danlab.mju.ac.kr` 한 줄)
   - Settings → Pages → Custom domain에 `danlab.mju.ac.kr` 입력, Enforce HTTPS 체크
   - `astro.config.mjs`: `site: 'https://danlab.mju.ac.kr'`, `base` 제거(`'/'`)
3. HTTPS 인증서는 GitHub이 자동 발급 (수 분–수 시간)

## 남은 작업 (TODO)

- [ ] danlab.mju.ac.kr 도메인 연결 (전산원 DNS 요청 후 위 절차 진행)
- [ ] `public/og.png` — 새 디자인 팔레트로 교체
- [ ] 김덕중·김영훈 박사과정: 연구 주제·사진 (본인 확인 필요)
- [ ] 수상 사진 6장 추가 확보 (김서현 최우수논문상, 메타버스 경진대회 등 — 기존 사이트에서 다운로드 불가했던 사진)
