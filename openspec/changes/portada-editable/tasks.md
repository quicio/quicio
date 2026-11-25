# Tasks

## 1. Esquema y contenido

- [x] 1.1 Añadir `homeSections` al esquema de `paginas` con `id` cerrado, `active` y los campos de copia; verificar con `npm run check`. — Verificado: `npm run check` sin errores.
- [x] 1.2 Volcar la copia actual de las seis secciones en `homeSections` de `src/content/paginas/inicio.md`; verificar que el texto renderizado es idéntico al anterior. — Verificado: el build conserva los seis títulos, notas y enlaces.

## 2. Componentes

- [x] 2.1 Crear `src/components/home/Manifesto.astro` con cita, intro y su CSS; verificar que la sección 01 se ve igual. — Verificado: `home-manifesto-editable.png`.
- [x] 2.2 Crear `Projects.astro` con `SectionHeading`, la retícula y sus reglas responsive; verificar que los destacados siguen igual. — Verificado: sección 02 y portada sin cambios visuales.
- [x] 2.3 Crear `Field.astro` con principios, aside y estilos de superficie oscura; verificar la sección 03. — Verificado: `home-campo-editable.png` y `home-field-390.png`.
- [x] 2.4 Crear `Experiments.astro`, `Archive.astro` y `Contact.astro` con sus notas, enlaces y estilos; verificar las secciones 04–06. — Verificado: `home-contacto-editable.png`.
- [x] 2.5 Mover `.section-note` a `src/styles/base.css` y verificar que las notas de sección no pierden estilo. — Verificado: notas de proyectos, experimentos y archivo con el mismo estilo.

## 3. Portada

- [x] 3.1 Sustituir en `index.astro` el marcado de las seis secciones por el registro y el mapeo de `homeSections`; verificar que el HTML final conserva los seis bloques en orden. — Verificado: `dist/index.html` con `manifiesto`, `proyectos`, `campo`, `experimentos`, `archivo` y `contacto`.
- [x] 3.2 Probar reordenar una sección y ocultar otra con `active: false`; verificar que la numeración visible se recalcula y no hay huecos. — Verificado: con experimentos en segunda posición y archivo oculto, el orden fue 01 manifiesto, 02 experimentos, 03 proyectos, 04 campo, 05 contacto.
- [x] 3.3 Verificar que los anclajes (`id`) y `aria-labelledby` se generan desde el id de cada sección. — Verificado: los seis `section` exponen su id y el `aria-labelledby` apunta a `<id>-title`.

## 4. Documentación

- [x] 4.1 Documentar la lista, los campos, el orden y `active` en `docs/contenido.md`; verificar el ejemplo YAML. — Verificado: sección «Portada» con ejemplo y tabla de campos.
- [x] 4.2 Añadir una nota de composición editable en `DESIGN.md`; verificar que no se promete un CMS. — Verificado: «Secciones de portada».

## 5. Verificación e integración

- [x] 5.1 Capturar la portada a 1536 y 390 y comparar con el estado anterior; verificar que no hay regresiones visuales. — Verificado: `home-manifesto-editable.png`, `home-campo-editable.png`, `home-contacto-editable.png`, `home-390-editable.png`, `home-field-390.png`; sin scroll horizontal a 390.
- [x] 5.2 Ejecutar `npm run verify` y comprobar tipos, build y enlaces. — Verificado: `npm run verify` completo.

## Workflow follow-up

- Archivar el cambio cuando la revisión esté aprobada.
