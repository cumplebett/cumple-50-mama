/* =========================================
   50 AÑOS DE BETT
   SISTEMA PRINCIPAL
   ========================================= */


/* =========================================
   PUNTAJES
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
   ROSCO 1
   ========================================= */

const rosco1 = [

    {
        letter: "A",
        type: "CON LA LETRA A",
        question: "¿Cuál es la montaña más alta fuera de Asia?",
        answer: "ACONCAGUA"
    },

    {
        letter: "B",
        type: "CON LA LETRA B",
        question: "Apellido del científico chiflado inventor del DeLorean en Volver al futuro.",
        answer: "BROWN"
    },

    {
        letter: "C",
        type: "CON LA LETRA C",
        question: "Alegre, veloz y zapateada danza tradicional argentina muy típica de Santiago del Estero.",
        answer: "CHACARERA"
    },

    {
        letter: "D",
        type: "CON LA LETRA D",
        question: "Nombre del entrañable pez azul con problemas de memoria en las películas de Pixar.",
        answer: "DORY"
    },

    {
        letter: "E",
        type: "CON LA LETRA E",
        question: "Insignia patria histórica de tonos celestes y blancos ideada por el general Manuel Belgrano.",
        answer: "ESCARAPELA"
    },

    {
        letter: "F",
        type: "CON LA LETRA F",
        question: "Proceso mediante el cual las plantas elaboran su propio alimento utilizando la luz solar.",
        answer: "FOTOSÍNTESIS"
    },

    {
        letter: "G",
        type: "CON LA LETRA G",
        question: "Compañía tecnológica estadounidense famosa por su buscador y el sistema operativo Android.",
        answer: "GOOGLE"
    },

    {
        letter: "H",
        type: "CON LA LETRA H",
        question: "Famoso director británico considerado el indiscutible \"Maestro del Suspenso\".",
        answer: "HITCHCOCK"
    },

    {
        letter: "I",
        type: "CON LA LETRA I",
        question: "Popular red social de fotografías y videos propiedad de Meta.",
        answer: "INSTAGRAM"
    },

    {
        letter: "J",
        type: "CON LA LETRA J",
        question: "Apellido del legendario escolta estadounidense de los Chicago Bulls que marcó los años 90.",
        answer: "JORDAN"
    },

    {
        letter: "K",
        type: "CON LA LETRA K",
        question: "Famosa banda de rock duro conocida por sus rostros pintados y sangre.",
        answer: "KISS"
    },

    {
        letter: "L",
        type: "CON LA LETRA L",
        question: "Famoso museo parisino donde se encuentra la Mona Lisa.",
        answer: "LOUVRE"
    },

    {
        letter: "M",
        type: "CON LA LETRA M",
        question: "Gran civilización precolombina mesoamericana famosa por su complejo calendario.",
        answer: "MAYA"
    },

    {
        letter: "N",
        type: "CON LA LETRA N",
        question: "Apellido del científico británico padre de la mecánica clásica y la ley de gravitación universal.",
        answer: "NEWTON"
    },

    {
        letter: "O",
        type: "CON LA LETRA O",
        question: "Famoso metal precioso cuyo símbolo químico en la tabla periódica es \"Au\".",
        answer: "ORO"
    },

    {
        letter: "P",
        type: "CON LA LETRA P",
        question: "Padre absoluto del tango contemporáneo y virtuoso maestro indiscutido del bandoneón.",
        answer: "PIAZZOLLA"
    },

    {
        letter: "Q",
        type: "CON LA LETRA Q",
        question: "Imponente árbol nativo de la región chaqueña famoso por la extrema dureza de sus troncos.",
        answer: "QUEBRACHO"
    },

    {
        letter: "R",
        type: "CON LA LETRA R",
        question: "¿Cuál es el país más grande del mundo por superficie?",
        answer: "RUSIA"
    },

    {
        letter: "S",
        type: "CON LA LETRA S",
        question: "Nombre del ogro verde protagonista de la exitosa saga de DreamWorks.",
        answer: "SHREK"
    },

    {
        letter: "T",
        type: "CON LA LETRA T",
        question: "Histórica provincia norteña donde se declaró formalmente la independencia nacional en 1816.",
        answer: "TUCUMÁN"
    },

    {
        letter: "U",
        type: "CON LA LETRA U",
        question: "¿Qué planeta es el séptimo del Sistema Solar?",
        answer: "URANO"
    },

    {
        letter: "V",
        type: "CON LA LETRA V",
        question: "¿Cómo se llama el volcán italiano situado cerca de Nápoles que sepultó Pompeya?",
        answer: "VESUBIO"
    },

    {
        letter: "W",
        type: "CON LA LETRA W",
        question: "¿Qué famoso torneo de tenis se disputa sobre césped en Londres?",
        answer: "WIMBLEDON"
    },

    {
        letter: "X",
        type: "CON LA LETRA X",
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
        type: "CON LA LETRA Z",
        question: "Viento cálido, seco y molestoso que desciende de la cordillera afectando la zona cuyana.",
        answer: "ZONDA"
    }

];


/* =========================================
   VARIABLES DEL RONDO
   ========================================= */

let currentTeam = "team1";

let currentRosco = 1;

let currentIndex = 0;

let roscoStates = {};


/* =========================================
   CARGAR PUNTAJES
   ========================================= */

function loadScores() {

    const savedScores =
        localStorage.getItem("bettScores");


    if (savedScores) {

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

    }


    updateScoreboard();

}


/* =========================================
   GUARDAR PUNTAJES
   ========================================= */

function saveScores() {

    localStorage.setItem(
        "bettScores",
        JSON.stringify(scores)
    );

}


/* =========================================
   TOTAL
   ========================================= */

function getTotal(team) {

    return (
        scores[team].kahoot +
        scores[team].rondo +
        scores[team].songs
    );

}


/* =========================================
   ACTUALIZAR MARCADOR
   ========================================= */

function updateScoreboard() {

    for (
        let i = 1;
        i <= 3;
        i++
    ) {

        const team =
            "team" + i;


        document.getElementById(
            "score-team-" + i
        ).textContent =
            getTotal(team);


        document.getElementById(
            "kahoot-" + i
        ).textContent =
            scores[team].kahoot;


        document.getElementById(
            "rondo-" + i
        ).textContent =
            scores[team].rondo;


        document.getElementById(
            "songs-" + i
        ).textContent =
            scores[team].songs;


        document.getElementById(
            "total-" + i
        ).textContent =
            getTotal(team);

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

    if (!scores[team]) return;


    scores[team][game] =
        (scores[team][game] || 0) +
        points;


    saveScores();

    updateScoreboard();

}


/* =========================================
   RESTAR PUNTOS
   ========================================= */

function removePoints(
    team,
    game,
    points
) {

    if (!scores[team]) return;


    scores[team][game] =
        Math.max(
            0,
            scores[team][game] -
            points
        );


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


    if (!confirmReset) return;


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


/* =========================================
   ABRIR JUEGO
   ========================================= */

function openGame(game) {


    /* RONDO */

    if (game === "rondo") {

        openRondo();

        return;

    }


    /* MODAL GENERAL */

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

        icon.textContent = "🧠";

        title.textContent = "Kahoot";

        description.textContent =
            "Acá vamos a cargar las preguntas sobre Bett.";

    }


    if (game === "songs") {

        icon.textContent = "🎵";

        title.textContent = "Canciones";

        description.textContent =
            "Adiviná la canción, el artista y el año o década.";

    }


    modal.classList.add("active");

}


/* =========================================
   CERRAR MODAL GENERAL
   ========================================= */

function closeGame() {

    document
        .getElementById("game-modal")
        .classList.remove("active");

}


/* =========================================
   ABRIR RONDO
   ========================================= */

function openRondo() {

    document
        .getElementById("rondo-modal")
        .classList.add("active");


    document.body.style.overflow =
        "hidden";


    if (!roscoStates[1]) {

        roscoStates[1] =
            rosco1.map(
                () => "pending"
            );

    }


    renderRosco();

    showQuestion(currentIndex);

    updateRondoTeamUI();

}


/* =========================================
   CERRAR RONDO
   ========================================= */

function closeRondo() {

    document
        .getElementById("rondo-modal")
        .classList.remove("active");


    document.body.style.overflow =
        "";

}


/* =========================================
   CAMBIAR ROSCO
   ========================================= */

function selectRosco(number) {

    currentRosco = number;


    document
        .querySelectorAll(
            ".rondo-tab"
        )
        .forEach(
            (button, index) => {

                button.classList.toggle(
                    "active",
                    index + 1 === number
                );

            }
        );


    if (number === 1) {

        if (!roscoStates[1]) {

            roscoStates[1] =
                rosco1.map(
                    () => "pending"
                );

        }


        currentIndex = 0;


        renderRosco();

        showQuestion(
            currentIndex
        );

        return;

    }


    document.getElementById(
        "question-letter"
    ).textContent = "—";


    document.getElementById(
        "question-type"
    ).textContent =
        "PRÓXIMAMENTE";


    document.getElementById(
        "question-text"
    ).textContent =
        "Acá vamos a cargar el Rosco " +
        number +
        ".";


    document.getElementById(
        "rosco"
    ).innerHTML = "";

}


/* =========================================
   OBTENER ROSCO
   ========================================= */

function getCurrentRosco() {

    if (currentRosco === 1) {

        return rosco1;

    }


    return [];

}


/* =========================================
   CREAR ROSCO
   ========================================= */

function renderRosco() {

    const rosco =
        document.getElementById(
            "rosco"
        );


    const data =
        getCurrentRosco();


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
                (
                    roscoStates[
                        currentRosco
                    ] || []
                )[index];


            if (state) {

                button.classList.add(
                    state
                );

            }


            if (
                index === currentIndex &&
                state === "pending"
            ) {

                button.classList.add(
                    "current"
                );

            }


            button.onclick =
                () => {

                    currentIndex =
                        index;


                    showQuestion(
                        index
                    );


                    renderRosco();

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
        getCurrentRosco();


    if (!data[index]) return;


    const item =
        data[index];


    const state =
        roscoStates[
            currentRosco
        ]?.[index];


    document.getElementById(
        "question-letter"
    ).textContent =
        item.letter;


    document.getElementById(
        "question-type"
    ).textContent =
        item.type;


    document.getElementById(
        "question-text"
    ).textContent =
        item.question;


    document
        .querySelectorAll(".letter")
        .forEach(
            button => {

                button.classList.toggle(
                    "current",
                    Number(
                        button.dataset.index
                    ) === index &&
                    state === "pending"
                );

            }
        );

}


/* =========================================
   RESPONDER
   ========================================= */

function answerQuestion(result) {

    if (
        currentRosco !== 1
    ) return;


    const states =
        roscoStates[1];


    if (
        states[currentIndex] !==
        "pending"
    ) {

        return;

    }


    /* CORRECTO */

    if (
        result === "correct"
    ) {

        states[currentIndex] =
            "correct";


        addPoints(
            currentTeam,
            "rondo",
            1
        );

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


    renderRosco();


    const nextPending =
        findNextPending(
            currentIndex
        );


    if (
        nextPending !== -1
    ) {

        currentIndex =
            nextPending;


        showQuestion(
            currentIndex
        );


        renderRosco();

    }

    else {

        document.getElementById(
            "question-letter"
        ).textContent = "✓";


        document.getElementById(
            "question-type"
        ).textContent =
            "RONDO COMPLETADO";


        document.getElementById(
            "question-text"
        ).textContent =
            "No quedan letras pendientes en este rosco.";

    }

}


/* =========================================
   BUSCAR SIGUIENTE
   ========================================= */

function findNextPending(
    fromIndex
) {

    const states =
        roscoStates[
            currentRosco
        ];


    const length =
        states.length;


    for (
        let step = 1;
        step <= length;
        step++
    ) {

        const index =
            (
                fromIndex +
                step
            ) % length;


        if (
            states[index] ===
            "pending"
        ) {

            return index;

        }

    }


    return -1;

}


/* =========================================
   SELECCIONAR EQUIPO
   ========================================= */

function selectTeam(team) {

    currentTeam =
        team;


    updateRondoTeamUI();

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


    document.getElementById(
        "turn-team"
    ).textContent =
        names[currentTeam];


    document
        .querySelectorAll(
            ".team-select-btn"
        )
        .forEach(
            button => {

                button.classList.toggle(
                    "selected",
                    button.dataset.team ===
                    currentTeam
                );

            }
        );


    updateRondoScore();

}


/* =========================================
   PUNTAJE RONDO
   ========================================= */

function updateRondoScore() {

    const element =
        document.getElementById(
            "rondo-current-score"
        );


    if (!element) return;


    element.textContent =
        scores[
            currentTeam
        ].rondo;

}


/* =========================================
   CERRAR MODAL AL HACER CLICK AFUERA
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
