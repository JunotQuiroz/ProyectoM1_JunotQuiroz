# Documentación del uso de Inteligencia Artificial

## Proyecto CLRS

**Proyecto Integrador M1 - Full Stack Web**

Durante el desarrollo de CLRS se utilizó ChatGPT como herramienta de apoyo para analizar los requerimientos del proyecto, diseñar su arquitectura, desarrollar y comprender código, revisar aspectos de accesibilidad, detectar errores y documentar decisiones técnicas.

La Inteligencia Artificial se utilizó como herramienta de acompañamiento durante el proceso de aprendizaje. Las propuestas generadas fueron revisadas, probadas y modificadas antes de incorporarse al proyecto.

---

## Herramienta utilizada

- **Herramienta:** ChatGPT
- **Modelo:** GPT-5.6 Sol
- **Uso:** planeación, desarrollo, explicación de código, debugging y documentación.
- **Tecnologías trabajadas:** HTML5, CSS3, JavaScript, Git, GitHub y Markdown.

---

## Metodología de trabajo

El proyecto no fue desarrollado mediante un único prompt.

CLRS se construyó de forma progresiva. En cada etapa se planteó una idea o necesidad, se analizó junto con la IA, se propuso una solución, se explicó el código y posteriormente se realizaron pruebas manuales.

El proceso general utilizado fue:

1. Planteamiento de la idea.
2. Análisis de requerimientos.
3. Propuesta de solución.
4. Explicación del código.
5. Implementación manual.
6. Prueba en el navegador.
7. Identificación de errores o mejoras.
8. Corrección y nueva prueba.

Este método permitió utilizar la IA no solamente para generar código, sino también como apoyo para comprender las decisiones técnicas tomadas durante el desarrollo.

---

# Registro de interacciones con IA

## 1. Análisis de la propuesta inicial

### Objetivo

Comparar la idea inicial de CLRS con los requerimientos del Proyecto Integrador y determinar si las funcionalidades adicionales eran compatibles con la consigna.

### Prompt utilizado

> Estaba trabajando en cómo me gustaría que se diseñara la estructura del proyecto integrador. Hice una propuesta de index en HTML y te adjunto un documento en donde vienen los aspectos generales.
>
> No quise nada más que fuera el generador de paleta de colores, sino me gustaría dar un más valor al visitante.
>
> Por favor analízalo, compáralo con los requerimientos que nos pide el bootcamp y dime si hay alguna modificación o si tienes alguna duda.

### Resultado obtenido

La IA comparó la propuesta inicial con la consigna y la rúbrica del proyecto.

Se determinó que las secciones adicionales podían conservarse siempre que el generador de paletas continuara siendo la funcionalidad principal.

También se identificaron elementos que todavía debían incorporarse:

- Selección de formatos HSL y HEX.
- Microfeedback visible.
- Consideraciones de accesibilidad.
- Render dinámico de las paletas.
- Copiado del código de color al portapapeles.

### Decisiones tomadas

Se decidió conservar la estructura general:

- Hero.
- Introducción a la teoría del color.
- Recomendador por industria.
- Generador de paletas.

Además, se estableció que el generador sería el núcleo funcional del proyecto y que las demás secciones aportarían contexto y valor adicional al visitante.

### Aprendizaje

Esta interacción permitió comprender la importancia de diferenciar entre:

- Requerimientos obligatorios.
- Funcionalidades complementarias.
- Extra credits.

También ayudó a evitar que las funcionalidades adicionales desplazaran el objetivo principal del proyecto.

## 2. Definición de identidad visual y funcionalidades

### Objetivo

Definir la dirección visual de CLRS y tomar decisiones sobre las funcionalidades que formarían parte del MVP.

### Prompt utilizado

> Olvidé adjuntar el background de la sección hero.
>
> Más o menos este es el estilo que quiero para la página: algo moderno, loco y irreverente.
>
> Cada sección tal vez separada por un color o un marcador, no lo sé.
>
> Seleccionemos los formatos de color HSL y HEX.
>
> Eliminemos momentáneamente la función de guardar paleta.
>
> Dejemos el microfeedback, eso de copiar el código de color en el portapapeles me gusta mucho.
>
> Me gustaría que el recomendador por industria, además del consejo textual, muestre algunos colores. No más de dos o tres.

### Resultado obtenido

Se definieron las siguientes decisiones para el proyecto:

- Base visual clara con acentos fuertes.
- Uso de azul, naranja y verde como colores principales.
- Hero con una imagen abstracta y de alto impacto visual.
- HEX como formato predeterminado.
- HSL como segundo formato.
- Eliminación temporal del guardado de paletas.
- Implementación de copiado al portapapeles.
- Uso de un toast como microfeedback.
- Recomendaciones por industria acompañadas de pequeños swatches de color.

### Decisiones tomadas

Se optó por mantener el MVP relativamente controlado y dejar funciones como `localStorage` para posibles mejoras futuras.

Esto permitió concentrar el desarrollo en funcionalidades relacionadas directamente con la rúbrica.

### Aprendizaje

Esta etapa ayudó a comprender que una aplicación puede incorporar personalidad visual sin perder claridad, accesibilidad ni enfoque funcional.

## 3. Construcción de la arquitectura HTML

### Objetivo

Crear una estructura HTML semántica que sirviera como base para las funcionalidades posteriores de CSS y JavaScript.

### Prompt utilizado

> Muy bien, afinemos el HTML. Explícame sección por sección para que vaya aprendiendo y al mismo tiempo haciendo el proyecto.

### Resultado obtenido

Se diseñó una estructura basada en HTML semántico que incluyó:

- `header`
- `nav`
- `main`
- `section`
- `article`
- `footer`
- `fieldset`
- `legend`
- `label`

También se prepararon contenedores vacíos que posteriormente serían manipulados mediante JavaScript.

Ejemplo:

```html
<div
    id="contenedor-paleta"
    class="lienzo-paleta"
>
</div>

```

### Decisión técnica destacada
Para seleccionar la cantidad de colores y el formato se utilizaron controles radio.
Ejemplo:

<input
    type="radio"
    id="cantidad-6"
    name="cantidad"
    value="6"
    checked
>
Esto permitió expresar semánticamente que únicamente una opción de cada grupo podía estar seleccionada simultáneamente.

## Accesibilidad
Durante esta etapa también se incorporaron:
Labels asociados.
aria-labelledby.
aria-live.
Skip link.
Estructura de encabezados.
Controles de formulario correctamente agrupados.

## Aprendizaje
La interacción permitió comprender que HTML no se utiliza únicamente para colocar contenido en pantalla.
La estructura semántica también comunica el significado y la función de los elementos al navegador y a tecnologías de asistencia.


---

# Interacción 4 — Desarrollo CSS
## 4. Desarrollo de la interfaz con CSS

### Objetivo

Transformar la estructura HTML en una interfaz moderna, visualmente coherente y adaptable.

### Prompt utilizado

> Así quedó el index. Me parece muy buen comienzo.
>
> Ahora te pido que hagamos el archivo CSS con los lineamientos estipulados y, de igual forma, explícame paso a paso.

### Resultado obtenido

La IA propuso una hoja de estilos organizada por bloques.

Entre los conceptos utilizados se encuentran:

- Variables CSS.
- Flexbox.
- CSS Grid.
- `clamp()`.
- Pseudo-elementos.
- Estados `hover`.
- Estados `active`.
- `focus-visible`.
- Media queries.
- `prefers-reduced-motion`.

### Ejemplo de variables CSS

```css
:root {
    --azul: #0274be;
    --naranja: #ff6900;
    --verde: #00bf5b;

    --blanco: #ffffff;
    --texto: #171717;
}

```

## Decisión visual

Se utilizó una base predominantemente clara y se asignó un color de acento diferente a cada sección.
Esto permitió mantener una interfaz limpia mientras se conservaba la identidad visual energética e irreverente planteada al inicio del proyecto.

## Aprendizaje

Esta etapa permitió reforzar la diferencia entre:
HTML como estructura.
CSS como presentación.
JavaScript como comportamiento.