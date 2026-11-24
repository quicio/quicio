import type { ImageMetadata } from "astro";

const projectImages = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/proyectos/*.{jpg,jpeg,png,webp}",
  { eager: true },
);

const experimentImages = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/experimentos/*.{jpg,jpeg,png,webp}",
  { eager: true },
);

export function getProjectImage(name?: string) {
  if (!name) return undefined;
  return projectImages[`/src/assets/proyectos/${name}`]?.default;
}

export function getExperimentImage(name?: string) {
  if (!name) return undefined;
  return experimentImages[`/src/assets/experimentos/${name}`]?.default;
}
