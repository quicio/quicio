# Design

## Context

Ver `proposal.md — Why`. `src/pages/index.astro` contiene hoy el marcado y la copia de las seis secciones: manifiesto, proyectos, campo abierto, experimentos, archivo y contacto. El manifiesto ya lee la cita y el cuerpo de `inicio.md`; el resto está hardcodeado. Los datos de proyectos, experimentos y archivo ya viven en colecciones.

## Goals / Non-Goals

**Goals:**

- Mover toda la copia de las seis secciones a `inicio.md`.
- Editar textos, enlaces, orden y visibilidad sin tocar componentes.
- Conservar la composición, la numeración, los anclajes y los datos de colecciones.

**Non-Goals:**

- Los textos del hero.
- Un CMS o una interfaz de edición.
- Nuevos tipos de sección: añadir uno sigue exigiendo un componente y una entrada en el registro.

## Decisions

### 1. Lista `homeSections` en `inicio.md`

Cada sección se declara como un objeto tipado en el frontmatter de la página:

```yaml
homeSections:
  - id: proyectos
    label: Proyectos
    title: Un ecosistema de proyectos.
    note: Cada proyecto conserva su voz…
    linkLabel: Todos los proyectos
    linkHref: /proyectos/
```

Campos: `id` (enum cerrado), `active` (por defecto `true`), `label`, `title`, `note`, `text`, `footnote`, `linkLabel`, `linkHref`, y para campo abierto `principlesLabel`, `aside`, `asideLinkLabel`, `asideLinkHref`. El esquema Zod valida y el editor solo cambia valores.

- **Por qué:** el contenido institucional ya vive en Markdown; la portada no debía ser la excepción.
- **Alternativa descartada:** un `src/data/inicio.ts`. Es código; el resto de la copia institucional vive en `src/content/`.

### 2. Componentes de sección y registro

Los seis bloques pasan a `src/components/home/` (`Manifesto`, `Projects`, `Field`, `Experiments`, `Archive`, `Contact`). `index.astro` conserva el hero y mapea:

```astro
{seccionesFiltradas.map((seccion, i) => {
  const Seccion = registro[seccion.id];
  return <Seccion seccion={seccion} numero={String(i + 1).padStart(2, "0")} />;
})}
```

Cada componente carga sus datos: colecciones de proyectos/experimentos/archivo, `acerca` para los principios, `sitio` para el correo. El registro es la única lista de tipos disponibles.

### 3. Numeración, ids y anclajes

El número sale de la posición visible, no de un literal. Cada sección conserva un `id` estable (`manifiesto`, `proyectos`, `campo`, `experimentos`, `archivo`, `contacto`) y el `aria-labelledby` se deriva de él. Ocultar una sección cierra la numeración; reordenar la recalcula. Los enlaces de navegación apuntan a páginas, no a anclas internas de la portada, así que ocultar no rompe el menú.

### 4. Copia y HTML controlado

`title` admite HTML mínimo (el `Quicio no es el edificio.<br />Es el quicio.`) y se renderiza con `set:html`; `note`, `text` y `footnote` son texto plano. La cita del manifiesto sigue en el campo `manifesto` y el cuerpo en Markdown. El correo sigue saliendo de `src/data/sitio.ts`.

### 5. Estilos

Cada componente se lleva sus reglas. `.section-note`, compartida por proyectos, experimentos y archivo, sube a `src/styles/base.css` para que el slot de `SectionHeading` la reciba.

## Risks / Trade-offs

- **Ocultar una sección esperada** → la spec permite la decisión editorial; el valor por defecto mantiene las seis.
- **Anclas internas** → hoy no hay enlaces a `#campo`; si se añaden, validar que la sección siga visible.
- **HTML en títulos** → solo contenido propio; no se acepta HTML de terceros.
- **Duplicar cargas de colecciones** → cada componente las pide; Astro las cachea. Si molesta, se pasan por props.
- **Regresión visual** → mover estilos es el punto delicado; se revisan 360, 768, 1024, 1440 y 1920.

## Migration Plan

1. Esquema y lista `homeSections` con la copia actual.
2. Componentes y estilos por sección; `.section-note` a base.
3. Registro en `index.astro`.
4. Documentación y capturas.
5. `npm run verify`.

Rollback: la lista y los componentes conviven; si algo falla, `index.astro` puede volver a montar los bloques sin borrar el esquema.
