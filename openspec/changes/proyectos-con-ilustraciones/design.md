# Design

## Context

Ver `proposal.md — Why`. Hoy `ProjectEntry` y `ExperimentRow` dibujan una `ProjectPlate` generativa con una variante y una semilla. El estudio ya tiene arte propio de estos mismos proyectos en el archivo de KNDL: cinco imágenes de proyecto y una de experimento, monocromas, sobre negro, entre 1024² y 1568×672.

Restricciones: el contenido vive en Markdown, los assets en `src/assets`, el sitio no tiene JavaScript de producto y las fichas comparten el marco y el overlay de número.

## Goals / Non-Goals

**Goals:**

- Que una ficha pueda mostrar arte propio sin romper la retícula ni el overlay.
- Conservar la placa generativa como respaldo para los once proyectos sin imagen.
- Documentar la procedencia y mantener el build estático.

**Non-Goals:**

- Producir arte para los proyectos restantes.
- Cambiar la imagen social, el hero o las placas de los proyectos con identidad propia (Intersticio, Rizoma).
- Introducir un CMS, dependencias o un sistema de imágenes externo.

## Decisions

### 1. Imagen opcional en el frontmatter

Se añaden `image` (nombre del archivo) e `imageAlt` (texto alternativo) al esquema de proyectos y experimentos. El componente resuelve el archivo desde `src/assets/proyectos/` o `src/assets/experimentos/` con `import.meta.glob` eager, así una ficha sin imagen no cambia y el contenido sigue siendo Markdown.

- **Por qué:** evita rutas absolutas en el Markdown, permite validar el tipo y mantiene los assets fuera de `src/content`.
- **Alternativa descartada:** deducir la imagen por el slug. Ahorra un campo, pero oculta la decisión y complica el día que un proyecto cambie de arte.

### 2. Mismo marco, misma retícula

La imagen ocupa el contenedor de la placa con `aspect-ratio` heredado (4/3, 4/3.35 o 3/2 según la ficha) y `object-fit: cover; object-position: center`. El número y el estado se mantienen en el mismo lugar: el número pasa a un overlay cuando hay imagen.

- **Por qué:** la ficha no debe cambiar de composición según tenga placa o imagen.
- **Alternativa descartada:** `contain` con fondo negro. Evita el recorte, pero deja bandas y delata el borde del asset.

### 3. Nacre conserva su encuadre

`nacre.jpg` es 1568×672; en una ficha compacta 4/3 se recorta el centro de la onda. Se acepta el recorte porque conserva las dos crestas centrales; si en la revisión pierde lectura, se le da a Nacre un `imagePosition` propio en lugar de deformar la imagen.

### 4. Índice y página del experimento

Umbral Vision usa la misma imagen en `ExperimentRow` y en `experimentos/[slug]`. La fila es estrecha (9rem): la imagen se recorta, pero el número y el estado siguen en el texto, no sobre el arte.

### 5. Rendimiento

Las imágenes se sirven con `astro:assets` en WebP, anchos 480/720/1000 y `sizes` según la ficha; carga diferida salvo en la primera ficha visible. Los JPG originales se guardan como fuente; no se cargan en producción.

### 6. Procedencia

Los seis assets vienen del archivo de KNDL del propio estudio. Se documenta en `docs/contenido.md` y `DESIGN.md`. No se admite arte de stock ni imágenes de terceros sin crédito.

## Risks / Trade-offs

- **Recorte de Nacre** → revisar la ficha compacta; si pierde las crestas, añadir posición propia.
- **Peso** → los JPG suman ~2 MB en el repo; el build genera variantes. Medir el LCP de `/proyectos/`.
- **Identidad KNDL** → el arte es nocturno y monocromo; convive con la placa oscura, pero no debe extenderse al hero ni a la imagen social sin una decisión aparte.
- **Derechos** → el fundador autoriza el uso del archivo del estudio; queda documentado. Si algún día se publica arte de terceros, hará falta crédito y permiso.
- **Experimento sin página** → Umbral Vision tiene página propia; el componente debe cubrir ambos casos.

## Migration Plan

1. Copiar los seis assets y documentar su origen.
2. Ampliar el esquema y resolver el glob.
3. Renderizar imagen o placa en las fichas y en la página del experimento.
4. Añadir frontmatter a los cinco proyectos y al experimento.
5. Capturas, contraste, responsive y `npm run verify`.

Rollback: los assets y los campos son opcionales; quitar los campos del frontmatter devuelve las placas sin tocar componentes.
