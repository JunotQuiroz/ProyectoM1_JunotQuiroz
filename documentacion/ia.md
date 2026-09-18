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

---

## Índice

1. [Análisis de la propuesta inicial](#interaccion-1)
2. [Definición de identidad visual y funcionalidades](#interaccion-2)
3. [Construcción de la arquitectura HTML](#interaccion-3)
4. [Desarrollo de la interfaz con CSS](#interaccion-4)
5. [Desarrollo de la lógica con JavaScript](#interaccion-5)
6. [Render dinámico y representación HSL / HEX](#interaccion-6)
7. [Portapapeles y microfeedback](#interaccion-7)
8. [Debugging: aparición de "Tu paleta"](#interaccion-8)
9. [Accesibilidad](#interaccion-9)
10. [Documentación mediante Markdown](#interaccion-10)
11. [Reflexión final sobre el uso de Inteligencia Artificial](#interaccion-11)

---

<a id="interaccion-1"></a>

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

<a id="interaccion-2"></a>

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

<a id="interaccion-3"></a>

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

<a id="interaccion-4"></a>

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

<a id="interaccion-5"></a>

## 5. Desarrollo de la lógica con JavaScript

### Objetivo

Implementar las funcionalidades interactivas de CLRS utilizando JavaScript puro y comprender el funcionamiento de cada bloque antes de integrarlo al proyecto.

### Prompt utilizado

> Ya chequé el HTML y el CSS. Me gusta el diseño. Veo que todo está bien estructurado y sobre todo tiene las bases para las funcionalidades.
>
> Ahora continuemos con JavaScript. Ayúdame con todo el código, pero de igual forma explícalo poco a poco, de esta forma yo lo asimilo y voy aprendiendo.
>
> ¿Tienes alguna duda o sugerencia?

### Resultado obtenido

Se desarrolló la lógica principal de la aplicación utilizando JavaScript sin frameworks ni librerías externas.

La solución incluyó funciones para:

- Rotar palabras de manera automática en el Hero.
- Detectar la industria seleccionada.
- Mostrar recomendaciones dinámicas.
- Crear swatches de colores.
- Obtener la cantidad de colores seleccionada.
- Detectar el formato HEX o HSL.
- Generar números aleatorios.
- Crear colores aleatorios.
- Convertir colores de HSL a HEX.
- Generar una paleta completa.
- Crear dinámicamente las tarjetas de color.
- Copiar códigos al portapapeles.
- Mostrar microfeedback al usuario.

### Organización del código

El código JavaScript se estructuró utilizando diferentes tipos de elementos:

- Constantes para almacenar referencias del DOM.
- Arrays para almacenar información.
- Objetos para organizar datos.
- Funciones para separar responsabilidades.
- Eventos para reaccionar a las acciones del usuario.

Por ejemplo, las palabras utilizadas en el Hero se almacenaron dentro de un array:

```javascript
const palabrasHero = [
    "paz",
    "pasión",
    "energía",
    "elegancia",
    "creatividad",
    "poder",
    "tranquilidad"
];
```

La información del recomendador por industria se almacenó en un objeto que relaciona cada industria con un texto y diferentes colores sugeridos.

### Manipulación del DOM

JavaScript se conecta con los elementos creados previamente en HTML mediante `document.querySelector()`.

Ejemplo:

```javascript
const botonGenerar =
    document.querySelector("#btn-generar");

const contenedorPaleta =
    document.querySelector("#contenedor-paleta");
```

Esto permite modificar elementos existentes y crear contenido nuevo como respuesta a las acciones del usuario.

### Aprendizaje

Esta etapa ayudó a comprender cómo JavaScript puede utilizarse para conectar:

**datos → eventos → lógica → cambios visibles en el DOM**

También permitió reforzar conceptos como:

- `const` y `let`.
- Arrays.
- Objetos.
- Funciones.
- Ciclos `for`.
- `forEach()`.
- Condicionales.
- Eventos.
- Manipulación del DOM.
- `setInterval()`.
- `setTimeout()`.

---

<a id="interaccion-6"></a>

## 6. Render dinámico y representación HSL / HEX

### Objetivo

Generar paletas de 6, 8 o 9 colores y permitir al usuario visualizar los mismos colores tanto en formato HEX como en HSL.

### Decisión técnica

Durante el desarrollo se decidió que cambiar entre HEX y HSL no debía generar una paleta diferente.

La aplicación genera un color una sola vez y almacena sus distintas representaciones dentro del mismo objeto.

Ejemplo conceptual:

```javascript
{
    h: 210,
    s: 70,
    l: 50,
    hsl: "hsl(210, 70%, 50%)",
    hex: "#2680D9"
}
```

De esta forma, HEX y HSL representan el mismo color.

### Generación de colores

Para generar los colores se utilizó `Math.random()` mediante una función auxiliar:

```javascript
function numeroAleatorio(min, max) {
    return Math.floor(
        Math.random() * (max - min + 1)
    ) + min;
}
```

Los colores se generan inicialmente utilizando valores HSL.

Se utilizaron los siguientes rangos:

- Hue: 0 a 359.
- Saturación: 50% a 90%.
- Luminosidad: 35% a 70%.

La saturación y luminosidad se limitaron para evitar generar demasiados colores casi grises, blancos o negros.

### Conversión HSL a HEX

Después de generar los valores HSL se utiliza una función para calcular su representación equivalente en HEX:

```javascript
const hex =
    convertirHslAHex(
        h,
        s,
        l
    );
```

El objetivo de esta función no fue memorizar la fórmula matemática de conversión, sino comprender que un mismo color puede representarse mediante diferentes sistemas.

### Generación según la cantidad seleccionada

El usuario puede seleccionar 6, 8 o 9 colores.

JavaScript obtiene la opción seleccionada y ejecuta un ciclo `for` esa cantidad de veces:

```javascript
for (
    let i = 0;
    i < cantidad;
    i++
) {

    const color =
        crearColorAleatorio();

    paletaActual.push(
        color
    );
}
```

Cada color generado se almacena dentro del array:

```javascript
paletaActual
```

### Render dinámico

Las tarjetas de colores no están escritas previamente en el HTML.

JavaScript las crea en tiempo real mediante:

```javascript
document.createElement("button")
```

Después se agregan al contenedor utilizando:

```javascript
contenedorPaleta.appendChild(tarjeta);
```

La cantidad de elementos creados depende directamente de la selección del usuario.

### Cambio entre HEX y HSL

Cuando el usuario cambia de formato no se ejecuta nuevamente la generación aleatoria.

En su lugar se vuelve a renderizar la información existente:

```javascript
if (paletaActual.length > 0) {
    renderizarPaleta();
}
```

Esto permite conservar los mismos colores y cambiar únicamente su representación.

### Aprendizaje

Esta parte permitió comprender la diferencia entre:

- Generar información.
- Almacenar información.
- Representar información.
- Renderizar información en el DOM.

También ayudó a entender que la interfaz no necesita regenerar los datos cada vez que cambia la forma en que estos se muestran.

---

<a id="interaccion-7"></a>

## 7. Portapapeles y microfeedback

### Objetivo

Permitir que el usuario pudiera utilizar fácilmente los colores generados copiando su código directamente desde la interfaz.

### Funcionalidad implementada

Cada tarjeta de color se creó como un elemento `button`.

Al hacer clic sobre ella se ejecuta una función que copia el código actualmente visible.

Si el usuario está visualizando HEX, se copia HEX.

Si está visualizando HSL, se copia HSL.

### Clipboard API

Para realizar esta acción se utilizó:

```javascript
navigator.clipboard.writeText(codigo);
```

La función se implementó utilizando `async` y `await`:

```javascript
async function copiarColor(codigo) {

    try {

        await navigator.clipboard.writeText(
            codigo
        );

        mostrarToast(
            `${codigo} copiado al portapapeles`
        );

    } catch (error) {

        console.error(
            "No se pudo copiar el color:",
            error
        );

        mostrarToast(
            "No se pudo copiar el color."
        );
    }
}
```

También se consideró que la Clipboard API requiere normalmente un contexto seguro como HTTPS o localhost.

### Microfeedback

Después de copiar correctamente el color, la aplicación muestra un mensaje temporal.

Ejemplo:

> `#0274BE copiado al portapapeles`

El mensaje utiliza un elemento destinado al toast y JavaScript agrega temporalmente la clase:

```javascript
mostrar
```

Posteriormente `setTimeout()` retira esa clase después de unos segundos.

### Accesibilidad

El toast utiliza `aria-live`, por lo que el cambio también puede ser comunicado por tecnologías de asistencia sin modificar manualmente el foco.

Las tarjetas reciben además un `aria-label` dinámico.

Ejemplo conceptual:

```text
Copiar color #0274BE al portapapeles
```

### Aprendizaje

Esta funcionalidad permitió conectar varias tecnologías en una sola interacción:

**evento de clic → Clipboard API → actualización del DOM → microfeedback**

También permitió comprender la importancia de confirmar visualmente una acción realizada por el usuario.

---

<a id="interaccion-8"></a>

## 8. Debugging: aparición de "Tu paleta"

### Problema detectado

Durante las pruebas de la aplicación se detectó un detalle de experiencia de usuario.

Al entrar por primera vez a CLRS aparecía el encabezado:

> **Tu paleta**

aunque todavía no se había generado ninguna combinación de colores.

Esto producía un espacio visual vacío debajo de los controles.

### Prompt utilizado

> Ya probé la funcionalidad y todo está perfecto.
>
> El único detalle es que cuando recién entras a la página hay una anotación hasta abajo que dice "Tu paleta" y no hay nada porque no has generado ninguna paleta.
>
> Entonces me gustaría que esa anotación se ocultara y solamente hasta que le das al botón generar por primera vez aparezca junto con los diferentes colores que conforman dicha paleta.

### Primera solución propuesta

Se decidió utilizar el atributo HTML:

```html
hidden
```

para ocultar inicialmente toda la sección de resultados.

Posteriormente JavaScript debía cambiar ese estado después de generar la primera paleta.

Conceptualmente:

```javascript
resultadoPaleta.hidden = false;
```

### Error encontrado

Después de aplicar la primera modificación ocurrió un nuevo problema.

El título se ocultaba correctamente al cargar la página, pero al presionar **Generar paleta** ya no aparecían los colores.

### Segundo prompt de debugging

> Ya lo probé y sí se oculta el título, pero al momento de darle generar paleta no funciona en ninguna opción de número ni tipo de color.
>
> Al parecer se ocultó también la funcionalidad de mostrar las paletas.

### Diagnóstico

Se revisó nuevamente el HTML y JavaScript.

El problema estaba relacionado con la referencia utilizada para localizar la sección de resultados.

JavaScript necesitaba encontrar correctamente el elemento existente en el HTML antes de modificar su propiedad `hidden`.

### Solución final

Se aprovechó la clase que la sección ya tenía:

```html
class="resultado-paleta"
```

y se creó la referencia:

```javascript
const resultadoPaleta =
    document.querySelector(".resultado-paleta");
```

Posteriormente, dentro de la función `generarNuevaPaleta()`, después de crear los colores:

```javascript
resultadoPaleta.hidden = false;

renderizarPaleta();
```

### Resultado

El flujo final quedó de la siguiente manera:

```text
Carga de la página
        ↓
La sección "Tu paleta" permanece oculta
        ↓
El usuario selecciona cantidad y formato
        ↓
Presiona "Generar paleta"
        ↓
JavaScript genera los colores
        ↓
Se muestra la sección de resultados
        ↓
Se renderizan las tarjetas
```

Después de la corrección se verificó nuevamente:

- Generación de 6 colores.
- Generación de 8 colores.
- Generación de 9 colores.
- Formato HEX.
- Formato HSL.
- Cambio entre formatos.
- Generación sucesiva de nuevas paletas.

Todas las funcionalidades volvieron a trabajar correctamente.

### Aprendizaje

Este error fue útil para comprender que una modificación aparentemente pequeña puede afectar otras partes de la aplicación.

También permitió aplicar un proceso real de debugging:

1. Identificar el comportamiento inesperado.
2. Reproducir el problema.
3. Revisar qué cambio lo provocó.
4. Localizar el punto donde JavaScript detenía su ejecución.
5. Corregir la referencia al elemento del DOM.
6. Volver a probar todas las funciones relacionadas.

Esta experiencia reforzó la importancia de **probar las respuestas generadas por IA en lugar de asumir que siempre funcionarán correctamente**.

La IA ayudó a plantear y corregir la solución, pero la detección del error ocurrió mediante pruebas reales realizadas sobre la aplicación.

---

<a id="interaccion-9"></a> 

## 9. Accesibilidad

### Objetivo

Revisar que CLRS incorporara consideraciones básicas de accesibilidad y documentar las decisiones implementadas durante el desarrollo.

### Prompt utilizado

> Continuemos con accesibilidad.

Durante el desarrollo también se solicitó revisar que la estructura HTML, los controles, los mensajes dinámicos y las animaciones pudieran utilizarse de una manera más accesible.

### Resultado obtenido

Se identificaron diferentes medidas de accesibilidad que ya formaban parte del proyecto y se documentaron dentro del README.

Entre ellas se encuentran:

- Uso de HTML semántico.
- Asociación entre `label` y controles de formulario.
- Uso de `fieldset` y `legend` para agrupar opciones relacionadas.
- Navegación mediante teclado.
- Estados visibles de foco mediante `:focus-visible`.
- Skip link para saltar al contenido principal.
- Uso de elementos `button` para acciones interactivas.
- Atributos ARIA.
- Regiones `aria-live`.
- Respeto a la preferencia `prefers-reduced-motion`.
- Diseño adaptable a diferentes tamaños de pantalla.

### HTML semántico

En lugar de construir toda la aplicación utilizando únicamente elementos `div`, se utilizaron etiquetas con significado estructural.

Ejemplos:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

También se utilizaron elementos específicos para los controles:

```html
<fieldset>
    <legend>
        ¿Cuántos colores necesitas?
    </legend>
</fieldset>
```

Esto permite comunicar con mayor claridad la estructura y propósito de cada parte de la interfaz.

### Foco visible

En CSS se incorporaron estilos específicos para usuarios que navegan mediante teclado:

```css
a:focus-visible,
button:focus-visible,
select:focus-visible,
input:focus-visible + label {
    outline: 4px solid var(--azul);
    outline-offset: 4px;
}
```

De esta forma es posible identificar visualmente qué elemento tiene el foco.

### Skip link

Se agregó un enlace al inicio de la página para permitir saltar la navegación y acceder directamente al contenido principal.

```html
<a
    class="skip-link"
    href="#contenido-principal"
>
    Saltar al contenido principal
</a>
```

Durante las pruebas se analizó también su comportamiento para comprender la diferencia entre:

- Saltar al contenido principal.
- Navegar directamente al generador de paletas.

Esto ayudó a entender que el skip link tiene una función específica de accesibilidad y no simplemente de navegación rápida.

### Elementos interactivos

Las tarjetas de los colores generados se crean como elementos `button` y no como `div`.

Esto permite que puedan utilizarse tanto con mouse como con teclado y que sean identificadas correctamente como elementos interactivos.

Además, JavaScript asigna un `aria-label` dinámico:

```javascript
tarjeta.setAttribute(
    "aria-label",
    `Copiar color ${codigoVisible} al portapapeles`
);
```

### Regiones dinámicas

El microfeedback utiliza:

```html
aria-live="polite"
```

Esto permite informar sobre cambios dinámicos sin obligar a mover el foco del usuario.

### Reducción de movimiento

El proyecto respeta la preferencia configurada por el usuario mediante:

```css
@media (prefers-reduced-motion: reduce)
```

JavaScript también consulta esta preferencia antes de iniciar el cambio automático de palabras del Hero.

### Decisión documental

Se decidió no afirmar que CLRS cumple completamente con estándares como WCAG, ya que no se realizó una auditoría formal.

En su lugar, se documentó que el proyecto incorpora **consideraciones básicas de accesibilidad**.

### Aprendizaje

Esta parte permitió comprender que accesibilidad no significa únicamente agregar atributos ARIA.

También implica:

- Utilizar correctamente HTML.
- Permitir navegación mediante teclado.
- Mostrar el foco.
- Elegir elementos interactivos apropiados.
- Comunicar cambios dinámicos.
- Considerar preferencias del sistema operativo.

La accesibilidad se trató como parte de la construcción de la interfaz y no como una modificación agregada al final.

---

<a id="interaccion-10"></a>

## 10. Documentación mediante Markdown

### Objetivo

Crear documentación clara para el repositorio de GitHub y aprender a utilizar Markdown como lenguaje de documentación técnica.

### Material utilizado

Para esta etapa se proporcionó una guía de Markdown que explicaba elementos como:

- Encabezados.
- Párrafos.
- Negritas y cursivas.
- Listas.
- Enlaces.
- Imágenes.
- Bloques de código.
- Tablas.
- GitHub Flavored Markdown.

### Prompt utilizado

> Analiza este documento y dame unos lineamientos para poder hacer el Markdown. ¿Tú cómo lo harías?

### Resultado obtenido

A partir de la guía se propuso crear un archivo principal:

```text
README.md
```

con una estructura orientada a presentar profesionalmente el proyecto.

La estructura propuesta fue:

```text
# CLRS

## Demo
## Vista previa
## Descripción
## Funcionalidades
## Tecnologías utilizadas
## Estructura del proyecto
## Cómo usar CLRS
## Decisiones técnicas
## Accesibilidad
## Uso de Inteligencia Artificial
## Mejoras futuras
## Autor
```

### Organización de la documentación

También se decidió separar la evidencia detallada del uso de IA del README principal.

La estructura quedó planteada de la siguiente forma:

```text
ProyectoM1_JunotQuiroz/
│
├── index.html
├── styles.css
├── script.js
├── README.md
│
├── assets/
│
└── Documentacion/
    ├── ia.md
    └── Capturas-IA/
```

### Uso de sintaxis Markdown

Durante la documentación se utilizaron diferentes elementos.

#### Encabezados

```markdown
# CLRS
## Funcionalidades
### Generación de colores
```

#### Negritas

```markdown
**Generador interactivo de paletas de colores**
```

#### Listas

```markdown
- HTML5
- CSS3
- JavaScript
```

#### Enlaces

```markdown
[Ver CLRS en GitHub Pages](https://junotquiroz.github.io/ProyectoM1_JunotQuiroz/)
```

#### Imágenes

```markdown
![Vista principal de CLRS](assets/captura-clrs.png)
```

#### Tablas

```markdown
| Tecnología | Uso |
|---|---|
| HTML5 | Estructura semántica |
| CSS3 | Diseño visual |
| JavaScript | Interactividad |
```

#### Bloques de código

Los bloques de código se utilizaron para mostrar ejemplos técnicos y la estructura de carpetas sin perder el formato.

### Documentación del uso de IA

Se decidió crear este archivo `IA.md` para documentar de manera más detallada:

- Objetivo de cada interacción.
- Prompt utilizado.
- Resultado obtenido.
- Decisiones tomadas.
- Código relevante.
- Problemas encontrados.
- Aprendizajes.

También se propuso incluir un enlace compartido de la conversación completa con ChatGPT como evidencia adicional del proceso.

### Aprendizaje

Esta etapa permitió comprender que la documentación forma parte del desarrollo de software.

Un repositorio no está completo únicamente porque el código funcione.

También debe permitir que otra persona pueda comprender:

- Qué hace el proyecto.
- Cómo utilizarlo.
- Cómo está organizado.
- Qué tecnologías utiliza.
- Qué decisiones técnicas se tomaron.
- Cómo fue desarrollado.

---

<a id="interaccion-11"></a>

## 11. Reflexión final sobre el uso de Inteligencia Artificial

El desarrollo de CLRS permitió experimentar con Inteligencia Artificial como una herramienta de acompañamiento durante un proyecto completo de desarrollo frontend.

La IA fue utilizada desde la etapa inicial de análisis hasta la documentación final.

El proceso incluyó:

1. Comprender los requerimientos del Proyecto Integrador.
2. Analizar una propuesta inicial.
3. Definir el alcance del proyecto.
4. Construir HTML semántico.
5. Diseñar la interfaz con CSS.
6. Implementar la lógica con JavaScript.
7. Crear renderizado dinámico.
8. Trabajar con HSL y HEX.
9. Implementar portapapeles y microfeedback.
10. Detectar y corregir errores.
11. Revisar accesibilidad.
12. Documentar el proyecto con Markdown.

### Forma de trabajo

Una de las decisiones principales fue no solicitar únicamente un proyecto terminado.

Las interacciones se plantearon de forma progresiva, solicitando explicaciones de cada bloque antes o durante su implementación.

Esto permitió utilizar la IA como una herramienta para:

- Proponer soluciones.
- Explicar conceptos.
- Comparar alternativas.
- Identificar posibles problemas.
- Depurar errores.
- Documentar decisiones.

### Validación humana

Las respuestas de la IA no fueron consideradas automáticamente correctas.

Cada funcionalidad fue probada directamente en el navegador.

Durante este proceso incluso se detectó una regresión relacionada con la sección "Tu paleta", demostrando que una solución generada por IA también necesita ser revisada, probada y corregida.

El flujo de trabajo fue:

```text
Prompt
  ↓
Propuesta de IA
  ↓
Comprensión
  ↓
Implementación
  ↓
Prueba
  ↓
¿Funciona?
  ├── Sí → Continuar
  └── No → Analizar y corregir
```

### Principales aprendizajes técnicos

El desarrollo ayudó a reforzar conceptos como:

- HTML semántico.
- Selectores.
- Flexbox.
- CSS Grid.
- Responsive design.
- Variables CSS.
- Arrays.
- Objetos.
- Funciones.
- Ciclos.
- Eventos.
- DOM.
- Render dinámico.
- `Math.random()`.
- `setInterval()`.
- `setTimeout()`.
- Clipboard API.
- Conversión y representación de colores.
- Accesibilidad.
- Debugging.
- Markdown.

### Aprendizaje sobre Inteligencia Artificial

El proyecto también permitió comprender que obtener buenos resultados con IA depende de proporcionar contexto y trabajar de manera iterativa.

Los prompts fueron evolucionando conforme avanzaba el proyecto.

En lugar de preguntar solamente:

> "Hazme una página web"

se proporcionó información sobre:

- Requerimientos.
- Rúbrica.
- Código existente.
- Referencias visuales.
- Problemas encontrados.
- Resultados de pruebas.
- Decisiones tomadas previamente.

Esto permitió mantener continuidad durante el desarrollo.

### Conclusión

La Inteligencia Artificial permitió acelerar algunas tareas y facilitar la comprensión de conceptos, pero no sustituyó las pruebas ni la toma de decisiones durante el proyecto.

El resultado final surgió de la combinación de:

**criterio del estudiante + conocimientos adquiridos + pruebas + iteración + apoyo de IA**

El principal aprendizaje fue utilizar la IA no solamente para obtener código, sino para comprender mejor el proceso de construcción, identificar errores y tomar decisiones técnicas de manera más informada.