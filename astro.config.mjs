import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

const src = (path) => fileURLToPath(new URL(`./src/${path}`, import.meta.url));

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@assets': src('assets'),
        '@components': src('components'),
        '@data': src('data'),
        '@layouts': src('layouts'),
        '@styles': src('styles'),
        '@types': src('types'),
        '@utils': src('utils'),
      }
    }
  }
});
