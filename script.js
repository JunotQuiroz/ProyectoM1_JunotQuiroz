const palabrasHero = [
    "paz",
    "pasión",
    "energía",
    "elegancia",
    "creatividad",
    "poder",
    "tranquilidad"
];

const recomendacionesIndustria = {

    salud: {
        titulo: "Salud y Bienestar",

        texto:
            "Los azules y verdes suelen comunicar confianza, calma, limpieza y bienestar. Pueden funcionar como base para una identidad visual serena y profesional.",

        colores: [
            {
                nombre: "Azul confianza",
                hex: "#0274BE"
            },
            {
                nombre: "Verde bienestar",
                hex: "#00BF5B"
            },
            {
                nombre: "Turquesa calma",
                hex: "#20B8B2"
            }
        ]
    },


    "medio-ambiente": {
        titulo: "Medio Ambiente",

        texto:
            "Los verdes y tonos naturales pueden reforzar ideas de crecimiento, equilibrio y sostenibilidad. Un azul profundo puede aportar confianza y contraste.",

        colores: [
            {
                nombre: "Verde naturaleza",
                hex: "#00A651"
            },
            {
                nombre: "Verde claro",
                hex: "#7AC943"
            },
            {
                nombre: "Azul profundo",
                hex: "#0274BE"
            }
        ]
    },


    restaurante: {
        titulo: "Restaurantes y Gastronomía",

        texto:
            "Los tonos cálidos como naranja y rojo pueden transmitir energía, cercanía y apetito. Un tono oscuro ayuda a equilibrar la composición y aportar contraste.",

        colores: [
            {
                nombre: "Naranja energía",
                hex: "#FF6900"
            },
            {
                nombre: "Rojo cálido",
                hex: "#E63946"
            },
            {
                nombre: "Carbón",
                hex: "#2B2B2B"
            }
        ]
    },


    turismo: {
        titulo: "Turismo",

        texto:
            "Azules, amarillos y turquesas pueden asociarse con libertad, descubrimiento y experiencias memorables. Funcionan bien para comunicar movimiento y optimismo.",

        colores: [
            {
                nombre: "Azul aventura",
                hex: "#0274BE"
            },
            {
                nombre: "Amarillo energía",
                hex: "#FFD60A"
            },
            {
                nombre: "Turquesa",
                hex: "#00B8A9"
            }
        ]
    }

};

const palabraDinamica =
    document.querySelector("#palabra-dinamica");

const industriaSelector =
    document.querySelector("#industria-selector");

const resultadoRecomendacion =
    document.querySelector("#resultado-recomendacion");

const tituloRecomendacion =
    document.querySelector("#titulo-recomendacion");

const textoRecomendacion =
    document.querySelector("#texto-recomendacion");

const coloresRecomendados =
    document.querySelector("#colores-recomendados");

const botonGenerar =
    document.querySelector("#btn-generar");

const resultadoPaleta =
    document.querySelector(".resultado-paleta");

const contenedorPaleta =
    document.querySelector("#contenedor-paleta");

const radiosFormato =
    document.querySelectorAll(
        'input[name="formato"]'
    );

const botonGuardarPaleta =
    document.querySelector(
        "#btn-guardar-paleta"
    );


const seccionPaletasGuardadas =
    document.querySelector(
        "#seccion-paletas-guardadas"
    );


const contenedorPaletasGuardadas =
    document.querySelector(
        "#contenedor-paletas-guardadas"
    );

const toast =
    document.querySelector("#toast");

let indicePalabra = 0;

let paletaActual = [];

const CLAVE_LOCAL_STORAGE =
    "clrs-paletas-guardadas";


let paletasGuardadas =
    cargarPaletasGuardadas();

let temporizadorToast;

function iniciarRotadorPalabras() {

    const reducirMovimiento =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

    if (reducirMovimiento) {
        return;
    }

    setInterval(() => {

        indicePalabra =
            (indicePalabra + 1)
            % palabrasHero.length;

        palabraDinamica.textContent =
            palabrasHero[indicePalabra];

    }, 2500);

}

function mostrarRecomendacionIndustria() {

    const industriaSeleccionada =
        industriaSelector.value;

    const recomendacion =
        recomendacionesIndustria[
            industriaSeleccionada
        ];

    if (!recomendacion) {

        resultadoRecomendacion.hidden = true;

        return;
    }

    tituloRecomendacion.textContent =
        recomendacion.titulo;

    textoRecomendacion.textContent =
        recomendacion.texto;

    coloresRecomendados.innerHTML = "";

    recomendacion.colores.forEach((color) => {

        const swatch =
            document.createElement("div");

        swatch.classList.add(
            "swatch-recomendado"
        );

        swatch.style.backgroundColor =
            color.hex;

        swatch.setAttribute(
            "role",
            "img"
        );

        swatch.setAttribute(
            "aria-label",
            `${color.nombre}: ${color.hex}`
        );

        swatch.title =
            `${color.nombre} · ${color.hex}`;

        coloresRecomendados.appendChild(
            swatch
        );

    });

    resultadoRecomendacion.hidden = false;

}

function numeroAleatorio(min, max) {

    return Math.floor(
        Math.random()
        * (max - min + 1)
    ) + min;

}

function obtenerCantidadSeleccionada() {

    const opcionSeleccionada =
        document.querySelector(
            'input[name="cantidad"]:checked'
        );

    return Number(
        opcionSeleccionada.value
    );

}

function obtenerFormatoSeleccionado() {

    const opcionSeleccionada =
        document.querySelector(
            'input[name="formato"]:checked'
        );


    return opcionSeleccionada.value;

}

// HSL - HEX 

function convertirHslAHex(h, s, l) {

    s /= 100;
    l /= 100;

    const c =
        (1 - Math.abs(2 * l - 1)) * s;

    const x =
        c
        * (
            1
            - Math.abs(
                (h / 60) % 2 - 1
            )
        );

    const m =
        l - c / 2;

    let r = 0;
    let g = 0;
    let b = 0;

    if (h >= 0 && h < 60) {

        r = c;
        g = x;

    } else if (h < 120) {

        r = x;
        g = c;

    } else if (h < 180) {

        g = c;
        b = x;

    } else if (h < 240) {

        g = x;
        b = c;

    } else if (h < 300) {

        r = x;
        b = c;

    } else {

        r = c;
        b = x;

    }


    r = Math.round(
        (r + m) * 255
    );

    g = Math.round(
        (g + m) * 255
    );

    b = Math.round(
        (b + m) * 255
    );


    const rojoHex =
        r
            .toString(16)
            .padStart(2, "0");


    const verdeHex =
        g
            .toString(16)
            .padStart(2, "0");


    const azulHex =
        b
            .toString(16)
            .padStart(2, "0");


    return (
        `#${rojoHex}${verdeHex}${azulHex}`
    ).toUpperCase();

}

// GENERACIÓN DE COLORES //

function crearColorAleatorio() {

    const h =
        numeroAleatorio(
            0,
            359
        );

    const s =
        numeroAleatorio(
            50,
            90
        );


    const l =
        numeroAleatorio(
            35,
            70
        );


    const hsl =
        `hsl(${h}, ${s}%, ${l}%)`;


    const hex =
        convertirHslAHex(
            h,
            s,
            l
        );

    return {
        h,
        s,
        l,
        hsl,
        hex,
        bloqueado: false
    };

}


//GENERACIÓN DE PALETA //

function generarNuevaPaleta() {

    const cantidad =
        obtenerCantidadSeleccionada();

    const coloresBloqueados =
        paletaActual.filter(
            (color) => color.bloqueado
        );

    if (
        coloresBloqueados.length >
        cantidad
    ) {

        mostrarToast(
            `Tienes ${coloresBloqueados.length} colores bloqueados. Desbloquea algunos antes de generar una paleta de ${cantidad}.`
        );

        return;
    }

    const nuevaPaleta =
        new Array(cantidad).fill(null);

    const bloqueadosFueraDeRango = [];

    paletaActual.forEach(
        (color, indice) => {

            if (!color.bloqueado) {
                return;
            }

            if (indice < cantidad) {

                nuevaPaleta[indice] =
                    color;

            } else {

                bloqueadosFueraDeRango.push(
                    color
                );

            }

        }
    );

    const posicionesLibres = [];


    nuevaPaleta.forEach(
        (color, indice) => {

            if (color === null) {

                posicionesLibres.push(
                    indice
                );

            }

        }
    );

    const posicionesParaReubicar =
        posicionesLibres.slice(
            -bloqueadosFueraDeRango.length
        );


    bloqueadosFueraDeRango.forEach(
        (color, indice) => {

            const nuevaPosicion =
                posicionesParaReubicar[indice];


            nuevaPaleta[nuevaPosicion] =
                color;

        }
    );

    for (
        let i = 0;
        i < nuevaPaleta.length;
        i++
    ) {

        if (
            nuevaPaleta[i] === null
        ) {

            nuevaPaleta[i] =
                crearColorAleatorio();

        }

    }

    paletaActual =
        nuevaPaleta;


    resultadoPaleta.hidden =
        false;


    renderizarPaleta();

}

function alternarBloqueoColor(indice) {

    const color =
        paletaActual[indice];

    if (!color) {
        return;
    }

    color.bloqueado =
        !color.bloqueado;

    renderizarPaleta();

}

function obtenerIconoCandado(bloqueado) {

    if (bloqueado) {

        return `
            <svg
                class="icono-candado"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
            >
                <rect
                    x="5"
                    y="10"
                    width="14"
                    height="10"
                    rx="2"
                ></rect>

                <path
                    d="M8 10V7
                      a4 4 0 0 1 8 0
                      v3"
                ></path>

                <circle
                    cx="12"
                    cy="15"
                    r="1"
                ></circle>
            </svg>
        `;

    }

    return `
        <svg
            class="icono-candado"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
        >
            <rect
                x="5"
                y="10"
                width="14"
                height="10"
                rx="2"
            ></rect>

            <path
                d="M8 10V7
                  a4 4 0 0 1 7.5-2"
            ></path>

            <circle
                cx="12"
                cy="15"
                r="1"
            ></circle>
        </svg>
    `;

}

function renderizarPaleta() {

    const formatoSeleccionado =
        obtenerFormatoSeleccionado();


    contenedorPaleta.innerHTML = "";


    contenedorPaleta.dataset.cantidad =
        paletaActual.length;


    paletaActual.forEach(
        (color, indice) => {


            const codigoVisible =
                formatoSeleccionado === "hex"
                    ? color.hex
                    : color.hsl;

            const tarjeta =
                document.createElement(
                    "article"
                );


            tarjeta.classList.add(
                "tarjeta-color"
            );


            tarjeta.style.setProperty(
                "--color-tarjeta",
                color.hex
            );

            const botonCopiar =
                document.createElement(
                    "button"
                );


            botonCopiar.type =
                "button";


            botonCopiar.classList.add(
                "boton-copiar-color"
            );


            botonCopiar.setAttribute(
                "aria-label",
                `Copiar color ${codigoVisible} al portapapeles`
            );


            const codigo =
                document.createElement(
                    "span"
                );


            codigo.classList.add(
                "codigo-color"
            );


            codigo.textContent =
                codigoVisible;


            botonCopiar.appendChild(
                codigo
            );


            botonCopiar.addEventListener(
                "click",
                () => {

                    copiarColor(
                        codigoVisible
                    );

                }
            );

            const botonBloqueo =
                document.createElement(
                    "button"
                );


            botonBloqueo.type =
                "button";


            botonBloqueo.classList.add(
                "boton-bloqueo"
            );


            botonBloqueo.innerHTML =
    obtenerIconoCandado(
        color.bloqueado
    );

            botonBloqueo.setAttribute(
                "aria-pressed",
                color.bloqueado
            );


            if (color.bloqueado) {

                botonBloqueo.setAttribute(
                    "aria-label",
                    `Desbloquear color ${codigoVisible}`
                );

                botonBloqueo.title =
                    "Desbloquear color";


                tarjeta.classList.add(
                    "bloqueada"
                );

            } else {

                botonBloqueo.setAttribute(
                    "aria-label",
                    `Bloquear color ${codigoVisible}`
                );

                botonBloqueo.title =
                    "Bloquear color";

            }


            botonBloqueo.addEventListener(
                "click",
                () => {

                    alternarBloqueoColor(
                        indice
                    );

                }
            );

            tarjeta.appendChild(
                botonCopiar
            );


            tarjeta.appendChild(
                botonBloqueo
            );


            contenedorPaleta.appendChild(
                tarjeta
            );

        }
    );

}

// COPIAR COLOR //

async function copiarColor(codigo) {

    if (!navigator.clipboard) {

        mostrarToast(
            "El portapapeles necesita HTTPS o localhost para funcionar."
        );

        return;
    }


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

function cargarPaletasGuardadas() {

    const datosGuardados =
        localStorage.getItem(
            CLAVE_LOCAL_STORAGE
        );


    if (!datosGuardados) {

        return [];

    }


    try {

        const datosConvertidos =
            JSON.parse(
                datosGuardados
            );


        if (
            Array.isArray(
                datosConvertidos
            )
        ) {

            return datosConvertidos;

        }


        return [];


    } catch (error) {

        console.error(
            "No se pudieron cargar las paletas:",
            error
        );


        return [];

    }

}

function actualizarLocalStorage() {

    localStorage.setItem(
        CLAVE_LOCAL_STORAGE,
        JSON.stringify(
            paletasGuardadas
        )
    );

}

function guardarPaletaActual() {

    if (
        paletaActual.length === 0
    ) {

        return;

    }


    const nuevaPaletaGuardada = {

        id: Date.now(),

        colores:
            paletaActual.map(
                (color) => {

                    return {

                        h: color.h,
                        s: color.s,
                        l: color.l,
                        hsl: color.hsl,
                        hex: color.hex

                    };

                }
            )

    };


    paletasGuardadas.unshift(
        nuevaPaletaGuardada
    );


    actualizarLocalStorage();


    renderizarPaletasGuardadas();


    mostrarToast(
        "Paleta guardada correctamente"
    );

}

function renderizarPaletasGuardadas() {

    contenedorPaletasGuardadas.innerHTML =
        "";


    if (
        paletasGuardadas.length === 0
    ) {

        seccionPaletasGuardadas.hidden =
            true;

        return;

    }


    seccionPaletasGuardadas.hidden =
        false;


    paletasGuardadas.forEach(
        (paletaGuardada) => {


            const tarjeta =
                document.createElement(
                    "article"
                );


            tarjeta.classList.add(
                "paleta-guardada"
            );


            const preview =
                document.createElement(
                    "div"
                );


            preview.classList.add(
                "preview-paleta-guardada"
            );


            paletaGuardada.colores.forEach(
                (color) => {


                    const muestra =
                        document.createElement(
                            "div"
                        );


                    muestra.classList.add(
                        "color-guardado"
                    );


                    muestra.style.backgroundColor =
                        color.hex;


                    preview.appendChild(
                        muestra
                    );

                }
            );


            const acciones =
                document.createElement(
                    "div"
                );


            acciones.classList.add(
                "acciones-paleta-guardada"
            );


            const botonUsar =
                document.createElement(
                    "button"
                );


            botonUsar.type =
                "button";


            botonUsar.textContent =
                "Usar paleta";


            botonUsar.addEventListener(
                "click",
                () => {

                    cargarPaletaGuardada(
                        paletaGuardada.id
                    );

                }
            );


            const botonEliminar =
                document.createElement(
                    "button"
                );


            botonEliminar.type =
                "button";


            botonEliminar.textContent =
                "Eliminar";


            botonEliminar.addEventListener(
                "click",
                () => {

                    eliminarPaletaGuardada(
                        paletaGuardada.id
                    );

                }
            );


            acciones.appendChild(
                botonUsar
            );


            acciones.appendChild(
                botonEliminar
            );


            tarjeta.appendChild(
                preview
            );


            tarjeta.appendChild(
                acciones
            );


            contenedorPaletasGuardadas.appendChild(
                tarjeta
            );

        }
    );

}

function cargarPaletaGuardada(id) {

    const paletaEncontrada =
        paletasGuardadas.find(
            (paleta) =>
                paleta.id === id
        );


    if (!paletaEncontrada) {

        return;

    }


    paletaActual =
        paletaEncontrada.colores.map(
            (color) => {

                return {

                    ...color,
                    bloqueado: false

                };

            }
        );

        const radioCantidad =
    document.querySelector(
        `input[name="cantidad"][value="${paletaActual.length}"]`
    );


if (radioCantidad) {

    radioCantidad.checked =
        true;

}

    resultadoPaleta.hidden =
        false;


    renderizarPaleta();


    mostrarToast(
        "Paleta cargada"
    );

}

function eliminarPaletaGuardada(id) {

    paletasGuardadas =
        paletasGuardadas.filter(
            (paleta) =>
                paleta.id !== id
        );


    actualizarLocalStorage();


    renderizarPaletasGuardadas();


    mostrarToast(
        "Paleta eliminada"
    );

}

// MICROFEEDBACK //

function mostrarToast(mensaje) {

    toast.textContent =
        mensaje;

    toast.classList.add(
        "mostrar"
    );


    clearTimeout(
        temporizadorToast
    );

    temporizadorToast =
        setTimeout(
            () => {

                toast.classList.remove(
                    "mostrar"
                );

            },
            2200
        );

}


// EVENTOS //

industriaSelector.addEventListener(
    "change",
    mostrarRecomendacionIndustria
);


botonGenerar.addEventListener(
    "click",
    generarNuevaPaleta
);

radiosFormato.forEach((radio) => {

    radio.addEventListener(
        "change",
        () => {

            if (
                paletaActual.length > 0
            ) {

                renderizarPaleta();

            }

        }
    );

});

botonGuardarPaleta.addEventListener(
    "click",
    guardarPaletaActual
);

renderizarPaletasGuardadas();
iniciarRotadorPalabras();









