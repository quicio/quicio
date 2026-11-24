/**
 * Prefija una ruta interna con el base path de Astro.
 * En GitHub Pages como project page el base es `/quicio/`; en el dominio
 * propio es `/`. Las URLs externas, los hashes y los correos no se tocan.
 */
const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export function url(path: string): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  return `${base}${path}` || "/";
}
