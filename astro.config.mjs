import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';
//import i18next from 'astro-i18next';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()/*,
    i18next({
      defaultLocale: 'es',
      locales: ['es', 'en'],
      loadLocaleFrom: './src/locales'

    })*/
  ]
});