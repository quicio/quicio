import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// El sitio se publica como project page de quicio/quicio con dominio propio.
// SITE_URL permite construir para un preview sin tocar el dominio canónico.
const site = (process.env.SITE_URL || "https://quicio.org").replace(/\/$/, "");
const base = process.env.BASE_PATH || "/";

export default defineConfig({
  site,
  base,
  trailingSlash: "always",
  build: { format: "directory" },
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/sistema/"),
    }),
  ],
  devToolbar: { enabled: false },
  markdown: {
    shikiConfig: {
      theme: "github-light",
      wrap: true,
    },
  },
});
