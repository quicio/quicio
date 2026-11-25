# Tasks

## 1. Assets

- [x] 1.1 Copiar `semina.jpg`, `nacre.jpg`, `parametrica.jpg`, `candil.jpg` y `espiral.jpg` a `src/assets/proyectos/`, y `umbral-vision.jpg` a `src/assets/experimentos/`; verificar dimensiones y que los nombres sean cortos. — Verificado: 5 JPG en `src/assets/proyectos/` y 1 en `src/assets/experimentos/`; 1024² salvo Nacre 1568×672.
- [x] 1.2 Documentar en `DESIGN.md` y `docs/contenido.md` que el arte procede del archivo del estudio y que no se admite stock. — Verificado: secciones «Placas e imágenes de proyecto» y reglas de contenido.

## 2. Esquema

- [x] 2.1 Añadir `image` e `imageAlt` opcionales a los esquemas de proyectos y experimentos en `src/content.config.ts`; verificar con `npm run check`. — Verificado: `npm run check` sin errores.
- [x] 2.2 Resolver las imágenes desde `src/assets/` con `import.meta.glob` en `src/lib/content-image.ts`; verificar que una ficha sin imagen devuelve `undefined`. — Verificado: Rizoma y Cátodo conservan la placa.

## 3. Componentes

- [x] 3.1 Crear `EntryImage.astro` con `object-fit: cover`, anchos responsive y carga diferida; verificar que el build genera WebP. — Verificado: variantes 240/480 para compactas y 480/720/1000 para destacadas.
- [x] 3.2 Renderizar imagen o placa en `ProjectEntry.astro`, conservando número y estado; verificar que los cinco proyectos muestran arte y el resto conserva la placa. — Verificado: Semina, Nacre, Paramétrica, Candil y Espiral con imagen; el resto con placa.
- [x] 3.3 Renderizar imagen o placa en `ExperimentRow.astro` y en `experimentos/[slug].astro`; verificar que Umbral Vision usa la misma imagen en índice y página. — Verificado: misma nebulosa en la fila de 9rem y en la cabecera de la página.

## 4. Contenido

- [x] 4.1 Añadir `image` e `imageAlt` a Semina, Nacre, Paramétrica, Candil y Espiral; verificar que cada alt describe el arte. — Verificado: cinco frontmatter con alt descriptivo.
- [x] 4.2 Añadir `image` e `imageAlt` a Umbral Vision; verificar que se ve en `/experimentos/` y en su página. — Verificado: fila y página con la misma imagen y carga `eager` en la página.

## 5. Documentación

- [x] 5.1 Documentar el campo opcional y el respaldo de placa en `docs/contenido.md`; verificar el ejemplo YAML. — Verificado: ejemplos de proyectos y experimentos con `image`/`imageAlt`.
- [x] 5.2 Actualizar `DESIGN.md` (placas e imágenes de proyecto) y registrar la procedencia; verificar que no se presenta como stock. — Verificado: sección «Placas e imágenes de proyecto» con procedencia del archivo del estudio.

## 6. Verificación e integración

- [x] 6.1 Capturar `/proyectos/` y `/experimentos/` a 1536 y 390, y revisar recortes, número y estado; guardar en `.impeccable/review/`. — Verificado: `proyectos-top.png`, `proyectos-instr2.png`, `proyectos-nacre.png`, `experimentos-img2.png`, `umbral-page.png`, `proyectos-390.png`, `umbral-390.png`.
- [x] 6.2 Comprobar que las fichas sin imagen siguen usando la placa y que no hay scroll horizontal a 360, 390, 768, 1024, 1440 y 1920. — Verificado: `scrollWidth === innerWidth` en todos; Rizoma y Cátodo con placa.
- [x] 6.3 Ejecutar `npm run verify` y la auditoría de contraste/legibilidad sobre las imágenes; registrar hallazgos en `docs/backlog-diseno.md` si aparecen. — Verificado: `npm run verify` completo; sin hallazgos nuevos de contraste.

## Workflow follow-up

- Revisar las capturas y el recorte de Nacre antes de archivar.
- Archivar el cambio cuando la revisión esté aprobada.
