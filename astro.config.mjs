import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";

import analogjsangular from "@analogjs/astro-angular";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [preact(), analogjsangular()]
});