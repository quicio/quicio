import type { CollectionEntry } from "astro:content";

export type HomeSection =
  CollectionEntry<"paginas">["data"]["homeSections"][number];
