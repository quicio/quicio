# Design

## Contexto

La documentación de un sistema visual suele quedar desactualizada. En Quicio se documenta lo que realmente se implementó, con los mismos tokens que usa el sitio, y se enlaza desde el footer para que sea consultable sin abrir el repositorio.

## Decisiones

- `/sistema/` se construye con los componentes y tokens reales, no con capturas. Muestra muestras de color, especímenes tipográficos, la marca en sus variantes y una selección de componentes.
- `DESIGN.md` usa frontmatter con tokens (colores, tipografía, espaciado, radios, componentes) y prosa sobre concepto, retícula, imágenes, movimiento y relación con proyectos.
- `README.md` prioriza el uso editorial: cómo agregar un proyecto, un experimento o una entrada de archivo; cómo cambiar el correo; cómo publicar.
- La revisión de Impeccable se ejecuta sobre el build real. Se corrigen hallazgos de contraste, jerarquía, foco, tamaño de fuente y desbordamiento; se documenta lo que queda abierto.
- La imagen social se compone con la misma paleta y tipografía; se guarda como PNG y se referencia desde `Seo.astro`.
- No se añaden dependencias de runtime; las herramientas de verificación son de desarrollo.

## Riesgos

- Una página de sistema pública puede sentirse autorreferente. Se resuelve como colofón breve, no como un manual extenso.
- La auditoría puede revelar problemas de contraste en el gris piedra. Se ajusta el token de texto secundario y se reserva el gris para metadatos grandes.
