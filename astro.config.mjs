import { defineConfig } from 'astro/config';

// 배포 전 확인:
// - GitHub Pages(프로젝트 페이지)로 올리면 site/base를 저장소명에 맞게 수정
// - 커스텀 도메인(danlab.mju.ac.kr) 연결 후에는 base: '/' 로 되돌릴 것
export default defineConfig({
  site: 'https://danlab-mju.github.io',
  base: '/danlab-website',
  trailingSlash: 'ignore',
});
