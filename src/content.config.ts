import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const plate = z.enum([
  "semina",
  "rizoma",
  "intersticio",
  "orbit",
  "branch",
  "network",
  "wave",
  "grid",
  "aperture",
]);

const proyectos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/proyectos" }),
  schema: z.object({
    title: z.string(),
    descriptor: z.string(),
    summary: z.string(),
    group: z.enum(["editorial", "instrumentos", "herramientas"]),
    order: z.number(),
    disciplines: z.array(z.string()).min(1),
    status: z.string(),
    year: z.string().optional(),
    relation: z.string(),
    link: z.union([z.string().url(), z.string().startsWith("/")]).optional(),
    linkLabel: z.string().default("Abrir proyecto"),
    repo: z.string().url().optional(),
    plate: plate.default("orbit"),
    seed: z.number().default(1),
    featured: z.boolean().default(false),
    publicSurface: z.boolean().default(true),
  }),
});

const experimentos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/experimentos" }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    year: z.string(),
    type: z.string(),
    status: z.enum([
      "En curso",
      "Prototipo",
      "En pausa",
      "Cerrado",
      "Derivado",
    ]),
    summary: z.string(),
    relation: z.string().optional(),
    link: z.union([z.string().url(), z.string().startsWith("/")]).optional(),
    linkLabel: z.string().default("Ver prototipo"),
    plate: plate.default("wave"),
    seed: z.number().default(1),
  }),
});

const archivo = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/archivo" }),
  schema: z.object({
    title: z.string(),
    year: z.string(),
    kind: z.string(),
    state: z.string(),
    summary: z.string(),
    order: z.number(),
    link: z.union([z.string().url(), z.string().startsWith("/")]).optional(),
    linkLabel: z.string().default("Ver artefacto"),
    artifact: z.string().optional(),
    plate: plate.default("aperture"),
    seed: z.number().default(1),
  }),
});

const paginas = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/paginas" }),
  schema: z.object({
    title: z.string(),
    eyebrow: z.string().optional(),
    lead: z.string().optional(),
    intro: z.string().optional(),
    description: z.string().optional(),
    manifesto: z.string().optional(),
    principles: z
      .array(z.object({ title: z.string(), text: z.string() }))
      .default([]),
    sections: z
      .array(z.object({ title: z.string(), body: z.string() }))
      .default([]),
    email: z.string().email().optional(),
  }),
});

export const collections = { proyectos, experimentos, archivo, paginas };
