# Design

## Contexto

El catálogo es la pieza central del sitio. Quicio no es el producto: es el contexto. Por eso el índice no replica páginas de proyecto ni crea una retícula de tarjetas equivalentes. La composición debe permitir escanear familias, leer fichas destacadas y salir al proyecto correcto.

## Decisiones

- Una sola ruta `/proyectos/` con anclas por proyecto; no se generan páginas internas de detalle en esta slice. La profundidad vive en cada repositorio.
- Tres proyectos destacados con ficha ampliada: Semina, Rizoma e Intersticio.
- El resto se organiza en un registro compacto por familias: instrumentos, herramientas e investigación.
- El rail de grupos es sticky en escritorio; en móvil se convierte en una lista horizontal de enlaces mono.
- Las placas de proyecto son SVG generativos, no capturas ni mockups. Cada ficha declara una variante y una semilla.
- Los estados se escriben en español y en mono: «En desarrollo», «Prototipo», «Publicación activa», «En pausa», «Sin superficie pública».

## Contenido

La colección se llena con proyectos reales de GitHub. Se omiten repositorios privados sin README o sin superficie pública, salvo que el proyecto tenga un sitio público. Los proyectos privados con información verificable se presentan como «En taller» y sin enlace.

## Riesgos

- Un catálogo con demasiadas entradas puede volverse un inventario. La jerarquía destacada/registro y los grupos evitan la simetría.
- Los enlaces externos envejecen. El chequeo de enlaces y el campo `repo` permiten mantenerlos.
