import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://wonderful-acg.catcat.blog',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
