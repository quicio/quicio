import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL;
  const origin = (site ?? new URL("https://quicio.org")).href.replace(
    /\/$/,
    "",
  );
  const sitemap = `${origin}${base}sitemap-index.xml`;

  return new Response(
    `User-agent: *\nAllow: /\nDisallow: ${base}sistema/\n\nSitemap: ${sitemap}\n`,
    {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    },
  );
};
