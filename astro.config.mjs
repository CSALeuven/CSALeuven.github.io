import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { readdirSync, readFileSync } from 'node:fs';
// Translation files use the same JSON-compatible YAML frontmatter as the source collection.
const translationsRoot = new URL('./src/content/knowledge-translations/', import.meta.url);
const translatedKeys = new Set(readdirSync(translationsRoot, { recursive: true }).filter(p=>String(p).endsWith('.md')).map(p=>JSON.parse(readFileSync(new URL(String(p).replaceAll('\\','/'),translationsRoot),'utf8').split('---')[1]).key));

export default defineConfig({
  site: 'https://csaleuven.github.io',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => {
    const article=page.match(/\/en\/new-students\/([^/]+\/[^/]+)\//);
    return !page.includes('/sample-') && (!article || translatedKeys.has(article[1]));
  } })],
  vite: { plugins: [tailwindcss()] },
  devToolbar: { enabled: false },
});
