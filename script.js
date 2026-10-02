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

let currentRosco = 1;

let currentTeam = "team1";

let currentIndex = 0;


/*
 * Cada equipo tiene su propio rosco.
 *
 * pending = todavía no respondida
 * correct = correcta
 * wrong = incorrecta
 * pass = pasapalabra
 */

let roscoStates = {};


/*
 * Aciertos reales del Rondo.
 * NO son puntos generales.
 */

let rondoHits = {

    team1: 0,
    team2: 0,
    team3: 0

};


/*
 * Indica si el Rondo ya repartió
 * los puntos generales 3-2-1.
 */

let rondoAwarded = false;


/* =========================================
   CREAR ESTADO INICIAL
   ========================================= */

function createInitialRondoState() {

    return {

        team1:
            rosco1.map(
                () => "pending"
            ),

        team2:
            rosco1.map(
                () => "pending"
            ),

        team3:
            rosco1.map(
                () => "pending"
            )

    };

}


/* =========================================
   CARGAR PUNTAJES
   ========================================= */

function loadScores() {

    const savedScores =
        localStorage.getItem(
            "bettScoresV2"
        );


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
        "bettScoresV2",
        JSON.stringify(scores)
    );

}


/* =========================================
   TOTAL GENERAL
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
   SUMAR PUNTOS GENERALES
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
   REINICIAR TODO EL JUEGO
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
   REINICIAR SOLAMENTE EL RONDO
   ========================================= */

function resetRondo() {

    const confirmReset =
        confirm(
            "¿Seguro que querés reiniciar el Rondo completo?"
        );


    if (!confirmReset) return;


    /*
     * Volver los tres roscos a cero.
     */

    roscoStates =
        createInitialRondoState();


    /*
     * Borrar los aciertos.
     */

    rondoHits.team1 = 0;

    rondoHits.team2 = 0;

    rondoHits.team3 = 0;


    /*
     * Sacar del puntaje general
     * los puntos que había otorgado
     * el Rondo.
     */

    scores.team1.rondo = 0;

    scores.team2.rondo = 0;

    scores.team3.rondo = 0;


    rondoAwarded = false;


    /*
     * Volver al Equipo 1.
     */

    currentRosco = 1;

    currentTeam = "team1";

    currentIndex = 0;


    saveScores();

    updateScoreboard();


    /*
     * Actualizar botones de Rosco.
     */

    document
        .querySelectorAll(".rondo-tab")
        .forEach(
            (button, index) => {

                button.classList.toggle(
                    "active",
                    index === 0
                );

            }
        );


    renderRosco();

    showQuestion(0);

    updateRondoTeamUI();

}


/* =========================================
   ABRIR JUEGO
   ========================================= */

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

        icon.textContent = "🧠";

        title.textContent = "Kahoot";

        description.textContent =
            "Acá vamos a cargar las preguntas sobre Bett.";

    }


    if (
        game === "songs"
    ) {

        icon.textContent = "🎵";

        title.textContent = "Canciones";

        description.textContent =
            "Adiviná la canción, el artista y el año o década.";

    }


    modal.classList.add(
        "active"
    );

}


/* =========================================
   CERRAR MODAL GENERAL
   ========================================= */

function closeGame() {

    document
        .getElementById(
            "game-modal"
        )
        .classList.remove(
            "active"
        );

}


/* =========================================
   ABRIR RONDO
   ========================================= */

function openRondo() {

    document
        .getElementById(
            "rondo-modal"
        )
        .classList.add(
            "active"
        );


    document.body.style.overflow =
        "hidden";


    /*
     * Si el Rondo todavía no fue iniciado,
     * crear los tres roscos.
     */

    if (
        Object.keys(
            roscoStates
        ).length === 0
    ) {

        roscoStates =
            createInitialRondoState();

    }


    /*
     * Siempre arrancamos viendo
     * el Rosco 1 / Equipo 1.
     */

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

    showQuestion(
        currentIndex
    );

}


/* =========================================
   CERRAR RONDO
   ========================================= */

function closeRondo() {

    document
        .getElementById(
            "rondo-modal"
        )
        .classList.remove(
            "active"
        );


    document.body.style.overflow =
        "";

}


/* =========================================
   CAMBIAR ROSCO
   ========================================= */

function selectRosco(number) {

    currentRosco =
        number;


    /*
     * Rosco 1 = Equipo 1
     * Rosco 2 = Equipo 2
     * Rosco 3 = Equipo 3
     */

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

    }

}


/* =========================================
   ACTUALIZAR PESTAÑAS
   ========================================= */

function updateRondoTabs() {

    document
        .querySelectorAll(
            ".rondo-tab"
        )
        .forEach(
            (button, index) => {

                button.classList.toggle(
                    "active",
                    index + 1 ===
                    currentRosco
                );

            }
        );

}


/* =========================================
   OBTENER ROSCO
   ========================================= */

function getCurrentRosco() {

    if (
        currentRosco === 1
    ) {

        return rosco1;

    }


    /*
     * Por ahora los tres equipos
     * utilizan la misma estructura.
     *
     * Después cargamos las preguntas
     * específicas del Rosco 2 y 3.
     */

    if (
        currentRosco === 2
    ) {

        return rosco1;

    }


    if (
        currentRosco === 3
    ) {

        return rosco1;

    }


    return [];

}


/* =========================================
   BUSCAR SIGUIENTE LETRA
   ========================================= */

function findNextAvailableLetter(
    team,
    fromIndex
) {

    const states =
        roscoStates[
            team
        ];


    if (!states) return -1;


    const length =
        states.length;


    /*
     * PRIMERA VUELTA:
     * buscar letras pendientes.
     */

    for (
        let step = 0;
        step < length;
        step++
    ) {

        const index =
            (
                fromIndex +
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


    /*
     * SEGUNDA VUELTA:
     * volver a Pasapalabra.
     */

    for (
        let step = 0;
        step < length;
        step++
    ) {

        const index =
            (
                fromIndex +
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


/* =========================================
   ¿QUEDAN LETRAS?
   ========================================= */

function teamHasLetters(
    team
) {

    const states =
        roscoStates[
            team
        ];


    if (!states) return false;


    return states.some(
        state =>
            state === "pending" ||
            state === "pass"
    );

}


/* =========================================
   CREAR ROSCO VISUAL
   ========================================= */

function renderRosco() {

    const rosco =
        document.getElementById(
            "rosco"
        );


    const data =
        getCurrentRosco();


    rosco.innerHTML =
        "";


    data.forEach(
        (
            item,
            index
        ) => {

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
                ]?.[
                    index
                ];


            if (state) {

                button.classList.add(
                    state
                );

            }


            /*
             * La letra actual se marca
             * solamente si está pendiente
             * o es Pasapalabra.
             */

            if (
                index ===
                currentIndex &&
                (
                    state === "pending" ||
                    state === "pass"
                )
            ) {

                button.classList.add(
                    "current"
                );

            }


            /*
             * Se puede seleccionar
             * cualquier letra que todavía
             * pueda ser respondida.
             */

            button.onclick =
                () => {

                    const currentState =
                        roscoStates[
                            currentTeam
                        ][
                            index
                        ];


                    if (
                        currentState ===
                        "pending" ||
                        currentState ===
                        "pass"
                    ) {

                        currentIndex =
                            index;


                        showQuestion(
                            index
                        );


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


    const state =
        roscoStates[
            currentTeam
        ]?.[
            index
        ];


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
        .querySelectorAll(
            ".letter"
        )
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

function answerQuestion(
    result
) {

    const states =
        roscoStates[
            currentTeam
        ];


    if (!states) return;


    /*
     * Solamente se puede responder
     * una letra pendiente o Pasapalabra.
     */

    if (
        states[currentIndex] !==
        "pending" &&
        states[currentIndex] !==
        "pass"
    ) {

        return;

    }


    /*
     * CORRECTO
     */

    if (
        result === "correct"
    ) {

        /*
         * Si era Pasapalabra,
         * ahora queda definitivamente correcta.
         */

        states[
            currentIndex
        ] =
            "correct";


        rondoHits[
            currentTeam
        ]++;

    }


    /*
     * INCORRECTO
     */

    if (
        result === "wrong"
    ) {

        states[
            currentIndex
        ] =
            "wrong";

    }


    /*
     * PASAPALABRA
     *
     * IMPORTANTE:
     * queda como "pass", por lo que
     * podrá volver a contestarse.
     */

    if (
        result === "pass"
    ) {

        states[
            currentIndex
        ] =
            "pass";

    }


    renderRosco();


    /*
     * Buscar siguiente letra.
     *
     * Primero pendientes.
     * Después Pasapalabra.
     */

    const nextIndex =
        findNextAvailableLetter(
            currentTeam,
            currentIndex + 1
        );


    /*
     * Todavía quedan preguntas
     * para este equipo.
     */

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


    /*
     * Este equipo terminó.
     *
     * No pasamos automáticamente al otro
     * dentro del mismo Rosco.
     *
     * El organizador cambia al siguiente
     * Rosco desde arriba.
     */

    finishCurrentTeam();

}


/* =========================================
   TERMINÓ EL ROSCO DEL EQUIPO
   ========================================= */

function finishCurrentTeam() {

    document.getElementById(
        "question-letter"
    ).textContent =
        "✓";


    document.getElementById(
        "question-type"
    ).textContent =
        "RONDO COMPLETADO";


    document.getElementById(
        "question-text"
    ).textContent =
        "Equipo " +
        currentRosco +
        " terminó con " +
        rondoHits[
            currentTeam
        ] +
        " aciertos.";

}


/* =========================================
   ACTUALIZAR EQUIPO
   ========================================= */

function updateRondoTeamUI() {

    const names = {

        team1:
            "🔵 Equipo 1",

        team2:
            "🟢 Equipo 2",

        team3:
            "🟣 Equipo 3"

    };


    document.getElementById(
        "turn-team"
    ).textContent =
        names[
            currentTeam
        ];


    /*
     * Ya no dependemos de botones
     * manuales de equipo.
     */

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
   PUNTAJE DEL RONDO
   ========================================= */

function updateRondoScore() {

    const element =
        document.getElementById(
            "rondo-current-score"
        );


    if (!element) return;


    element.textContent =
        rondoHits[
            currentTeam
        ];

}


/* =========================================
   FINALIZAR RONDO
   ========================================= */

function finishRondo() {

    if (
        rondoAwarded
    ) {

        return;

    }


    rondoAwarded =
        true;


    const results = [

        {
            team: "team1",
            hits: rondoHits.team1
        },

        {
            team: "team2",
            hits: rondoHits.team2
        },

        {
            team: "team3",
            hits: rondoHits.team3
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


    /*
     * 1.º = 3
     * 2.º = 2
     * 3.º = 1
     */

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


    document.getElementById(
        "question-letter"
    ).textContent =
        "✓";


    document.getElementById(
        "question-type"
    ).textContent =
        "RONDO FINALIZADO";


    document.getElementById(
        "question-text"
    ).textContent =
        "Equipo 1: " +
        rondoHits.team1 +
        " · Equipo 2: " +
        rondoHits.team2 +
        " · Equipo 3: " +
        rondoHits.team3;


    renderRosco();

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
