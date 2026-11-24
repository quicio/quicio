# Tasks

## 1. Base del proyecto

- [x] 1.1 Crear `package.json`, `astro.config.mjs`, `tsconfig.json` y `.gitignore` con Astro 7, sitemap, fuentes y scripts de verificación.
- [x] 1.2 Instalar dependencias y confirmar que `npm run build` genera `dist`.
- [x] 1.3 Inicializar OpenSpec y documentar el contexto del proyecto en `openspec/config.yaml`.
- [x] 1.4 Instalar la skill Impeccable y registrar `PRODUCT.md` y `buildPath: code`.

## 2. Tokens y estilos

- [x] 2.1 Crear `src/styles/tokens.css` con color, tipografía, espaciado, retícula, movimiento y foco.
- [x] 2.2 Crear `src/styles/base.css` con reset, textura de papel, enlaces, selección, utilidades editoriales y reglas de reducción de movimiento.
- [x] 2.3 Verificar contraste AA de texto pequeño sobre marfil y superficie oscura.

## 3. Marca y assets

- [x] 3.1 Crear el isotipo SVG de eje y arcos y el componente de marca.
- [x] 3.2 Crear la lockup horizontal, la versión apilada y la versión negativa.
- [x] 3.3 Generar `favicon.svg`, `favicon-32.png` y `apple-touch-icon.png`.
- [x] 3.4 Crear las placas SVG base y el registro de variantes.

## 4. Shell

- [x] 4.1 Crear `Base.astro` con skip link, cabecera, main, footer y textura.
- [x] 4.2 Crear `SiteHeader.astro` con navegación de escritorio, índice móvil nativo y estado activo.
- [x] 4.3 Crear `SiteFooter.astro` con contacto, GitHub, coordenadas y colofón.
- [x] 4.4 Crear `Seo.astro` con canonical, Open Graph, Twitter Card y JSON-LD.
- [x] 4.5 Crear la página 404.

## 5. Primera portada

- [x] 5.1 Crear la placa celeste de la portada con luna, sol, órbita y coordenadas.
- [x] 5.2 Componer el hero asimétrico con wordmark, descriptor, introducción y frase.
- [x] 5.3 Añadir la franja de disciplinas y los accesos principales.
- [x] 5.4 Verificar la portada en 1440, 1024, 768, 390 y 360 px.

## 6. Publicación

- [x] 6.1 Crear `public/CNAME`, `robots.txt` y la imagen social inicial.
- [x] 6.2 Crear `.github/workflows/deploy.yml` para GitHub Pages.
- [x] 6.3 Crear `scripts/check-links.mjs` y el script `npm run verify`.
- [x] 6.4 Ejecutar `npm run verify`, revisar capturas y registrar el resultado en el cambio.
