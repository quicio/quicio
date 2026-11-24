# Guía de contenido

Todo el contenido editorial vive en Markdown dentro de `src/content/`. No hace falta tocar componentes para agregar un proyecto, un experimento o una entrada de archivo.

## Proyectos

Archivo: `src/content/proyectos/<slug>.md`.

```yaml
---
title: Nombre
descriptor: Una frase breve, en serif itálica.
summary: Un párrafo de una o dos frases para el índice.
group: editorial | instrumentos | herramientas
order: 1
disciplines:
  - Software
  - Publicaciones
status: En desarrollo
year: "2026" # opcional
relation: Qué relación tiene con Quicio.
link: https://ejemplo.org/ # opcional
linkLabel: Abrir proyecto
repo: https://github.com/quicio/ejemplo # opcional
plate: orbit
seed: 7
featured: false
publicSurface: true
---
Cuerpo editorial en Markdown. Se muestra solo en las fichas destacadas.
```

Reglas:

- `link` es la página propia del proyecto; `repo` es el repositorio. Se muestran ambos si existen.
- No se crean páginas internas de detalle en Quicio. La ficha enlaza a la superficie real del proyecto.
- `featured: true` solo para Semina, Rizoma e Intersticio. Como máximo tres.
- `group: editorial` para publicaciones y pensamiento; `instrumentos` para herramientas de lectura, sonido, imagen; `herramientas` para infraestructura y sistemas.
- `status` debe ser verificable: En desarrollo, Prototipo, Publicación activa, Herramienta, Librería, Sistema, En pausa.
- Si no hay enlace público, omitir `link` y `repo`. La ficha dirá «Sin superficie pública».
- Los proyectos privados sin README o sin información pública no se publican hasta que exista una superficie verificable.
- `plate` admite: `semina`, `rizoma`, `intersticio`, `orbit`, `branch`, `network`, `wave`, `grid`, `aperture`.
- `seed` cambia la composición de la placa sin cambiar el estilo.

## Experimentos

Archivo: `src/content/experimentos/<slug>.md`.

```yaml
---
title: Nombre
order: 1
year: "2026"
type: Diseño / investigación
status: En curso # En curso | Prototipo | En pausa | Cerrado | Derivado
summary: Una frase para el índice.
relation: Relación con un proyecto, si existe.
link: https://... # opcional; también admite una ruta interna como /sistema/
linkLabel: Ver prototipo
plate: wave
seed: 3
---
Cuerpo del experimento.
```

Los experimentos sí tienen página propia en `/experimentos/<slug>/`. Si el prototipo es privado, omitir `link` y explicarlo en el cuerpo.

## Archivo

Archivo: `src/content/archivo/<slug>.md`.

```yaml
---
title: Nombre
year: "2026"
kind: Sitio web
state: Reemplazado
summary: Una frase para la tabla.
order: 1
artifact: /archivo/sitio-2026/original/ # opcional
linkLabel: Ver artefacto original
plate: aperture
seed: 2
---
Cuerpo de la entrada.
```

Reglas:

- Solo se publica lo verificable. Si el relato histórico no está disponible, no se inventan fechas ni hitos.
- Si existe un artefacto estático, se copia en `public/archivo/<slug>/original/` y se enlaza.
- El estado debe explicar qué pasó: Reemplazado, Discontinuado, Derivado, En pausa, Antecedente.

## Páginas institucionales

- `src/content/paginas/inicio.md`: título, descriptor, introducción, frase/manifiesto.
- `src/content/paginas/acerca.md`: título, lead, principios y cuerpo.
- `src/content/paginas/contacto.md`: título, lead, correo y cuerpo.

## Datos de sitio

`src/data/sitio.ts` reúne nombre, descriptor, frase, correo, GitHub, lugar, coordenadas, navegación y disciplinas. Si cambia el correo, se cambia una sola vez.

## Publicar

```bash
npm install
npm run check
npm run build
npm run links
```

El build genera `dist/`. GitHub Actions lo publica en `quicio.org` al hacer push a `main`.

## Verificar

- Revisar que los enlaces externos sigan vivos.
- Revisar que el estado del proyecto siga siendo verdadero.
- Revisar el responsive en 360, 390, 768, 1024 y 1440 px.
- Si se cambia un token o un componente, actualizar `DESIGN.md`.
- Si se agrega una capacidad o se cambia un comportamiento, actualizar la spec en `openspec/`.
