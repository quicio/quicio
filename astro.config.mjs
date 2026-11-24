import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// El sitio se publica como project page de quicio/quicio (base /quicio)
// y, cuando el dominio propio esté configurado, en la raíz (base /).
const site = (process.env.SITE_URL || "https://quicio.org").replace(/\/$/, "");
const base = process.env.BASE_PATH || "/";
const basePrefix = base.replace(/\/$/, "");

// Prefija los enlaces internos escritos en Markdown con el base path.
// Los componentes Astro usan src/lib/url.ts.
function rehypeBaseLinks() {
  return (tree) => {
    const walk = (node) => {
      if (
        node.type === "element" &&
        node.tagName === "a" &&
        typeof node.properties?.href === "string" &&
        node.properties.href.startsWith("/") &&
        !node.properties.href.startsWith("//")
      ) {
        node.properties.href = `${basePrefix}${node.properties.href}`;
      }
      node.children?.forEach(walk);
    };
    walk(tree);
  };
}

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
  markdown: {
    rehypePlugins: [rehypeBaseLinks],
    shikiConfig: {
      theme: "github-light",
      wrap: true,
    },
  },
  devToolbar: { enabled: false },
});
