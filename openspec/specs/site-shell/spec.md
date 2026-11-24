# site-shell Specification

## Purpose

Define el shell institucional compartido por todas las páginas: cabecera, navegación, footer, metadatos, página 404 y comportamiento responsive, con funcionamiento completo sin JavaScript.

## Requirements

### Requirement: Cabecera institucional

Todas las páginas SHALL mostrar una cabecera con el logotipo de Quicio, el descriptor «Estudio independiente» y la navegación principal. Por defecto la cabecera SHALL mantener un fondo marfil sólido, una línea inferior capilar y comportamiento sticky, sin blur ni transparencias decorativas. La portada SHALL usar una variante superpuesta: sin fondo, sin línea inferior y desplazándose con la lámina.

#### Scenario: Navegación de escritorio

- **WHEN** la página se renderiza en un viewport de escritorio
- **THEN** la cabecera muestra el logotipo, el descriptor y los enlaces a Proyectos, Experimentos, Archivo, Acerca y Contacto en una sola fila
- **AND** el enlace de la sección activa se distingue visualmente sin depender solo del color

#### Scenario: Navegación móvil sin JavaScript

- **WHEN** la página se renderiza en un viewport móvil y JavaScript está deshabilitado
- **THEN** existe un control nativo de índice que despliega los mismos destinos de navegación
- **AND** todos los enlaces son alcanzables por teclado

#### Scenario: Portada superpuesta

- **WHEN** el visitante abre `/`
- **THEN** la cabecera se apoya sobre la lámina sin fondo sólido ni línea inferior
- **AND** la navegación se desplaza con la portada en lugar de quedar fija
- **AND** ningún texto de la lámina queda oculto bajo la cabecera

#### Scenario: Resto del sitio

- **WHEN** el visitante abre cualquier página distinta de la portada
- **THEN** la cabecera conserva fondo marfil sólido, línea capilar y comportamiento sticky
- **AND** el contenido no se desplaza por debajo de ella

### Requirement: Footer editorial

Todas las páginas SHALL terminar con un footer que reúna la firma de Quicio, los destinos principales, el contacto, la ubicación y el colofón tipográfico. El footer SHALL usar la superficie oscura de la identidad y SHALL enlazar al sistema de diseño.

#### Scenario: Cierre de página

- **WHEN** el visitante llega al final de cualquier página
- **THEN** encuentra el correo de contacto, el enlace a GitHub y el acceso a la página del sistema
- **AND** el footer no presenta una estructura de equipo ni cargos ficticios

### Requirement: Metadatos y canonical

Cada página SHALL declarar idioma español, título, descripción, canonical, Open Graph y Twitter Card. La URL canónica SHALL derivarse del dominio `quicio.org`, salvo que una variable de entorno indique un preview.

#### Scenario: Página indexable

- **WHEN** se construye una página pública
- **THEN** el HTML contiene `lang="es"`, un `title` único, una meta description, `rel="canonical"` y metadatos sociales
- **AND** la imagen social apunta a un recurso existente del sitio

#### Scenario: Página fuera de índice

- **WHEN** una página se marca como no indexable, como la página de sistema o un preview
- **THEN** el HTML incluye `robots: noindex`
- **AND** la página no aparece en el sitemap

### Requirement: Página 404

El sitio SHALL ofrecer una página 404 editorial, con el mismo shell visual, un mensaje breve y enlaces para volver al inicio o a proyectos.

#### Scenario: Ruta inexistente

- **WHEN** el visitante accede a una ruta que no existe
- **THEN** GitHub Pages sirve la página 404 del sitio
- **AND** la página permite continuar la navegación sin volver atrás del navegador

### Requirement: Responsive y sin desbordamiento

El shell SHALL funcionar en anchos de 360, 390, 768, 1024 y 1440 px sin scroll horizontal. La navegación, las reglas y el footer SHALL reorganizarse sin ocultar contenido esencial.

#### Scenario: Móvil estrecho

- **WHEN** el sitio se abre a 360 px de ancho
- **THEN** el contenido conserva márgenes legibles, no hay scroll horizontal y los enlaces mantienen áreas táctiles suficientes

### Requirement: Publicación estática

El proyecto SHALL generar HTML estático desplegable en GitHub Pages, con `CNAME` para `quicio.org`, `robots.txt` y sitemap.

#### Scenario: Build de producción

- **WHEN** se ejecuta el build de producción
- **THEN** se genera un directorio `dist` con el sitio completo, `CNAME`, `robots.txt` y sitemap
- **AND** el workflow de GitHub Pages publica ese artefacto sin pasos manuales
