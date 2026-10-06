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
        clue: "Apellido del famoso tenista suizo considerado uno de los mejores de todos los tiempos.",
        answer: "FEDERER",
        type: "contains"
    },
    H: {
        clue: "Nombre del país cuya capital es Budapest.",
        answer: "HUNGRÍA",
        type: "starts"
    },
    I: {
        clue: "Apellido del célebre pintor español autor del Guernica.",
        answer: "PICASSO",
        type: "contains"
    },
    J: {
        clue: "Nombre del famoso personaje de historieta argentino creado por Quino.",
        answer: "MAFALDA",
        type: "contains"
    },
    K: {
        clue: "Unidad de medida equivalente a mil gramos.",
        answer: "KILOGRAMO",
        type: "starts"
    },
    L: {
        clue: "Apellido del famoso músico argentino conocido como “El Flaco”.",
        answer: "SPINETTA",
        type: "contains"
    },
    M: {
        clue: "Animal mamífero conocido por su capacidad de cambiar de color.",
        answer: "CAMALEÓN",
        type: "contains"
    },
    N: {
        clue: "Nombre de la capital de Francia.",
        answer: "PARÍS",
        type: "contains"
    },
    O: {
        clue: "Elemento químico cuyo símbolo es O.",
        answer: "OXÍGENO",
        type: "starts"
    },
    P: {
        clue: "Apellido del delantero argentino considerado uno de los máximos goleadores de la historia.",
        answer: "BATISTUTA",
        type: "contains"
    },
    Q: {
        clue: "Nombre del personaje principal de la serie Breaking Bad.",
        answer: "WALTER WHITE",
        type: "contains"
    },
    R: {
        clue: "Capital de Italia.",
        answer: "ROMA",
        type: "starts"
    },
    S: {
        clue: "Nombre del satélite natural de la Tierra.",
        answer: "LUNA",
        type: "contains"
    },
    T: {
        clue: "Apellido del actor que interpretó a Jack Sparrow.",
        answer: "DEPP",
        type: "contains"
    },
    U: {
        clue: "País sudamericano cuya capital es Montevideo.",
        answer: "URUGUAY",
        type: "starts"
    },
    V: {
        clue: "Nombre de la ciudad italiana famosa por sus canales y góndolas.",
        answer: "VENECIA",
        type: "starts"
    },
    W: {
        clue: "Apellido del famoso fundador de Microsoft.",
        answer: "GATES",
        type: "contains"
    },
    X: {
        clue: "Instrumento musical de láminas metálicas o de madera que se golpean con baquetas.",
        answer: "XILÓFONO",
        type: "starts"
    },
    Y: {
        clue: "Nombre de la bebida alcohólica japonesa elaborada a partir de arroz fermentado.",
        answer: "SAKE",
        type: "contains"
    },
    Z: {
        clue: "Apellido del famoso jugador argentino que fue capitán de la Selección durante varios años.",
        answer: "ZANETTI",
        type: "starts"
    }
};


/* =========================================================
   DATOS DE EQUIPOS
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


let currentTeam = "team1";

let currentRosco =
    TEAM_DATA.team1;

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


        if (!saved) {
            return;
        }


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


    /*
     * CANCIONES
     *
     * No usamos el modal general.
     * El juego tiene su propia interfaz.
     */

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
                    </h3>

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


    const state =
        rondoState[
            team
        ];


    currentLetterIndex =
        state.currentIndex;


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

                if (
                    tab.dataset.team ===
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
   UI DEL EQUIPO
   ========================================================= */

function updateRondoTeamUI() {

    const teamName =
        document.getElementById(
            "rondo-team-name"
        );


    const score =
        document.getElementById(
            "rondo-score"
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
   MARCADOR DEL ROSCO
   ========================================================= */

function updateRondoScore() {

    const state =
        rondoState[
            currentTeam
        ];


    const score =
        document.getElementById(
            "rondo-score"
        );


    const hits =
        document.getElementById(
            "rondo-hits"
        );


    const misses =
        document.getElementById(
            "rondo-misses"
        );


    if (score) {

        score.textContent =
            state.hits;

    }


    if (hits) {

        hits.textContent =
            state.hits;

    }


    if (misses) {

        misses.textContent =
            state.misses;

    }

}


/* =========================================================
   RENDER ROSCO
   ========================================================= */

function renderRosco() {

    const container =
        document.getElementById(
            "rosco"
        );


    if (!container) {

        return;

    }


    container.innerHTML =
        "";


    const letters =
        Object.keys(
            currentRosco
        );


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


            button.textContent =
                letter;


            button.dataset.letter =
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


            container.appendChild(
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

    if (
        index < 0 ||
        index >=
        Object.keys(
            currentRosco
        ).length
    ) {

        return;

    }


    currentLetterIndex =
        index;


    rondoState[
        currentTeam
    ].currentIndex =
        index;


    showCurrentQuestion();

    updateRoscoLetterStyles();

}


/* =========================================================
   PREGUNTA ACTUAL
   ========================================================= */

function showCurrentQuestion() {

    const letters =
        Object.keys(
            currentRosco
        );


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


    const state =
        rondoState[
            currentTeam
        ];


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
            letter;

    }


    if (typeDisplay) {

        typeDisplay.textContent =
            item.type === "contains"
                ? "CONTIENE"
                : "COMIENZA CON";

    }


    if (questionDisplay) {

        questionDisplay.textContent =
            item.clue;

    }


    const input =
        document.getElementById(
            "answer-input"
        );


    if (input) {

        input.value =
            "";

        input.focus();

    }


    updateRondoLetterStyles();

    updateRondoScore();


    if (
        state.finished
    ) {

        return;

    }

}


/* =========================================================
   ESTILOS DE LETRAS
   ========================================================= */

function updateRoscoLetterStyles() {

    const state =
        rondoState[
            currentTeam
        ];


    document
        .querySelectorAll(
            ".rosco-letter"
        )
        .forEach(
            button => {

                const letter =
                    button.dataset.letter;


                button.classList.remove(
                    "current",
                    "correct",
                    "incorrect",
                    "passed"
                );


                if (
                    state.answered.includes(
                        letter
                    )
                ) {

                    const item =
                        currentRosco[
                            letter
                        ];


                    if (
                        item.correct
                    ) {

                        button.classList.add(
                            "correct"
                        );

                    } else {

                        button.classList.add(
                            "incorrect"
                        );

                    }

                }


                if (
                    state.passed.includes(
                        letter
                    )
                ) {

                    button.classList.add(
                        "passed"
                    );

                }


                if (
                    letter ===
                    Object.keys(
                        currentRosco
                    )[
                        currentLetterIndex
                    ]
                ) {

                    button.classList.add(
                        "current"
                    );

                }

            }
        );

}


/* =========================================================
   RESPONDER PREGUNTA
   ========================================================= */

function answerQuestion() {

    const input =
        document.getElementById(
            "answer-input"
        );


    if (!input) {

        return;

    }


    const answer =
        input.value
            .trim()
            .toUpperCase();


    answerRondo(
        answer
    );

}


/* =========================================================
   RESPONDER ROSCO
   ========================================================= */

function answerRondo(
    answer
) {

    const state =
        rondoState[
            currentTeam
        ];


    if (
        state.finished
    ) {

        return;

    }


    const letters =
        Object.keys(
            currentRosco
        );


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


    if (
        state.answered.includes(
            letter
        )
    ) {

        moveToNextLetter();

        return;

    }


    const normalizedAnswer =
        normalizeAnswer(
            answer
        );


    const normalizedCorrect =
        normalizeAnswer(
            item.answer
        );


    const isCorrect =
        normalizedAnswer ===
        normalizedCorrect;


    state.passed =
        state.passed.filter(
            l =>
                l !== letter
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

    updateRoscoLetterStyles();

    moveToNextLetter();

}


/* =========================================================
   NORMALIZAR RESPUESTAS DEL ROSCO
   ========================================================= */

function normalizeAnswer(
    value
) {

    return String(
        value || ""
    )
        .normalize("NFD")
        .replace(
            /[\u0300-\u036f]/g,
            ""
        )
        .replace(
            /[^A-Z0-9]/gi,
            ""
        )
        .toUpperCase();

}


/* =========================================================
   PASAPALABRA
   ========================================================= */

function passRondo() {

    const state =
        rondoState[
            currentTeam
        ];


    if (
        state.finished
    ) {

        return;

    }


    const letters =
        Object.keys(
            currentRosco
        );


    const letter =
        letters[
            currentLetterIndex
        ];


    if (
        !state.answered.includes(
            letter
        )
    ) {

        if (
            !state.passed.includes(
                letter
            )
        ) {

            state.passed.push(
                letter
            );

        }

    }


    moveToNextLetter();

}


/* =========================================================
   SIGUIENTE LETRA
   ========================================================= */

function moveToNextLetter() {

    const letters =
        Object.keys(
            currentRosco
        );


    if (!letters.length) {

        return;

    }


    let nextIndex =
        currentLetterIndex;


    for (
        let step = 1;
        step <= letters.length;
        step++
    ) {

        const candidate =
            (
                currentLetterIndex +
                step
            ) %
            letters.length;


        const letter =
            letters[
                candidate
            ];


        const state =
            rondoState[
                currentTeam
            ];


        if (
            !state.answered.includes(
                letter
            )
        ) {

            nextIndex =
                candidate;

            break;

        }

    }


    currentLetterIndex =
        nextIndex;


    rondoState[
        currentTeam
    ].currentIndex =
        nextIndex;


    showCurrentQuestion();

    updateRoscoLetterStyles();

}


/* =========================================================
   RESET ROSCO
   ========================================================= */

function resetRondo() {

    const confirmation =
        confirm(
            "¿Seguro que querés reiniciar el Pasapalabra?"
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
   =========================================================
   CANCIONES
   =========================================================
   ========================================================= */

const SONGS_DATA = [

    {
        title: "De música ligera",
        artists: [
            "Soda Stereo"
        ],
        decade: "80s",
        youtubeId: "T_FkEw27XJ0"
    },

    {
        title: "La incondicional",
        artists: [
            "Luis Miguel"
        ],
        decade: "80s",
        youtubeId: "by4I_10HbX4"
    },

    {
        title: "Me va, me va",
        artists: [
            "Julio Iglesias"
        ],
        decade: "80s",
        youtubeId: "CCht0AyKxNY"
    },

    {
        title: "Mil horas",
        artists: [
            "Los Abuelos de la Nada"
        ],
        decade: "80s",
        youtubeId: "CUdw-urZ3zg"
    },

    {
        title: "Devuélveme a mi chica",
        artists: [
            "Hombres G"
        ],
        decade: "80s",
        youtubeId: "U72tra23BF0"
    },

    {
        title: "Billie Jean",
        artists: [
            "Michael Jackson"
        ],
        decade: "80s",
        youtubeId: "Zi_XLOBDo_Y"
    },

    {
        title: "Never Gonna Give You Up",
        artists: [
            "Rick Astley"
        ],
        decade: "80s",
        youtubeId: "dQw4w9WgXcQ"
    },

    {
        title: "I Wanna Dance with Somebody",
        artists: [
            "Whitney Houston"
        ],
        decade: "80s",
        youtubeId: "eH3giaIzONA"
    },

    {
        title: "Girls Just Want to Have Fun",
        artists: [
            "Cyndi Lauper"
        ],
        decade: "80s",
        youtubeId: "PIb6AZdTr-A"
    },

    {
        title: "Livin' on a Prayer",
        artists: [
            "Bon Jovi"
        ],
        decade: "80s",
        youtubeId: "lDK9QqIzhwk"
    },


    {
        title: "Rayando el sol",
        artists: [
            "Maná"
        ],
        decade: "90s",
        youtubeId: "EDkQB9b3cBw"
    },

    {
        title: "Piel Morena",
        artists: [
            "Thalía"
        ],
        decade: "90s",
        youtubeId: "EMAjgSJr4Jg"
    },

    {
        title: "Livin' la Vida Loca",
        artists: [
            "Ricky Martin"
        ],
        decade: "90s",
        youtubeId: "p47fEXGabaY"
    },

    {
        title: "Vuelve",
        artists: [
            "Ricky Martin"
        ],
        decade: "90s",
        youtubeId: "p7QYo-9SlP0"
    },

    {
        title: "Flaca",
        artists: [
            "Andrés Calamaro"
        ],
        decade: "90s",
        youtubeId: "UCF9oHXhDMU"
    },

    {
        title: "Wannabe",
        artists: [
            "Spice Girls"
        ],
        decade: "90s",
        youtubeId: "gJLIiF15wjQ"
    },

    {
        title: "...Baby One More Time",
        artists: [
            "Britney Spears"
        ],
        decade: "90s",
        youtubeId: "C-u5WLJ9Yk4"
    },

    {
        title: "I Want It That Way",
        artists: [
            "Backstreet Boys"
        ],
        decade: "90s",
        youtubeId: "4fndeDfaWCg"
    },

    {
        title: "My Heart Will Go On",
        artists: [
            "Celine Dion"
        ],
        decade: "90s",
        youtubeId: "9bFHsd3o1w0"
    },

    {
        title: "Smells Like Teen Spirit",
        artists: [
            "Nirvana"
        ],
        decade: "90s",
        youtubeId: "hTWKbfoikeg"
    },


    {
        title: "La Tortura",
        artists: [
            "Shakira",
            "Alejandro Sanz"
        ],
        decade: "2000s",
        youtubeId: "Dsp_8Lm1eSk"
    },

    {
        title: "Me enamora",
        artists: [
            "Juanes"
        ],
        decade: "2000s",
        youtubeId: "voxgN3Dhjuo"
    },

    {
        title: "Ave María",
        artists: [
            "David Bisbal"
        ],
        decade: "2000s",
        youtubeId: "gra-sIV1n4U"
    },

    {
        title: "Colgando en tus manos",
        artists: [
            "Carlos Baute",
            "Marta Sánchez"
        ],
        decade: "2000s",
        youtubeId: "qExd-3oCTl4"
    },

    {
        title: "Rosas",
        artists: [
            "La Oreja de Van Gogh"
        ],
        decade: "2000s",
        youtubeId: "nYnLVWXmRm8"
    },

    {
        title: "Toxic",
        artists: [
            "Britney Spears"
        ],
        decade: "2000s",
        youtubeId: "LOZuxwVk7TU"
    },

    {
        title: "Crazy in Love",
        artists: [
            "Beyoncé",
            "Jay-Z"
        ],
        decade: "2000s",
        youtubeId: "ViwtNLUqkMY"
    },

    {
        title: "Umbrella",
        artists: [
            "Rihanna"
        ],
        decade: "2000s",
        youtubeId: "CvBfHwUxHIk"
    },

    {
        title: "Poker Face",
        artists: [
            "Lady Gaga"
        ],
        decade: "2000s",
        youtubeId: "bESGLojNYSo"
    },


    {
        title: "Despacito",
        artists: [
            "Luis Fonsi",
            "Daddy Yankee"
        ],
        decade: "2010s",
        youtubeId: "kJQP7kiw5Fk"
    },

    {
        title: "Bailando",
        artists: [
            "Enrique Iglesias"
        ],
        decade: "2010s",
        youtubeId: "NUsoVlDFqZg"
    },

    {
        title: "Danza Kuduro",
        artists: [
            "Don Omar",
            "Lucenzo"
        ],
        decade: "2010s",
        youtubeId: "7zp1TbLFPp8"
    },

    {
        title: "Vivir Mi Vida",
        artists: [
            "Marc Anthony"
        ],
        decade: "2010s",
        youtubeId: "YXnjy5YlDwk"
    },

    {
        title: "Échame la culpa",
        artists: [
            "Luis Fonsi",
            "Demi Lovato"
        ],
        decade: "2010s",
        youtubeId: "TyHvyGVs42U"
    },

    {
        title: "Uptown Funk",
        artists: [
            "Mark Ronson",
            "Bruno Mars"
        ],
        decade: "2010s",
        youtubeId: "OPf0YbXqDm0"
    },

    {
        title: "Shape of You",
        artists: [
            "Ed Sheeran"
        ],
        decade: "2010s",
        youtubeId: "JGwWNGJdvx8"
    },

    {
        title: "Rolling in the Deep",
        artists: [
            "Adele"
        ],
        decade: "2010s",
        youtubeId: "rYEDA3JcQqw"
    },

    {
        title: "Havana",
        artists: [
            "Camila Cabello"
        ],
        decade: "2010s",
        youtubeId: "HCjNJDNzw8Y"
    },

    {
        title: "Sorry",
        artists: [
            "Justin Bieber"
        ],
        decade: "2010s",
        youtubeId: "fRh_vgS2dFE"
    },


    {
        title: "Todo de Ti",
        artists: [
            "Rauw Alejandro"
        ],
        decade: "2020s",
        youtubeId: "CFPLIaMpGrY"
    },

    {
        title: "Hawái",
        artists: [
            "Maluma"
        ],
        decade: "2020s",
        youtubeId: "pK06OiUFWXg"
    },

    {
        title: "Tusa",
        artists: [
            "Karol G",
            "Nicki Minaj"
        ],
        decade: "2020s",
        youtubeId: "tbneQDc2H3I"
    },

    {
        title: "La Bachata",
        artists: [
            "Manuel Turizo"
        ],
        decade: "2020s",
        youtubeId: "TqA8D9nJ9xI"
    },

    {
        title: "SUPERESTRELLA",
        artists: [
            "Aitana"
        ],
        decade: "2020s",
        youtubeId: "vz_vU53JvvI"
    },

    {
        title: "Die With A Smile",
        artists: [
            "Lady Gaga",
            "Bruno Mars"
        ],
        decade: "2020s",
        youtubeId: "kPa7bsKwL-c"
    },

    {
        title: "As It Was",
        artists: [
            "Harry Styles"
        ],
        decade: "2020s",
        youtubeId: "H5v3kku4y6Q"
    },

    {
        title: "Flowers",
        artists: [
            "Miley Cyrus"
        ],
        decade: "2020s",
        youtubeId: "G7KNmW9a75Y"
    },

    {
        title: "good 4 u",
        artists: [
            "Olivia Rodrigo"
        ],
        decade: "2020s",
        youtubeId: "gNi_6U5Pm_o"
    },

    {
        title: "Espresso",
        artists: [
            "Sabrina Carpenter"
        ],
        decade: "2020s",
        youtubeId: "eVli-tstM5E"
    }

];


let songsGame = null;

let songsPlayer = null;

let songsPlayerReady = false;

let songsApiLoading = false;


/* =========================================================
   YOUTUBE API
   ========================================================= */

function loadYouTubeApiForSongs() {

    if (
        window.YT &&
        window.YT.Player
    ) {

        if (songsGame) {

            createSongsPlayer();

        }

        return;

    }


    if (songsApiLoading) {

        return;

    }


    songsApiLoading =
        true;


    const oldReady =
        window.onYouTubeIframeAPIReady;


    window.onYouTubeIframeAPIReady =
        function() {

            if (
                typeof oldReady ===
                "function"
            ) {

                oldReady();

            }


            if (songsGame) {

                createSongsPlayer();

            }

        };


    const tag =
        document.createElement(
            "script"
        );


    tag.src =
        "https://www.youtube.com/iframe_api";


    document.head.appendChild(
        tag
    );

}


/* =========================================================
   NORMALIZAR RESPUESTAS DE CANCIONES
   ========================================================= */

function normalizeSongText(
    value
) {

    return String(
        value || ""
    )
        .normalize("NFD")
        .replace(
            /[\u0300-\u036f]/g,
            ""
        )
        .toLowerCase()
        .replace(
            /&/g,
            " y "
        )
        .replace(
            /[’']/g,
            ""
        )
        .replace(
            /[^a-z0-9\s]/g,
            " "
        )
        .replace(
            /\b(?:the|a|an|el|la|los|las|un|una|de|del|al)\b/g,
            " "
        )
        .replace(
            /\s+/g,
            " "
        )
        .trim();

}


function songTextMatches(
    answer,
    expected
) {

    const a =
        normalizeSongText(
            answer
        );


    const e =
        normalizeSongText(
            expected
        );


    if (
        !a ||
        !e
    ) {

        return false;

    }


    if (
        a === e
    ) {

        return true;

    }


    if (
        a.replace(
            /\s/g,
            ""
        ) ===
        e.replace(
            /\s/g,
            ""
        )
    ) {

        return true;

    }


    return false;

}


/* =========================================================
   DATOS DE UNA CANCIÓN
   ========================================================= */

function getSongDataPoints(
    song
) {

    const points = [

        {
            key: "decade",
            label: "Década",
            answer: song.decade
        }

    ];


    song.artists.forEach(
        function(
            artist,
            index
        ) {

            points.push({

                key:
                    "artist-" +
                    index,

                label:
                    song.artists.length > 1
                        ?
                        `Artista ${index + 1}`
                        :
                        "Artista",

                answer:
                    artist

            });

        }
    );


    points.push({

        key: "title",

        label:
            "Canción",

        answer:
            song.title

    });


    return points;

}


/* =========================================================
   MEZCLAR CANCIONES
   ========================================================= */

function shuffleSongs(
    list
) {

    const copy =
        [...list];


    for (
        let i =
            copy.length - 1;

        i > 0;

        i--
    ) {

        const j =
            Math.floor(
                Math.random() *
                (i + 1)
            );


        [
            copy[i],
            copy[j]
        ] =
        [
            copy[j],
            copy[i]
        ];

    }


    return copy;

}


/* =========================================================
   ESTADO DEL JUEGO
   ========================================================= */

function createSongsGameState() {

    return {

        queue:
            shuffleSongs(
                SONGS_DATA
            ),

        index: 0,

        locked: {},

        awarded: {},

        current: null

    };

}


/* =========================================================
   ABRIR CANCIONES
   ========================================================= */

function openSongsGame() {

    songsGame =
        createSongsGameState();


    renderSongsGame();


    loadYouTubeApiForSongs();


    loadNextSong();

}


/* =========================================================
   INTERFAZ CANCIONES
   ========================================================= */

function renderSongsGame() {

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


    modal.className =
        "songs-modal active";


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
                        Cargando canción...
                    </p>

                </div>


                <button
                    class="songs-close"
                    onclick="closeSongsGame()"
                >
                    ✕
                </button>

            </div>


            <div class="songs-player-wrap">

                <div
                    id="songs-youtube-player"
                ></div>

            </div>


            <div class="songs-controls">

                <button
                    onclick="songsPlay()"
                >
                    ▶ Play desde 0
                </button>

                <button
                    onclick="songsPause()"
                >
                    ⏸ Pausar
                </button>

                <button
                    onclick="songsContinue()"
                >
                    ▶ Continuar
                </button>

                <button
                    onclick="songsRestart()"
                >
                    ↺ Reiniciar
                </button>

            </div>


            <div
                id="songs-fields"
                class="songs-fields"
            ></div>


            <div class="songs-bottom">

                <button
                    class="songs-next"
                    onclick="nextSong()"
                >
                    🎵 Nueva canción
                </button>

                <button
                    class="songs-close-bottom"
                    onclick="closeSongsGame()"
                >
                    Cerrar juego
                </button>

            </div>

        </div>

    `;


    injectSongsStyles();

}


/* =========================================================
   ESTILOS CANCIONES
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

        #songs-modal {

            position: fixed;

            inset: 0;

            background:
                rgba(0,0,0,.88);

            z-index: 99999;

            display: flex;

            align-items: center;

            justify-content: center;

            padding: 22px;

            font-family: inherit;

        }


        .songs-panel {

            width:
                min(1100px,96vw);

            max-height: 94vh;

            overflow: auto;

            background: #111;

            border:
                2px solid #B6FF00;

            border-radius: 22px;

            box-shadow:
                0 0 40px
                rgba(
                    182,
                    255,
                    0,
                    .18
                );

            color: #fff;

            padding: 25px;

        }


        .songs-head {

            display: flex;

            justify-content:
                space-between;

            gap: 20px;

            align-items:
                flex-start;

            margin-bottom: 20px;

        }


        .songs-kicker {

            color: #B6FF00;

            font-weight: 800;

            letter-spacing: 1.5px;

            font-size: 13px;

        }


        .songs-head h2 {

            margin:
                5px 0;

            font-size: 32px;

        }


        .songs-head p {

            margin: 0;

            color: #bbb;

        }


        .songs-close {

            background: #222;

            border:
                1px solid #555;

            color: #fff;

            border-radius: 10px;

            width: 42px;

            height: 42px;

            font-size: 20px;

            cursor: pointer;

        }


        .songs-player-wrap {

            width: 100%;

            aspect-ratio: 16 / 9;

            background: #000;

            border-radius: 14px;

            overflow: hidden;

        }


        .songs-player-wrap > div,

        .songs-player-wrap iframe {

            width:
                100% !important;

            height:
                100% !important;

            display: block;

        }


        .songs-controls {

            display: grid;

            grid-template-columns:
                repeat(4,1fr);

            gap: 10px;

            margin: 14px 0;

        }


        .songs-controls button,

        .songs-next,

        .songs-close-bottom {

            border: 0;

            border-radius: 10px;

            padding:
                12px 10px;

            font-weight: 800;

            cursor: pointer;

        }


        .songs-controls button {

            background: #242424;

            color: #fff;

        }


        .songs-controls button:hover {

            background: #333;

        }


        .songs-next {

            background: #B6FF00;

            color: #0B0B0B;

        }


        .songs-close-bottom {

            background: #242424;

            color: #fff;

        }


        .songs-fields {

            display: grid;

            grid-template-columns:
                repeat(
                    auto-fit,
                    minmax(
                        220px,
                        1fr
                    )
                );

            gap: 12px;

            margin-top: 15px;

        }


        .song-field {

            background: #181818;

            border:
                1px solid #333;

            border-radius: 14px;

            padding: 15px;

        }


        .song-field.locked {

            border-color:
                #B6FF00;

        }


        .song-field h4 {

            margin:
                0 0 9px;

        }


        .song-field small {

            display: block;

            color: #aaa;

            margin-bottom: 9px;

        }


        .song-field-row {

            display: flex;

            gap: 8px;

        }


        .song-field input {

            flex: 1;

            min-width: 0;

            background: #0d0d0d;

            color: #fff;

            border:
                1px solid #444;

            border-radius: 8px;

            padding: 10px;

        }


        .song-field select {

            width: 100%;

            background: #0d0d0d;

            color: #fff;

            border:
                1px solid #444;

            border-radius: 8px;

            padding: 10px;

            margin-top: 8px;

        }


        .song-field button {

            background: #B6FF00;

            color: #0B0B0B;

            border: 0;

            border-radius: 8px;

            padding:
                10px 12px;

            font-weight: 900;

            cursor: pointer;

        }


        .song-result {

            margin-top: 9px;

            font-weight: 800;

        }


        .song-ok {

            color: #B6FF00;

        }


        .song-wrong {

            color: #ff7070;

        }


        .songs-bottom {

            display: flex;

            justify-content:
                flex-end;

            gap: 10px;

            margin-top: 18px;

        }


        .songs-bottom button {

            min-width: 160px;

        }


        @media(max-width:700px) {

            .songs-controls {

                grid-template-columns:
                    repeat(2,1fr);

            }


            .songs-panel {

                padding: 16px;

            }


            .songs-head h2 {

                font-size: 25px;

            }

        }

    `;


    document.head.appendChild(
        style
    );

}


/* =========================================================
   CREAR REPRODUCTOR YOUTUBE
   ========================================================= */

function createSongsPlayer() {

    const host =
        document.getElementById(
            "songs-youtube-player"
        );


    if (
        !host ||
        !songsGame ||
        !songsGame.current
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

        } catch(error) {}

    }


    songsPlayerReady =
        false;


    songsPlayer =
        new YT.Player(
            "songs-youtube-player",
            {

                height: "100%",

                width: "100%",

                videoId:
                    songsGame.current.youtubeId,

                playerVars: {

                    playsinline: 1,

                    controls: 1,

                    rel: 0

                },

                events: {

                    onReady:
                        function() {

                            songsPlayerReady =
                                true;

                            songsRestart();

                        },

                    onAutoplayBlocked:
                        function() {}

                }

            }
        );

}


/* =========================================================
   SIGUIENTE CANCIÓN
   ========================================================= */

function loadNextSong() {

    if (!songsGame) {

        return;

    }


    if (
        songsGame.index >=
        songsGame.queue.length
    ) {

        const status =
            document.getElementById(
                "songs-status"
            );


        const fields =
            document.getElementById(
                "songs-fields"
            );


        if (status) {

            status.textContent =
                "🎉 Terminaron las canciones disponibles.";

        }


        if (fields) {

            fields.innerHTML = `

                <div
                    class="song-field"
                    style="grid-column:1/-1;"
                >

                    <h4>
                        Juego terminado
                    </h4>

                    <small>
                        Se usaron todas las canciones
                        sin repetir.
                    </small>

                </div>

            `;

        }


        return;

    }


    songsGame.current =
        songsGame.queue[
            songsGame.index
        ];


    songsGame.index++;


    songsGame.locked = {};

    songsGame.awarded = {};


    const status =
        document.getElementById(
            "songs-status"
        );


    if (status) {

        status.textContent =
            `Canción ${songsGame.index} de ${songsGame.queue.length}`;

    }


    renderSongFields();


    if (
        window.YT &&
        window.YT.Player
    ) {

        createSongsPlayer();

    }

}


/* =========================================================
   CAMPOS DE RESPUESTA
   ========================================================= */

function renderSongFields() {

    const container =
        document.getElementById(
            "songs-fields"
        );


    if (
        !container ||
        !songsGame ||
        !songsGame.current
    ) {

        return;

    }


    const points =
        getSongDataPoints(
            songsGame.current
        );


    container.innerHTML =
        points
            .map(
                function(point) {

                    return `

                        <div
                            class="song-field"
                            id="song-field-${point.key}"
                        >

                            <h4>
                                ${point.label}
                            </h4>

                            <small>
                                1 punto · rebote
                                si falla
                            </small>


                            <div
                                class="song-field-row"
                            >

                                <input
                                    id="song-input-${point.key}"
                                    autocomplete="off"
                                    placeholder="Respuesta..."
                                    onkeydown="
                                        if(event.key==='Enter')
                                        checkSongAnswer('${point.key}')
                                    "
                                >


                                <button
                                    onclick="
                                        checkSongAnswer(
                                            '${point.key}'
                                        )
                                    "
                                >
                                    OK
                                </button>

                            </div>


                            <select
                                id="song-team-${point.key}"
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


                            <div
                                id="song-result-${point.key}"
                                class="song-result"
                            ></div>

                        </div>

                    `;

                }
            )
            .join("");

}


/* =========================================================
   COMPROBAR RESPUESTA
   ========================================================= */

function checkSongAnswer(
    key
) {

    if (
        !songsGame ||
        !songsGame.current ||
        songsGame.locked[key]
    ) {

        return;

    }


    const points =
        getSongDataPoints(
            songsGame.current
        );


    const point =
        points.find(
            function(p) {

                return p.key === key;

            }
        );


    if (!point) {

        return;

    }


    const input =
        document.getElementById(
            "song-input-" +
            key
        );


    const select =
        document.getElementById(
            "song-team-" +
            key
        );


    const result =
        document.getElementById(
            "song-result-" +
            key
        );


    if (
        !input ||
        !select ||
        !result
    ) {

        return;

    }


    const team =
        select.value;


    if (!team) {

        result.className =
            "song-result song-wrong";


        result.textContent =
            "⚠️ Elegí el equipo.";

        return;

    }


    const correct =
        songTextMatches(
            input.value,
            point.answer
        );


    if (correct) {

        songsGame.locked[key] =
            true;


        songsGame.awarded[key] =
            team;


        addPoints(
            team,
            "songs",
            1
        );


        const field =
            document.getElementById(
                "song-field-" +
                key
            );


        if (field) {

            field.classList.add(
                "locked"
            );

        }


        input.disabled =
            true;


        select.disabled =
            true;


        result.className =
            "song-result song-ok";


        result.textContent =
            `✓ Correcto · +1 para ${
                getTeamName(team)
            }`;


        const allCorrect =
            points.every(
                function(p) {

                    return songsGame.locked[
                        p.key
                    ];

                }
            );


        if (allCorrect) {

            setTimeout(
                nextSong,
                700
            );

        }


    } else {

        result.className =
            "song-result song-wrong";


        result.textContent =
            "✗ Incorrecto · rebote para este dato.";

        input.select();

    }

}


/* =========================================================
   NUEVA CANCIÓN
   ========================================================= */

function nextSong() {

    if (!songsGame) {

        return;

    }


    loadNextSong();

}


/* =========================================================
   CONTROLES DEL REPRODUCTOR
   ========================================================= */

function songsPlay() {

    if (
        !songsPlayerReady ||
        !songsPlayer
    ) {

        return;

    }


    songsPlayer.seekTo(
        0,
        true
    );


    songsPlayer.playVideo();

}


function songsPause() {

    if (
        songsPlayerReady &&
        songsPlayer
    ) {

        songsPlayer.pauseVideo();

    }

}


function songsContinue() {

    if (
        songsPlayerReady &&
        songsPlayer
    ) {

        songsPlayer.playVideo();

    }

}


function songsRestart() {

    if (
        songsPlayerReady &&
        songsPlayer
    ) {

        songsPlayer.seekTo(
            0,
            true
        );

    }

}


/* =========================================================
   CERRAR CANCIONES
   ========================================================= */

function closeSongsGame() {

    if (
        songsPlayer &&
        typeof songsPlayer.destroy ===
        "function"
    ) {

        try {

            songsPlayer.destroy();

        } catch(error) {}

    }


    songsPlayer =
        null;


    songsPlayerReady =
        false;


    songsGame =
        null;


    const modal =
        document.getElementById(
            "songs-modal"
        );


    if (modal) {

        modal.remove();

    }

}


/* =========================================================
   INICIO
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        loadScores();

        updateScoreboard();

    }
);
