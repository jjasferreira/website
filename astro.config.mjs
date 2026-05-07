import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://jjasferreira.github.io',
  integrations: [svelte()],
  vite: {
    plugins: [tailwindcss()],
  },
});