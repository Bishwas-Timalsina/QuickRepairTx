import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import vercel from '@astrojs/vercel/serverless';


import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap"
// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), sitemap()],
  // output: 'server',
  // adapter: vercel()
});