export const sitio = {
  nombre: "Quicio",
  descriptor: "Estudio independiente",
  frase: "Investigar, imaginar, construir.",
  descripcion:
    "Quicio es un estudio independiente dedicado a la investigación, la creación y el desarrollo de proyectos interdisciplinarios.",
  email: "hello@quicio.org",
  github: "https://github.com/quicio",
  lugar: "Santiago de Chile",
  coordenadas: "33.45° S / 70.66° O",
  anio: "2026",
  colofon:
    "Instrument Serif, Archivo y JetBrains Mono. Papel marfil, tinta carbón y una señal de ocre.",
} as const;

export const navegacion = [
  { label: "Proyectos", href: "/proyectos/" },
  { label: "Experimentos", href: "/experimentos/" },
  { label: "Archivo", href: "/archivo/" },
  { label: "Acerca", href: "/acerca/" },
] as const;

export const disciplinas = [
  "Software",
  "Publicaciones",
  "Investigación",
  "Arte",
  "Música",
  "Experimentación",
] as const;

export const correoAsuntos = [
  {
    label: "Colaboración",
    asunto: "Colaboración con Quicio",
    descripcion:
      "Una idea, una práctica o un proyecto que podría crecer en diálogo con el estudio.",
  },
  {
    label: "Proyecto",
    asunto: "Propuesta de proyecto",
    descripcion:
      "Una investigación, una publicación, una herramienta o una obra que busca un espacio.",
  },
  {
    label: "Conversación",
    asunto: "Conversación",
    descripcion:
      "Una pregunta, una referencia o una conversación que todavía no tiene forma.",
  },
] as const;
