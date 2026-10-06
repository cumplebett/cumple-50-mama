/* =========================================================
   50 AÑOS DE BETT
   SCRIPT PRINCIPAL
   ========================================================= */


/* =========================================================
   PUNTAJES
   ========================================================= */

const scores = {

    team1: {
        kahoot: 0,
        rondo: 0,
        songs: 0
    },

    team2: {
        kahoot: 0,
        rondo: 0,
        songs: 0
    },

    team3: {
        kahoot: 0,
        rondo: 0,
        songs: 0
    }

};


/* =========================================================
   ROSCO 1
   ========================================================= */

const rosco1 = [

    {
        letter: "A",
        type: "EMPIEZA CON A",
        question: "¿Montaña más alta fuera de Asia?",
        answer: "ACONCAGUA"
    },

    {
        letter: "B",
        type: "EMPIEZA CON B",
        question: "Apellido del científico chiflado inventor del DeLorean en Volver al futuro.",
        answer: "BROWN"
    },

    {
        letter: "C",
        type: "EMPIEZA CON C",
        question: "Alegre, veloz y zapateada danza tradicional argentina.",
        answer: "CHACARERA"
    },

    {
        letter: "D",
        type: "EMPIEZA CON D",
        question: "Nombre del pez azul con problemas de memoria en las películas de Pixar.",
        answer: "DORY"
    },

    {
        letter: "E",
        type: "EMPIEZA CON E",
        question: "Insignia patria histórica de tonos celestes y blancos.",
        answer: "ESCARAPELA"
    },

    {
        letter: "F",
        type: "EMPIEZA CON F",
        question: "Proceso mediante el cual las plantas elaboran su propio alimento utilizando la luz solar.",
        answer: "FOTOSÍNTESIS"
    },

    {
        letter: "G",
        type: "EMPIEZA CON G",
        question: "Compañía tecnológica estadounidense famosa por su buscador.",
        answer: "GOOGLE"
    },

    {
        letter: "H",
        type: "EMPIEZA CON H",
        question: "Famoso director británico considerado el indiscutible Maestro del Suspenso.",
        answer: "HITCHCOCK"
    },

    {
        letter: "I",
        type: "EMPIEZA CON I",
        question: "Popular red social de fotografías y videos propiedad de Meta.",
        answer: "INSTAGRAM"
    },

    {
        letter: "J",
        type: "EMPIEZA CON J",
        question: "Apellido del legendario escolta estadounidense de los Chicago Bulls que marcó los años 90.",
        answer: "JORDAN"
    },

    {
        letter: "K",
        type: "EMPIEZA CON K",
        question: "Famosa banda de heavy metal conocida por sus rostros pintados.",
        answer: "KISS"
    },

    {
        letter: "L",
        type: "EMPIEZA CON L",
        question: "Famoso museo parisino donde se encuentra la Mona Lisa.",
        answer: "LOUVRE"
    },

    {
        letter: "M",
        type: "EMPIEZA CON M",
        question: "Apellido del célebre pintor francés, uno de los máximos exponentes del impresionismo.",
        answer: "MONET"
    },

    {
        letter: "N",
        type: "EMPIEZA CON N",
        question: "Apellido del científico británico, padre de la mecánica clásica.",
        answer: "NEWTON"
    },

    {
        letter: "O",
        type: "EMPIEZA CON O",
        question: "Famoso metal precioso cuyo símbolo químico es Au.",
        answer: "ORO"
    },

    {
        letter: "P",
        type: "EMPIEZA CON P",
        question: "Padre absoluto del tango contemporáneo y maestro del bandoneón.",
        answer: "PIAZZOLLA"
    },

    {
        letter: "Q",
        type: "EMPIEZA CON Q",
        question: "Imponente árbol nativo de la región chaqueña famoso por la extrema dureza de sus troncos.",
        answer: "QUEBRACHO"
    },

    {
        letter: "R",
        type: "EMPIEZA CON R",
        question: "¿Cuál es el país más grande del mundo por superficie?",
        answer: "RUSIA"
    },

    {
        letter: "S",
        type: "EMPIEZA CON S",
        question: "Nombre del ogro verde protagonista de la saga de DreamWorks.",
        answer: "SHREK"
    },

    {
        letter: "T",
        type: "EMPIEZA CON T",
        question: "Provincia norteña donde se declaró la independencia argentina en 1816.",
        answer: "TUCUMÁN"
    },

    {
        letter: "U",
        type: "EMPIEZA CON U",
        question: "¿Qué planeta es el séptimo del Sistema Solar?",
        answer: "URANO"
    },

    {
        letter: "V",
        type: "EMPIEZA CON V",
        question: "¿Cómo se llama el volcán italiano situado cerca de Nápoles que sepultó Pompeya?",
        answer: "VESUBIO"
    },

    {
        letter: "W",
        type: "EMPIEZA CON W",
        question: "¿Qué famoso torneo de tenis se disputa sobre césped en Londres?",
        answer: "WIMBLEDON"
    },

    {
        letter: "X",
        type: "EMPIEZA CON X",
        question: "Instrumento musical de percusión compuesto por láminas afinadas.",
        answer: "XILÓFONO"
    },

    {
        letter: "Y",
        type: "CONTIENE LA Y",
        question: "¿Qué país ganó la primera Copa del Mundo de fútbol?",
        answer: "URUGUAY"
    },

    {
        letter: "Z",
        type: "EMPIEZA CON Z",
        question: "Viento cálido y seco que desciende de la cordillera en la región de Cuyo.",
        answer: "ZONDA"
    }

];


/* =========================================================
   ROSCO 2
   ========================================================= */

const rosco2 = [

    {
        letter: "A",
        type: "EMPIEZA CON A",
        question: "Nombre del desierto más extenso, frío y árido del norte de Chile.",
        answer: "ATACAMA"
    },

    {
        letter: "B",
        type: "EMPIEZA CON B",
        question: "Antigua civilización que construyó los famosos Jardines Colgantes.",
        answer: "BABILONIA"
    },

    {
        letter: "C",
        type: "EMPIEZA CON C",
        question: "Nombre del muñeco pelirrojo poseído por el alma de un asesino.",
        answer: "CHUCKY"
    },

    {
        letter: "D",
        type: "EMPIEZA CON D",
        question: "Nombre de la máquina del tiempo en Volver al futuro.",
        answer: "DELOREAN"
    },

    {
        letter: "E",
        type: "EMPIEZA CON E",
        question: "Apellido del físico alemán creador de la teoría de la relatividad.",
        answer: "EINSTEIN"
    },

    {
        letter: "F",
        type: "EMPIEZA CON F",
        question: "Apellido del padre del psicoanálisis.",
        answer: "FREUD"
    },

    {
        letter: "G",
        type: "EMPIEZA CON G",
        question: "Conjunto de islas volcánicas famosas por las investigaciones de Charles Darwin.",
        answer: "GALÁPAGOS"
    },

    {
        letter: "H",
        type: "EMPIEZA CON H",
        question: "Nombre de la academia de magia a la que asiste Harry Potter.",
        answer: "HOGWARTS"
    },

    {
        letter: "I",
        type: "EMPIEZA CON I",
        question: "Porción de tierra rodeada de agua por todas partes.",
        answer: "ISLA"
    },

    {
        letter: "J",
        type: "EMPIEZA CON J",
        question: "Planeta más grande del Sistema Solar.",
        answer: "JÚPITER"
    },

    {
        letter: "K",
        type: "EMPIEZA CON K",
        question: "Nombre del famoso payaso de Los Simpson.",
        answer: "KRUSTY"
    },

    {
        letter: "L",
        type: "EMPIEZA CON L",
        question: "Capa más externa, rígida y sólida de la Tierra.",
        answer: "LITÓSFERA"
    },

    {
        letter: "M",
        type: "EMPIEZA CON M",
        question: "Planeta conocido como el Planeta Rojo.",
        answer: "MARTE"
    },

    {
        letter: "N",
        type: "EMPIEZA CON N",
        question: "Río más largo de África.",
        answer: "NILO"
    },

    {
        letter: "O",
        type: "EMPIEZA CON O",
        question: "Continente que incluye Australia y Nueva Zelanda.",
        answer: "OCEANÍA"
    },

    {
        letter: "P",
        type: "EMPIEZA CON P",
        question: "Océano más profundo y extenso del planeta.",
        answer: "PACÍFICO"
    },

    {
        letter: "Q",
        type: "EMPIEZA CON Q",
        question: "Célebre novela de Miguel de Cervantes.",
        answer: "QUIJOTE"
    },

    {
        letter: "R",
        type: "EMPIEZA CON R",
        question: "Movimiento cultural y artístico europeo de los siglos XV y XVI.",
        answer: "RENACIMIENTO"
    },

    {
        letter: "S",
        type: "EMPIEZA CON S",
        question: "Nombre de la espada láser utilizada en Star Wars.",
        answer: "SABLE"
    },

    {
        letter: "T",
        type: "EMPIEZA CON T",
        question: "Sigla del compuesto químico trinitrotolueno.",
        answer: "TNT"
    },

    {
        letter: "U",
        type: "CONTIENE LA U",
        question: "Idioma oficial hablado mayoritariamente en Brasil.",
        answer: "PORTUGUÉS"
    },

    {
        letter: "V",
        type: "EMPIEZA CON V",
        question: "Acuerdo de paz firmado en 1919 que puso fin formalmente a la Primera Guerra Mundial.",
        answer: "VERSALLES"
    },

    {
        letter: "W",
        type: "EMPIEZA CON W",
        question: "Robot protagonista de una película de Pixar que limpia la Tierra.",
        answer: "WALL-E"
    },

    {
        letter: "X",
        type: "CONTIENE LA X",
        question: "País caracterizado por su gastronomía picante.",
        answer: "MÉXICO"
    },

    {
        letter: "Y",
        type: "CONTIENE LA Y",
        question: "Personaje de Looney Tunes que intenta atrapar al Correcaminos.",
        answer: "COYOTE"
    },

    {
        letter: "Z",
        type: "EMPIEZA CON Z",
        question: "Apellido del creador de Facebook.",
        answer: "ZUCKERBERG"
    }

];


/* =========================================================
   ROSCO 3
   ========================================================= */

const rosco3 = [

    {
        letter: "A",
        type: "EMPIEZA CON A",
        question: "Ciudad que fue la primera anfitriona de los Juegos Olímpicos de la era moderna.",
        answer: "ATENAS"
    },

    {
        letter: "B",
        type: "EMPIEZA CON B",
        question: "Escritor argentino, autor de Ficciones y El Aleph.",
        answer: "BORGES"
    },

    {
        letter: "C",
        type: "EMPIEZA CON C",
        question: "Provincia argentina donde nacieron La Mona Jiménez y Rodrigo.",
        answer: "CÓRDOBA"
    },

    {
        letter: "D",
        type: "EMPIEZA CON D",
        question: "Personaje literario, conde vampiro creado por Bram Stoker.",
        answer: "DRÁCULA"
    },

    {
        letter: "E",
        type: "EMPIEZA CON E",
        question: "Moneda oficial utilizada por gran parte de los países de la Unión Europea.",
        answer: "EURO"
    },

    {
        letter: "F",
        type: "EMPIEZA CON F",
        question: "Apellido del histórico piloto argentino, cinco veces campeón mundial de Fórmula 1.",
        answer: "FANGIO"
    },

    {
        letter: "G",
        type: "EMPIEZA CON G",
        question: "Estilo artístico y arquitectónico caracterizado por grandes catedrales, arcos apuntados y vitrales.",
        answer: "GÓTICO"
    },

    {
        letter: "H",
        type: "EMPIEZA CON H",
        question: "Dios griego del inframundo y de los muertos.",
        answer: "HADES"
    },

    {
        letter: "I",
        type: "EMPIEZA CON I",
        question: "Cataratas argentinas ubicadas en la provincia de Misiones.",
        answer: "IGUAZÚ"
    },

    {
        letter: "J",
        type: "EMPIEZA CON J",
        question: "Piedra ornamental de color verdoso.",
        answer: "JADE"
    },

    {
        letter: "K",
        type: "EMPIEZA CON K",
        question: "Mineral ficticio de color verde que debilita a Superman.",
        answer: "KRYPTONITA"
    },

    {
        letter: "L",
        type: "EMPIEZA CON L",
        question: "Construcción formada por caminos y pasadizos donde estaba encerrado el Minotauro.",
        answer: "LABERINTO"
    },

    {
        letter: "M",
        type: "EMPIEZA CON M",
        question: "Juego en el que se compran propiedades, casas y hoteles.",
        answer: "MONOPOLY"
    },

    {
        letter: "N",
        type: "EMPIEZA CON N",
        question: "Río fundamental para el desarrollo de la civilización egipcia.",
        answer: "NILO"
    },

    {
        letter: "O",
        type: "EMPIEZA CON O",
        question: "Escritor británico, autor de 1984 y Rebelión en la granja.",
        answer: "ORWELL"
    },

    {
        letter: "P",
        type: "EMPIEZA CON P",
        question: "Región del extremo sur de Argentina y Chile.",
        answer: "PATAGONIA"
    },

    {
        letter: "Q",
        type: "EMPIEZA CON Q",
        question: "Número mínimo de miembros presentes necesario para tomar decisiones válidas en una asamblea.",
        answer: "QUÓRUM"
    },

    {
        letter: "R",
        type: "EMPIEZA CON R",
        question: "Marca francesa de automóviles.",
        answer: "RENAULT"
    },

    {
        letter: "S",
        type: "EMPIEZA CON S",
        question: "Serie o película derivada de otra existente.",
        answer: "SPINOFF"
    },

    {
        letter: "T",
        type: "EMPIEZA CON T",
        question: "Juego de piezas que caen y deben encajarse para completar líneas.",
        answer: "TETRIS"
    },

    {
        letter: "U",
        type: "CONTIENE LA U",
        question: "Famoso héroe de la mitología griega.",
        answer: "AQUILES"
    },

    {
        letter: "V",
        type: "EMPIEZA CON V",
        question: "Actor estadounidense conocido por interpretar a Dominic Toretto.",
        answer: "VIN DIESEL"
    },

    {
        letter: "W",
        type: "EMPIEZA CON W",
        question: "Famosa ensalada preparada con manzana, apio, nueces y mayonesa.",
        answer: "WALDORF"
    },

    {
        letter: "X",
        type: "CONTIENE LA X",
        question: "Medio de transporte protagonista de una canción de Pitbull.",
        answer: "TAXI"
    },

    {
        letter: "Y",
        type: "EMPIEZA CON Y",
        question: "Antiguo país de Europa que se disolvió durante la década de 1990.",
        answer: "YUGOSLAVIA"
    },

    {
        letter: "Z",
        type: "EMPIEZA CON Z",
        question: "Disciplina de ejercicio aeróbico que combina baile y música.",
        answer: "ZUMBA"
    }

];


/* =========================================================
   EQUIPOS
   ========================================================= */

const TEAM_DATA = {

    team1: {
        rosco: rosco3,
        name: "🔴 Los Originales"
    },

    team2: {
        rosco: rosco1,
        name: "🔵 Los Herederos"
    },

    team3: {
        rosco: rosco2,
        name: "🟢 Las Históricas"
    }

};


/* =========================================================
   VARIABLES
   ========================================================= */

let currentTeam = "team1";

let currentIndex = 0;

let rondoStates = {};

let rondoHits = {

    team1: 0,
    team2: 0,
    team3: 0

};

let rondoAwarded = false;


/* =========================================================
   OBTENER ROSCO
   ========================================================= */

function getCurrentRosco() {

    return TEAM_DATA[currentTeam].rosco;

}


/* =========================================================
   ESTADO INICIAL
   ========================================================= */

function createInitialRondoState() {

    return {

        team1: rosco3.map(
            () => "pending"
        ),

        team2: rosco1.map(
            () => "pending"
        ),

        team3: rosco2.map(
            () => "pending"
        )

    };

}


/* =========================================================
   CARGAR PUNTAJES
   ========================================================= */

function loadScores() {

    const saved =
        localStorage.getItem(
            "bettScoresV2"
        );

    if (saved) {

        try {

            const parsed =
                JSON.parse(saved);

            scores.team1 =
                parsed.team1 ||
                scores.team1;

            scores.team2 =
                parsed.team2 ||
                scores.team2;

            scores.team3 =
                parsed.team3 ||
                scores.team3;

        } catch (error) {

            console.error(error);

        }

    }

    updateScoreboard();

}


/* =========================================================
   GUARDAR
   ========================================================= */

function saveScores() {

    localStorage.setItem(
        "bettScoresV2",
        JSON.stringify(scores)
    );

}


/* =========================================================
   TOTAL
   ========================================================= */

function getTotal(team) {

    return (
        Number(scores[team].kahoot || 0) +
        Number(scores[team].rondo || 0) +
        Number(scores[team].songs || 0)
    );

}


/* =========================================================
   MARCADOR
   ========================================================= */

function updateScoreboard() {

    for (
        let i = 1;
        i <= 3;
        i++
    ) {

        const team =
            "team" + i;

        const total =
            getTotal(team);

        const score =
            document.getElementById(
                "score-team-" + i
            );

        const kahoot =
            document.getElementById(
                "kahoot-" + i
            );

        const rondo =
            document.getElementById(
                "rondo-" + i
            );

        const songs =
            document.getElementById(
                "songs-" + i
            );

        const totalElement =
            document.getElementById(
                "total-" + i
            );


        if (score) {
            score.textContent =
                total;
        }

        if (kahoot) {
            kahoot.textContent =
                scores[team].kahoot;
        }

        if (rondo) {
            rondo.textContent =
                scores[team].rondo;
        }

        if (songs) {
            songs.textContent =
                scores[team].songs;
        }

        if (totalElement) {
            totalElement.textContent =
                total;
        }

    }

    updateRondoScore();

}


/* =========================================================
   SUMAR PUNTOS
   ========================================================= */

function addPoints(
    team,
    game,
    points
) {

    scores[team][game] =
        Number(scores[team][game] || 0) +
        Number(points || 0);

    saveScores();

    updateScoreboard();

}


/* =========================================================
   RESET MARCADOR
   ========================================================= */

function resetScores() {

    if (
        !confirm(
            "¿Seguro que querés reiniciar todos los puntajes?"
        )
    ) {

        return;

    }


    for (
        const team of [
            "team1",
            "team2",
            "team3"
        ]
    ) {

        scores[team].kahoot = 0;
        scores[team].rondo = 0;
        scores[team].songs = 0;

    }


    saveScores();

    updateScoreboard();

}


/* =========================================================
   ABRIR JUEGO
   ========================================================= */

function openGame(game) {

    if (
        game === "rondo"
    ) {

        openRondo();

        return;

    }


    const modal =
        document.getElementById(
            "game-modal"
        );

    const title =
        document.getElementById(
            "modal-title"
        );

    const description =
        document.getElementById(
            "modal-description"
        );

    const icon =
        document.getElementById(
            "modal-icon"
        );


    if (
        game === "kahoot"
    ) {

        icon.textContent =
            "🧠";

        title.textContent =
            "Kahoot";

        description.textContent =
            "Acá vamos a cargar las preguntas sobre Bett.";

    }


    if (
        game === "songs"
    ) {

        icon.textContent =
            "🎵";

        title.textContent =
            "Canciones";

        description.textContent =
            "Adiviná la canción, el artista y el año o década.";

    }


    modal.classList.add(
        "active"
    );

}


/* =========================================================
   CERRAR JUEGO
   ========================================================= */

function closeGame() {

    const modal =
        document.getElementById(
            "game-modal"
        );

    if (modal) {

        modal.classList.remove(
            "active"
        );

    }

}


/* =========================================================
   ABRIR RONDO
   ========================================================= */

function openRondo() {

    const modal =
        document.getElementById(
            "rondo-modal"
        );

    modal.classList.add(
        "active"
    );

    document.body.style.overflow =
        "hidden";


    if (
        Object.keys(
            rondoStates
        ).length === 0
    ) {

        rondoStates =
            createInitialRondoState();

    }


    currentTeam =
        "team1";


    currentIndex =
        findNextAvailableLetter(
            currentTeam,
            0
        );


    updateRondoTabs();

    updateRondoTeamUI();

    renderRosco();


    if (
        currentIndex !== -1
    ) {

        showQuestion(
            currentIndex
        );

    }

}


/* =========================================================
   CERRAR RONDO
   ========================================================= */

function closeRondo() {

    const modal =
        document.getElementById(
            "rondo-modal"
        );

    modal.classList.remove(
        "active"
    );

    document.body.style.overflow =
        "";

}


/* =========================================================
   CAMBIAR ROSCO
   ========================================================= */

function selectRosco(number) {

    if (rondoAwarded) {
        return;
    }


    currentTeam =
        "team" + number;


    currentIndex =
        findNextAvailableLetter(
            currentTeam,
            0
        );


    updateRondoTabs();

    updateRondoTeamUI();

    renderRosco();


    if (
        currentIndex !== -1
    ) {

        showQuestion(
            currentIndex
        );

    } else {

        finishCurrentTeam();

    }

}


/* =========================================================
   TABS
   ========================================================= */

function updateRondoTabs() {

    const tabs =
        document.querySelectorAll(
            ".rondo-tab"
        );


    tabs.forEach(
        (
            tab,
            index
        ) => {

            tab.classList.toggle(
                "active",
                "team" +
                (index + 1) ===
                currentTeam
            );

        }
    );

}


/* =========================================================
   SIGUIENTE LETRA
   ========================================================= */

function findNextAvailableLetter(
    team,
    fromIndex
) {

    const states =
        rondoStates[team];


    if (!states) {
        return -1;
    }


    const length =
        states.length;


    const start =
        (
            Number(fromIndex) +
            length
        ) %
        length;


    /* PENDIENTES */

    for (
        let step = 0;
        step < length;
        step++
    ) {

        const index =
            (
                start +
                step
            ) %
            length;


        if (
            states[index] ===
            "pending"
        ) {

            return index;

        }

    }


    /* PASADAS */

    for (
        let step = 0;
        step < length;
        step++
    ) {

        const index =
            (
                start +
                step
            ) %
            length;


        if (
            states[index] ===
            "pass"
        ) {

            return index;

        }

    }


    return -1;

}


/* =========================================================
   ⭐ RENDERIZAR ROSCO
   ========================================================= */

function renderRosco() {

    const rosco =
        document.getElementById(
            "rosco"
        );


    if (!rosco) {
        return;
    }


    const data =
        getCurrentRosco();


    rosco.innerHTML =
        "";


    /*
     * RADIO REAL DEL ROSCO.
     *
     * El contenedor mide 600px.
     *
     * Las letras se colocan a 47%
     * del radio para que queden
     * completamente dentro del círculo.
     */

    const radius =
        47;


    /*
     * 26 LETRAS.
     *
     * -90 grados = arriba.
     *
     * Cada letra avanza:
     *
     * 360 / 26 = 13.846°
     *
     * Por lo tanto:
     *
     * A arriba
     * B derecha-arriba
     * C derecha-arriba
     * ...
     * N abajo
     * ...
     * Z izquierda-arriba
     */

    data.forEach(
        (
            item,
            index
        ) => {


            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.className =
                "rosco-letter";


            button.textContent =
                item.letter;


            button.dataset.index =
                index;


            /* =========================================
               CÁLCULO CIRCULAR
               ========================================= */

            const angle =
                -90 +
                (
                    index *
                    (
                        360 /
                        data.length
                    )
                );


            const radians =
                angle *
                Math.PI /
                180;


            const x =
                50 +
                radius *
                Math.cos(
                    radians
                );


            const y =
                50 +
                radius *
                Math.sin(
                    radians
                );


            /*
             * POSICIÓN DIRECTAMENTE
             * SOBRE EL BOTÓN.
             */

            button.style.left =
                x + "%";


            button.style.top =
                y + "%";


            /* =========================================
               ESTADO
               ========================================= */

            const state =
                rondoStates[
                    currentTeam
                ]?.[
                    index
                ] ||
                "pending";


            button.classList.add(
                state
            );


            /* =========================================
               LETRA ACTUAL
               ========================================= */

            if (
                index === currentIndex &&
                (
                    state === "pending" ||
                    state === "pass"
                )
            ) {

                button.classList.add(
                    "current"
                );

            }


            /* =========================================
               CLICK
               ========================================= */

            button.addEventListener(
                "click",
                function() {


                    if (
                        rondoAwarded
                    ) {

                        return;

                    }


                    const currentState =
                        rondoStates[
                            currentTeam
                        ][
                            index
                        ];


                    if (
                        currentState !==
                            "pending" &&
                        currentState !==
                            "pass"
                    ) {

                        return;

                    }


                    currentIndex =
                        index;


                    showQuestion(
                        index
                    );


                    renderRosco();

                }
            );


            rosco.appendChild(
                button
            );

        }
    );

}


/* =========================================================
   MOSTRAR PREGUNTA
   ========================================================= */

function showQuestion(
    index
) {

    const data =
        getCurrentRosco();


    if (
        !data[index]
    ) {

        return;

    }


    const item =
        data[index];


    const questionLetter =
        document.getElementById(
            "question-letter"
        );


    const questionType =
        document.getElementById(
            "question-type"
        );


    const questionText =
        document.getElementById(
            "question-text"
        );


    if (
        questionLetter
    ) {

        questionLetter.textContent =
            item.letter;

    }


    if (
        questionType
    ) {

        questionType.textContent =
            item.type;

    }


    if (
        questionText
    ) {

        questionText.textContent =
            item.question;

    }

}


/* =========================================================
   RESPONDER
   ========================================================= */

function answerQuestion(
    result
) {

    if (
        rondoAwarded
    ) {

        return;

    }


    const states =
        rondoStates[
            currentTeam
        ];


    if (!states) {
        return;
    }


    if (
        states[currentIndex] !==
            "pending" &&
        states[currentIndex] !==
            "pass"
    ) {

        return;

    }


    /* CORRECTO */

    if (
        result ===
        "correct"
    ) {

        states[currentIndex] =
            "correct";


        rondoHits[currentTeam] =
            Number(
                rondoHits[currentTeam] ||
                0
            ) + 1;

    }


    /* INCORRECTO */

    if (
        result ===
        "wrong"
    ) {

        states[currentIndex] =
            "wrong";

    }


    /* PASAPALABRA */

    if (
        result ===
        "pass"
    ) {

        states[currentIndex] =
            "pass";

    }


    updateRondoScore();

    renderRosco();


    const nextIndex =
        findNextAvailableLetter(
            currentTeam,
            currentIndex + 1
        );


    if (
        nextIndex !== -1
    ) {

        currentIndex =
            nextIndex;


        showQuestion(
            currentIndex
        );


        renderRosco();

        return;

    }


    finishCurrentTeam();

}


/* =========================================================
   EQUIPO TERMINÓ
   ========================================================= */

function finishCurrentTeam() {

    const letter =
        document.getElementById(
            "question-letter"
        );


    const type =
        document.getElementById(
            "question-type"
        );


    const text =
        document.getElementById(
            "question-text"
        );


    if (letter) {

        letter.textContent =
            "✓";

    }


    if (type) {

        type.textContent =
            "PASAPALABRA COMPLETADO";

    }


    if (text) {

        text.textContent =
            TEAM_DATA[
                currentTeam
            ].name +
            " terminó con " +
            rondoHits[
                currentTeam
            ] +
            " aciertos.";

    }

}


/* =========================================================
   EQUIPO ACTUAL
   ========================================================= */

function updateRondoTeamUI() {

    const element =
        document.getElementById(
            "turn-team"
        );


    if (element) {

        element.textContent =
            TEAM_DATA[
                currentTeam
            ].name;

    }


    updateRondoScore();

}


/* =========================================================
   ACIERTOS
   ========================================================= */

function updateRondoScore() {

    const element =
        document.getElementById(
            "rondo-current-score"
        );


    if (!element) {
        return;
    }


    element.textContent =
        String(
            Number(
                rondoHits[
                    currentTeam
                ] || 0
            )
        );

}


/* =========================================================
   REINICIAR PASAPALABRA
   ========================================================= */

function resetRondo() {

    if (
        !confirm(
            "¿Seguro que querés reiniciar el Pasapalabra?"
        )
    ) {

        return;

    }


    rondoStates =
        createInitialRondoState();


    rondoHits.team1 =
        0;

    rondoHits.team2 =
        0;

    rondoHits.team3 =
        0;


    scores.team1.rondo =
        0;

    scores.team2.rondo =
        0;

    scores.team3.rondo =
        0;


    rondoAwarded =
        false;


    currentTeam =
        "team1";


    currentIndex =
        0;


    saveScores();

    updateScoreboard();

    updateRondoTabs();

    updateRondoTeamUI();

    renderRosco();

    showQuestion(0);

}


/* =========================================================
   FINALIZAR
   ========================================================= */

function finishRondo() {

    if (
        rondoAwarded
    ) {

        return;

    }


    if (
        !confirm(
            "¿Seguro que querés finalizar el Pasapalabra? Se asignarán 3, 2 y 1 puntos según los aciertos."
        )
    ) {

        return;

    }


    rondoAwarded =
        true;


    const results = [

        {
            team: "team1",
            hits:
                Number(
                    rondoHits.team1 ||
                    0
                )
        },

        {
            team: "team2",
            hits:
                Number(
                    rondoHits.team2 ||
                    0
                )
        },

        {
            team: "team3",
            hits:
                Number(
                    rondoHits.team3 ||
                    0
                )
        }

    ];


    results.sort(
        (
            a,
            b
        ) =>
            b.hits -
            a.hits
    );


    const points =
        [3, 2, 1];


    results.forEach(
        (
            result,
            index
        ) => {

            addPoints(
                result.team,
                "rondo",
                points[index]
            );

        }
    );


    const letter =
        document.getElementById(
            "question-letter"
        );


    const type =
        document.getElementById(
            "question-type"
        );


    const text =
        document.getElementById(
            "question-text"
        );


    if (letter) {

        letter.textContent =
            "🏁";

    }


    if (type) {

        type.textContent =
            "PASAPALABRA FINALIZADO";

    }


    if (text) {

        text.textContent =
            "🔴 Los Originales: " +
            rondoHits.team1 +
            " aciertos · " +

            "🔵 Los Herederos: " +
            rondoHits.team2 +
            " aciertos · " +

            "🟢 Las Históricas: " +
            rondoHits.team3 +
            " aciertos";

    }


    renderRosco();

}


/* =========================================================
   CLICK FUERA DEL MODAL
   ========================================================= */

document.addEventListener(
    "click",
    function(event) {

        const modal =
            document.getElementById(
                "game-modal"
            );


        if (
            event.target ===
            modal
        ) {

            closeGame();

        }

    }
);


/* =========================================================
   ESC
   ========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key ===
            "Escape"
        ) {

            closeGame();

            closeRondo();

        }

    }
);


/* =========================================================
   INICIO
   ========================================================= */

rondoStates =
    createInitialRondoState();


loadScores();
