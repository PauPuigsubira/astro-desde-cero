// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-desde-cero.netlify.app/",

  integrations: [
    preact({ include: ["**/*.jsx"] }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});