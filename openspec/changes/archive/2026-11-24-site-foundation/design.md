# Design

## Contexto

El sitio es una superficie estática de lectura y orientación. No hay autenticación, estado de servidor ni datos privados. Astro genera HTML y CSS; el JavaScript no es necesario para navegar. La identidad se implementa como tokens y componentes reutilizables para que los proyectos del ecosistema puedan compartir gramática sin heredar la interfaz de Quicio.

## Decisiones

### Stack

- Astro 7 en modo estático, content collections con Markdown y CSS propio.
- Fuentes autoalojadas con Fontsource: Instrument Serif para display, Inter Variable para lectura e interfaz, JetBrains Mono Variable para metadatos.
- Sin framework de UI, sin Tailwind y sin dependencias de cliente.
- `@astrojs/sitemap` para sitemap; no se agrega analítica.

### Identidad

- Concepto: **la cámara clara**. Quicio como eje y umbral: el punto donde una puerta empieza a girar.
- Marca: wordmark tipográfico + isotipo de eje vertical con dos arcos de giro. El isotipo se reutiliza como favicon y como marca de agua en placas.
- Paleta fijada por el brief. El ocre se reserva para el pivote, los índices activos y los enlaces; no se usa como fondo extenso.
- Placas SVG generativas: luna, ramificación, red, onda, retícula y apertura. Se generan en build, con semilla determinista, para evitar imágenes de stock.

### Arquitectura

```
src/
  components/    # shell, marca, placas, filas editoriales
  content/       # proyectos, experimentos, archivo, páginas
  data/          # navegación y datos de sitio
  layouts/       # Base.astro
  pages/         # rutas estáticas
  styles/        # tokens.css, base.css
public/          # favicon, OG, CNAME, archivos de archivo
scripts/         # verificación de enlaces
openspec/        # especificaciones y cambios
```

### Rutas

- `/`
- `/proyectos/`
- `/experimentos/` y `/experimentos/[slug]/`
- `/archivo/` y `/archivo/[slug]/`
- `/acerca/`
- `/contacto/`
- `/sistema/`
- `/404.html`

### Riesgos

- La textura y los filtros SVG pueden afectar el rendimiento si se repiten en exceso. Se limitan a la portada y a las placas destacadas; el resto usa geometría simple.
- El dominio `quicio.org` requiere configuración DNS y de GitHub Pages fuera del repositorio. El build debe seguir funcionando con `SITE_URL` de preview.
- Las fuentes autoalojadas aumentan el peso inicial; se cargan solo los subsets latinos necesarios y se precarga la display.

## Alternativas descartadas

- **Página única en HTML:** no permite crecer el archivo ni separar contenido de presentación.
- **Next.js u otro framework React:** añade runtime y complejidad sin necesidad para un sitio editorial estático.
- **Tailwind:** dificulta una identidad tipográfica y editorial específica; el CSS propio mantiene el sistema explícito.
- **Fotografía de stock o imágenes generadas:** no hay archivo fotográfico real y el brief pide recursos con propósito. Las placas SVG son verificables, ligeras y propias.

## Migración

El repositorio `quicio/quicio.github.io` conserva la página anterior. Se copia su HTML a `public/archivo/sitio-2026/original/` como artefacto de archivo y se documenta en la entrada correspondiente. El nuevo sitio vive en `quicio/quicio`, sin modificar el repositorio anterior.
