# CLRS

**Generador interactivo de paletas de colores**

CLRS es una aplicación web estática e interactiva desarrollada como Proyecto Integrador del Módulo 1 del bootcamp Full Stack Web de Henry.

La aplicación permite explorar el impacto del color, recibir recomendaciones visuales según diferentes industrias y generar paletas de colores aleatorias en formatos HEX y HSL.

---

## Demo

🔗 [Ver CLRS en GitHub Pages](https://junotquiroz.github.io/ProyectoM1_JunotQuiroz/)

---

## Vista previa

![Vista principal de CLRS](assets/captura-clrs.png)

---

## Funcionalidades

CLRS integra distintas herramientas orientadas a explorar y trabajar con el color:

- **Generación de paletas aleatorias:** permite crear nuevas combinaciones de colores mediante un botón principal.
- **Selección de tamaño:** el usuario puede generar paletas de 6, 8 o 9 colores.
- **Formatos HEX y HSL:** cada color puede visualizarse en cualquiera de los dos formatos.
- **Cambio de formato sin perder la paleta:** al alternar entre HEX y HSL se conservan los mismos colores y únicamente cambia su representación.
- **Copiado al portapapeles:** al hacer clic sobre una tarjeta de color se copia automáticamente el código visible.
- **Microfeedback visual:** después de copiar un color, la aplicación muestra un mensaje de confirmación.
- **Recomendador por industria:** permite seleccionar un sector y recibir una recomendación acompañada de tres colores sugeridos.
- **Hero dinámico:** diferentes palabras relacionadas con las emociones y sensaciones del color cambian automáticamente.
- **Renderizado dinámico con JavaScript:** las tarjetas de color son creadas en tiempo real según las opciones seleccionadas.
- **Bloqueo de colores:** permite fijar uno o varios colores de una paleta para conservarlos al generar una nueva combinación. Los colores bloqueados mantienen su valor y, cuando es posible, su posición dentro de la paleta.
- **Guardado de paletas:** permite almacenar paletas de colores en `localStorage` para conservarlas incluso después de recargar o cerrar el navegador. Las paletas guardadas pueden volver a cargarse o eliminarse posteriormente.
- **Diseño responsive:** la interfaz adapta su distribución para diferentes tamaños de pantalla.
- **Consideraciones de accesibilidad:** se utilizan etiquetas semánticas, labels asociados, foco visible, botones accesibles y regiones `aria-live`.

---

## Tecnologías utilizadas

| Tecnología | Uso en el proyecto |
|---|---|
| HTML5 | Estructura semántica de la aplicación |
| CSS3 | Diseño visual, Flexbox, Grid y responsive design |
| JavaScript | Lógica, eventos, DOM y generación dinámica de contenido |
| Git | Control de versiones |
| GitHub | Repositorio y documentación |
| GitHub Pages | Despliegue de la aplicación |
| Markdown | Documentación del proyecto |

---

## Estructura del proyecto

```text
ProyectoM1_JunotQuiroz/
│
├── index.html
├── styles.css
├── script.js
├── README.md
│
└── assets/
    ├── hero-background.png
    └── captura-clrs.png


```
---

## Cómo usar CLRS

1. Selecciona una industria en el recomendador para consultar una sugerencia de color.
2. Dirígete al generador de paletas.
3. Elige si deseas generar 6, 8 o 9 colores.
4. Selecciona el formato HEX o HSL.
5. Presiona **Generar paleta**.
6. Haz clic sobre cualquier color para copiar su código al portapapeles.
7. Cambia entre HEX y HSL para visualizar la misma paleta en ambos formatos.
8. Bloquea un color y genera una nueva paleta de colores
9. Guarda en localstorage paletas de colores, puedes reutilizarlas oy eliminarlas cuando lo necesites

---

## Decisiones técnicas

### Generación y representación del color

Los colores se generan a partir de valores HSL aleatorios. Cada color se almacena como un objeto de JavaScript que contiene tanto su representación HSL como su equivalente en HEX.

Esto permite alternar entre ambos formatos sin generar una nueva paleta.

### Render dinámico

Las tarjetas de color no están escritas directamente en el HTML.

JavaScript crea cada tarjeta dinámicamente con `document.createElement()` de acuerdo con la cantidad seleccionada por el usuario.

### Selección de cantidad

La elección entre 6, 8 o 9 colores utiliza controles `radio`, ya que solo puede existir una opción activa al mismo tiempo.

### Copiado al portapapeles

Cada tarjeta de color funciona como un botón interactivo. Al hacer clic, el código visible se copia mediante la Clipboard API y se muestra un mensaje de confirmación.

### Separación de responsabilidades

El proyecto mantiene una separación clara entre tecnologías:

- HTML: estructura y semántica.
- CSS: apariencia, distribución y responsive design.
- JavaScript: comportamiento, eventos y manipulación del DOM.

---

## Accesibilidad

Durante el desarrollo de CLRS se incorporaron distintas consideraciones básicas de accesibilidad para facilitar la navegación y la interacción con la aplicación.

- **HTML semántico:** se utilizan elementos como `header`, `nav`, `main`, `section`, `article` y `footer` para comunicar correctamente la estructura de la página.
- **Controles asociados a etiquetas:** los elementos de formulario utilizan `label`, `fieldset` y `legend` para identificar claramente su función.
- **Navegación mediante teclado:** los elementos interactivos pueden recibir foco y cuentan con indicadores visuales mediante `:focus-visible`.
- **Skip link:** se incluye un enlace para permitir que usuarios que navegan mediante teclado puedan saltar directamente al contenido principal.
- **Elementos interactivos adecuados:** las tarjetas de colores son creadas como elementos `button` en lugar de elementos genéricos, permitiendo su uso con mouse y teclado.
- **Atributos ARIA:** se utilizan atributos como `aria-label`, `aria-labelledby` y `aria-live` para aportar contexto adicional a tecnologías de asistencia.
- **Microfeedback accesible:** el mensaje mostrado al copiar un color utiliza una región `aria-live`, permitiendo comunicar el cambio sin necesidad de mover el foco.
- **Preferencias de movimiento:** el diseño considera `prefers-reduced-motion` para reducir animaciones cuando el usuario así lo haya configurado en su sistema.
- **Diseño responsive:** la distribución se adapta a distintos tamaños de pantalla mediante media queries.

Estas medidas representan consideraciones básicas de accesibilidad integradas durante el desarrollo. El proyecto no pretende sustituir una auditoría formal basada en WCAG.

---

## Ejecución local

CLRS es una aplicación web estática, por lo que no requiere instalación de dependencias ni configuración de un servidor backend.

### Opción 1: Clonar el repositorio

1. Clona el repositorio utilizando Git:

```bash
git https://github.com/JunotQuiroz/ProyectoM1_JunotQuiroz.git

```

2. Ingresa a la carpeta del proyecto:

cd ProyectoM1_JunotQuiroz

3. Abre la carpeta en Visual Studio Code.

4. Ejecuta index.html utilizando un servidor local, por ejemplo Live Server.

## Opción 2: Descargar el proyecto

También es posible descargar el repositorio como archivo ZIP desde GitHub.
Después de descomprimirlo, abre la carpeta en Visual Studio Code y ejecuta index.html mediante un servidor local.
[!NOTE]
Se recomienda utilizar localhost para probar correctamente funciones como el copiado al portapapeles.

---

## Despliegue

CLRS se publica utilizando **GitHub Pages**.

### Pasos para desplegar

1. Subir el proyecto a un repositorio de GitHub.
2. Ingresar al repositorio.
3. Abrir **Settings**.
4. Seleccionar **Pages**.
5. En la sección de despliegue, seleccionar la rama principal del proyecto.
6. Seleccionar la carpeta raíz del repositorio.
7. Guardar la configuración.
8. Esperar a que GitHub genere la URL pública.

Una vez publicado, la aplicación puede consultarse desde:

🔗 [CLRS en GitHub Pages](https://junotquiroz.github.io/ProyectoM1_JunotQuiroz/)

---

## Uso de Inteligencia Artificial

Durante el desarrollo de CLRS se utilizó ChatGPT como herramienta de apoyo para:

- Analizar los requerimientos del proyecto.
- Diseñar la arquitectura HTML.
- Comprender y desarrollar estilos CSS.
- Implementar la lógica con JavaScript.
- Revisar aspectos de accesibilidad.
- Resolver errores mediante debugging.
- Documentar el proyecto.

La Inteligencia Artificial se utilizó como herramienta de acompañamiento durante el proceso de aprendizaje. Las soluciones propuestas fueron revisadas, probadas y ajustadas antes de incorporarse al proyecto.

📄 [Consultar documentación completa del uso de IA](documentacion/IA.md)

🔗 [Consultar conversación completa de desarrollo en ChatGPT](https://chatgpt.com/share/6aad78bb-3ee8-83e8-80f5-9544899e386b)

---

## Mejoras futuras

Aunque CLRS cumple actualmente con los objetivos principales del proyecto, existen diferentes funcionalidades que podrían incorporarse en versiones posteriores:

- Agregar nuevas industrias al recomendador.
- Permitir descargar una paleta como imagen.
- Añadir nombres descriptivos a los colores generados.
- Incorporar más opciones de personalización.

---

## Autor

**Junot Quiroz**

Proyecto Integrador - Módulo 1  
Full Stack Web  
Henry