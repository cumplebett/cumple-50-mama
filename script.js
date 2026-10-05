/* =========================================
   50 AÑOS DE BETT
   SISTEMA PRINCIPAL
   ========================================= */


/* =========================================
   PUNTAJES GENERALES
   ========================================= */

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


/* =========================================
   ROSCO 1 — EQUIPO 1
   ========================================= */

const rosco1 = [

    {
        letter: "A",
        type: "EMPIEZA CON A",
        question: "¿Cuál es la montaña más alta fuera de Asia?",
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
        question: "Famosa banda de heavy metal conocida por sus rostros pintados y sangre.",
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
        question: "Apellido del célebre pintor francés, uno de los máximos exponentes y fundadores del movimiento impresionista.",
        answer: "MONET"
    },

    {
        letter: "N",
        type: "EMPIEZA CON N",
        question: "Apellido del científico británico padre de la mecánica clásica y la ley de gravitación universal.",
        answer: "NEWTON"
    },

    {
        letter: "O",
        type: "EMPIEZA CON O",
        question: "Famoso metal precioso cuyo símbolo químico en la tabla periódica es Au.",
        answer: "ORO"
    },

    {
        letter: "P",
        type: "EMPIEZA CON P",
        question: "Padre absoluto del tango contemporáneo y virtuoso maestro indiscutido del bandoneón.",
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
        question: "Nombre del ogro verde protagonista de la exitosa saga de DreamWorks.",
        answer: "SHREK"
    },

    {
        letter: "T",
        type: "EMPIEZA CON T",
        question: "Histórica provincia norteña donde se declaró formalmente la independencia nacional en 1816.",
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
        question: "Instrumento musical de percusión compuesto por láminas afinadas que se golpean con baquetas.",
        answer: "XILÓFONO"
    },

    {
        letter: "Y",
        type: "CONTIENE LA Y",
        question: "¿Qué país ganó la primera Copa del Mundo de fútbol, disputada en 1930?",
        answer: "URUGUAY"
    },

    {
        letter: "Z",
        type: "EMPIEZA CON Z",
        question: "Viento cálido, seco y molesto que desciende de la cordillera afectando la zona cuyana.",
        answer: "ZONDA"
    }

];


/* =========================================
   ROSCO 2 — EQUIPO 2
   ========================================= */

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
        question: "Apellido del físico alemán creador de la célebre teoría de la relatividad.",
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
        question: "Conjunto de islas volcánicas del océano Pacífico famoso por las investigaciones de Charles Darwin.",
        answer: "GALÁPAGOS"
    },

    {
        letter: "H",
        type: "EMPIEZA CON H",
        question: "Nombre de la academia de magia a la que asiste Harry Potter en sus aventuras.",
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
        question: "Dios romano equivalente al dios griego Zeus, soberano del Olimpo.",
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
        question: "Capa más externa, rígida y sólida de la Tierra sobre la que se asientan los continentes.",
        answer: "LITÓSFERA"
    },

    {
        letter: "M",
        type: "EMPIEZA CON M",
        question: "Planeta de nuestro sistema solar conocido popularmente como el Planeta Rojo.",
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
        question: "Continente que ocupa la región formada por Australia, Nueva Zelanda y numerosas islas del Pacífico.",
        answer: "OCEANÍA"
    },

    {
        letter: "P",
        type: "EMPIEZA CON P",
        question: "Océano más profundo y extenso de todo el planeta Tierra.",
        answer: "PACÍFICO"
    },

    {
        letter: "Q",
        type: "EMPIEZA CON Q",
        question: "Célebre novela cumbre de la literatura española escrita por Miguel de Cervantes.",
        answer: "QUIJOTE"
    },

    {
        letter: "R",
        type: "EMPIEZA CON R",
        question: "Movimiento cultural y artístico europeo de los siglos XV y XVI que marcó la transición entre la Edad Media y la Edad Moderna.",
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
        question: "Sigla del compuesto químico trinitrotolueno, un potente explosivo.",
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
        question: "Famoso acuerdo de paz firmado en 1919 que puso fin formalmente a la Primera Guerra Mundial.",
        answer: "VERSALLES"
    },

    {
        letter: "W",
        type: "EMPIEZA CON W",
        question: "Nombre del entrañable robot solitario de Pixar que limpia la Tierra en el futuro.",
        answer: "WALL-E"
    },

    {
        letter: "X",
        type: "CONTIENE LA X",
        question: "País caracterizado por su consumo de picante.",
        answer: "MÉXICO"
    },

    {
        letter: "Y",
        type: "CONTIENE LA Y",
        question: "Famoso personaje de Looney Tunes que intenta atrapar al Correcaminos.",
        answer: "COYOTE"
    },

    {
        letter: "Z",
        type: "EMPIEZA CON Z",
        question: "Apellido del creador de la red social Facebook.",
        answer: "ZUCKERBERG"
    }

];


/* =========================================
   ROSCO 3 — EQUIPO 3
   ========================================= */

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
        question: "Piedra ornamental de color verdoso, utilizada como color en el Tutti Frutti.",
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
        question: "Construcción formada por caminos y pasadizos diseñada para confundir, donde estaba encerrado el Minotauro.",
        answer: "LABERINTO"
    },

    {
        letter: "M",
        type: "EMPIEZA CON M",
        question: "Juego interminable en el que se compran casas, hoteles y propiedades hasta dejar en la ruina a tus amigos.",
        answer: "MONOPOLY"
    },

    {
        letter: "N",
        type: "EMPIEZA CON N",
        question: "Río que atraviesa Egipto y fue fundamental para el desarrollo de una de las grandes civilizaciones de la Antigüedad.",
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
        question: "Región del extremo sur de Argentina y Chile, conocida por sus montañas, glaciares y lagos.",
        answer: "PATAGONIA"
    },

    {
        letter: "Q",
        type: "EMPIEZA CON Q",
        question: "Número mínimo de miembros presentes necesario en una asamblea para poder tomar decisiones válidas.",
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
        question: "Serie o película derivada de otra ya existente, centrada en un personaje secundario o evento paralelo.",
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
        question: "Nombre del famoso actor estadounidense, conocido por interpretar a Dominic Toretto en Rápidos y Furiosos.",
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


/* =========================================
   MAPA FIJO DE EQUIPOS
   =========================================
   IMPORTANTE:
   NUNCA SE USA EL MISMO ROSCO PARA
   DOS EQUIPOS.
   ========================================= */

const TEAM_DATA = {
    team1: rosco1,
    team2: rosco2,
    team3: rosco3
};


/* =========================================
   VARIABLES DEL RONDO
   ========================================= */

let currentRosco = 1;
let currentTeam = "team1";
let currentIndex = 0;

let roscoStates = {};

let rondoHits = {
    team1: 0,
    team2: 0,
    team3: 0
};

let rondoAwarded = false;


/* =========================================
   CREAR ESTADOS INDEPENDIENTES
   ========================================= */

function createInitialRondoState() {

    return {
        team1: rosco1.map(() => "pending"),
        team2: rosco2.map(() => "pending"),
        team3: rosco3.map(() => "pending")
    };

}


/* =========================================
   OBTENER ROSCO DEL EQUIPO
   ========================================= */

function getRoscoForTeam(team) {

    if (TEAM_DATA[team]) {
        return TEAM_DATA[team];
    }

    return [];
}


/* =========================================
   OBTENER ROSCO ACTUAL
   ========================================= */

function getCurrentRosco() {

    return getRoscoForTeam(currentTeam);

}


/* =========================================
   CARGAR PUNTAJES
   ========================================= */

function loadScores() {

    const savedScores =
        localStorage.getItem("bettScoresV2");

    if (savedScores) {

        try {

            const parsedScores =
                JSON.parse(savedScores);

            scores.team1 =
                parsedScores.team1 ||
                scores.team1;

            scores.team2 =
                parsedScores.team2 ||
                scores.team2;

            scores.team3 =
                parsedScores.team3 ||
                scores.team3;

        } catch (error) {

            console.error(
                "Error cargando puntajes:",
                error
            );

        }

    }

    updateScoreboard();

}


/* =========================================
   GUARDAR PUNTAJES
   ========================================= */

function saveScores() {

    localStorage.setItem(
        "bettScoresV2",
        JSON.stringify(scores)
    );

}


/* =========================================
   TOTAL GENERAL
   ========================================= */

function getTotal(team) {

    return (
        Number(scores[team].kahoot || 0) +
        Number(scores[team].rondo || 0) +
        Number(scores[team].songs || 0)
    );

}


/* =========================================
   ACTUALIZAR MARCADOR
   ========================================= */

function updateScoreboard() {

    for (let i = 1; i <= 3; i++) {

        const team =
            "team" + i;

        const scoreTeam =
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

        const total =
            document.getElementById(
                "total-" + i
            );

        if (scoreTeam) {
            scoreTeam.textContent =
                getTotal(team);
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

        if (total) {
            total.textContent =
                getTotal(team);
        }

    }

    updateRondoScore();

}


/* =========================================
   SUMAR PUNTOS
   ========================================= */

function addPoints(
    team,
    game,
    points
) {

    if (!scores[team]) {
        return;
    }

    scores[team][game] =
        Number(scores[team][game] || 0) +
        Number(points || 0);

    saveScores();
    updateScoreboard();

}


/* =========================================
   REINICIAR PUNTAJES
   ========================================= */

function resetScores() {

    const confirmReset =
        confirm(
            "¿Seguro que querés reiniciar todos los puntajes?"
        );

    if (!confirmReset) {
        return;
    }

    for (const team of [
        "team1",
        "team2",
        "team3"
    ]) {

        scores[team].kahoot = 0;
        scores[team].rondo = 0;
        scores[team].songs = 0;

    }

    saveScores();
    updateScoreboard();

}


/* =========================================
   REINICIAR RONDO
   ========================================= */

function resetRondo() {

    const confirmReset =
        confirm(
            "¿Seguro que querés reiniciar el Rondo completo?"
        );

    if (!confirmReset) {
        return;
    }

    roscoStates =
        createInitialRondoState();

    rondoHits.team1 = 0;
    rondoHits.team2 = 0;
    rondoHits.team3 = 0;

    scores.team1.rondo = 0;
    scores.team2.rondo = 0;
    scores.team3.rondo = 0;

    rondoAwarded = false;

    currentRosco = 1;
    currentTeam = "team1";
    currentIndex = 0;

    saveScores();
    updateScoreboard();

    updateRondoTabs();
    updateRondoTeamUI();

    renderRosco();

    showQuestion(0);

}


/* =========================================
   ABRIR JUEGO
   ========================================= */

function openGame(game) {

    if (game === "rondo") {

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

    if (game === "kahoot") {

        if (icon) {
            icon.textContent = "🧠";
        }

        if (title) {
            title.textContent = "Kahoot";
        }

        if (description) {
            description.textContent =
                "Acá vamos a cargar las preguntas sobre Bett.";
        }

    }

    if (game === "songs") {

        if (icon) {
            icon.textContent = "🎵";
        }

        if (title) {
            title.textContent = "Canciones";
        }

        if (description) {
            description.textContent =
                "Adiviná la canción, el artista y el año o década.";
        }

    }

    if (modal) {
        modal.classList.add("active");
    }

}


/* =========================================
   CERRAR MODAL
   ========================================= */

function closeGame() {

    const modal =
        document.getElementById(
            "game-modal"
        );

    if (modal) {
        modal.classList.remove("active");
    }

}


/* =========================================
   ABRIR RONDO
   ========================================= */

function openRondo() {

    const modal =
        document.getElementById(
            "rondo-modal"
        );

    if (modal) {
        modal.classList.add("active");
    }

    document.body.style.overflow =
        "hidden";


    if (
        Object.keys(roscoStates).length === 0
    ) {

        roscoStates =
            createInitialRondoState();

    }


    /* SIEMPRE ARRANCA EN EQUIPO 1 */

    currentRosco = 1;
    currentTeam = "team1";


    currentIndex =
        findNextAvailableLetter(
            currentTeam,
            0
        );


    updateRondoTabs();
    updateRondoTeamUI();

    renderRosco();

    if (currentIndex !== -1) {
        showQuestion(currentIndex);
    }

}


/* =========================================
   CERRAR RONDO
   ========================================= */

function closeRondo() {

    const modal =
        document.getElementById(
            "rondo-modal"
        );

    if (modal) {
        modal.classList.remove("active");
    }

    document.body.style.overflow =
        "";

}


/* =========================================
   CAMBIAR EQUIPO / ROSCO
   ========================================= */

function selectRosco(number) {

    if (rondoAwarded) {
        return;
    }


    /* VALIDAR EQUIPO */

    if (
        number !== 1 &&
        number !== 2 &&
        number !== 3
    ) {
        return;
    }


    /* VINCULACIÓN DIRECTA */

    currentRosco =
        Number(number);

    currentTeam =
        "team" + Number(number);


    /* EL ROSCO SALE DIRECTAMENTE
       DEL EQUIPO SELECCIONADO */

    const selectedRosco =
        getRoscoForTeam(currentTeam);

    if (
        !selectedRosco ||
        selectedRosco.length === 0
    ) {
        return;
    }


    /* BUSCAR SIGUIENTE PREGUNTA
       DE ESE EQUIPO */

    currentIndex =
        findNextAvailableLetter(
            currentTeam,
            0
        );


    updateRondoTabs();
    updateRondoTeamUI();

    renderRosco();


    if (currentIndex !== -1) {

        showQuestion(currentIndex);

    } else {

        finishCurrentTeam();

    }

}


/* =========================================
   ACTUALIZAR PESTAÑAS
   ========================================= */

function updateRondoTabs() {

    document
        .querySelectorAll(".rondo-tab")
        .forEach(
            (button, index) => {

                button.classList.toggle(
                    "active",
                    index + 1 === currentRosco
                );

            }
        );

}


/* =========================================
   BUSCAR SIGUIENTE LETRA
   ========================================= */

function findNextAvailableLetter(
    team,
    fromIndex
) {

    const states =
        roscoStates[team];

    if (!states) {
        return -1;
    }

    const length =
        states.length;


    /* PRIMERO BUSCA PENDING */

    for (
        let step = 0;
        step < length;
        step++
    ) {

        const index =
            (fromIndex + step) %
            length;

        if (
            states[index] === "pending"
        ) {

            return index;

        }

    }


    /* DESPUÉS BUSCA PASADAS */

    for (
        let step = 0;
        step < length;
        step++
    ) {

        const index =
            (fromIndex + step) %
            length;

        if (
            states[index] === "pass"
        ) {

            return index;

        }

    }


    return -1;

}


/* =========================================
   CREAR ROSCO VISUAL
   ========================================= */

function renderRosco() {

    const rosco =
        document.getElementById(
            "rosco"
        );

    if (!rosco) {
        return;
    }


    /* MUY IMPORTANTE:
       EL ROSCO SE OBTIENE DEL EQUIPO */

    const data =
        getRoscoForTeam(currentTeam);


    rosco.innerHTML = "";


    data.forEach(
        (item, index) => {

            const button =
                document.createElement(
                    "button"
                );

            button.className =
                "letter";

            button.textContent =
                item.letter;

            button.dataset.index =
                index;


            const state =
                roscoStates[
                    currentTeam
                ]?.[index];


            if (state) {

                button.classList.add(
                    state
                );

            }


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


            button.onclick = () => {

                if (rondoAwarded) {
                    return;
                }


                const currentState =
                    roscoStates[
                        currentTeam
                    ][index];


                if (
                    currentState === "pending" ||
                    currentState === "pass"
                ) {

                    currentIndex =
                        index;

                    showQuestion(index);
                    renderRosco();

                }

            };


            rosco.appendChild(
                button
            );

        }
    );

}


/* =========================================
   MOSTRAR PREGUNTA
   ========================================= */

function showQuestion(index) {

    const data =
        getRoscoForTeam(
            currentTeam
        );


    if (
        !data[index]
    ) {
        return;
    }


    const item =
        data[index];


    const state =
        roscoStates[
            currentTeam
        ]?.[index];


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
            item.letter;
    }

    if (type) {
        type.textContent =
            item.type;
    }

    if (text) {
        text.textContent =
            item.question;
    }


    document
        .querySelectorAll(".letter")
        .forEach(
            button => {

                button.classList.toggle(
                    "current",
                    Number(
                        button.dataset.index
                    ) === index &&
                    (
                        state === "pending" ||
                        state === "pass"
                    )
                );

            }
        );

}


/* =========================================
   RESPONDER
   ========================================= */

function answerQuestion(result) {

    if (rondoAwarded) {
        return;
    }


    const states =
        roscoStates[
            currentTeam
        ];


    if (!states) {
        return;
    }


    if (
        states[currentIndex] !== "pending" &&
        states[currentIndex] !== "pass"
    ) {

        return;

    }


    /* CORRECTO */

    if (
        result === "correct"
    ) {

        states[currentIndex] =
            "correct";

        rondoHits[currentTeam] =
            Number(
                rondoHits[currentTeam] || 0
            ) + 1;

    }


    /* INCORRECTO */

    if (
        result === "wrong"
    ) {

        states[currentIndex] =
            "wrong";

    }


    /* PASAPALABRA */

    if (
        result === "pass"
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


/* =========================================
   TERMINÓ EL ROSCO
   ========================================= */

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
            "RONDO COMPLETADO";
    }

    if (text) {
        text.textContent =
            "Equipo " +
            currentRosco +
            " terminó con " +
            rondoHits[currentTeam] +
            " aciertos.";
    }

}


/* =========================================
   ACTUALIZAR EQUIPO
   ========================================= */

function updateRondoTeamUI() {

    const names = {

        team1: "🔵 Equipo 1",
        team2: "🟢 Equipo 2",
        team3: "🟣 Equipo 3"

    };


    const element =
        document.getElementById(
            "turn-team"
        );


    if (element) {

        element.textContent =
            names[currentTeam];

    }


    updateRondoScore();

}


/* =========================================
   ACTUALIZAR ACIERTOS
   ========================================= */

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
                rondoHits[currentTeam] || 0
            )
        );

}


/* =========================================
   FINALIZAR RONDO
   ========================================= */

function finishRondo() {

    if (rondoAwarded) {
        return;
    }


    const confirmFinish =
        confirm(
            "¿Seguro que querés finalizar el Rondo? Se asignarán 3, 2 y 1 puntos según los aciertos."
        );


    if (!confirmFinish) {
        return;
    }


    rondoAwarded = true;


    const results = [

        {
            team: "team1",
            hits: Number(
                rondoHits.team1 || 0
            )
        },

        {
            team: "team2",
            hits: Number(
                rondoHits.team2 || 0
            )
        },

        {
            team: "team3",
            hits: Number(
                rondoHits.team3 || 0
            )
        }

    ];


    results.sort(
        (a, b) =>
            b.hits - a.hits
    );


    const points = [
        3,
        2,
        1
    ];


    results.forEach(
        (result, index) => {

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
            "RONDO FINALIZADO";
    }

    if (text) {

        text.textContent =
            "🔵 Equipo 1: " +
            rondoHits.team1 +
            " aciertos · " +
            "🟢 Equipo 2: " +
            rondoHits.team2 +
            " aciertos · " +
            "🟣 Equipo 3: " +
            rondoHits.team3 +
            " aciertos";

    }


    renderRosco();

}


/* =========================================
   CLICK FUERA DEL MODAL
   ========================================= */

document.addEventListener(
    "click",
    function(event) {

        const modal =
            document.getElementById(
                "game-modal"
            );


        if (
            event.target === modal
        ) {

            closeGame();

        }

    }
);


/* =========================================
   ESC
   ========================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            closeGame();
            closeRondo();

        }

    }
);


/* =========================================
   INICIAR
   ========================================= */

loadScores();
