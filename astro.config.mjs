import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import i18next from 'astro-i18next';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(),
    i18next({
      defaultLocale: 'es',
      locales: ['es', 'en'],
      loadLocaleFrom: './src/locales'

    })
  ]
});