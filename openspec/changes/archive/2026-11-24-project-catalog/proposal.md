# Proposal

## Why

Quicio articula proyectos con personalidades y despliegues propios. La web institucional necesita presentarlos con criterio editorial y enlazar a su superficie real, sin duplicar sus páginas de producto ni convertirlos en tarjetas de agencia. Hoy no existe un catálogo mantenible que recoja los proyectos activos de la organización.

## What Changes

- Crear una colección Markdown de proyectos con nombre, descriptor, resumen, disciplinas, estado, año, relación con Quicio, enlace externo, repositorio, placa y grupo.
- Construir `/proyectos/` como índice editorial con rail de grupos, fichas destacadas y registro denso para el resto.
- Publicar fichas de Semina, Rizoma e Intersticio como proyectos principales y entradas para los proyectos activos de la organización.
- Enlazar cada proyecto a su propia página o repositorio; Quicio no replica páginas de producto.
- Marcar estados honestos y proyectos sin superficie pública.

## Capabilities

### New Capabilities

- `project-catalog`: modelo de contenido, agrupación, fichas editoriales, estados, enlaces externos y recuentos.

### Modified Capabilities

Ninguna.

## Impact

- Nuevos archivos en `src/content/proyectos/`, `src/components/` y `src/pages/proyectos/`.
- Nueva sección en la portada con proyectos destacados.
- Dependencia de enlaces externos reales; se verifica su resolución en el build y en el chequeo de enlaces.
- No se crean páginas internas de detalle por proyecto en esta slice.
