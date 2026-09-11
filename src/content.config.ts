import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { categories } from './data/knowledge';

const common = z.object({
  lang: z.enum(['zh', 'en']),
  key: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  title: z.string(), summary: z.string(),
  draft: z.boolean().default(false),
});
const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: common.extend({
    titleOther: z.string(), category: z.string(),
    date: z.coerce.date().optional(), endDate: z.coerce.date().optional(),
    location: z.string(), address: z.string().optional(),
    coverImage: z.string().optional(), coverAlt: z.string().optional(),
    registrationUrl: z.url().optional(), featured: z.boolean().default(false),
    status: z.enum(['sample', 'upcoming', 'past', 'cancelled']),
    order: z.number().default(0),
  }).refine(e => e.status === 'sample' || !!e.date, { message: 'Confirmed events require a date with a timezone.' })
    .refine(e => !e.endDate || !e.date || e.endDate >= e.date, { message: 'Event endDate must not precede date.' })
    .refine(e => e.status !== 'sample' || !e.registrationUrl, { message: 'Sample events must not accept registration.' }),
});
const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: common.extend({
    category: z.enum(['new-students', 'leuven-guide']),
    label: z.string(), order: z.number(),
    reviewed: z.coerce.date(),
    sources: z.array(z.object({ label: z.string(), url: z.url() })).min(1),
  }),
});
const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: common.extend({ date: z.coerce.date(), category: z.string(), sample: z.boolean().default(false) }),
});
const knowledge = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/knowledge' }),
  schema: z.object({
    key: z.string().regex(/^[a-z-]+\/[a-z0-9-]+$/),
    titleZh: z.string(), titleEn: z.string(), descriptionZh: z.string(), descriptionEn: z.string(),
    category: z.string().refine(value => categories.some(c => c.key === value), 'Unknown knowledge category'),
    order: z.number().default(0), aliases: z.array(z.string()).default([]), quickAnswer: z.string(),
    sourceTitle: z.string().default('鲁汶学联新生手册 2024'), sourceYear: z.literal(2024),
    sourceChapter: z.string(), sourceSection: z.string(), sourcePages: z.array(z.number().int().min(1).max(35)).min(1),
    reviewStatus: z.enum(['legacy-2024', 'reviewed', 'partially-reviewed', 'needs-verification']),
    lastReviewed: z.coerce.date().nullable().optional(), timeSensitive: z.boolean(),
    officialSources: z.array(z.object({ label: z.string(), url: z.url() })).default([]),
    related: z.array(z.string()).min(1), draft: z.boolean().default(false),
  }).refine(a => a.key.startsWith(a.category + '/'), 'Key must start with category')
    .refine(a => a.reviewStatus !== 'reviewed' || !!a.lastReviewed, 'Reviewed articles require lastReviewed'),
});
const knowledgeTranslations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/knowledge-translations' }),
  schema: z.object({ key: z.string(), lang: z.literal('en'), quickAnswer: z.string(), lastReviewed: z.coerce.date(), reviewer: z.string().min(1) }),
});
export const collections = { events, guides, news, knowledge, knowledgeTranslations };
