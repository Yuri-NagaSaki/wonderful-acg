import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://wonderful-acg.catcat.blog',
  vite: {
    plugins: [tailwindcss()],
  },
});
