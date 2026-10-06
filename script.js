/* =========================================================
   CUMPLE BETT — SCRIPT PRINCIPAL
   ========================================================= */

const scores = {
    team1: { kahoot: 0, rondo: 0, songs: 0 },
    team2: { kahoot: 0, rondo: 0, songs: 0 },
    team3: { kahoot: 0, rondo: 0, songs: 0 }
};


/* =========================================================
   ROSCO 1
   ========================================================= */

const rosco1 = {
    A: {
        clue: "¿Montaña más alta fuera de Asia?",
        answer: "ACONCAGUA",
        type: "starts"
    },
    B: {
        clue: "Apellido del científico chiflado inventor del DeLorean en Volver al futuro.",
        answer: "BROWN",
        type: "starts"
    },
    C: {
        clue: "Alegre, veloz y zapateada danza tradicional argentina.",
        answer: "CHACARERA",
        type: "starts"
    },
    D: {
        clue: "Nombre del pez azul con problemas de memoria en las películas de Pixar.",
        answer: "DORY",
        type: "starts"
    },
    E: {
        clue: "Insignia patria histórica de tonos celestes y blancos.",
        answer: "ESCARAPELA",
        type: "starts"
    },
    F: {
        clue: "Proceso mediante el cual las plantas elaboran su propio alimento utilizando la luz solar.",
        answer: "FOTOSÍNTESIS",
        type: "starts"
    },
    G: {
        clue: "Compañía tecnológica estadounidense famosa por su buscador.",
        answer: "GOOGLE",
        type: "starts"
    },
    H: {
        clue: "Famoso director británico considerado el indiscutible “Maestro del Suspenso”.",
        answer: "HITCHCOCK",
        type: "starts"
    },
    I: {
        clue: "Popular red social de fotografías y videos propiedad de Meta.",
        answer: "INSTAGRAM",
        type: "starts"
    },
    J: {
        clue: "Apellido del legendario escolta estadounidense de los Chicago Bulls que marcó los años 90.",
        answer: "JORDAN",
        type: "starts"
    },
    K: {
        clue: "Famosa banda de heavy metal conocida por sus rostros pintados y sangre.",
        answer: "KISS",
        type: "starts"
    },
    L: {
        clue: "Famoso museo parisino donde se encuentra la Mona Lisa.",
        answer: "LOUVRE",
        type: "starts"
    },
    M: {
        clue: "Apellido del célebre pintor francés, uno de los máximos exponentes y fundadores del movimiento impresionista.",
        answer: "MONET",
        type: "starts"
    },
    N: {
        clue: "Apellido del científico británico, padre de la mecánica clásica y de la ley de gravitación universal.",
        answer: "NEWTON",
        type: "starts"
    },
    O: {
        clue: "Famoso metal precioso cuyo símbolo químico en la tabla periódica es “Au”.",
        answer: "ORO",
        type: "starts"
    },
    P: {
        clue: "Padre absoluto del tango contemporáneo y virtuoso maestro indiscutido del bandoneón.",
        answer: "PIAZZOLLA",
        type: "starts"
    },
    Q: {
        clue: "Imponente árbol nativo de la región chaqueña famoso por la extrema dureza de sus troncos.",
        answer: "QUEBRACHO",
        type: "starts"
    },
    R: {
        clue: "¿Cuál es el país más grande del mundo por superficie?",
        answer: "RUSIA",
        type: "starts"
    },
    S: {
        clue: "Nombre del ogro verde protagonista de la exitosa saga de DreamWorks.",
        answer: "SHREK",
        type: "starts"
    },
    T: {
        clue: "Histórica provincia norteña donde se declaró formalmente la independencia nacional en 1816.",
        answer: "TUCUMÁN",
        type: "starts"
    },
    U: {
        clue: "¿Qué planeta es el séptimo del Sistema Solar?",
        answer: "URANO",
        type: "starts"
    },
    V: {
        clue: "¿Cómo se llama el volcán italiano situado cerca de Nápoles que sepultó Pompeya?",
        answer: "VESUBIO",
        type: "starts"
    },
    W: {
        clue: "¿Qué famoso torneo de tenis se disputa sobre césped en Londres?",
        answer: "WIMBLEDON",
        type: "starts"
    },
    X: {
        clue: "Instrumento musical de percusión compuesto por láminas afinadas que se golpean con baquetas.",
        answer: "XILÓFONO",
        type: "starts"
    },
    Y: {
        clue: "¿Qué país ganó la primera Copa del Mundo de fútbol, disputada en 1930?",
        answer: "URUGUAY",
        type: "contains"
    },
    Z: {
        clue: "Viento cálido, seco y molesto que desciende de la cordillera afectando la zona cuyana.",
        answer: "ZONDA",
        type: "starts"
    }
};


/* =========================================================
   ROSCO 2
   ========================================================= */

const rosco2 = {
    A: {
        clue: "Nombre del desierto más extenso, frío y árido del norte de Chile.",
        answer: "ATACAMA",
        type: "starts"
    },
    B: {
        clue: "Antigua civilización que construyó los famosos Jardines Colgantes.",
        answer: "BABILONIA",
        type: "starts"
    },
    C: {
        clue: "Nombre del muñeco pelirrojo poseído por el alma de un asesino.",
        answer: "CHUCKY",
        type: "starts"
    },
    D: {
        clue: "Nombre de la máquina del tiempo en Volver al futuro.",
        answer: "DELOREAN",
        type: "starts"
    },
    E: {
        clue: "Apellido del físico alemán creador de la célebre teoría de la relatividad.",
        answer: "EINSTEIN",
        type: "starts"
    },
    F: {
        clue: "Apellido del padre del psicoanálisis.",
        answer: "FREUD",
        type: "starts"
    },
    G: {
        clue: "Conjunto de islas volcánicas del océano Pacífico famoso por las investigaciones de Charles Darwin.",
        answer: "GALÁPAGOS",
        type: "starts"
    },
    H: {
        clue: "Nombre de la academia de magia a la que asiste Harry Potter en sus aventuras.",
        answer: "HOGWARTS",
        type: "starts"
    },
    I: {
        clue: "Porción de tierra rodeada de agua por todas partes.",
        answer: "ISLA",
        type: "starts"
    },
    J: {
        clue: "Dios romano equivalente al dios griego Zeus, soberano del Olimpo.",
        answer: "JÚPITER",
        type: "starts"
    },
    K: {
        clue: "Nombre del famoso payaso de Los Simpson.",
        answer: "KRUSTY",
        type: "starts"
    },
    L: {
        clue: "Capa más externa, rígida y sólida de la Tierra sobre la que se asientan los continentes.",
        answer: "LITÓSFERA",
        type: "starts"
    },
    M: {
        clue: "Planeta de nuestro sistema solar conocido popularmente como el “Planeta Rojo”.",
        answer: "MARTE",
        type: "starts"
    },
    N: {
        clue: "Río más largo de África.",
        answer: "NILO",
        type: "starts"
    },
    O: {
        clue: "Continente que ocupa la región formada por Australia, Nueva Zelanda y numerosas islas del Pacífico.",
        answer: "OCEANÍA",
        type: "starts"
    },
    P: {
        clue: "Océano más profundo y extenso de todo el planeta Tierra.",
        answer: "PACÍFICO",
        type: "starts"
    },
    Q: {
        clue: "Célebre novela cumbre de la literatura española escrita por Miguel de Cervantes.",
        answer: "QUIJOTE",
        type: "starts"
    },
    R: {
        clue: "Movimiento cultural y artístico europeo de los siglos XV y XVI que marcó la transición entre la Edad Media y la Edad Moderna.",
        answer: "RENACIMIENTO",
        type: "starts"
    },
    S: {
        clue: "Nombre de la espada láser utilizada en Star Wars.",
        answer: "SABLE",
        type: "starts"
    },
    T: {
        clue: "Sigla del compuesto químico trinitrotolueno, un potente explosivo.",
        answer: "TNT",
        type: "starts"
    },
    U: {
        clue: "Idioma oficial hablado mayoritariamente en Brasil.",
        answer: "PORTUGUÉS",
        type: "contains"
    },
    V: {
        clue: "Famoso acuerdo de paz firmado en 1919 que puso fin formalmente a la Primera Guerra Mundial.",
        answer: "VERSALLES",
        type: "starts"
    },
    W: {
        clue: "Nombre del entrañable robot solitario de Pixar que limpia la Tierra en el futuro.",
        answer: "WALL-E",
        type: "starts"
    },
    X: {
        clue: "País caracterizado por su consumo de picante.",
        answer: "MÉXICO",
        type: "contains"
    },
    Y: {
        clue: "Famoso personaje de Looney Tunes que intenta atrapar al Correcaminos.",
        answer: "COYOTE",
        type: "contains"
    },
    Z: {
        clue: "Apellido del creador de la red social Facebook.",
        answer: "ZUCKERBERG",
        type: "starts"
    }
};


/* =========================================================
   ROSCO 3
   ========================================================= */

const rosco3 = {
    A: {
        clue: "Ciudad que fue la primera anfitriona de los Juegos Olímpicos de la era moderna.",
        answer: "ATENAS",
        type: "starts"
    },
    B: {
        clue: "Escritor argentino, autor de Ficciones y El Aleph.",
        answer: "BORGES",
        type: "starts"
    },
    C: {
        clue: "Provincia argentina donde nacieron La Mona Jiménez y Rodrigo.",
        answer: "CÓRDOBA",
        type: "starts"
    },
    D: {
        clue: "Personaje literario, conde vampiro creado por Bram Stoker.",
        answer: "DRÁCULA",
        type: "starts"
    },
    E: {
        clue: "Moneda oficial utilizada por gran parte de los países de la Unión Europea.",
        answer: "EURO",
        type: "starts"
    },
    F: {
        clue: "Apellido del histórico piloto argentino, cinco veces campeón mundial de Fórmula 1.",
        answer: "FANGIO",
        type: "starts"
    },
    G: {
        clue: "Estilo artístico y arquitectónico caracterizado por grandes catedrales, arcos apuntados y vitrales.",
        answer: "GÓTICO",
        type: "starts"
    },
    H: {
        clue: "Dios griego del inframundo y de los muertos.",
        answer: "HADES",
        type: "starts"
    },
    I: {
        clue: "Cataratas argentinas ubicadas en la provincia de Misiones.",
        answer: "IGUAZÚ",
        type: "starts"
    },
    J: {
        clue: "Piedra ornamental de color verdoso, utilizada como color en el Tutti Frutti.",
        answer: "JADE",
        type: "starts"
    },
    K: {
        clue: "Mineral ficticio de color verde que debilita a Superman.",
        answer: "KRYPTONITA",
        type: "starts"
    },
    L: {
        clue: "Construcción formada por caminos y pasadizos diseñada para confundir, donde estaba encerrado el Minotauro.",
        answer: "LABERINTO",
        type: "starts"
    },
    M: {
        clue: "Juego interminable en el que se compran casas, hoteles y propiedades hasta dejar en la ruina a tus amigos.",
        answer: "MONOPOLY",
        type: "starts"
    },
    N: {
        clue: "Río que atraviesa Egipto y fue fundamental para el desarrollo de una de las grandes civilizaciones de la Antigüedad.",
        answer: "NILO",
        type: "starts"
    },
    O: {
        clue: "Escritor británico, autor de 1984 y Rebelión en la granja.",
        answer: "ORWELL",
        type: "starts"
    },
    P: {
        clue: "Región del extremo sur de Argentina y Chile, conocida por sus montañas, glaciares y lagos.",
        answer: "PATAGONIA",
        type: "starts"
    },
    Q: {
        clue: "Número mínimo de miembros presentes necesario en una asamblea para poder tomar decisiones válidas.",
        answer: "QUÓRUM",
        type: "starts"
    },
    R: {
        clue: "Marca francesa de automóviles.",
        answer: "RENAULT",
        type: "starts"
    },
    S: {
        clue: "Serie o película derivada de otra ya existente, centrada en un personaje secundario o evento paralelo.",
        answer: "SPINOFF",
        type: "starts"
    },
    T: {
        clue: "Juego de piezas que caen y deben encajarse para completar líneas.",
        answer: "TETRIS",
        type: "starts"
    },
    U: {
        clue: "Famoso héroe de la mitología griega.",
        answer: "AQUILES",
        type: "contains"
    },
    V: {
        clue: "Nombre del famoso actor estadounidense, conocido por interpretar a Dominic Toretto en Rápidos y Furiosos.",
        answer: "VIN DIESEL",
        type: "starts"
    },
    W: {
        clue: "Famosa ensalada preparada con manzana, apio, nueces y mayonesa.",
        answer: "WALDORF",
        type: "starts"
    },
    X: {
        clue: "Medio de transporte protagonista de una canción de Pitbull.",
        answer: "TAXI",
        type: "contains"
    },
    Y: {
        clue: "Antiguo país de Europa que se disolvió durante la década de 1990.",
        answer: "YUGOSLAVIA",
        type: "starts"
    },
    Z: {
        clue: "Disciplina de ejercicio aeróbico que combina baile y música.",
        answer: "ZUMBA",
        type: "starts"
    }
};


/* =========================================================
   EQUIPOS
   ========================================================= */

const TEAM_DATA = {
    team1: rosco3,
    team2: rosco1,
    team3: rosco2
};


/* =========================================================
   ESTADO DEL ROSCO
   ========================================================= */

function createInitialRondoState() {

    return {
        currentIndex: 0,
        hits: 0,
        misses: 0,
        passed: [],
        answered: [],
        finished: false
    };

}


const rondoState = {
    team1: createInitialRondoState(),
    team2: createInitialRondoState(),
    team3: createInitialRondoState()
};


let currentTeam = null;
let currentRosco = null;
let currentLetterIndex = 0;


/* =========================================================
   CARGAR PUNTAJES
   ========================================================= */

function loadScores() {

    try {

        const saved =
            localStorage.getItem(
                "bettScores"
            );


        if (saved) {

            const parsed =
                JSON.parse(saved);


            if (parsed.team1) {

                scores.team1 = {
                    ...scores.team1,
                    ...parsed.team1
                };

            }


            if (parsed.team2) {

                scores.team2 = {
                    ...scores.team2,
                    ...parsed.team2
                };

            }


            if (parsed.team3) {

                scores.team3 = {
                    ...scores.team3,
                    ...parsed.team3
                };

            }

        }

    } catch (error) {

        console.error(
            "Error cargando puntajes:",
            error
        );

    }

}


/* =========================================================
   GUARDAR PUNTAJES
   ========================================================= */

function saveScores() {

    localStorage.setItem(
        "bettScores",
        JSON.stringify(scores)
    );

}


/* =========================================================
   TOTAL
   ========================================================= */

function getTotal(team) {

    return (
        scores[team].kahoot +
        scores[team].rondo +
        scores[team].songs
    );

}


/* =========================================================
   ACTUALIZAR MARCADOR
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


        const totalCell =
            document.getElementById(
                "total-" + i
            );


        if (total) {

            total.textContent =
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


        if (totalCell) {

            totalCell.textContent =
                getTotal(team);

        }

    }

}


/* =========================================================
   SUMAR PUNTOS
   ========================================================= */

function addPoints(
    team,
    game,
    points
) {

    if (
        !scores[team] ||
        scores[team][game] === undefined
    ) {

        return;

    }


    scores[team][game] += points;


    saveScores();

    updateScoreboard();

}


/* =========================================================
   RESET GENERAL
   ========================================================= */

function resetScores() {

    const confirmation =
        confirm(
            "¿Seguro que querés reiniciar el marcador general?"
        );


    if (!confirmation) {

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


    if (
        typeof updateSongsScoreboard ===
        "function"
    ) {

        updateSongsScoreboard();

    }


    alert(
        "🔄 Marcador reiniciado correctamente."
    );

}


/* =========================================================
   JUEGOS
   ========================================================= */

function openGame(game) {

    if (
        game === "rondo"
    ) {

        openRondo();

        return;

    }


    if (
        game === "songs"
    ) {

        openSongsGame();

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


    if (!modal) {

        return;

    }


    if (
        game === "kahoot"
    ) {

        if (icon) {

            icon.textContent =
                "🧠";

        }


        if (title) {

            title.textContent =
                "Kahoot";

        }


        if (description) {

            description.innerHTML = `

                <div style="text-align:center;">

                    <p>
                        Respondan el Kahoot sobre Bett
                        y después carguen qué equipo
                        terminó en cada posición.
                    </p>

                    <button
                        class="back-button"
                        onclick="window.open(
                            'https://play.kahoot.it/v2/?quizId=9d7e3a63-484c-4be8-948d-30978619b503',
                            '_blank'
                        )"
                        style="margin-bottom:25px;"
                    >
                        🧠 Abrir Kahoot
                    </button>

                    <h3 style="margin-bottom:15px;">
                        🏆 Resultado
                    </3>

                    <div style="margin-bottom:12px;">

                        <label>
                            🥇 1° puesto — 3 puntos
                        </label>

                        <select
                            id="kahoot-team-1"
                            class="kahoot-select"
                            style="
                                width:100%;
                                padding:12px;
                                margin-top:6px;
                                border-radius:8px;
                            "
                        >

                            <option value="">
                                Seleccionar equipo
                            </option>

                            <option value="team1">
                                Los Originales
                            </option>

                            <option value="team2">
                                Los Herederos
                            </option>

                            <option value="team3">
                                Las Históricas
                            </option>

                        </select>

                    </div>


                    <div style="margin-bottom:12px;">

                        <label>
                            🥈 2° puesto — 2 puntos
                        </label>

                        <select
                            id="kahoot-team-2"
                            class="kahoot-select"
                            style="
                                width:100%;
                                padding:12px;
                                margin-top:6px;
                                border-radius:8px;
                            "
                        >

                            <option value="">
                                Seleccionar equipo
                            </option>

                            <option value="team1">
                                Los Originales
                            </option>

                            <option value="team2">
                                Los Herederos
                            </option>

                            <option value="team3">
                                Las Históricas
                            </option>

                        </select>

                    </div>


                    <div style="margin-bottom:20px;">

                        <label>
                            🥉 3° puesto — 1 punto
                        </label>

                        <select
                            id="kahoot-team-3"
                            class="kahoot-select"
                            style="
                                width:100%;
                                padding:12px;
                                margin-top:6px;
                                border-radius:8px;
                            "
                        >

                            <option value="">
                                Seleccionar equipo
                            </option>

                            <option value="team1">
                                Los Originales
                            </option>

                            <option value="team2">
                                Los Herederos
                            </option>

                            <option value="team3">
                                Las Históricas
                            </option>

                        </select>

                    </div>


                    <button
                        class="back-button"
                        onclick="saveKahootResult()"
                    >
                        💾 Guardar resultado
                    </button>

                </div>

            `;

        }

    }


    modal.classList.add(
        "active"
    );

    modal.style.removeProperty(
        "display"
    );

}


/* =========================================================
   KAHOOT
   ========================================================= */

function saveKahootResult() {

    const first =
        document.getElementById(
            "kahoot-team-1"
        );


    const second =
        document.getElementById(
            "kahoot-team-2"
        );


    const third =
        document.getElementById(
            "kahoot-team-3"
        );


    if (
        !first ||
        !second ||
        !third
    ) {

        alert(
            "No se pudo cargar el resultado."
        );

        return;

    }


    const teamFirst =
        first.value;


    const teamSecond =
        second.value;


    const teamThird =
        third.value;


    if (
        !teamFirst ||
        !teamSecond ||
        !teamThird
    ) {

        alert(
            "⚠️ Tenés que seleccionar los tres puestos."
        );

        return;

    }


    scores.team1.kahoot = 0;
    scores.team2.kahoot = 0;
    scores.team3.kahoot = 0;


    scores[teamFirst].kahoot += 3;

    scores[teamSecond].kahoot += 2;

    scores[teamThird].kahoot += 1;


    saveScores();

    updateScoreboard();


    alert(
        "🏆 Resultado de Kahoot guardado correctamente."
    );


    closeGame();

}


/* =========================================================
   CERRAR MODAL
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
   PASAPALABRA
   ========================================================= */

function openRondo() {

    const modal =
        document.getElementById(
            "rondo-modal"
        );


    if (!modal) {

        return;

    }


    modal.classList.add(
        "active"
    );


    currentTeam =
        "team1";


    currentRosco =
        TEAM_DATA.team1;


    currentLetterIndex =
        rondoState.team1.currentIndex;


    updateRondoTabs();

    updateRondoTeamUI();

    renderRosco();

    showCurrentQuestion();


}


/* =========================================================
   CERRAR PASAPALABRA
   ========================================================= */

function closeRondo() {

    const modal =
        document.getElementById(
            "rondo-modal"
        );


    if (modal) {

        modal.classList.remove(
            "active"
        );

    }

}


/* =========================================================
   SELECCIONAR ROSCO
   ========================================================= */

function selectRosco(
    team
) {

    /*
     * Mantiene compatibilidad con
     * los botones existentes del HTML,
     * tanto si mandan team1/team2/team3
     * como si mandan 1/2/3.
     */

    if (
        team === 1 ||
        team === "1"
    ) {

        team = "team1";

    }


    if (
        team === 2 ||
        team === "2"
    ) {

        team = "team2";

    }


    if (
        team === 3 ||
        team === "3"
    ) {

        team = "team3";

    }


    if (
        !TEAM_DATA[team]
    ) {

        return;

    }


    currentTeam =
        team;


    currentRosco =
        TEAM_DATA[
            team
        ];


    currentLetterIndex =
        rondoState[
            team
        ].currentIndex;


    updateRondoTabs();

    updateRondoTeamUI();

    renderRosco();

    showCurrentQuestion();

}


/* =========================================================
   TABS
   ========================================================= */

function updateRondoTabs() {

    document
        .querySelectorAll(
            ".rondo-tab"
        )
        .forEach(
            tab => {

                tab.classList.remove(
                    "active"
                );


                const tabTeam =
                    tab.dataset.team;


                if (
                    tabTeam ===
                    currentTeam
                ) {

                    tab.classList.add(
                        "active"
                    );

                }

            }
        );

}


/* =========================================================
   UI EQUIPO
   ========================================================= */

function updateRondoTeamUI() {

    if (!currentTeam) {

        return;

    }


    const teamName =
        document.getElementById(
            "turn-team"
        );


    const score =
        document.getElementById(
            "rondo-current-score"
        );


    if (teamName) {

        teamName.textContent =
            getTeamName(
                currentTeam
            );

    }


    if (score) {

        score.textContent =
            rondoState[
                currentTeam
            ].hits;

    }

}


/* =========================================================
   MARCADOR ROSCO
   ========================================================= */

function updateRondoScore() {

    if (!currentTeam) {

        return;

    }


    const state =
        rondoState[
            currentTeam
        ];


    const score =
        document.getElementById(
            "rondo-current-score"
        );


    if (score) {

        score.textContent =
            state.hits;

    }

}


/* =========================================================
   LETRAS
   ========================================================= */

function getLetters() {

    if (!currentRosco) {

        return [];

    }


    return Object.keys(
        currentRosco
    );

}


/* =========================================================
   RENDER ROSCO
   ========================================================= */

function renderRosco() {

    const rosco =
        document.getElementById(
            "rosco"
        );


    if (!rosco || !currentRosco) {

        return;

    }


    rosco.innerHTML =
        "";


    const letters =
        getLetters();


    const total =
        letters.length;


    const radius =
        45;


    letters.forEach(
        (
            letter,
            index
        ) => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "rosco-letter";


            button.id =
                `letter-${letter}`;


            button.textContent =
                letter;


            const angle =
                -90 +
                (
                    index *
                    360 /
                    total
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


            button.style.left =
                `${x}%`;


            button.style.top =
                `${y}%`;


            button.addEventListener(
                "click",
                function() {

                    goToLetter(
                        index
                    );

                }
            );


            rosco.appendChild(
                button
            );

        }
    );


    updateRoscoLetterStyles();

}


/* =========================================================
   IR A LETRA
   ========================================================= */

function goToLetter(
    index
) {

    const letters =
        getLetters();


    if (
        index < 0 ||
        index >=
        letters.length
    ) {

        return;

    }


    currentLetterIndex =
        index;


    if (currentTeam) {

        rondoState[
            currentTeam
        ].currentIndex =
            index;

    }


    showCurrentQuestion();

    updateRoscoLetterStyles();

}


/* =========================================================
   PREGUNTA
   ========================================================= */

function showCurrentQuestion() {

    if (
        !currentRosco ||
        !currentTeam
    ) {

        return;

    }


    const letters =
        getLetters();


    if (!letters.length) {

        return;

    }


    const letter =
        letters[
            currentLetterIndex
        ];


    const item =
        currentRosco[
            letter
        ];


    if (!item) {

        return;

    }


    const letterDisplay =
        document.getElementById(
            "question-letter"
        );


    const typeDisplay =
        document.getElementById(
            "question-type"
        );


    const questionDisplay =
        document.getElementById(
            "question-text"
        );


    const phrase =
        item.type === "contains"
            ? `CONTIENE LA ${letter}`
            : `EMPIEZA CON ${letter}`;


    if (letterDisplay) {

        letterDisplay.textContent =
            letter;

    }


    if (typeDisplay) {

        typeDisplay.textContent =
            phrase;

    }


    if (questionDisplay) {

        questionDisplay.textContent =
            item.clue;

    }


    updateRoscoLetterStyles();

}


/* =========================================================
   ESTADOS VISUALES
   ========================================================= */

function updateRoscoLetterStyles() {

    if (
        !currentRosco ||
        !currentTeam
    ) {

        return;

    }


    const state =
        rondoState[
            currentTeam
        ];


    const letters =
        getLetters();


    letters.forEach(
        letter => {

            const button =
                document.getElementById(
                    `letter-${letter}`
                );


            if (!button) {

                return;

            }


            button.classList.remove(
                "correct",
                "incorrect",
                "wrong",
                "passed",
                "pass",
                "current"
            );

        }
    );


    const currentLetter =
        letters[
            currentLetterIndex
        ];


    const currentButton =
        document.getElementById(
            `letter-${currentLetter}`
        );


    if (
        currentButton &&
        !state.answered.includes(
            currentLetter
        )
    ) {

        currentButton.classList.add(
            "current"
        );

    }


    state.answered.forEach(
        letter => {

            const button =
                document.getElementById(
                    `letter-${letter}`
                );


            if (!button) {

                return;

            }


            const item =
                currentRosco[
                    letter
                ];


            if (
                item &&
                item.correct
            ) {

                button.classList.add(
                    "correct"
                );

            } else {

                button.classList.add(
                    "wrong"
                );

                button.classList.add(
                    "incorrect"
                );

            }

        }
    );


    state.passed.forEach(
        letter => {

            const button =
                document.getElementById(
                    `letter-${letter}`
                );


            if (button) {

                button.classList.add(
                    "pass"
                );

                button.classList.add(
                    "passed"
                );

            }

        }
    );

}


/* =========================================================
   BOTONES DE RESPUESTA
   ========================================================= */

function answerQuestion(
    result
) {

    if (
        result === "correct"
    ) {

        answerRondo(true);

        return;

    }


    if (
        result === "wrong"
    ) {

        answerRondo(false);

        return;

    }


    if (
        result === "pass"
    ) {

        passRondo();

    }

}


/* =========================================================
   CORRECTO / INCORRECTO
   ========================================================= */

function answerRondo(
    isCorrect
) {

    if (
        !currentRosco ||
        !currentTeam
    ) {

        return;

    }


    const state =
        rondoState[
            currentTeam
        ];


    const letters =
        getLetters();


    const letter =
        letters[
            currentLetterIndex
        ];


    const item =
        currentRosco[
            letter
        ];


    if (
        !item ||
        state.answered.includes(
            letter
        )
    ) {

        return;

    }


    state.passed =
        state.passed.filter(
            l => l !== letter
        );


    item.correct =
        isCorrect;


    state.answered.push(
        letter
    );


    if (isCorrect) {

        state.hits++;

    } else {

        state.misses++;

    }


    updateRondoScore();

    moveToNextLetter();

}


/* =========================================================
   PASAPALABRA
   ========================================================= */

function passRondo() {

    if (
        !currentRosco ||
        !currentTeam
    ) {

        return;

    }


    const state =
        rondoState[
            currentTeam
        ];


    const letters =
        getLetters();


    const letter =
        letters[
            currentLetterIndex
        ];


    if (
        state.answered.includes(
            letter
        )
    ) {

        return;

    }


    if (
        !state.passed.includes(
            letter
        )
    ) {

        state.passed.push(
            letter
        );

    }


    moveToNextLetter();

}


/* =========================================================
   SIGUIENTE LETRA
   ========================================================= */

function moveToNextLetter() {

    const state =
        rondoState[
            currentTeam
        ];


    const letters =
        getLetters();


    let nextIndex =
        currentLetterIndex + 1;


    while (
        nextIndex <
        letters.length
    ) {

        const nextLetter =
            letters[
                nextIndex
            ];


        if (
            !state.answered.includes(
                nextLetter
            ) &&
            !state.passed.includes(
                nextLetter
            )
        ) {

            currentLetterIndex =
                nextIndex;


            state.currentIndex =
                nextIndex;


            showCurrentQuestion();

            return;

        }


        nextIndex++;

    }


    nextIndex = 0;


    while (
        nextIndex <
        letters.length
    ) {

        const nextLetter =
            letters[
                nextIndex
            ];


        if (
            !state.answered.includes(
                nextLetter
            ) &&
            state.passed.includes(
                nextLetter
            )
        ) {

            currentLetterIndex =
                nextIndex;


            state.currentIndex =
                nextIndex;


            showCurrentQuestion();

            return;

        }


        nextIndex++;

    }


    finishRondo();

}


/* =========================================================
   REINICIAR PASAPALABRA
   ========================================================= */

function resetRondo() {

    const confirmation =
        confirm(
            "¿Seguro que querés reiniciar los tres roscos?"
        );


    if (!confirmation) {

        return;

    }


    rondoState.team1 =
        createInitialRondoState();


    rondoState.team2 =
        createInitialRondoState();


    rondoState.team3 =
        createInitialRondoState();


    [
        "team1",
        "team2",
        "team3"
    ].forEach(
        team => {

            scores[
                team
            ].rondo = 0;


            Object.keys(
                TEAM_DATA[
                    team
                ]
            ).forEach(
                letter => {

                    TEAM_DATA[
                        team
                    ][
                        letter
                    ].correct =
                        undefined;

                }
            );

        }
    );


    saveScores();

    updateScoreboard();


    currentTeam =
        "team1";


    currentRosco =
        TEAM_DATA.team1;


    currentLetterIndex =
        0;


    updateRondoTabs();

    updateRondoTeamUI();

    renderRosco();

    showCurrentQuestion();

}


/* =========================================================
   FINALIZAR PASAPALABRA
   ========================================================= */

function finishRondo() {

    if (!currentTeam) {

        return;

    }


    const state =
        rondoState[
            currentTeam
        ];


    if (
        state.finished
    ) {

        return;

    }


    state.finished =
        true;


    const hits =
        state.hits;


    scores[
        currentTeam
    ].rondo =
        hits;


    saveScores();

    updateScoreboard();


    const letterDisplay =
        document.getElementById(
            "question-letter"
        );


    const typeDisplay =
        document.getElementById(
            "question-type"
        );


    const questionDisplay =
        document.getElementById(
            "question-text"
        );


    if (letterDisplay) {

        letterDisplay.textContent =
            "✓";

    }


    if (typeDisplay) {

        typeDisplay.textContent =
            "PASAPALABRA FINALIZADO";

    }


    if (questionDisplay) {

        questionDisplay.textContent =
            `${getTeamName(
                currentTeam
            )} terminó con ${hits} aciertos.`;

    }


    renderRosco();

}


/* =========================================================
   NOMBRE EQUIPO
   ========================================================= */

function getTeamName(
    team
) {

    if (
        team === "team1"
    ) {

        return "🔴 Los Originales";

    }


    if (
        team === "team2"
    ) {

        return "🔵 Los Herederos";

    }


    if (
        team === "team3"
    ) {

        return "🟢 Las Históricas";

    }


    return team;

}


/* =========================================================
   JUEGO DE CANCIONES
   ========================================================= */

/* =========================================================
   DATOS DE LAS 49 CANCIONES
   ========================================================= */

const SONGS_DATA = [

    /* =========================
       80s
       ========================= */

    {
        title: "De música ligera",
        artists: ["Soda Stereo"],
        decade: "80s",
        videoId: ""
    },

    {
        title: "La incondicional",
        artists: ["Luis Miguel"],
        decade: "80s",
        videoId: ""
    },

    {
        title: "Me va, me va",
        artists: ["Julio Iglesias"],
        decade: "80s",
        videoId: ""
    },

    {
        title: "Mil horas",
        artists: ["Los Abuelos de la Nada"],
        decade: "80s",
        videoId: ""
    },

    {
        title: "Devuélveme a mi chica",
        artists: ["Hombres G"],
        decade: "80s",
        videoId: ""
    },

    {
        title: "Billie Jean",
        artists: ["Michael Jackson"],
        decade: "80s",
        videoId: ""
    },

    {
        title: "Never Gonna Give You Up",
        artists: ["Rick Astley"],
        decade: "80s",
        videoId: ""
    },

    {
        title: "I Wanna Dance with Somebody",
        artists: ["Whitney Houston"],
        decade: "80s",
        videoId: ""
    },

    {
        title: "Girls Just Want to Have Fun",
        artists: ["Cyndi Lauper"],
        decade: "80s",
        videoId: ""
    },

    {
        title: "Livin' on a Prayer",
        artists: ["Bon Jovi"],
        decade: "80s",
        videoId: ""
    },


    /* =========================
       90s
       ========================= */

    {
        title: "Rayando el sol",
        artists: ["Maná"],
        decade: "90s",
        videoId: ""
    },

    {
        title: "Piel Morena",
        artists: ["Thalía"],
        decade: "90s",
        videoId: ""
    },

    {
        title: "Livin' la Vida Loca",
        artists: ["Ricky Martin"],
        decade: "90s",
        videoId: ""
    },

    {
        title: "Vuelve",
        artists: ["Ricky Martin"],
        decade: "90s",
        videoId: ""
    },

    {
        title: "Flaca",
        artists: ["Andrés Calamaro"],
        decade: "90s",
        videoId: ""
    },

    {
        title: "Wannabe",
        artists: ["Spice Girls"],
        decade: "90s",
        videoId: ""
    },

    {
        title: "...Baby One More Time",
        artists: ["Britney Spears"],
        decade: "90s",
        videoId: ""
    },

    {
        title: "I Want It That Way",
        artists: ["Backstreet Boys"],
        decade: "90s",
        videoId: ""
    },

    {
        title: "My Heart Will Go On",
        artists: ["Celine Dion"],
        decade: "90s",
        videoId: ""
    },

    {
        title: "Smells Like Teen Spirit",
        artists: ["Nirvana"],
        decade: "90s",
        videoId: ""
    },


    /* =========================
       2000s
       ========================= */

    {
        title: "La Tortura",
        artists: ["Shakira", "Alejandro Sanz"],
        decade: "2000s",
        videoId: ""
    },

    {
        title: "Me enamora",
        artists: ["Juanes"],
        decade: "2000s",
        videoId: ""
    },

    {
        title: "Ave María",
        artists: ["David Bisbal"],
        decade: "2000s",
        videoId: ""
    },

    {
        title: "Colgando en tus manos",
        artists: ["Carlos Baute", "Marta Sánchez"],
        decade: "2000s",
        videoId: ""
    },

    {
        title: "Rosas",
        artists: ["La Oreja de Van Gogh"],
        decade: "2000s",
        videoId: ""
    },

    {
        title: "Toxic",
        artists: ["Britney Spears"],
        decade: "2000s",
        videoId: ""
    },

    {
        title: "Crazy in Love",
        artists: ["Beyoncé", "Jay-Z"],
        decade: "2000s",
        videoId: ""
    },

    {
        title: "Umbrella",
        artists: ["Rihanna"],
        decade: "2000s",
        videoId: ""
    },

    {
        title: "Poker Face",
        artists: ["Lady Gaga"],
        decade: "2000s",
        videoId: ""
    },


    /* =========================
       2010s
       ========================= */

    {
        title: "Despacito",
        artists: ["Luis Fonsi", "Daddy Yankee"],
        decade: "2010s",
        videoId: ""
    },

    {
        title: "Bailando",
        artists: ["Enrique Iglesias"],
        decade: "2010s",
        videoId: ""
    },

    {
        title: "Danza Kuduro",
        artists: ["Don Omar", "Lucenzo"],
        decade: "2010s",
        videoId: ""
    },

    {
        title: "Vivir Mi Vida",
        artists: ["Marc Anthony"],
        decade: "2010s",
        videoId: ""
    },

    {
        title: "Échame la culpa",
        artists: ["Luis Fonsi", "Demi Lovato"],
        decade: "2010s",
        videoId: ""
    },

    {
        title: "Uptown Funk",
        artists: ["Mark Ronson", "Bruno Mars"],
        decade: "2010s",
        videoId: ""
    },

    {
        title: "Shape of You",
        artists: ["Ed Sheeran"],
        decade: "2010s",
        videoId: ""
    },

    {
        title: "Rolling in the Deep",
        artists: ["Adele"],
        decade: "2010s",
        videoId: ""
    },

    {
        title: "Havana",
        artists: ["Camila Cabello"],
        decade: "2010s",
        videoId: ""
    },

    {
        title: "Sorry",
        artists: ["Justin Bieber"],
        decade: "2010s",
        videoId: ""
    },


    /* =========================
       2020s
       ========================= */

    {
        title: "Todo de Ti",
        artists: ["Rauw Alejandro"],
        decade: "2020s",
        videoId: ""
    },

    {
        title: "Hawái",
        artists: ["Maluma"],
        decade: "2020s",
        videoId: ""
    },

    {
        title: "Tusa",
        artists: ["Karol G", "Nicki Minaj"],
        decade: "2020s",
        videoId: ""
    },

    {
        title: "La Bachata",
        artists: ["Manuel Turizo"],
        decade: "2020s",
        videoId: ""
    },

    {
        title: "SUPERESTRELLA",
        artists: ["Aitana"],
        decade: "2020s",
        videoId: ""
    },

    {
        title: "Die With A Smile",
        artists: ["Lady Gaga", "Bruno Mars"],
        decade: "2020s",
        videoId: ""
    },

    {
        title: "As It Was",
        artists: ["Harry Styles"],
        decade: "2020s",
        videoId: ""
    },

    {
        title: "Flowers",
        artists: ["Miley Cyrus"],
        decade: "2020s",
        videoId: ""
    },

    {
        title: "good 4 u",
        artists: ["Olivia Rodrigo"],
        decade: "2020s",
        videoId: ""
    },

    {
        title: "Espresso",
        artists: ["Sabrina Carpenter"],
        decade: "2020s",
        videoId: ""
    }

];


/* =========================================================
   ESTADO DEL JUEGO DE CANCIONES
   ========================================================= */

let songsPlayer = null;

let songsPlayerReady = false;

let songsProgressTimer = null;

let songsCurrentIndex = 0;

let songsCurrentSong = null;

let songsUsedIndexes = [];

let songsAnswers = [];

let songsGameOpen = false;


/* =========================================================
   NORMALIZACIÓN DE RESPUESTAS
   ========================================================= */

function normalizeSongAnswer(
    value
) {

    if (
        value === null ||
        value === undefined
    ) {

        return "";

    }


    let text =
        String(value)
            .toLowerCase()
            .trim();


    /*
     * Acentos y diacríticos.
     */

    text =
        text.normalize(
            "NFD"
        )
        .replace(
            /[\u0300-\u036f]/g,
            ""
        );


    /*
     * Apóstrofes.
     */

    text =
        text.replace(
            /['’`´]/g,
            ""
        );


    /*
     * & = y
     */

    text =
        text.replace(
            /&/g,
            " y "
        );


    /*
     * Puntuación.
     */

    text =
        text.replace(
            /[.,!?¿¡:;()[\]{}"\/\\_-]/g,
            " "
        );


    /*
     * Espacios múltiples.
     */

    text =
        text.replace(
            /\s+/g,
            " "
        )
        .trim();


    /*
     * Artículos iniciales.
     *
     * También se eliminan:
     * de / del / al
     *
     * para aceptar cosas como:
     * "Musica Ligera"
     * por "De Musica Ligera".
     */

    text =
        text.replace(
            /^(el|la|los|las|un|una|unos|unas|de|del|al)\s+/,
            ""
        );


    return text;

}


/* =========================================================
   COMPARAR RESPUESTAS
   ========================================================= */

function songAnswersMatch(
    userAnswer,
    acceptedAnswers
) {

    const normalizedUser =
        normalizeSongAnswer(
            userAnswer
        );


    if (!normalizedUser) {

        return false;

    }


    if (
        !Array.isArray(
            acceptedAnswers
        )
    ) {

        acceptedAnswers = [
            acceptedAnswers
        ];

    }


    return acceptedAnswers.some(
        answer => {

            const normalizedAnswer =
                normalizeSongAnswer(
                    answer
                );


            if (
                normalizedUser ===
                normalizedAnswer
            ) {

                return true;

            }


            /*
             * Variaciones razonables.
             */

            if (
                normalizedUser
                    .replace(
                        /\s+/g,
                        ""
                    ) ===
                normalizedAnswer
                    .replace(
                        /\s+/g,
                        ""
                    )
            ) {

                return true;

            }


            return false;

        }
    );

}


/* =========================================================
   RESPUESTAS ACEPTADAS
   ========================================================= */

function getSongTitleAnswers(
    song
) {

    const title =
        song.title;


    const answers = [
        title
    ];


    /*
     * Variaciones conocidas.
     */

    if (
        title ===
        "De música ligera"
    ) {

        answers.push(
            "Musica ligera"
        );

    }


    if (
        title ===
        "I Wanna Dance with Somebody"
    ) {

        answers.push(
            "I Wanna Dance With Somebody Who Loves Me"
        );

    }


    if (
        title ===
        "Livin' on a Prayer"
    ) {

        answers.push(
            "Living on a Prayer"
        );

    }


    if (
        title ===
        "Livin' la Vida Loca"
    ) {

        answers.push(
            "Living la Vida Loca"
        );

    }


    if (
        title ===
        "...Baby One More Time"
    ) {

        answers.push(
            "Baby One More Time"
        );

    }


    if (
        title ===
        "good 4 u"
    ) {

        answers.push(
            "Good 4 U",
            "Good for You"
        );

    }


    if (
        title ===
        "Die With A Smile"
    ) {

        answers.push(
            "Die With a Smile"
        );

    }


    return answers;

}


/* =========================================================
   DÉCADAS ACEPTADAS
   ========================================================= */

function getSongDecadeAnswers(
    decade
) {

    if (
        decade === "80s"
    ) {

        return [
            "80",
            "80s",
            "1980",
            "1980s",
            "años 80",
            "anos 80",
            "decada de los 80",
            "década de los 80"
        ];

    }


    if (
        decade === "90s"
    ) {

        return [
            "90",
            "90s",
            "1990",
            "1990s",
            "años 90",
            "anos 90",
            "decada de los 90",
            "década de los 90"
        ];

    }


    if (
        decade === "2000s"
    ) {

        return [
            "2000",
            "2000s",
            "años 2000",
            "anos 2000",
            "decada de los 2000",
            "década de los 2000"
        ];

    }


    if (
        decade === "2010s"
    ) {

        return [
            "2010",
            "2010s",
            "años 2010",
            "anos 2010",
            "decada de los 2010",
            "década de los 2010"
        ];

    }


    if (
        decade === "2020s"
    ) {

        return [
            "2020",
            "2020s",
            "años 2020",
            "anos 2020",
            "decada de los 2020",
            "década de los 2020"
        ];

    }


    return [
        decade
    ];

}


/* =========================================================
   OBTENER CANCIÓN ALEATORIA SIN REPETIR
   ========================================================= */

function getRandomSong() {

    if (
        songsUsedIndexes.length >=
        SONGS_DATA.length
    ) {

        songsUsedIndexes = [];

    }


    const availableIndexes =
        SONGS_DATA
            .map(
                (
                    song,
                    index
                ) => index
            )
            .filter(
                index =>
                    !songsUsedIndexes.includes(
                        index
                    )
            );


    const randomPosition =
        Math.floor(
            Math.random() *
            availableIndexes.length
        );


    const selectedIndex =
        availableIndexes[
            randomPosition
        ];


    songsUsedIndexes.push(
        selectedIndex
    );


    return {
        song:
            SONGS_DATA[
                selectedIndex
            ],
        index:
            selectedIndex
    };

}


/* =========================================================
   NUEVO JUEGO
   ========================================================= */

function startNewSongsGame() {

    songsUsedIndexes = [];

    songsCurrentIndex = 0;

    songsCurrentSong = null;

    songsAnswers = [];

    songsGameOpen = true;


    loadNextSong();

}


/* =========================================================
   CARGAR NUEVA CANCIÓN
   ========================================================= */

function loadNextSong() {

    const selected =
        getRandomSong();


    songsCurrentSong =
        selected.song;


    songsCurrentIndex =
        selected.index;


    songsAnswers = [];


    /*
     * Un dato por cada respuesta:
     *
     * década
     * artista 1
     * artista 2...
     * canción
     */

    songsAnswers.push({
        type: "decade",
        label: "Década",
        accepted:
            getSongDecadeAnswers(
                songsCurrentSong.decade
            ),
        locked: false,
        awarded: false
    });


    songsCurrentSong.artists.forEach(
        (
            artist,
            index
        ) => {

            songsAnswers.push({

                type:
                    "artist",

                artistIndex:
                    index,

                label:
                    songsCurrentSong.artists.length >
                    1
                        ? `Artista ${index + 1}`
                        : "Artista",

                accepted: [
                    artist
                ],

                locked: false,

                awarded: false

            });

        }
    );


    songsAnswers.push({

        type:
            "title",

        label:
            "Canción",

        accepted:
            getSongTitleAnswers(
                songsCurrentSong
            ),

        locked:
            false,

        awarded:
            false

    });


    updateSongsInterface();

    loadSongIntoPlayer();

}


/* =========================================================
   ABRIR JUEGO
   ========================================================= */

function openSongsGame() {

    injectSongsStyles();


    let modal =
        document.getElementById(
            "songs-modal"
        );


    if (!modal) {

        modal =
            document.createElement(
                "div"
            );


        modal.id =
            "songs-modal";


        document.body.appendChild(
            modal
        );

    }


    songsGameOpen =
        true;


    modal.classList.add(
        "active"
    );


    modal.style.removeProperty(
        "display"
    );


    modal.innerHTML = `

        <div class="songs-panel">

            <div class="songs-head">

                <div>

                    <div class="songs-kicker">
                        🎵 50 AÑOS DE BETT
                    </div>

                    <h2>
                        Juego de canciones
                    </h2>

                    <p id="songs-status">
                        Canción 1 de 49
                    </p>

                </div>


                <div class="songs-header-actions">

                    <button
                        class="songs-back"
                        onclick="closeSongsGame()"
                        type="button"
                    >
                        ← Volver al menú
                    </button>

                    <button
                        class="songs-close"
                        onclick="closeSongsGame()"
                        type="button"
                    >
                        ✕
                    </button>

                </div>

            </div>


            <!-- =====================================
                 MARCADOR PROPIO DE CANCIONES
                 ===================================== -->

            <div class="songs-scoreboard">

                <div class="songs-team-score">

                    <div
                        class="songs-team-score-name"
                    >
                        Los Originales
                    </div>

                    <div
                        id="songs-score-team1"
                        class="songs-team-score-points"
                    >
                        0
                    </div>

                </div>


                <div class="songs-team-score">

                    <div
                        class="songs-team-score-name"
                    >
                        Los Herederos
                    </div>

                    <div
                        id="songs-score-team2"
                        class="songs-team-score-points"
                    >
                        0
                    </div>

                </div>


                <div class="songs-team-score">

                    <div
                        class="songs-team-score-name"
                    >
                        Las Históricas
                    </div>

                    <div
                        id="songs-score-team3"
                        class="songs-team-score-points"
                    >
                        0
                    </div>

                </div>

            </div>


            <!-- =====================================
                 REPRODUCTOR DE AUDIO
                 ===================================== -->

            <div class="songs-audio-player">

                <div
                    id="songs-play-icon"
                    class="songs-audio-icon"
                >
                    🎵
                </div>


                <div
                    class="songs-audio-info"
                >

                    <strong>
                        Reproducir canción
                    </strong>

                    <span>
                        El nombre de la canción
                        no aparece
                    </span>

                </div>


                <div
                    class="songs-audio-progress"
                >

                    <div
                        id="songs-progress-bar"
                    ></div>

                </div>

            </div>


            <!-- =====================================
                 YOUTUBE INVISIBLE
                 ===================================== -->

            <div
                id="songs-youtube-player"
                class="songs-youtube-hidden"
            ></div>


            <!-- =====================================
                 CONTROLES
                 ===================================== -->

            <div class="songs-controls">

                <button
                    type="button"
                    onclick="songsPlay()"
                >
                    ▶ Desde 0
                </button>

                <button
                    type="button"
                    onclick="songsPause()"
                >
                    ⏸ Pausar
                </button>

                <button
                    type="button"
                    onclick="songsContinue()"
                >
                    ▶ Continuar
                </button>

                <button
                    type="button"
                    onclick="songsRestart()"
                >
                    ↺ Reiniciar
                </button>

            </div>


            <!-- =====================================
                 RESPUESTAS
                 ===================================== -->

            <div
                id="songs-fields"
                class="songs-fields"
            ></div>


            <!-- =====================================
                 ACCIONES
                 ===================================== -->

            <div
                class="songs-bottom"
            >

                <button
                    type="button"
                    class="songs-next"
                    onclick="nextSong()"
                >
                    🎵 Nueva canción
                </button>


                <div
                    class="songs-bottom-right"
                >

                    <button
                        type="button"
                        class="songs-reset"
                        onclick="resetScores()"
                    >
                        🔄 Reiniciar marcador general
                    </button>


                    <button
                        type="button"
                        class="songs-close-bottom"
                        onclick="closeSongsGame()"
                    >
                        Cerrar juego
                    </button>

                </div>

            </div>

        </div>

    `;


    updateSongsScoreboard();


    if (
        !songsCurrentSong
    ) {

        songsUsedIndexes = [];

        loadNextSong();

    } else {

        updateSongsInterface();

        loadSongIntoPlayer();

    }

}


/* =========================================================
   ACTUALIZAR MARCADOR DE CANCIONES
   ========================================================= */

function updateSongsScoreboard() {

    const team1 =
        document.getElementById(
            "songs-score-team1"
        );


    const team2 =
        document.getElementById(
            "songs-score-team2"
        );


    const team3 =
        document.getElementById(
            "songs-score-team3"
        );


    if (team1) {

        team1.textContent =
            scores.team1.songs;

    }


    if (team2) {

        team2.textContent =
            scores.team2.songs;

    }


    if (team3) {

        team3.textContent =
            scores.team3.songs;

    }

}


/* =========================================================
   ACTUALIZAR INTERFAZ
   ========================================================= */

function updateSongsInterface() {

    const status =
        document.getElementById(
            "songs-status"
        );


    if (status) {

        status.textContent =
            `Canción ${
                songsUsedIndexes.length
            } de ${
                SONGS_DATA.length
            }`;

    }


    const fields =
        document.getElementById(
            "songs-fields"
        );


    if (!fields) {

        return;

    }


    fields.innerHTML =
        "";


    songsAnswers.forEach(
        (
            answer,
            index
        ) => {

            const field =
                document.createElement(
                    "div"
                );


            field.className =
                "song-field";


            if (
                answer.locked
            ) {

                field.classList.add(
                    "locked"
                );

            }


            let selectorHTML = `

                <select
                    id="song-team-${index}"
                >

                    <option value="">
                        Equipo
                    </option>

                    <option value="team1">
                        Los Originales
                    </option>

                    <option value="team2">
                        Los Herederos
                    </option>

                    <option value="team3">
                        Las Históricas
                    </option>

                </select>

            `;


            field.innerHTML = `

                <h4>
                    ${answer.label}
                </h4>

                <small>
                    1 punto · rebote si falla
                </small>

                <div
                    class="song-field-row"
                >

                    <input
                        id="song-answer-${index}"
                        type="text"
                        placeholder="Respuesta..."
                        ${
                            answer.locked
                                ? "disabled"
                                : ""
                        }
                    >

                    <button
                        type="button"
                        onclick="checkSongAnswer(${index})"
                        ${
                            answer.locked
                                ? "disabled"
                                : ""
                        }
                    >
                        ✓
                    </button>

                </div>

                ${
                    answer.locked
                        ? ""
                        : selectorHTML
                }

                <div
                    id="song-result-${index}"
                    class="song-result"
                ></div>

            `;


            fields.appendChild(
                field
            );


            const input =
                document.getElementById(
                    `song-answer-${index}`
                );


            if (input) {

                input.addEventListener(
                    "keydown",
                    event => {

                        if (
                            event.key ===
                            "Enter"
                        ) {

                            checkSongAnswer(
                                index
                            );

                        }

                    }
                );

            }

        }
    );


    updateSongsScoreboard();

}


/* =========================================================
   COMPROBAR RESPUESTA
   ========================================================= */

function checkSongAnswer(
    answerIndex
) {

    const answer =
        songsAnswers[
            answerIndex
        ];


    if (
        !answer ||
        answer.locked
    ) {

        return;

    }


    const input =
        document.getElementById(
            `song-answer-${answerIndex}`
        );


    const teamSelect =
        document.getElementById(
            `song-team-${answerIndex}`
        );


    const result =
        document.getElementById(
            `song-result-${answerIndex}`
        );


    if (
        !input ||
        !teamSelect ||
        !result
    ) {

        return;

    }


    const userAnswer =
        input.value.trim();


    const team =
        teamSelect.value;


    if (!userAnswer) {

        result.textContent =
            "⚠️ Escribí una respuesta.";

        result.className =
            "song-result song-wrong";

        return;

    }


    if (!team) {

        result.textContent =
            "⚠️ Seleccioná el equipo.";

        result.className =
            "song-result song-wrong";

        return;

    }


    const correct =
        songAnswersMatch(
            userAnswer,
            answer.accepted
        );


    if (correct) {

        answer.locked =
            true;

        answer.awarded =
            true;

        answer.team =
            team;


        addPoints(
            team,
            "songs",
            1
        );


        updateSongsScoreboard();


        result.textContent =
            `✓ Correcto · +1 para ${
                getTeamName(
                    team
                )
            }`;


        result.className =
            "song-result song-ok";


        input.disabled =
            true;


        teamSelect.disabled =
            true;


        const field =
            input.closest(
                ".song-field"
            );


        if (field) {

            field.classList.add(
                "locked"
            );

        }


        const button =
            field?.querySelector(
                "button"
            );


        if (button) {

            button.disabled =
                true;

        }

    } else {

        /*
         * No resta puntos.
         * El dato queda disponible
         * para rebote.
         */

        result.textContent =
            "✕ Incorrecto · rebote";


        result.className =
            "song-result song-wrong";


        input.value =
            "";


        input.focus();

    }

}


/* =========================================================
   SIGUIENTE CANCIÓN
   ========================================================= */

function nextSong() {

    if (
        songsUsedIndexes.length >=
        SONGS_DATA.length
    ) {

        songsUsedIndexes = [];

    }


    loadNextSong();

}


/* =========================================================
   ESTILOS DEL JUEGO DE CANCIONES
   ========================================================= */

function injectSongsStyles() {

    if (
        document.getElementById(
            "songs-inline-styles"
        )
    ) {

        return;

    }


    const style =
        document.createElement(
            "style"
        );


    style.id =
        "songs-inline-styles";


    style.textContent = `

        /* =========================================
           MODAL GENERAL
           ========================================= */

        #songs-modal {

            position:fixed;

            inset:0;

            width:100vw;

            height:100vh;

            background:#0B0B0B;

            color:#FFFFFF;

            z-index:99999;

            overflow-y:auto;

            font-family:inherit;

        }


        .songs-panel {

            width:100%;

            min-height:100vh;

            box-sizing:border-box;

            background:#0B0B0B;

            padding:28px 36px 40px;

        }


        /* =========================================
           ENCABEZADO
           ========================================= */

        .songs-head {

            display:flex;

            justify-content:space-between;

            align-items:flex-start;

            margin-bottom:22px;

        }


        .songs-kicker {

            color:#E30613;

            font-size:14px;

            font-weight:900;

            letter-spacing:1.5px;

        }


        .songs-head h2 {

            margin:5px 0 4px;

            font-size:38px;

            line-height:1.1;

            font-weight:900;

        }


        .songs-head p {

            margin:0;

            color:#999999;

            font-size:16px;

        }


        .songs-header-actions {

            display:flex;

            align-items:center;

            gap:10px;

        }


        .songs-back {

            border:1px solid #444444;

            border-radius:10px;

            padding:12px 16px;

            background:#202020;

            color:#FFFFFF;

            font-size:14px;

            font-weight:900;

            cursor:pointer;

            transition:background .15s ease, border-color .15s ease;

        }


        .songs-back:hover {

            background:#E30613;

            border-color:#E30613;

        }


        .songs-close {

            width:46px;

            height:46px;

            border-radius:12px;

            border:1px solid #3A3A3A;

            background:#171717;

            color:#FFFFFF;

            font-size:22px;

            cursor:pointer;

        }


        .songs-close:hover {

            background:#E30613;

            border-color:#E30613;

        }


        /* =========================================
           MARCADOR
           ========================================= */

        .songs-scoreboard {

            display:grid;

            grid-template-columns:
                repeat(3, 1fr);

            gap:14px;

            margin-bottom:20px;

        }


        .songs-team-score {

            background:#151515;

            border:1px solid #303030;

            border-radius:14px;

            padding:15px 18px;

            display:flex;

            align-items:center;

            justify-content:space-between;

        }


        .songs-team-score-name {

            font-size:16px;

            font-weight:800;

        }


        .songs-team-score-points {

            color:#E30613;

            font-size:29px;

            font-weight:900;

        }


        /* =========================================
           REPRODUCTOR DE AUDIO
           ========================================= */

        .songs-audio-player {

            width:100%;

            height:118px;

            box-sizing:border-box;

            position:relative;

            display:flex;

            align-items:center;

            gap:18px;

            padding:20px 24px;

            background:#171717;

            border:1px solid #303030;

            border-radius:17px;

            overflow:hidden;

        }


        .songs-audio-icon {

            width:62px;

            height:62px;

            min-width:62px;

            border-radius:50%;

            background:#E30613;

            display:flex;

            align-items:center;

            justify-content:center;

            font-size:28px;

        }


        .songs-audio-info {

            display:flex;

            flex-direction:column;

            gap:5px;

        }


        .songs-audio-info strong {

            font-size:19px;

            font-weight:900;

        }


        .songs-audio-info span {

            color:#999999;

            font-size:14px;

        }


        .songs-audio-progress {

            position:absolute;

            left:0;

            bottom:0;

            width:100%;

            height:5px;

            background:#292929;

        }


        #songs-progress-bar {

            width:0%;

            height:100%;

            background:#E30613;

            transition:
                width .2s linear;

        }


        /* =========================================
           YOUTUBE INVISIBLE
           ========================================= */

        .songs-youtube-hidden {

            position:absolute !important;

            width:1px !important;

            height:1px !important;

            left:-10000px !important;

            top:-10000px !important;

            opacity:0 !important;

            pointer-events:none !important;

            overflow:hidden !important;

        }


        /* =========================================
           CONTROLES
           ========================================= */

        .songs-controls {

            display:grid;

            grid-template-columns:
                repeat(4, 1fr);

            gap:10px;

            margin:15px 0 20px;

        }


        .songs-controls button {

            border:0;

            border-radius:10px;

            padding:14px 10px;

            background:#202020;

            color:#FFFFFF;

            font-size:15px;

            font-weight:900;

            cursor:pointer;

            transition:
                background .15s ease,
                transform .15s ease;

        }


        .songs-controls button:hover {

            background:#E30613;

            transform:translateY(-1px);

        }


        .songs-controls button:active {

            transform:translateY(0);

        }


        /* =========================================
           CAMPOS
           ========================================= */

        .songs-fields {

            display:grid;

            grid-template-columns:
                repeat(
                    auto-fit,
                    minmax(230px, 1fr)
                );

            gap:14px;

            margin-top:8px;

        }


        .song-field {

            background:#151515;

            border:1px solid #303030;

            border-radius:14px;

            padding:17px;

            transition:
                border-color .15s ease;

        }


        .song-field.locked {

            border-color:#E30613;

        }


        .song-field h4 {

            margin:0 0 7px;

            font-size:18px;

            font-weight:900;

        }


        .song-field small {

            display:block;

            color:#999999;

            margin-bottom:11px;

            font-size:13px;

        }


        .song-field-row {

            display:flex;

            gap:8px;

        }


        .song-field input {

            flex:1;

            min-width:0;

            box-sizing:border-box;

            background:#0D0D0D;

            color:#FFFFFF;

            border:1px solid #444444;

            border-radius:8px;

            padding:11px;

            outline:none;

            font-size:14px;

        }


        .song-field input:focus {

            border-color:#E30613;

        }


        .song-field input:disabled {

            opacity:.65;

        }


        .song-field select {

            width:100%;

            box-sizing:border-box;

            margin-top:8px;

            background:#0D0D0D;

            color:#FFFFFF;

            border:1px solid #444444;

            border-radius:8px;

            padding:11px;

            outline:none;

            font-size:14px;

        }


        .song-field select:focus {

            border-color:#E30613;

        }


        .song-field button {

            min-width:48px;

            border:0;

            border-radius:8px;

            padding:10px 14px;

            background:#E30613;

            color:#FFFFFF;

            font-weight:900;

            cursor:pointer;

        }


        .song-field button:hover {

            background:#FF1828;

        }


        .song-field button:disabled {

            opacity:.5;

            cursor:not-allowed;

        }


        .song-result {

            min-height:20px;

            margin-top:9px;

            font-size:14px;

            font-weight:800;

        }


        .song-ok {

            color:#FFFFFF;

        }


        .song-wrong {

            color:#FF6B73;

        }


        /* =========================================
           PARTE INFERIOR
           ========================================= */

        .songs-bottom {

            display:flex;

            justify-content:space-between;

            align-items:center;

            gap:12px;

            margin-top:22px;

        }


        .songs-next {

            border:0;

            border-radius:10px;

            padding:14px 18px;

            background:#E30613;

            color:#FFFFFF;

            font-size:15px;

            font-weight:900;

            cursor:pointer;

        }


        .songs-next:hover {

            background:#FF1828;

        }


        .songs-bottom-right {

            display:flex;

            gap:10px;

        }


        .songs-reset {

            border:1px solid #444444;

            border-radius:10px;

            padding:13px 16px;

            background:#202020;

            color:#FFFFFF;

            font-weight:800;

            cursor:pointer;

        }


        .songs-reset:hover {

            background:#333333;

        }


        .songs-close-bottom {

            border:0;

            border-radius:10px;

            padding:13px 16px;

            background:#292929;

            color:#FFFFFF;

            font-weight:800;

            cursor:pointer;

        }


        .songs-close-bottom:hover {

            background:#444444;

        }


        /* =========================================
           RESPONSIVE
           ========================================= */

        @media(max-width:850px) {

            .songs-panel {

                padding:20px;

            }


            .songs-head h2 {

                font-size:29px;

            }


            .songs-scoreboard {

                grid-template-columns:1fr;

            }


            .songs-controls {

                grid-template-columns:
                    repeat(2, 1fr);

            }


            .songs-bottom {

                flex-direction:column;

                align-items:stretch;

            }


            .songs-bottom-right {

                flex-direction:column;

            }

        }


        @media(max-width:550px) {

            .songs-header-actions {

                flex-direction:column;

                align-items:stretch;

            }


            .songs-back {

                padding:10px 12px;

                font-size:13px;

            }


            .songs-controls {

                grid-template-columns:1fr;

            }


            .songs-audio-player {

                height:100px;

            }


            .songs-audio-icon {

                width:52px;

                height:52px;

                min-width:52px;

            }

        }

    `;


    document.head.appendChild(
        style
    );

}


/* =========================================================
   IDs DE YOUTUBE
   =========================================================

   YouTube queda totalmente oculto.
   Solamente se utiliza como fuente de audio.

   Si algún video deja de estar disponible,
   se puede cambiar únicamente su ID.
   ========================================================= */

const SONGS_YOUTUBE_IDS = {

    "De música ligera":
        "T_FkEw27XJ0",

    "La incondicional":
        "by4I_10HbX4",

    "Me va, me va":
        "CCht0AyKxNY",

    "Mil horas":
        "CUdw-urZ3zg",

    "Devuélveme a mi chica":
        "U72tra23BF0",

    "Billie Jean":
        "Zi_XLOBDo_Y",

    "Never Gonna Give You Up":
        "dQw4w9WgXcQ",

    "I Wanna Dance with Somebody":
        "eH3giaIzONA",

    "Girls Just Want to Have Fun":
        "PIb6AZdTr-A",

    "Livin' on a Prayer":
        "lDK9QqIzhwk",

    "Rayando el sol":
        "EDkQB9b3cBw",

    "Piel Morena":
        "EMAjgSJr4Jg",

    "Livin' la Vida Loca":
        "p47fEXGabaY",

    "Vuelve":
        "p7QYo-9SlP0",

    "Flaca":
        "UCF9oHXhDMU",

    "Wannabe":
        "gJLIiF15wjQ",

    "...Baby One More Time":
        "C-u5WLJ9Yk4",

    "I Want It That Way":
        "4fndeDfaWCg",

    "My Heart Will Go On":
        "9bFHsd3o1w0",

    "Smells Like Teen Spirit":
        "hTWKbfoikeg",

    "La Tortura":
        "Dsp_8Lm1eSk",

    "Me enamora":
        "voxgN3Dhjuo",

    "Ave María":
        "gra-sIV1n4U",

    "Colgando en tus manos":
        "qExd-3oCTl4",

    "Rosas":
        "nYnLVWXmRm8",

    "Toxic":
        "LOZuxwVk7TU",

    "Crazy in Love":
        "ViwtNLUqkMY",

    "Umbrella":
        "CvBfHwUxHIk",

    "Poker Face":
        "bESGLojNYSo",

    "Despacito":
        "kJQP7kiw5Fk",

    "Bailando":
        "NUsoVlDFqZg",

    "Danza Kuduro":
        "7zp1TbLFPp8",

    "Vivir Mi Vida":
        "YXnjy5YlDwk",

    "Échame la culpa":
        "TyHvyGVs42U",

    "Uptown Funk":
        "OPf0YbXqDm0",

    "Shape of You":
        "JGwWNGJdvx8",

    "Rolling in the Deep":
        "rYEDA3JcQqw",

    "Havana":
        "HCjNJDNzw8Y",

    "Sorry":
        "fRh_vgS2dFE",

    "Todo de Ti":
        "CFPLIaMpGrY",

    "Hawái":
        "pK06OiUFWXg",

    "Tusa":
        "tbneQDc2H3I",

    "La Bachata":
        "TqA8D9nJ9xI",

    "SUPERESTRELLA":
        "vz_vU53JvvI",

    "Die With A Smile":
        "kPa7bsKwL-c",

    "As It Was":
        "H5v3kku4y6Q",

    "Flowers":
        "G7KNmW9a75Y",

    "good 4 u":
        "gNi_6U5Pm_o",

    "Espresso":
        "eVli-tstM5E"

};


/* =========================================================
   CARGAR API DE YOUTUBE
   ========================================================= */

function loadYouTubeAPI() {

    if (
        window.YT &&
        window.YT.Player
    ) {

        createSongsPlayer();

        return;

    }


    if (
        document.getElementById(
            "youtube-iframe-api"
        )
    ) {

        return;

    }


    const script =
        document.createElement(
            "script"
        );


    script.id =
        "youtube-iframe-api";


    script.src =
        "https://www.youtube.com/iframe_api";


    document.head.appendChild(
        script
    );

}


/* =========================================================
   CALLBACK DE YOUTUBE
   ========================================================= */

window.onYouTubeIframeAPIReady =
    function() {

        createSongsPlayer();

    };


/* =========================================================
   CARGAR CANCIÓN EN EL REPRODUCTOR
   ========================================================= */

function loadSongIntoPlayer() {

    const host =
        document.getElementById(
            "songs-youtube-player"
        );


    if (!host) {

        return;

    }


    if (
        songsProgressTimer
    ) {

        clearInterval(
            songsProgressTimer
        );

        songsProgressTimer =
            null;

    }


    if (
        songsPlayer &&
        typeof songsPlayer.destroy ===
        "function"
    ) {

        try {

            songsPlayer.destroy();

        } catch (error) {

            console.warn(
                "No se pudo destruir el reproductor anterior.",
                error
            );

        }

    }


    songsPlayer =
        null;


    songsPlayerReady =
        false;


    const videoId =
        SONGS_YOUTUBE_IDS[
            songsCurrentSong.title
        ];


    if (!videoId) {

        console.warn(
            "No hay ID de YouTube para:",
            songsCurrentSong.title
        );

        return;

    }


    if (
        window.YT &&
        window.YT.Player
    ) {

        createSongsPlayer();

    } else {

        loadYouTubeAPI();

    }
   

}

/* =========================================================
   CREAR REPRODUCTOR INVISIBLE
   ========================================================= */

function createSongsPlayer() {

    const host =
        document.getElementById(
            "songs-youtube-player"
        );


    if (
        !host ||
        !songsCurrentSong
    ) {

        return;

    }


    const videoId =
        SONGS_YOUTUBE_IDS[
            songsCurrentSong.title
        ];


    if (!videoId) {

        return;

    }


    if (
        !window.YT ||
        !window.YT.Player
    ) {

        return;

    }


    if (
        songsPlayer &&
        typeof songsPlayer.destroy ===
        "function"
    ) {

        try {

            songsPlayer.destroy();

        } catch (error) {}

    }


    songsPlayerReady =
        false;


    songsPlayer =
        new YT.Player(
            host,
            {

                height:"1",

                width:"1",

                videoId:
                    videoId,

                playerVars: {

                    autoplay:0,

                    controls:0,

                    disablekb:1,

                    fs:0,

                    playsinline:1,

                    rel:0,

                    modestbranding:1,

                    iv_load_policy:3

                },

                events: {

                    onReady:
                        function() {

                            songsPlayerReady =
                                true;


                            songsRestart();


                            if (
                                songsProgressTimer
                            ) {

                                clearInterval(
                                    songsProgressTimer
                                );

                            }


                            songsProgressTimer =
                                setInterval(
                                    updateSongsProgress,
                                    500
                                );

                        },


                    onStateChange:
                        function(event) {

                            const icon =
                                document.getElementById(
                                    "songs-play-icon"
                                );


                            if (!icon) {

                                return;

                            }


                            if (
                                event.data ===
                                YT.PlayerState.PLAYING
                            ) {

                                icon.textContent =
                                    "▶";

                            } else {

                                icon.textContent =
                                    "🎵";

                            }

                        },


                    onError:
                        function(event) {

                            console.warn(
                                "Error del reproductor de YouTube:",
                                event.data
                            );

                        },


                    onAutoplayBlocked:
                        function() {

                            /*
                             * No hacemos nada.
                             *
                             * El usuario debe tocar
                             * "Desde 0", que sí es
                             * una acción iniciada
                             * por el usuario.
                             */

                        }

                }

            }
        );

}


/* =========================================================
   BARRA DE PROGRESO
   ========================================================= */

function updateSongsProgress() {

    if (
        !songsPlayerReady ||
        !songsPlayer ||
        !songsCurrentSong
    ) {

        return;

    }


    let currentTime =
        0;


    let duration =
        0;


    try {

        currentTime =
            songsPlayer.getCurrentTime();


        duration =
            songsPlayer.getDuration();

    } catch (error) {

        return;

    }


    if (
        !duration ||
        duration <= 0
    ) {

        return;

    }


    const percentage =
        (
            currentTime /
            duration
        ) * 100;


    const bar =
        document.getElementById(
            "songs-progress-bar"
        );


    if (bar) {

        bar.style.width =
            `${Math.min(
                100,
                Math.max(
                    0,
                    percentage
                )
            )}%`;

    }

}


/* =========================================================
   REPRODUCIR DESDE 0
   ========================================================= */

function songsPlay() {

    if (
        !songsPlayerReady ||
        !songsPlayer
    ) {

        return;

    }


    try {

        songsPlayer.seekTo(
            0,
            true
        );


        songsPlayer.playVideo();


        const bar =
            document.getElementById(
                "songs-progress-bar"
            );


        if (bar) {

            bar.style.width =
                "0%";

        }

    } catch (error) {

        console.warn(
            "No se pudo reproducir la canción.",
            error
        );

    }

}


/* =========================================================
   PAUSAR
   ========================================================= */

function songsPause() {

    if (
        !songsPlayerReady ||
        !songsPlayer
    ) {

        return;

    }


    try {

        songsPlayer.pauseVideo();

    } catch (error) {

        console.warn(
            "No se pudo pausar la canción.",
            error
        );

    }

}


/* =========================================================
   CONTINUAR
   ========================================================= */

function songsContinue() {

    if (
        !songsPlayerReady ||
        !songsPlayer
    ) {

        return;

    }


    try {

        songsPlayer.playVideo();

    } catch (error) {

        console.warn(
            "No se pudo continuar la canción.",
            error
        );

    }

}


/* =========================================================
   REINICIAR A 0
   ========================================================= */

function songsRestart() {

    if (
        !songsPlayerReady ||
        !songsPlayer
    ) {

        return;

    }


    try {

        songsPlayer.seekTo(
            0,
            true
        );

    } catch (error) {

        return;

    }


    const bar =
        document.getElementById(
            "songs-progress-bar"
        );


    if (bar) {

        bar.style.width =
            "0%";

    }

}


/* =========================================================
   CERRAR JUEGO DE CANCIONES
   ========================================================= */

function closeSongsGame() {

    songsGameOpen = false;

    if (songsProgressTimer) {

        clearInterval(songsProgressTimer);

        songsProgressTimer = null;

    }

    if (
        songsPlayer &&
        typeof songsPlayer.stopVideo ===
        "function"
    ) {

        try {

            songsPlayer.stopVideo();

        } catch (error) {

            console.warn(
                "No se pudo detener YouTube:",
                error
            );

        }

    }

    if (
        songsPlayer &&
        typeof songsPlayer.destroy ===
        "function"
    ) {

        try {

            songsPlayer.destroy();

        } catch (error) {

            console.warn(
                "No se pudo destruir el reproductor:",
                error
            );

        }

    }

    songsPlayer = null;

    songsPlayerReady = false;


    const modal =
        document.getElementById(
            "songs-modal"
        );


    if (modal) {

        modal.classList.remove(
            "active"
        );


        modal.style.setProperty(
            "display",
            "none",
            "important"
        );

    }


    const mainMenu =
        document.getElementById(
            "main-menu"
        );


    if (mainMenu) {

        mainMenu.style.removeProperty(
            "display"
        );

    }

}


/* =========================================================
   INICIALIZACIÓN
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        loadScores();

        updateScoreboard();

    }
);
