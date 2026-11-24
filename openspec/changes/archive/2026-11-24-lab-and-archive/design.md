# Design

## Contexto

Experimentos y Archivo comparten la lógica de registro editorial: filas, numeración, estados y páginas de lectura. Se separan porque tienen propósitos distintos: el laboratorio mira lo que está abierto; el archivo mira lo que ya ocurrió.

## Decisiones

### Experimentos

- Colección `experimentos` con frontmatter tipado.
- Índice con filas editoriales y placa pequeña, sin tarjetas.
- Página de detalle con placa grande, metadatos en mono, cuerpo Markdown y navegación al proyecto relacionado.
- Entradas iniciales: Umbral Vision (visuales generativos), Numina / Mochi (prototipo privado), Presentation (lenguaje declarativo de interfaces).
- Los prototipos privados se presentan sin enlace y con estado explícito.

### Archivo

- Colección `archivo` con frontmatter tipado.
- Índice en forma de tabla editorial: año, título, tipo, estado.
- Página de detalle con cuerpo Markdown y enlace al artefacto cuando exista.
- Primera entrada: el sitio de organización de 2026. Se copia su HTML a `public/archivo/sitio-2026/original/index.html`, se ajustan canonical y enlaces absolutos y se sirve como documento aislado.
- El resto del archivo se incorpora cuando el fundador entregue el relato; la página declara ese estado sin inventar contenido.

### Riesgos

- Un artefacto HTML antiguo puede tener enlaces externos o fuentes de terceros. Se conserva como documento histórico, no como parte del shell; se documenta su procedencia.
- El archivo puede quedar corto al lanzamiento. Es preferible a una historia falsa.

## Alternativas descartadas

- **Un solo listado mezclando experimentos y archivo:** confunde proceso con historia.
- **Iframe del sitio anterior:** añade fragilidad y dependencia de un origen externo; se copia el artefacto.
- **Entradas inventadas para completar el archivo:** viola la verdad editorial del proyecto.
