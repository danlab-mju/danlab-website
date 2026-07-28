import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    venue: z.string(),
    year: z.number(),
    type: z.enum(['journal', 'conference', 'submitted']).default('journal'),
    pillar: z.enum(['distributed-ai', 'networked-robotics', 'on-device']).optional(),
    note: z.string().optional(),
    link: z.string().optional(),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    date: z.string(), // YYYY.MM 표기 그대로 사용
    sort: z.number(), // 정렬 키 (YYYYMM)
    body: z.string(),
    en: z.string().optional(), // 영문 병기 (해외 방문자용)
  }),
});

export const collections = { publications, news };
