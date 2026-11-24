#!/usr/bin/env node
/**
 * Verifica enlaces internos del build estático.
 * No hace peticiones de red: comprueba que cada href/src relativo exista en dist/.
 */
import { readdir, readFile, stat } from "node:fs/promises";
import { join, relative } from "node:path";

const DIST = new URL("../dist/", import.meta.url).pathname;
const SITE = "https://quicio.org";

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(path)));
    } else if (entry.isFile()) {
      files.push(path);
    }
  }
  return files;
}

function isIgnored(url) {
  return (
    url.startsWith("http://") ||
    url.startsWith("https://") ||
    url.startsWith("mailto:") ||
    url.startsWith("tel:") ||
    url.startsWith("data:") ||
    url.startsWith("javascript:") ||
    url.startsWith("#")
  );
}

function normalizePath(url) {
  const clean = url.split("#")[0].split("?")[0];
  if (!clean) return null;
  return clean.startsWith("/") ? clean : `/${clean}`;
}

async function exists(path) {
  try {
    const info = await stat(path);
    return info.isFile();
  } catch {
    return false;
  }
}

async function resolveInternal(url, pagePath) {
  const path = normalizePath(url);
  if (!path) return true;

  const candidates = [];
  if (path.endsWith("/")) {
    candidates.push(join(DIST, path, "index.html"));
  } else if (path.includes(".")) {
    candidates.push(join(DIST, path));
  } else {
    candidates.push(join(DIST, path, "index.html"));
    candidates.push(join(DIST, path));
  }

  for (const candidate of candidates) {
    if (await exists(candidate)) return true;
  }

  // Rutas relativas al documento actual.
  if (!url.startsWith("/")) {
    const pageDir = pagePath.replace(/\/[^/]*$/, "/");
    const rel = normalizePath(`${pageDir}${url}`);
    if (rel) return resolveInternal(rel, pagePath);
  }

  return false;
}

const files = (await walk(DIST)).filter((file) => file.endsWith(".html"));
const broken = [];

for (const file of files) {
  const html = await readFile(file, "utf8");
  const pagePath = `/${relative(DIST, file).replace(/index\.html$/, "")}`;
  const matches = html.matchAll(/(?:href|src)="([^"]+)"/g);

  for (const match of matches) {
    const url = match[1];
    if (isIgnored(url)) continue;
    if (url.startsWith("//")) continue;
    if (url.startsWith("/") && url.startsWith("//")) continue;
    // Archivos estáticos que no son rutas del sitio.
    if (url.startsWith("/_astro/")) {
      if (!(await resolveInternal(url, pagePath))) {
        broken.push({ file: relative(DIST, file), url });
      }
      continue;
    }
    if (!(await resolveInternal(url, pagePath))) {
      broken.push({ file: relative(DIST, file), url });
    }
  }
}

if (broken.length) {
  console.error(`\n${broken.length} enlace(s) interno(s) roto(s):\n`);
  for (const item of broken) {
    console.error(`  ${item.file} → ${item.url}`);
  }
  process.exit(1);
}

console.log(
  `Enlaces internos OK: ${files.length} páginas HTML, sin destinos rotos. (${SITE})`,
);
