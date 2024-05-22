import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  // configFile: './custom-config.mjs',
  site: "https://example.com",
  integrations: [preact(), react(), tailwind()],
  output: "server",
  adapter: netlify()
});