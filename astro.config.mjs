import { defineConfig } from 'astro/config';

// 커스텀 도메인(danlab.mju.ac.kr) 기준 설정.
// DNS(CNAME → danlab-mju.github.io) 적용 전까지는
// https://danlab-mju.github.io/danlab-website/ 경로가 깨질 수 있음.
export default defineConfig({
  site: 'https://danlab.mju.ac.kr',
  base: '/',
  trailingSlash: 'ignore',
});
