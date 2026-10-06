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

let currentTeam = null;
let currentRosco = null;
let currentLetterIndex = 0;


/* =========================================================
   CARGAR PUNTAJES
   ========================================================= */

function loadScores() {
    try {
        const saved = localStorage.getItem("bettScores");

        if (saved) {
            const parsed = JSON.parse(saved);

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
    for (let i = 1; i <= 3; i++) {
        const team = "team" + i;

        const total = document.getElementById(
            "score-team-" + i
        );

        const kahoot = document.getElementById(
            "kahoot-" + i
        );

        const rondo = document.getElementById(
            "rondo-" + i
        );

        const songs = document.getElementById(
            "songs-" + i
        );

        const totalCell = document.getElementById(
            "total-" + i
        );

        if (total) {
            total.textContent = getTotal(team);
        }

        if (kahoot) {
            kahoot.textContent = scores[team].kahoot;
        }

        if (rondo) {
            rondo.textContent = scores[team].rondo;
        }

        if (songs) {
            songs.textContent = scores[team].songs;
        }

        if (totalCell) {
            totalCell.textContent = getTotal(team);
        }
    }
}


/* =========================================================
   SUMAR PUNTOS
   ========================================================= */

function addPoints(team, game, points) {
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
    const confirmation = confirm(
        "¿Seguro que querés reiniciar el marcador general?"
    );

    if (!confirmation) {
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
    if (game === "rondo") {
        openRondo();
        return;
    }

    if (game === "songs") {
        openSongsGame();
        return;
    }

    const modal = document.getElementById(
        "game-modal"
    );

    const title = document.getElementById(
        "modal-title"
    );

    const description = document.getElementById(
        "modal-description"
    );

    const icon = document.getElementById(
        "modal-icon"
    );

    if (!modal) {
        return;
    }

    if (game === "kahoot") {
        if (icon) {
            icon.textContent = "🧠";
        }

        if (title) {
            title.textContent = "Kahoot";
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

    modal.classList.add("active");
}


/* =========================================================
   KAHOOT
   ========================================================= */

function saveKahootResult() {
    const first = document.getElementById(
        "kahoot-team-1"
    );

    const second = document.getElementById(
        "kahoot-team-2"
    );

    const third = document.getElementById(
        "kahoot-team-3"
    );

    if (
        !first ||
        !second ||
        !third
    ) {
        return;
    }

    const firstTeam = first.value;
    const secondTeam = second.value;
    const thirdTeam = third.value;

    if (
        !firstTeam ||
        !secondTeam ||
        !thirdTeam
    ) {
        alert(
            "Seleccioná los tres equipos."
        );
        return;
    }

    const teams = [
        firstTeam,
        secondTeam,
        thirdTeam
    ];

    if (
        new Set(teams).size !== 3
    ) {
        alert(
            "Cada equipo debe ocupar una posición diferente."
        );
        return;
    }

    scores[firstTeam].kahoot = 3;
    scores[secondTeam].kahoot = 2;
    scores[thirdTeam].kahoot = 1;

    saveScores();
    updateScoreboard();

    alert(
        "🏆 Resultado del Kahoot guardado."
    );
}


/* =========================================================
   CERRAR MODAL GENERAL
   ========================================================= */

function closeModal() {
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
   ROSCO
   ========================================================= */

function openRondo() {
    const menu =
        document.getElementById(
            "main-menu"
        );

    const rondo =
        document.getElementById(
            "rondo-modal"
        );

    if (menu) {
        menu.style.display = "none";
    }

    if (rondo) {
        rondo.style.display = "flex";
    }

    currentTeam = null;
    currentRosco = null;
    currentLetterIndex = 0;

    renderRondoTeamSelection();
}


function closeRondo() {
    const rondo =
        document.getElementById(
            "rondo-modal"
        );

    if (rondo) {
        rondo.style.display = "none";
    }

    const menu =
        document.getElementById(
            "main-menu"
        );

    if (menu) {
        menu.style.display = "flex";
    }
}


function renderRondoTeamSelection() {
    const selector =
        document.getElementById(
            "rondo-team-selector"
        );

    if (!selector) {
        return;
    }

    selector.innerHTML = "";

    const teams = [
        {
            id: "team1",
            name: "Los Originales"
        },
        {
            id: "team2",
            name: "Los Herederos"
        },
        {
            id: "team3",
            name: "Las Históricas"
        }
    ];

    teams.forEach(team => {
        const button =
            document.createElement(
                "button"
            );

        button.type = "button";
        button.className =
            "rondo-team-button";

        button.textContent =
            team.name;

        button.onclick = () => {
            selectRosco(
                team.id
            );
        };

        selector.appendChild(
            button
        );
    });
}


function selectRosco(team) {
    if (!TEAM_DATA[team]) {
        return;
    }

    currentTeam = team;
    currentRosco = TEAM_DATA[team];

    currentLetterIndex =
        rondoState[team].currentIndex;

    renderRosco();
    updateRondoTeamInfo();
}


function updateRondoTeamInfo() {
    const name =
        document.getElementById(
            "rondo-current-team"
        );

    if (!name) {
        return;
    }

    if (!currentTeam) {
        name.textContent =
            "Seleccioná un equipo";

        return;
    }

    const names = {
        team1: "Los Originales",
        team2: "Los Herederos",
        team3: "Las Históricas"
    };

    name.textContent =
        names[currentTeam];
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

    rosco.innerHTML = "";

    const letters =
        Object.keys(
            currentRosco
        );

    const total =
        letters.length;

    const radius = 45;

    letters.forEach(
        (letter, index) => {

            const button =
                document.createElement(
                    "button"
                );

            button.type = "button";

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

            const state =
                rondoState[
                    currentTeam
                ];

            const item =
                currentRosco[
                    letter
                ];

            if (
                state.answered.includes(
                    letter
                )
            ) {

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

            } else if (
                state.passed.includes(
                    letter
                )
            ) {

                button.classList.add(
                    "passed"
                );

            }

            if (
                index ===
                state.currentIndex &&
                !state.finished
            ) {

                button.classList.add(
                    "current"
                );

            }

            button.onclick =
                () => {
                    selectRondoLetter(
                        letter
                    );
                };

            rosco.appendChild(
                button
            );

        }
    );

    renderRondoQuestion();
    renderRondoScore();
}


/* =========================================================
   PREGUNTA ROSCO
   ========================================================= */

function renderRondoQuestion() {
    const question =
        document.getElementById(
            "rondo-question"
        );

    const letter =
        document.getElementById(
            "rondo-current-letter"
        );

    const input =
        document.getElementById(
            "rondo-answer"
        );

    if (
        !currentTeam ||
        !currentRosco
    ) {

        if (question) {
            question.textContent =
                "Seleccioná un equipo para comenzar.";
        }

        if (letter) {
            letter.textContent =
                "";
        }

        if (input) {
            input.value = "";
            input.disabled = true;
        }

        return;
    }

    const state =
        rondoState[
            currentTeam
        ];

    if (
        state.finished
    ) {

        if (question) {
            question.textContent =
                "Rosco finalizado";
        }

        if (letter) {
            letter.textContent =
                "✓";
        }

        if (input) {
            input.value = "";
            input.disabled = true;
        }

        return;
    }

    const letters =
        Object.keys(
            currentRosco
        );

    const currentLetter =
        letters[
            state.currentIndex
        ];

    const item =
        currentRosco[
            currentLetter
        ];

    if (letter) {
        letter.textContent =
            currentLetter;
    }

    if (question) {
        question.textContent =
            item.clue;
    }

    if (input) {
        input.disabled = false;
    }
}


/* =========================================================
   SCORE ROSCO
   ========================================================= */

function renderRondoScore() {
    const state =
        currentTeam
            ? rondoState[currentTeam]
            : null;

    const hits =
        document.getElementById(
            "rondo-hits"
        );

    const misses =
        document.getElementById(
            "rondo-misses"
        );

    if (!state) {
        return;
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
   SELECCIONAR LETRA
   ========================================================= */

function selectRondoLetter(
    letter
) {

    if (
        !currentTeam ||
        !currentRosco
    ) {
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

    const letters =
        Object.keys(
            currentRosco
        );

    const index =
        letters.indexOf(
            letter
        );

    if (
        index === -1
    ) {
        return;
    }

    if (
        state.answered.includes(
            letter
        )
    ) {
        return;
    }

    state.currentIndex =
        index;

    currentLetterIndex =
        index;

    renderRosco();
}


/* =========================================================
   NORMALIZAR RESPUESTA
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
        .toUpperCase()
        .replace(
            /[¿?¡!.,;:'"()\-_/]/g,
            " "
        )
        .replace(
            /\s+/g,
            " "
        )
        .trim();

}


/* =========================================================
   COMPROBAR RESPUESTA
   ========================================================= */

function answerMatches(
    userAnswer,
    correctAnswer
) {

    const user =
        normalizeAnswer(
            userAnswer
        );

    const correct =
        normalizeAnswer(
            correctAnswer
        );

    if (
        !user ||
        !correct
    ) {
        return false;
    }

    if (
        user === correct
    ) {
        return true;
    }

    return (
        user.replace(
            /\s/g,
            ""
        ) ===
        correct.replace(
            /\s/g,
            ""
        )
    );

}


/* =========================================================
   RESPONDER ROSCO
   ========================================================= */

function answerRondo(
    isCorrect
) {

    if (
        !currentTeam ||
        !currentRosco
    ) {
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

    const letters =
        Object.keys(
            currentRosco
        );

    const letter =
        letters[
            state.currentIndex
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
        return;
    }

    state.passed =
        state.passed.filter(
            value =>
                value !==
                letter
        );

    item.correct =
        isCorrect;

    state.answered.push(
        letter
    );

    if (
        isCorrect
    ) {

        state.hits++;

        addPoints(
            currentTeam,
            "rondo",
            1
        );

    } else {

        state.misses++;

    }

    moveToNextRondoLetter();

}


/* =========================================================
   RESPONDER DESDE INPUT
   ========================================================= */

function answerRondoFromInput() {

    const input =
        document.getElementById(
            "rondo-answer"
        );

    if (!input) {
        return;
    }

    const value =
        input.value.trim();

    if (!value) {
        return;
    }

    if (
        !currentTeam ||
        !currentRosco
    ) {
        return;
    }

    const state =
        rondoState[
            currentTeam
        ];

    const letters =
        Object.keys(
            currentRosco
        );

    const letter =
        letters[
            state.currentIndex
        ];

    const item =
        currentRosco[
            letter
        ];

    if (!item) {
        return;
    }

    const correct =
        answerMatches(
            value,
            item.answer
        );

    answerRondo(
        correct
    );

    input.value = "";

}


/* =========================================================
   PASAR
   ========================================================= */

function passRondo() {

    if (
        !currentTeam ||
        !currentRosco
    ) {
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

    const letters =
        Object.keys(
            currentRosco
        );

    const letter =
        letters[
            state.currentIndex
        ];

    if (!letter) {
        return;
    }

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

    moveToNextRondoLetter();

}


/* =========================================================
   SIGUIENTE LETRA
   ========================================================= */

function moveToNextRondoLetter() {

    if (
        !currentTeam ||
        !currentRosco
    ) {
        return;
    }

    const state =
        rondoState[
            currentTeam
        ];

    const letters =
        Object.keys(
            currentRosco
        );

    let nextIndex =
        state.currentIndex +
        1;

    if (
        nextIndex >=
        letters.length
    ) {

        nextIndex = 0;

    }

    let attempts = 0;

    while (
        state.answered.includes(
            letters[nextIndex]
        ) &&
        attempts <
            letters.length
    ) {

        nextIndex++;

        if (
            nextIndex >=
            letters.length
        ) {

            nextIndex = 0;

        }

        attempts++;

    }

    if (
        attempts >=
        letters.length
    ) {

        finishRondo();

        return;

    }

    state.currentIndex =
        nextIndex;

    currentLetterIndex =
        nextIndex;

    renderRosco();

}


/* =========================================================
   FINALIZAR ROSCO
   ========================================================= */

function finishRondo() {

    if (
        !currentTeam
    ) {
        return;
    }

    const state =
        rondoState[
            currentTeam
        ];

    state.finished =
        true;

    scores[
        currentTeam
    ].rondo =
        state.hits;

    saveScores();
    updateScoreboard();
    renderRosco();

}


/* =========================================================
   REINICIAR ROSCO ACTUAL
   ========================================================= */

function restartCurrentRondo() {

    if (
        !currentTeam
    ) {
        return;
    }

    rondoState[
        currentTeam
    ] =
        createInitialRondoState();

    scores[
        currentTeam
    ].rondo = 0;

    saveScores();
    updateScoreboard();

    currentLetterIndex = 0;

    renderRosco();

}


/* =========================================================
   TECLA ENTER ROSCO
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key !==
            "Enter"
        ) {
            return;
        }

        const input =
            document.getElementById(
                "rondo-answer"
            );

        if (
            input &&
            document.activeElement ===
                input &&
            !input.disabled
        ) {

            event.preventDefault();

            answerRondoFromInput();

        }

    }
);


/* =========================================================
   INICIALIZACIÓN
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        loadScores();
        updateScoreboard();

    }
);


/* =========================================================
   SONGS
   ========================================================= */

const SONGS_DATA = [
    {
        title: "De música ligera",
        artists: ["Soda Stereo"],
        decade: "80s",
        youtubeId: "T_FkEw27XJ0"
    },
    {
        title: "La incondicional",
        artists: ["Luis Miguel"],
        decade: "80s",
        youtubeId: "by4I_10HbX4"
    },
    {
        title: "Me va, me va",
        artists: ["Julio Iglesias"],
        decade: "80s",
        youtubeId: "CCht0AyKxNY"
    },
    {
        title: "Mil horas",
        artists: ["Los Abuelos de la Nada"],
        decade: "80s",
        youtubeId: "CUdw-urZ3zg"
    },
    {
        title: "Devuélveme a mi chica",
        artists: ["Hombres G"],
        decade: "80s",
        youtubeId: "U72tra23BF0"
    },
    {
        title: "Billie Jean",
        artists: ["Michael Jackson"],
        decade: "80s",
        youtubeId: "Zi_XLOBDo_Y"
    },
    {
        title: "Never Gonna Give You Up",
        artists: ["Rick Astley"],
        decade: "80s",
        youtubeId: "dQw4w9WgXcQ"
    },
    {
        title: "I Wanna Dance with Somebody",
        artists: ["Whitney Houston"],
        decade: "80s",
        youtubeId: "eH3giaIzONA"
    },
    {
        title: "Girls Just Want to Have Fun",
        artists: ["Cyndi Lauper"],
        decade: "80s",
        youtubeId: "PIb6AZdTr-A"
    },
    {
        title: "Livin' on a Prayer",
        artists: ["Bon Jovi"],
        decade: "80s",
        youtubeId: "lDK9QqIzhwk"
    },

    {
        title: "Rayando el sol",
        artists: ["Maná"],
        decade: "90s",
        youtubeId: "EDkQB9b3cBw"
    },
    {
        title: "Piel Morena",
        artists: ["Thalía"],
        decade: "90s",
        youtubeId: "EMAjgSJr4Jg"
    },
    {
        title: "Livin' la Vida Loca",
        artists: ["Ricky Martin"],
        decade: "90s",
        youtubeId: "p47fEXGabaY"
    },
    {
        title: "Vuelve",
        artists: ["Ricky Martin"],
        decade: "90s",
        youtubeId: "p7QYo-9SlP0"
    },
    {
        title: "Flaca",
        artists: ["Andrés Calamaro"],
        decade: "90s",
        youtubeId: "UCF9oHXhDMU"
    },
    {
        title: "Wannabe",
        artists: ["Spice Girls"],
        decade: "90s",
        youtubeId: "gJLIiF15wjQ"
    },
    {
        title: "...Baby One More Time",
        artists: ["Britney Spears"],
        decade: "90s",
        youtubeId: "C-u5WLJ9Yk4"
    },
    {
        title: "I Want It That Way",
        artists: ["Backstreet Boys"],
        decade: "90s",
        youtubeId: "4fndeDfaWCg"
    },
    {
        title: "My Heart Will Go On",
        artists: ["Celine Dion"],
        decade: "90s",
        youtubeId: "9bFHsd3o1w0"
    },
    {
        title: "Smells Like Teen Spirit",
        artists: ["Nirvana"],
        decade: "90s",
        youtubeId: "hTWKbfoikeg"
    },

    {
        title: "La Tortura",
        artists: ["Shakira", "Alejandro Sanz"],
        decade: "2000s",
        youtubeId: "Dsp_8Lm1eSk"
    },
    {
        title: "Me enamora",
        artists: ["Juanes"],
        decade: "2000s",
        youtubeId: "voxgN3Dhjuo"
    },
    {
        title: "Ave María",
        artists: ["David Bisbal"],
        decade: "2000s",
        youtubeId: "gra-sIV1n4U"
    },
    {
        title: "Colgando en tus manos",
        artists: ["Carlos Baute", "Marta Sánchez"],
        decade: "2000s",
        youtubeId: "qExd-3oCTl4"
    },
    {
        title: "Rosas",
        artists: ["La Oreja de Van Gogh"],
        decade: "2000s",
        youtubeId: "nYnLVWXmRm8"
    },
    {
        title: "Toxic",
        artists: ["Britney Spears"],
        decade: "2000s",
        youtubeId: "LOZuxwVk7TU"
    },
    {
        title: "Crazy in Love",
        artists: ["Beyoncé", "Jay-Z"],
        decade: "2000s",
        youtubeId: "ViwtNLUqkMY"
    },
    {
        title: "Umbrella",
        artists: ["Rihanna"],
        decade: "2000s",
        youtubeId: "CvBfHwUxHIk"
    },
    {
        title: "Poker Face",
        artists: ["Lady Gaga"],
        decade: "2000s",
        youtubeId: "bESGLojNYSo"
    },

    {
        title: "Despacito",
        artists: ["Luis Fonsi", "Daddy Yankee"],
        decade: "2010s",
        youtubeId: "kJQP7kiw5Fk"
    },
    {
        title: "Bailando",
        artists: ["Enrique Iglesias"],
        decade: "2010s",
        youtubeId: "NUsoVlDFqZg"
    },
    {
        title: "Danza Kuduro",
        artists: ["Don Omar", "Lucenzo"],
        decade: "2010s",
        youtubeId: "7zp1TbLFPp8"
    },
    {
        title: "Vivir Mi Vida",
        artists: ["Marc Anthony"],
        decade: "2010s",
        youtubeId: "YXnjy5YlDwk"
    },
    {
        title: "Échame la culpa",
        artists: ["Luis Fonsi", "Demi Lovato"],
        decade: "2010s",
        youtubeId: "TyHvyGVs42U"
    },
    {
        title: "Uptown Funk",
        artists: ["Mark Ronson", "Bruno Mars"],
        decade: "2010s",
        youtubeId: "OPf0YbXqDm0"
    },
    {
        title: "Shape of You",
        artists: ["Ed Sheeran"],
        decade: "2010s",
        youtubeId: "JGwWNGJdvx8"
    },
    {
        title: "Rolling in the Deep",
        artists: ["Adele"],
        decade: "2010s",
        youtubeId: "rYEDA3JcQqw"
    },
    {
        title: "Havana",
        artists: ["Camila Cabello"],
        decade: "2010s",
        youtubeId: "HCjNJDNzw8Y"
    },
    {
        title: "Sorry",
        artists: ["Justin Bieber"],
        decade: "2010s",
        youtubeId: "fRh_vgS2dFE"
    },

    {
        title: "Todo de Ti",
        artists: ["Rauw Alejandro"],
        decade: "2020s",
        youtubeId: "CFPLIaMpGrY"
    },
    {
        title: "Hawái",
        artists: ["Maluma"],
        decade: "2020s",
        youtubeId: "pK06OiUFWXg"
    },
    {
        title: "Tusa",
        artists: ["Karol G", "Nicki Minaj"],
        decade: "2020s",
        youtubeId: "tbneQDc2H3I"
    },
    {
        title: "La Bachata",
        artists: ["Manuel Turizo"],
        decade: "2020s",
        youtubeId: "TqA8D9nJ9xI"
    },
    {
        title: "SUPERESTRELLA",
        artists: ["Aitana"],
        decade: "2020s",
        youtubeId: "vz_vU53JvvI"
    },
    {
        title: "Die With A Smile",
        artists: ["Lady Gaga", "Bruno Mars"],
        decade: "2020s",
        youtubeId: "kPa7bsKwL-c"
    },
    {
        title: "As It Was",
        artists: ["Harry Styles"],
        decade: "2020s",
        youtubeId: "H5v3kku4y6Q"
    },
    {
        title: "Flowers",
        artists: ["Miley Cyrus"],
        decade: "2020s",
        youtubeId: "G7KNmW9a75Y"
    },
    {
        title: "good 4 u",
        artists: ["Olivia Rodrigo"],
        decade: "2020s",
        youtubeId: "gNi_6U5Pm_o"
    },
    {
        title: "Espresso",
        artists: ["Sabrina Carpenter"],
        decade: "2020s",
        youtubeId: "eVli-tstM5E"
    }
];


/* =========================================================
   ESTADO SONGS
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
   NORMALIZACIÓN SONGS
   ========================================================= */

function normalizeSongAnswer(value) {

    let result =
        String(value || "")
            .normalize("NFD")
            .replace(
                /[\u0300-\u036f]/g,
                ""
            )
            .toLowerCase();

    result =
        result
            .replace(
                /[¿?¡!.,;:'"()\-_/]/g,
                " "
            )
            .replace(
                /\s+/g,
                " "
            )
            .trim();

    result =
        result
            .replace(
                /^(el|la|los|las|un|una)\s+/i,
                ""
            )
            .replace(
                /^(de|del|al)\s+/i,
                ""
            );

    result =
        result
            .replace(
                /\s+y\s+/g,
                " & "
            )
            .replace(
                /\s+and\s+/g,
                " & "
            );

    result =
        result
            .replace(
                /\s*&\s*/g,
                " & "
            )
            .replace(
                /\s+/g,
                " "
            )
            .trim();

    return result;
}


function songAnswerMatches(
    userAnswer,
    correctAnswer
) {

    const user =
        normalizeSongAnswer(
            userAnswer
        );

    const correct =
        normalizeSongAnswer(
            correctAnswer
        );

    if (
        !user ||
        !correct
    ) {
        return false;
    }

    if (
        user === correct
    ) {
        return true;
    }

    const compactUser =
        user.replace(
            /\s/g,
            ""
        );

    const compactCorrect =
        correct.replace(
            /\s/g,
            ""
        );

    return (
        compactUser ===
        compactCorrect
    );

}


/* =========================================================
   ABRIR SONGS
   ========================================================= */

function openSongsGame() {

    const mainMenu =
        document.getElementById(
            "main-menu"
        );

    if (mainMenu) {
        mainMenu.style.display =
            "none";
    }

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

        modal.className =
            "songs-modal";

        modal.innerHTML = `

            <div class="songs-game">

                <div class="songs-header">

                    <div>

                        <h1>
                            🎵 Adiviná la canción
                        </h1>

                        <p>
                            Escuchá desde el segundo 0
                            y respondé los datos.
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


                <div class="songs-layout">


                    <aside class="songs-sidebar">


                        <div class="songs-team-box">

                            <h3>
                                Equipo
                            </h3>

                            <select
                                id="songs-team-select"
                            >

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


                        <div class="songs-score-box">

                            <h3>
                                Marcador
                            </h3>

                            <div
                                id="songs-scoreboard"
                            ></div>

                        </div>


                    </aside>


                    <main class="songs-main">


                        <div class="songs-song-number">

                            <span
                                id="songs-number"
                            >
                                Canción 1 de 49
                            </span>

                        </div>


                        <div class="songs-player-card">


                            <div class="songs-player-icon">
                                🎵
                            </div>


                            <div class="songs-player-info">

                                <strong>
                                    Reproductor
                                </strong>

                                <span
                                    id="songs-status"
                                >
                                    Listo para reproducir
                                </span>

                            </div>


                            <div class="songs-progress">

                                <div
                                    id="songs-progress-bar"
                                    class="songs-progress-bar"
                                ></div>

                            </div>


                            <div class="songs-time">

                                <span
                                    id="songs-current-time"
                                >
                                    0:00
                                </span>

                                <span
                                    id="songs-duration"
                                >
                                    0:00
                                </span>

                            </div>


                            <div class="songs-controls">


                                <button
                                    type="button"
                                    onclick="songsPlay()"
                                >
                                    ▶ Reproducir
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
                                    ↻ Desde 0
                                </button>


                            </div>


                        </div>


                        <div
                            id="songs-youtube-container"
                            class="songs-youtube-hidden"
                        ></div>


                        <div class="songs-fields">


                            <div class="songs-field">

                                <label>
                                    Década
                                </label>

                                <div
                                    class="songs-answer-row"
                                >

                                    <input
                                        id="songs-decade-answer"
                                        type="text"
                                        placeholder="Ej: 80s"
                                    />

                                    <button
                                        type="button"
                                        onclick="checkSongAnswer('decade')"
                                    >
                                        Confirmar
                                    </button>

                                </div>

                                <div
                                    id="songs-decade-feedback"
                                    class="songs-field-feedback"
                                ></div>

                            </div>


                            <div
                                id="songs-artists-fields"
                                class="songs-field"
                            >

                                <label>
                                    Artista/s
                                </label>

                            </div>


                            <div class="songs-field">

                                <label>
                                    Título
                                </label>

                                <div
                                    class="songs-answer-row"
                                >

                                    <input
                                        id="songs-title-answer"
                                        type="text"
                                        placeholder="Nombre de la canción"
                                    />

                                    <button
                                        type="button"
                                        onclick="checkSongAnswer('title')"
                                    >
                                        Confirmar
                                    </button>

                                </div>

                                <div
                                    id="songs-title-feedback"
                                    class="songs-field-feedback"
                                ></div>

                            </div>


                        </div>


                        <div class="songs-actions">


                            <button
                                type="button"
                                class="songs-next-button"
                                onclick="nextSong()"
                            >
                                Siguiente canción →
                            </button>


                            <button
                                type="button"
                                class="songs-reset-button"
                                onclick="resetSongsGame()"
                            >
                                Reiniciar juego
                            </button>


                        </div>


                    </main>


                </div>

            </div>

        `;

        document.body.appendChild(
            modal
        );

    }


    modal.style.display =
        "flex";

    songsGameOpen =
        true;

    injectSongsStyles();

    loadYouTubeAPI();

    songsCurrentIndex =
        0;

    songsCurrentSong =
        null;

    songsUsedIndexes =
        [];

    songsAnswers =
        [];

    updateSongsScoreboard();

    nextSong();

}


/* =========================================================
   CERRAR SONGS
   ========================================================= */

function closeSongsGame() {

    songsGameOpen =
        false;


    if (
        songsProgressTimer
    ) {

        clearInterval(
            songsProgressTimer
        );

        songsProgressTimer =
            null;

    }


    try {

        if (
            songsPlayer &&
            typeof songsPlayer.stopVideo ===
                "function"
        ) {

            songsPlayer.stopVideo();

        }

    } catch (error) {

        console.warn(
            "No se pudo detener el reproductor:",
            error
        );

    }


    try {

        if (
            songsPlayer &&
            typeof songsPlayer.destroy ===
                "function"
        ) {

            songsPlayer.destroy();

        }

    } catch (error) {

        console.warn(
            "No se pudo destruir el reproductor:",
            error
        );

    }


    songsPlayer =
        null;

    songsPlayerReady =
        false;


    const modal =
        document.getElementById(
            "songs-modal"
        );

    if (modal) {

        modal.style.display =
            "none";

    }


    const mainMenu =
        document.getElementById(
            "main-menu"
        );

    if (mainMenu) {

        mainMenu.style.display =
            "flex";

    }

}
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
   NORMALIZAR RESPUESTAS DE CANCIONES
   ========================================================= */

function normalizeSongAnswer(
    value
) {

    let result =
        String(value || "")
            .normalize("NFD")
            .replace(
                /[\u0300-\u036f]/g,
                ""
            )
            .toLowerCase();


    result =
        result
            .replace(
                /[¿?¡!.,;:'"()\-_/]/g,
                " "
            )
            .replace(
                /\s+/g,
                " "
            )
            .trim();


    /*
     * Permite responder sin artículos
     * iniciales.
     */

    result =
        result
            .replace(
                /^(el|la|los|las|un|una)\s+/i,
                ""
            )
            .replace(
                /^(de|del|al)\s+/i,
                ""
            );


    /*
     * Y / & se consideran equivalentes.
     */

    result =
        result
            .replace(
                /\s+y\s+/g,
                " & "
            )
            .replace(
                /\s+and\s+/g,
                " & "
            )
            .replace(
                /\s*&\s*/g,
                " & "
            )
            .replace(
                /\s+/g,
                " "
            )
            .trim();


    return result;

}


function songAnswerMatches(
    userAnswer,
    correctAnswer
) {

    const user =
        normalizeSongAnswer(
            userAnswer
        );


    const correct =
        normalizeSongAnswer(
            correctAnswer
        );


    if (
        !user ||
        !correct
    ) {

        return false;

    }


    if (
        user === correct
    ) {

        return true;

    }


    const compactUser =
        user.replace(
            /\s/g,
            ""
        );


    const compactCorrect =
        correct.replace(
            /\s/g,
            ""
        );


    if (
        compactUser ===
        compactCorrect
    ) {

        return true;

    }


    return false;

}


/* =========================================================
   ABRIR JUEGO DE CANCIONES
   ========================================================= */

function openSongsGame() {

    const mainMenu =
        document.getElementById(
            "main-menu"
        );


    if (mainMenu) {

        mainMenu.style.display =
            "none";

    }


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


        modal.className =
            "songs-modal";


        modal.innerHTML = `

            <div class="songs-game">


                <div class="songs-header">


                    <div>

                        <h1>
                            🎵 Adiviná la canción
                        </h1>

                        <p>
                            Escuchá desde el segundo 0
                            y respondé los datos.
                        </p>

                    </div>


                    <div
                        class="songs-header-actions"
                    >

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


                <div class="songs-layout">


                    <aside
                        class="songs-sidebar"
                    >


                        <div
                            class="songs-team-box"
                        >

                            <h3>
                                Equipo
                            </h3>


                            <select
                                id="songs-team-select"
                            >

                                <option
                                    value="team1"
                                >
                                    Los Originales
                                </option>

                                <option
                                    value="team2"
                                >
                                    Los Herederos
                                </option>

                                <option
                                    value="team3"
                                >
                                    Las Históricas
                                </option>

                            </select>

                        </div>


                        <div
                            class="songs-score-box"
                        >

                            <h3>
                                Marcador
                            </h3>


                            <div
                                id="songs-scoreboard"
                            ></div>

                        </div>


                    </aside>


                    <main
                        class="songs-main"
                    >


                        <div
                            class="songs-song-number"
                        >

                            <span
                                id="songs-number"
                            >
                                Canción 1 de 49
                            </span>

                        </div>


                        <div
                            class="songs-player-card"
                        >


                            <div
                                class="songs-player-icon"
                            >
                                🎵
                            </div>


                            <div
                                class="songs-player-info"
                            >

                                <strong>
                                    Reproductor
                                </strong>


                                <span
                                    id="songs-status"
                                >
                                    Listo para reproducir
                                </span>

                            </div>


                            <div
                                class="songs-progress"
                            >

                                <div
                                    id="songs-progress-bar"
                                    class="songs-progress-bar"
                                ></div>

                            </div>


                            <div
                                class="songs-time"
                            >

                                <span
                                    id="songs-current-time"
                                >
                                    0:00
                                </span>


                                <span
                                    id="songs-duration"
                                >
                                    0:00
                                </span>

                            </div>


                            <div
                                class="songs-controls"
                            >


                                <button
                                    type="button"
                                    onclick="songsPlay()"
                                >
                                    ▶ Reproducir
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
                                    ↻ Desde 0
                                </button>


                            </div>


                        </div>


                        <div
                            id="songs-youtube-container"
                            class="songs-youtube-hidden"
                        ></div>


                        <div
                            class="songs-fields"
                        >


                            <div
                                class="songs-field"
                            >

                                <label>
                                    Década
                                </label>


                                <div
                                    class="songs-answer-row"
                                >

                                    <input
                                        id="songs-decade-answer"
                                        type="text"
                                        placeholder="Ej: 80s"
                                    />


                                    <button
                                        type="button"
                                        onclick="checkSongAnswer('decade')"
                                    >
                                        Confirmar
                                    </button>

                                </div>


                                <div
                                    id="songs-decade-feedback"
                                    class="songs-field-feedback"
                                ></div>

                            </div>


                            <div
                                id="songs-artists-fields"
                                class="songs-field"
                            >

                                <label>
                                    Artista/s
                                </label>

                            </div>


                            <div
                                class="songs-field"
                            >

                                <label>
                                    Título
                                </label>


                                <div
                                    class="songs-answer-row"
                                >

                                    <input
                                        id="songs-title-answer"
                                        type="text"
                                        placeholder="Nombre de la canción"
                                    />


                                    <button
                                        type="button"
                                        onclick="checkSongAnswer('title')"
                                    >
                                        Confirmar
                                    </button>

                                </div>


                                <div
                                    id="songs-title-feedback"
                                    class="songs-field-feedback"
                                ></div>

                            </div>


                        </div>


                        <div
                            class="songs-actions"
                        >


                            <button
                                type="button"
                                class="songs-next-button"
                                onclick="nextSong()"
                            >
                                Siguiente canción →
                            </button>


                            <button
                                type="button"
                                class="songs-reset-button"
                                onclick="resetSongsGame()"
                            >
                                Reiniciar juego
                            </button>


                        </div>


                    </main>


                </div>


            </div>

        `;


        document.body.appendChild(
            modal
        );

    }


    modal.style.display =
        "flex";


    songsGameOpen =
        true;


    injectSongsStyles();


    loadYouTubeAPI();


    songsCurrentIndex =
        0;


    songsCurrentSong =
        null;


    songsUsedIndexes =
        [];


    songsAnswers =
        [];


    updateSongsScoreboard();


    nextSong();

}


/* =========================================================
   CERRAR JUEGO DE CANCIONES
   ========================================================= */

function closeSongsGame() {

    songsGameOpen =
        false;


    if (
        songsProgressTimer
    ) {

        clearInterval(
            songsProgressTimer
        );

        songsProgressTimer =
            null;

    }


    try {

        if (
            songsPlayer &&
            typeof songsPlayer.stopVideo ===
                "function"
        ) {

            songsPlayer.stopVideo();

        }

    } catch (
        error
    ) {

        console.warn(
            "No se pudo detener el reproductor:",
            error
        );

    }


    try {

        if (
            songsPlayer &&
            typeof songsPlayer.destroy ===
                "function"
        ) {

            songsPlayer.destroy();

        }

    } catch (
        error
    ) {

        console.warn(
            "No se pudo destruir el reproductor:",
            error
        );

    }


    songsPlayer =
        null;


    songsPlayerReady =
        false;


    const modal =
        document.getElementById(
            "songs-modal"
        );


    if (modal) {

        modal.style.display =
            "none";

    }


    const mainMenu =
        document.getElementById(
            "main-menu"
        );


    if (mainMenu) {

        mainMenu.style.display =
            "flex";

    }

}


/* =========================================================
   SCOREBOARD SONGS
   ========================================================= */

function updateSongsScoreboard() {

    const container =
        document.getElementById(
            "songs-scoreboard"
        );


    if (!container) {

        return;

    }


    container.innerHTML = "";


    const teams = [
        "team1",
        "team2",
        "team3"
    ];


    const names = {
        team1: "Los Originales",
        team2: "Los Herederos",
        team3: "Las Históricas"
    };


    teams.forEach(
        team => {

            const row =
                document.createElement(
                    "div"
                );


            row.className =
                "songs-score-row";


            row.innerHTML = `

                <span>
                    ${names[team]}
                </span>

                <strong>
                    ${scores[team].songs}
                </strong>

            `;


            container.appendChild(
                row
            );

        }
    );

}


/* =========================================================
   CARGAR YOUTUBE API
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
            "youtube-api-script"
        )
    ) {

        return;

    }


    const script =
        document.createElement(
            "script"
        );


    script.id =
        "youtube-api-script";


    script.src =
        "https://www.youtube.com/iframe_api";


    document.head.appendChild(
        script
    );


    window.onYouTubeIframeAPIReady =
        function () {

            createSongsPlayer();

        };

}


/* =========================================================
   CREAR REPRODUCTOR
   ========================================================= */

function createSongsPlayer() {

    const container =
        document.getElementById(
            "songs-youtube-container"
        );


    if (!container) {

        return;

    }


    if (
        songsPlayer &&
        typeof songsPlayer.destroy ===
            "function"
    ) {

        try {

            songsPlayer.destroy();

        } catch (
            error
        ) {

            console.warn(
                error
            );

        }

    }


    songsPlayerReady =
        false;


    songsPlayer =
        new YT.Player(
            "songs-youtube-container",
            {

                height: "1",

                width: "1",

                videoId: "",

                playerVars: {

                    controls: 0,

                    autoplay: 0,

                    playsinline: 1,

                    rel: 0,

                    modestbranding: 1,

                    iv_load_policy: 3

                },

                events: {

                    onReady:
                        onSongsPlayerReady,

                    onStateChange:
                        onSongsPlayerStateChange

                }

            }
        );

}


/* =========================================================
   YOUTUBE READY
   ========================================================= */

function onSongsPlayerReady() {

    songsPlayerReady =
        true;


    if (
        songsCurrentSong
    ) {

        loadCurrentSongVideo();

    }

}


/* =========================================================
   CAMBIO DE ESTADO YOUTUBE
   ========================================================= */

function onSongsPlayerStateChange(
    event
) {

    if (
        !songsGameOpen
    ) {

        return;

    }


    if (
        event.data ===
        YT.PlayerState.PLAYING
    ) {

        const status =
            document.getElementById(
                "songs-status"
            );


        if (status) {

            status.textContent =
                "Reproduciendo";

        }


        startSongsProgressTimer();

    }


    if (
        event.data ===
        YT.PlayerState.PAUSED
    ) {

        const status =
            document.getElementById(
                "songs-status"
            );


        if (status) {

            status.textContent =
                "Pausado";

        }


        stopSongsProgressTimer();

    }


    if (
        event.data ===
        YT.PlayerState.ENDED
    ) {

        const status =
            document.getElementById(
                "songs-status"
            );


        if (status) {

            status.textContent =
                "Finalizada";

        }


        stopSongsProgressTimer();

    }

}


/* =========================================================
   CARGAR CANCIÓN
   ========================================================= */

function loadCurrentSongVideo() {

    if (
        !songsPlayerReady ||
        !songsPlayer ||
        !songsCurrentSong
    ) {

        return;

    }


    if (
        !songsCurrentSong.videoId
    ) {

        return;

    }


    try {

        songsPlayer.loadVideoById(
            {
                videoId:
                    songsCurrentSong.videoId,

                startSeconds:
                    0
            }
        );

        songsPlayer.pauseVideo();

    } catch (
        error
    ) {

        console.error(
            "Error cargando canción:",
            error
        );

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

    } catch (
        error
    ) {

        console.error(
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

    } catch (
        error
    ) {

        console.error(
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

    } catch (
        error
    ) {

        console.error(
            error
        );

    }

}


/* =========================================================
   REINICIAR
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

        songsPlayer.playVideo();

    } catch (
        error
    ) {

        console.error(
            error
        );

    }

}


/* =========================================================
   FORMATEAR TIEMPO
   ========================================================= */

function formatSongTime(
    seconds
) {

    if (
        !Number.isFinite(
            seconds
        )
    ) {

        return "0:00";

    }


    const total =
        Math.floor(
            seconds
        );


    const minutes =
        Math.floor(
            total / 60
        );


    const secs =
        total % 60;


    return (
        minutes +
        ":" +
        String(
            secs
        ).padStart(
            2,
            "0"
        )
    );

}


/* =========================================================
   ACTUALIZAR PROGRESO
   ========================================================= */

function updateSongsProgress() {

    if (
        !songsPlayerReady ||
        !songsPlayer
    ) {

        return;

    }


    try {

        const current =
            songsPlayer.getCurrentTime();


        const duration =
            songsPlayer.getDuration();


        const progress =
            duration > 0
                ? (
                    current /
                    duration
                ) * 100
                : 0;


        const bar =
            document.getElementById(
                "songs-progress-bar"
            );


        const currentTime =
            document.getElementById(
                "songs-current-time"
            );


        const durationDisplay =
            document.getElementById(
                "songs-duration"
            );


        if (bar) {

            bar.style.width =
                `${progress}%`;

        }


        if (currentTime) {

            currentTime.textContent =
                formatSongTime(
                    current
                );

        }


        if (durationDisplay) {

            durationDisplay.textContent =
                formatSongTime(
                    duration
                );

        }

    } catch (
        error
    ) {

        /* El reproductor todavía puede
           no estar completamente inicializado. */

    }

}


/* =========================================================
   TIMER PROGRESO
   ========================================================= */

function startSongsProgressTimer() {

    stopSongsProgressTimer();


    songsProgressTimer =
        setInterval(
            updateSongsProgress,
            250
        );

}


function stopSongsProgressTimer() {

    if (
        songsProgressTimer
    ) {

        clearInterval(
            songsProgressTimer
        );

        songsProgressTimer =
            null;

    }

}


/* =========================================================
   CANCIÓN ALEATORIA
   ========================================================= */

function getRandomUnusedSongIndex() {

    const available = [];


    for (
        let i = 0;
        i <
        SONGS_DATA.length;
        i++
    ) {

        if (
            !songsUsedIndexes.includes(
                i
            )
        ) {

            available.push(
                i
            );

        }

    }


    if (
        available.length === 0
    ) {

        return -1;

    }


    const randomPosition =
        Math.floor(
            Math.random() *
            available.length
        );


    return available[
        randomPosition
    ];

}


/* =========================================================
   SIGUIENTE CANCIÓN
   ========================================================= */

function nextSong() {

    if (
        !songsGameOpen
    ) {

        return;

    }


    const index =
        getRandomUnusedSongIndex();


    if (
        index === -1
    ) {

        alert(
            "🎵 Ya jugaron las 49 canciones."
        );

        return;

    }


    songsUsedIndexes.push(
        index
    );


    songsCurrentIndex =
        index;


    songsCurrentSong =
        SONGS_DATA[
            index
        ];


    songsAnswers = {

        decade: false,

        artists:
            songsCurrentSong.artists.map(
                () => false
            ),

        title: false

    };


    updateSongsNumber();


    renderSongFields();


    loadCurrentSongVideo();


    resetSongsPlayerUI();

}


/* =========================================================
   NÚMERO DE CANCIÓN
   ========================================================= */

function updateSongsNumber() {

    const element =
        document.getElementById(
            "songs-number"
        );


    if (!element) {

        return;

    }


    element.textContent =
        `Canción ${
            songsUsedIndexes.length
        } de ${
            SONGS_DATA.length
        }`;

}


/* =========================================================
   RENDER CAMPOS
   ========================================================= */

function renderSongFields() {

    if (
        !songsCurrentSong
    ) {

        return;

    }


    const decadeInput =
        document.getElementById(
            "songs-decade-answer"
        );


    const titleInput =
        document.getElementById(
            "songs-title-answer"
        );


    const decadeFeedback =
        document.getElementById(
            "songs-decade-feedback"
        );


    const titleFeedback =
        document.getElementById(
            "songs-title-feedback"
        );


    if (decadeInput) {

        decadeInput.value =
            "";

        decadeInput.disabled =
            false;

    }


    if (titleInput) {

        titleInput.value =
            "";

        titleInput.disabled =
            false;

    }


    if (decadeFeedback) {

        decadeFeedback.textContent =
            "";

        decadeFeedback.className =
            "songs-field-feedback";

    }


    if (titleFeedback) {

        titleFeedback.textContent =
            "";

        titleFeedback.className =
            "songs-field-feedback";

    }


    const artistsContainer =
        document.getElementById(
            "songs-artists-fields"
        );


    if (!artistsContainer) {

        return;

    }


    artistsContainer.innerHTML = `

        <label>
            Artista/s
        </label>

    `;


    songsCurrentSong.artists.forEach(
        (
            artist,
            index
        ) => {

            const row =
                document.createElement(
                    "div"
                );


            row.className =
                "songs-answer-row";


            row.innerHTML = `

                <input
                    id="songs-artist-answer-${index}"
                    type="text"
                    placeholder="Artista ${index + 1}"
                />

                <button
                    type="button"
                    onclick="checkSongAnswer('artist', ${index})"
                >
                    Confirmar
                </button>

            `;


            const feedback =
                document.createElement(
                    "div"
                );


            feedback.id =
                `songs-artist-feedback-${index}`;


            feedback.className =
                "songs-field-feedback";


            artistsContainer.appendChild(
                row
            );


            artistsContainer.appendChild(
                feedback
            );

        }
    );

}


/* =========================================================
   RESET UI PLAYER
   ========================================================= */

function resetSongsPlayerUI() {

    const bar =
        document.getElementById(
            "songs-progress-bar"
        );


    const current =
        document.getElementById(
            "songs-current-time"
        );


    const duration =
        document.getElementById(
            "songs-duration"
        );


    const status =
        document.getElementById(
            "songs-status"
        );


    if (bar) {

        bar.style.width =
            "0%";

    }


    if (current) {

        current.textContent =
            "0:00";

    }


    if (duration) {

        duration.textContent =
            "0:00";

    }


    if (status) {

        status.textContent =
            "Listo para reproducir";

    }

}
/* =========================================================
   CHECK RESPUESTAS SONGS
   ========================================================= */

function checkSongAnswer(
    type,
    artistIndex = null
) {

    if (
        !songsCurrentSong
    ) {
        return;
    }


    const teamSelect =
        document.getElementById(
            "songs-team-select"
        );


    if (!teamSelect) {
        return;
    }


    const team =
        teamSelect.value;


    if (!team) {

        alert(
            "Seleccioná un equipo primero."
        );

        return;

    }


    let input = null;

    let feedback = null;

    let correctAnswer = null;

    let answerKey = null;


    /* =========================
       DÉCADA
       ========================= */

    if (
        type === "decade"
    ) {

        if (
            songsAnswers.decade
        ) {

            return;

        }


        input =
            document.getElementById(
                "songs-decade-answer"
            );


        feedback =
            document.getElementById(
                "songs-decade-feedback"
            );


        correctAnswer =
            songsCurrentSong.decade;


        answerKey =
            "decade";

    }


    /* =========================
       ARTISTA
       ========================= */

    if (
        type === "artist"
    ) {

        if (
            artistIndex === null ||
            artistIndex === undefined
        ) {

            return;

        }


        if (
            songsAnswers.artists[
                artistIndex
            ]
        ) {

            return;

        }


        input =
            document.getElementById(
                `songs-artist-answer-${artistIndex}`
            );


        feedback =
            document.getElementById(
                `songs-artist-feedback-${artistIndex}`
            );


        correctAnswer =
            songsCurrentSong.artists[
                artistIndex
            ];


        answerKey =
            `artist-${artistIndex}`;

    }


    /* =========================
       TÍTULO
       ========================= */

    if (
        type === "title"
    ) {

        if (
            songsAnswers.title
        ) {

            return;

        }


        input =
            document.getElementById(
                "songs-title-answer"
            );


        feedback =
            document.getElementById(
                "songs-title-feedback"
            );


        correctAnswer =
            songsCurrentSong.title;


        answerKey =
            "title";

    }


    if (
        !input ||
        !feedback ||
        !correctAnswer
    ) {

        return;

    }


    const userAnswer =
        input.value.trim();


    if (!userAnswer) {

        feedback.textContent =
            "Escribí una respuesta.";

        feedback.className =
            "songs-field-feedback error";

        return;

    }


    const correct =
        songAnswerMatches(
            userAnswer,
            correctAnswer
        );


    if (correct) {

        /*
         * Cada dato correcto vale
         * exactamente 1 punto.
         */

        if (
            type === "decade"
        ) {

            songsAnswers.decade =
                true;

        }


        if (
            type === "artist"
        ) {

            songsAnswers.artists[
                artistIndex
            ] = true;

        }


        if (
            type === "title"
        ) {

            songsAnswers.title =
                true;

        }


        input.disabled =
            true;


        const button =
            input.parentElement
                ?.querySelector(
                    "button"
                );


        if (button) {

            button.disabled =
                true;

        }


        feedback.textContent =
            "✓ ¡Correcto! +1 punto";

        feedback.className =
            "songs-field-feedback correct";


        addPoints(
            team,
            "songs",
            1
        );


        updateSongsScoreboard();


        /*
         * Si el dato fue correcto,
         * queda bloqueado.
         */

        return;

    }


    /*
     * Respuesta incorrecta:
     * no resta puntos.
     * El campo queda disponible
     * para rebote.
     */

    feedback.textContent =
        "✗ Incorrecto — rebote";

    feedback.className =
        "songs-field-feedback error";


    input.value =
        "";

}


/* =========================================================
   ENTER EN SONGS
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key !==
            "Enter"
        ) {

            return;

        }


        if (
            !songsGameOpen
        ) {

            return;

        }


        const active =
            document.activeElement;


        if (
            !active
        ) {

            return;

        }


        if (
            active.id ===
            "songs-decade-answer"
        ) {

            checkSongAnswer(
                "decade"
            );

            return;

        }


        if (
            active.id ===
            "songs-title-answer"
        ) {

            checkSongAnswer(
                "title"
            );

            return;

        }


        if (
            active.id.startsWith(
                "songs-artist-answer-"
            )
        ) {

            const index =
                Number(
                    active.id.replace(
                        "songs-artist-answer-",
                        ""
                    )
                );


            checkSongAnswer(
                "artist",
                index
            );

        }

    }
);


/* =========================================================
   REINICIAR JUEGO DE CANCIONES
   ========================================================= */

function resetSongsGame() {

    const confirmation =
        confirm(
            "¿Seguro que querés reiniciar el juego de canciones?"
        );


    if (!confirmation) {

        return;

    }


    songsUsedIndexes =
        [];

    songsCurrentIndex =
        0;

    songsCurrentSong =
        null;

    songsAnswers =
        [];


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
        songsPlayerReady
    ) {

        try {

            songsPlayer.stopVideo();

        } catch (
            error
        ) {

            console.warn(
                error
            );

        }

    }


    nextSong();

}


/* =========================================================
   ESTILOS DEL JUEGO DE CANCIONES
   ========================================================= */

function injectSongsStyles() {

    if (
        document.getElementById(
            "songs-styles"
        )
    ) {

        return;

    }


    const style =
        document.createElement(
            "style"
        );


    style.id =
        "songs-styles";


    style.textContent = `

        .songs-modal {

            position: fixed;

            inset: 0;

            z-index: 9999;

            display: none;

            align-items: center;

            justify-content: center;

            background:
                rgba(0, 0, 0, 0.94);

            padding: 20px;

            box-sizing: border-box;

            overflow-y: auto;

        }


        .songs-game {

            width: min(
                1200px,
                100%
            );

            min-height: 700px;

            max-height: 95vh;

            overflow-y: auto;

            background:
                #111;

            border:
                1px solid
                rgba(
                    182,
                    255,
                    0,
                    0.25
                );

            border-radius:
                24px;

            box-shadow:
                0 25px 80px
                rgba(
                    0,
                    0,
                    0,
                    0.6
                );

            color:
                #fff;

            padding:
                24px;

            box-sizing:
                border-box;

        }


        .songs-header {

            display:
                flex;

            align-items:
                center;

            justify-content:
                space-between;

            gap:
                20px;

            margin-bottom:
                25px;

            border-bottom:
                1px solid
                rgba(
                    255,
                    255,
                    255,
                    0.1
                );

            padding-bottom:
                20px;

        }


        .songs-header h1 {

            margin:
                0 0 6px 0;

            font-size:
                30px;

        }


        .songs-header p {

            margin:
                0;

            color:
                rgba(
                    255,
                    255,
                    255,
                    0.65
                );

        }


        .songs-header-actions {

            display:
                flex;

            align-items:
                center;

            gap:
                10px;

            flex-shrink:
                0;

        }


        .songs-back {

            border:
                1px solid
                rgba(
                    182,
                    255,
                    0,
                    0.5
                );

            background:
                rgba(
                    182,
                    255,
                    0,
                    0.08
                );

            color:
                #B6FF00;

            border-radius:
                10px;

            padding:
                10px 15px;

            cursor:
                pointer;

            font-weight:
                700;

        }


        .songs-back:hover {

            background:
                rgba(
                    182,
                    255,
                    0,
                    0.16
                );

        }


        .songs-close {

            width:
                42px;

            height:
                42px;

            border:
                1px solid
                rgba(
                    255,
                    255,
                    255,
                    0.15
                );

            border-radius:
                50%;

            background:
                rgba(
                    255,
                    255,
                    255,
                    0.05
                );

            color:
                #fff;

            font-size:
                20px;

            cursor:
                pointer;

        }


        .songs-layout {

            display:
                grid;

            grid-template-columns:
                230px
                minmax(
                    0,
                    1fr
                );

            gap:
                25px;

        }


        .songs-sidebar {

            display:
                flex;

            flex-direction:
                column;

            gap:
                18px;

        }


        .songs-team-box,
        .songs-score-box {

            background:
                rgba(
                    255,
                    255,
                    255,
                    0.045
                );

            border:
                1px solid
                rgba(
                    255,
                    255,
                    255,
                    0.09
                );

            border-radius:
                16px;

            padding:
                18px;

        }


        .songs-team-box h3,
        .songs-score-box h3 {

            margin:
                0 0 12px 0;

            font-size:
                16px;

        }


        #songs-team-select {

            width:
                100%;

            padding:
                11px;

            border-radius:
                9px;

            border:
                1px solid
                rgba(
                    255,
                    255,
                    255,
                    0.15
                );

            background:
                #191919;

            color:
                #fff;

            outline:
                none;

        }


        .songs-score-row {

            display:
                flex;

            align-items:
                center;

            justify-content:
                space-between;

            gap:
                10px;

            padding:
                10px 0;

            border-bottom:
                1px solid
                rgba(
                    255,
                    255,
                    255,
                    0.08
                );

            font-size:
                14px;

        }


        .songs-score-row:last-child {

            border-bottom:
                0;

        }


        .songs-score-row strong {

            color:
                #B6FF00;

            font-size:
                18px;

        }


        .songs-main {

            min-width:
                0;

        }


        .songs-song-number {

            margin-bottom:
                12px;

            text-align:
                center;

            color:
                #B6FF00;

            font-weight:
                800;

            font-size:
                15px;

        }


        .songs-player-card {

            position:
                relative;

            background:
                linear-gradient(
                    135deg,
                    #191919,
                    #101010
                );

            border:
                1px solid
                rgba(
                    182,
                    255,
                    0,
                    0.18
                );

            border-radius:
                20px;

            padding:
                22px;

            margin-bottom:
                22px;

        }


        .songs-player-icon {

            width:
                58px;

            height:
                58px;

            border-radius:
                16px;

            display:
                flex;

            align-items:
                center;

            justify-content:
                center;

            background:
                #B6FF00;

            color:
                #0B0B0B;

            font-size:
                28px;

            margin-bottom:
                12px;

        }


        .songs-player-info {

            display:
                flex;

            flex-direction:
                column;

            gap:
                4px;

            margin-bottom:
                18px;

        }


        .songs-player-info strong {

            font-size:
                17px;

        }


        .songs-player-info span {

            color:
                rgba(
                    255,
                    255,
                    255,
                    0.6
                );

            font-size:
                13px;

        }


        .songs-progress {

            width:
                100%;

            height:
                8px;

            background:
                rgba(
                    255,
                    255,
                    255,
                    0.1
                );

            border-radius:
                999px;

            overflow:
                hidden;

        }


        .songs-progress-bar {

            width:
                0%;

            height:
                100%;

            background:
                #B6FF00;

            border-radius:
                999px;

            transition:
                width
                0.15s
                linear;

        }


        .songs-time {

            display:
                flex;

            justify-content:
                space-between;

            margin-top:
                7px;

            color:
                rgba(
                    255,
                    255,
                    255,
                    0.55
                );

            font-size:
                12px;

        }


        .songs-controls {

            display:
                flex;

            flex-wrap:
                wrap;

            gap:
                9px;

            margin-top:
                18px;

        }


        .songs-controls button {

            border:
                1px solid
                rgba(
                    255,
                    255,
                    255,
                    0.12
                );

            background:
                rgba(
                    255,
                    255,
                    255,
                    0.06
                );

            color:
                #fff;

            padding:
                10px 13px;

            border-radius:
                9px;

            cursor:
                pointer;

            font-weight:
                700;

        }


        .songs-controls button:hover {

            background:
                rgba(
                    182,
                    255,
                    0,
                    0.1
                );

            border-color:
                rgba(
                    182,
                    255,
                    0,
                    0.4
                );

        }


        .songs-youtube-hidden {

            position:
                absolute;

            width:
                1px;

            height:
                1px;

            opacity:
                0;

            pointer-events:
                none;

            overflow:
                hidden;

            left:
                -9999px;

            top:
                -9999px;

        }


        .songs-fields {

            display:
                flex;

            flex-direction:
                column;

            gap:
                15px;

        }


        .songs-field {

            background:
                rgba(
                    255,
                    255,
                    255,
                    0.035
                );

            border:
                1px solid
                rgba(
                    255,
                    255,
                    255,
                    0.08
                );

            border-radius:
                15px;

            padding:
                16px;

        }


        .songs-field > label {

            display:
                block;

            font-weight:
                800;

            margin-bottom:
                9px;

        }


        .songs-answer-row {

            display:
                flex;

            gap:
                9px;

        }


        .songs-answer-row input {

            flex:
                1;

            min-width:
                0;

            padding:
                12px;

            border-radius:
                9px;

            border:
                1px solid
                rgba(
                    255,
                    255,
                    255,
                    0.13
                );

            background:
                #191919;

            color:
                #fff;

            outline:
                none;

            box-sizing:
                border-box;

        }


        .songs-answer-row input:focus {

            border-color:
                #B6FF00;

        }


        .songs-answer-row input:disabled {

            opacity:
                0.5;

        }


        .songs-answer-row button {

            padding:
                11px 14px;

            border:
                0;

            border-radius:
                9px;

            background:
                #B6FF00;

            color:
                #0B0B0B;

            cursor:
                pointer;

            font-weight:
                800;

            white-space:
                nowrap;

        }


        .songs-answer-row button:disabled {

            opacity:
                0.4;

            cursor:
                default;

        }


        .songs-field-feedback {

            min-height:
                20px;

            margin-top:
                7px;

            font-size:
                13px;

            font-weight:
                700;

        }


        .songs-field-feedback.correct {

            color:
                #B6FF00;

        }


        .songs-field-feedback.error {

            color:
                #ff6969;

        }


        .songs-actions {

            display:
                flex;

            justify-content:
                center;

            gap:
                12px;

            margin-top:
                22px;

            padding-bottom:
                5px;

        }


        .songs-next-button {

            border:
                0;

            border-radius:
                11px;

            background:
                #B6FF00;

            color:
                #0B0B0B;

            padding:
                13px 22px;

            font-size:
                15px;

            font-weight:
                900;

            cursor:
                pointer;

        }


        .songs-reset-button {

            border:
                1px solid
                rgba(
                    255,
                    255,
                    255,
                    0.15
                );

            border-radius:
                11px;

            background:
                transparent;

            color:
                #fff;

            padding:
                13px 18px;

            font-weight:
                700;

            cursor:
                pointer;

        }


        @media (
            max-width: 800px
        ) {

            .songs-game {

                padding:
                    16px;

                border-radius:
                    18px;

            }


            .songs-header {

                align-items:
                    flex-start;

            }


            .songs-header h1 {

                font-size:
                    24px;

            }


            .songs-header-actions {

                flex-direction:
                    column;

            }


            .songs-back {

                font-size:
                    12px;

                padding:
                    8px 10px;

            }


            .songs-layout {

                grid-template-columns:
                    1fr;

            }


            .songs-sidebar {

                display:
                    grid;

                grid-template-columns:
                    1fr 1fr;

            }


            .songs-answer-row {

                flex-direction:
                    column;

            }


            .songs-answer-row button {

                width:
                    100%;

            }


            .songs-actions {

                flex-direction:
                    column;

            }


            .songs-next-button,
            .songs-reset-button {

                width:
                    100%;

            }

        }


        @media (
            max-width: 500px
        ) {

            .songs-modal {

                padding:
                    8px;

            }


            .songs-game {

                max-height:
                    98vh;

            }


            .songs-header {

                gap:
                    8px;

            }


            .songs-sidebar {

                grid-template-columns:
                    1fr;

            }

        }

    `;


    document.head.appendChild(
        style
    );

}


/* =========================================================
   ACTUALIZAR MARCADOR SONGS
   ========================================================= */

function refreshSongsScores() {

    updateSongsScoreboard();

    updateScoreboard();

}


/* =========================================================
   FIN
   ========================================================= */

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

            transition:0.2s;

        }


        .songs-controls button:hover {

            background:#2b2b2b;

            transform:translateY(-1px);

        }


        .songs-controls button.primary {

            background:#B6FF00;

            color:#0B0B0B;

        }


        .songs-controls button.primary:hover {

            background:#c4ff33;

        }


        .songs-progress {

            width:100%;

            height:7px;

            background:#2b2b2b;

            border-radius:99px;

            overflow:hidden;

            margin-top:15px;

        }


        .songs-progress-bar {

            width:0%;

            height:100%;

            background:#B6FF00;

            border-radius:99px;

            transition:width .15s linear;

        }


        .songs-time {

            display:flex;

            justify-content:space-between;

            margin-top:7px;

            font-size:12px;

            color:#999;

        }


        .songs-fields {

            display:grid;

            grid-template-columns:1fr;

            gap:14px;

        }


        .songs-field {

            background:#171717;

            border:1px solid #292929;

            border-radius:14px;

            padding:15px;

        }


        .songs-field-title {

            display:flex;

            align-items:center;

            justify-content:space-between;

            gap:10px;

            margin-bottom:10px;

        }


        .songs-field-title strong {

            font-size:14px;

        }


        .songs-field-title span {

            color:#888;

            font-size:12px;

        }


        .songs-answer-row {

            display:flex;

            gap:8px;

        }


        .songs-answer-row input {

            flex:1;

            min-width:0;

            border:1px solid #333;

            border-radius:9px;

            padding:11px 12px;

            background:#0e0e0e;

            color:#fff;

            outline:none;

            font-size:14px;

        }


        .songs-answer-row input:focus {

            border-color:#B6FF00;

        }


        .songs-answer-row input:disabled {

            opacity:.55;

        }


        .songs-answer-row button {

            border:0;

            border-radius:9px;

            padding:10px 15px;

            background:#B6FF00;

            color:#0B0B0B;

            font-weight:900;

            cursor:pointer;

        }


        .songs-answer-row button:disabled {

            opacity:.45;

            cursor:default;

        }


        .songs-field-feedback {

            min-height:18px;

            margin-top:7px;

            font-size:12px;

            font-weight:800;

        }


        .songs-field-feedback.correct {

            color:#B6FF00;

        }


        .songs-field-feedback.error {

            color:#ff6767;

        }


        .songs-actions {

            display:flex;

            justify-content:center;

            gap:10px;

            margin-top:18px;

        }


        .songs-next-button {

            border:0;

            border-radius:10px;

            padding:13px 22px;

            background:#B6FF00;

            color:#0B0B0B;

            font-weight:900;

            cursor:pointer;

        }


        .songs-reset-button {

            border:1px solid #333;

            border-radius:10px;

            padding:13px 18px;

            background:#171717;

            color:#fff;

            font-weight:800;

            cursor:pointer;

        }


        .songs-next-button:hover {

            background:#c4ff33;

        }


        .songs-reset-button:hover {

            background:#222;

        }


        @media(max-width:850px){

            .songs-layout{

                grid-template-columns:1fr;

            }

            .songs-sidebar{

                display:grid;

                grid-template-columns:1fr 1fr;

            }

        }


        @media(max-width:600px){

            .songs-modal{

                padding:8px;

            }

            .songs-game{

                padding:14px;

                border-radius:16px;

            }

            .songs-header{

                flex-direction:column;

                align-items:stretch;

            }

            .songs-header-actions{

                justify-content:space-between;

            }

            .songs-sidebar{

                grid-template-columns:1fr;

            }

            .songs-answer-row{

                flex-direction:column;

            }

            .songs-answer-row button{

                width:100%;

            }

            .songs-actions{

                flex-direction:column;

            }

            .songs-next-button,

            .songs-reset-button{

                width:100%;

            }

        }

    `;


    document.head.appendChild(style);

}


/* =========================================================
   ACTUALIZAR MARCADOR DE SONGS
   ========================================================= */

function updateSongsScoreboard(){

    const elements = {

        team1:
            document.getElementById(
                "songs-score-team1"
            ),

        team2:
            document.getElementById(
                "songs-score-team2"
            ),

        team3:
            document.getElementById(
                "songs-score-team3"
            )

    };


    if(elements.team1){

        elements.team1.textContent =
            scores.team1.songs;

    }


    if(elements.team2){

        elements.team2.textContent =
            scores.team2.songs;

    }


    if(elements.team3){

        elements.team3.textContent =
            scores.team3.songs;

    }

}


/* =========================================================
   NORMALIZACIÓN DE RESPUESTAS
   ========================================================= */

function normalizeSongAnswer(value){

    if(
        value === null ||
        value === undefined
    ){

        return "";

    }


    let result =
        String(value)
            .toLowerCase()
            .trim();


    result =
        result.normalize(
            "NFD"
        ).replace(
            /[\u0300-\u036f]/g,
            ""
        );


    result =
        result.replace(
            /['’`´]/g,
            ""
        );


    result =
        result.replace(
            /[.,!?¿¡:;()[\]{}""]/g,
            " "
        );


    result =
        result.replace(
            /\s+/g,
            " "
        )
        .trim();


    /*
     * Equivalencias útiles.
     */

    result =
        result.replace(
            /\s*&\s*/g,
            " y "
        );


    result =
        result.replace(
            /\s+/g,
            " "
        )
        .trim();


    /*
     * Artículos iniciales.
     */

    result =
        result.replace(
            /^(el|la|los|las|un|una|unos|unas)\s+/,
            ""
        );


    /*
     * Preposiciones iniciales frecuentes.
     */

    result =
        result.replace(
            /^(de|del|al)\s+/,
            ""
        );


    return result;

}


/* =========================================================
   COMPARAR RESPUESTAS DE SONGS
   ========================================================= */

function songAnswerMatches(
    userAnswer,
    correctAnswer
){

    const user =
        normalizeSongAnswer(
            userAnswer
        );


    const correct =
        normalizeSongAnswer(
            correctAnswer
        );


    if(
        !user ||
        !correct
    ){

        return false;

    }


    if(
        user === correct
    ){

        return true;

    }


    /*
     * Algunas variaciones razonables.
     */

    const userCompact =
        user.replace(
            /\s/g,
            ""
        );


    const correctCompact =
        correct.replace(
            /\s/g,
            ""
        );


    if(
        userCompact ===
        correctCompact
    ){

        return true;

    }


    /*
     * Variaciones con "feat",
     * "ft", etc.
     */

    const cleanFeatures =
        value =>
            value
                .replace(
                    /\b(feat|ft|featuring)\b/g,
                    " "
                )
                .replace(
                    /\s+/g,
                    " "
                )
                .trim();


    const userWithoutFeature =
        cleanFeatures(
            user
        );


    const correctWithoutFeature =
        cleanFeatures(
            correct
        );


    if(
        userWithoutFeature ===
        correctWithoutFeature
    ){

        return true;

    }


    return false;

}


/* =========================================================
   OBTENER SIGUIENTE CANCIÓN
   ========================================================= */

function nextSong(){

    if(
        songsProgressTimer
    ){

        clearInterval(
            songsProgressTimer
        );

        songsProgressTimer =
            null;

    }


    if(
        songsPlayer &&
        songsPlayerReady
    ){

        try{

            songsPlayer.stopVideo();

        }catch(error){

            console.warn(error);

        }

    }


    /*
     * Si ya se utilizaron todas las canciones,
     * se termina la partida.
     */

    if(
        songsUsedIndexes.length >=
        SONGS_DATA.length
    ){

        songsCurrentSong =
            null;


        const title =
            document.getElementById(
                "songs-current-title"
            );


        if(title){

            title.textContent =
                "¡Juego terminado!";

        }


        const number =
            document.getElementById(
                "songs-number"
            );


        if(number){

            number.textContent =
                `${SONGS_DATA.length} / ${SONGS_DATA.length}`;

        }


        return;

    }


    let availableIndexes =
        SONGS_DATA
            .map(
                (_, index) =>
                    index
            )
            .filter(
                index =>
                    !songsUsedIndexes.includes(
                        index
                    )
            );


    if(
        availableIndexes.length === 0
    ){

        return;

    }


    const randomPosition =
        Math.floor(
            Math.random() *
            availableIndexes.length
        );


    songsCurrentIndex =
        availableIndexes[
            randomPosition
        ];


    songsUsedIndexes.push(
        songsCurrentIndex
    );


    songsCurrentSong =
        SONGS_DATA[
            songsCurrentIndex
        ];


    songsAnswers = {

        decade:false,

        artists:
            songsCurrentSong.artists.map(
                () => false
            ),

        title:false

    };


    renderCurrentSong();


    loadCurrentSong();

}


/* =========================================================
   RENDERIZAR CANCIÓN ACTUAL
   ========================================================= */

function renderCurrentSong(){

    if(
        !songsCurrentSong
    ){

        return;

    }


    const number =
        document.getElementById(
            "songs-number"
        );


    if(number){

        number.textContent =
            `${songsUsedIndexes.length} / ${SONGS_DATA.length}`;

    }


    const title =
        document.getElementById(
            "songs-current-title"
        );


    if(title){

        title.textContent =
            "Adiviná la canción";

    }


    const subtitle =
        document.getElementById(
            "songs-current-subtitle"
        );


    if(subtitle){

        subtitle.textContent =
            "Escuchá desde el segundo 0 y completá los datos.";

    }


    const fields =
        document.getElementById(
            "songs-fields"
        );


    if(!fields){

        return;

    }


    let html = "";


    /*
     * DÉCADA
     */

    html += `

        <div class="songs-field">

            <div class="songs-field-title">

                <strong>
                    Década
                </strong>

                <span>
                    1 punto
                </span>

            </div>

            <div class="songs-answer-row">

                <input
                    id="songs-decade-answer"
                    type="text"
                    autocomplete="off"
                    placeholder="Ej: 80s"
                >

                <button
                    type="button"
                    onclick="checkSongAnswer('decade')"
                >
                    Confirmar
                </button>

            </div>

            <div
                id="songs-decade-feedback"
                class="songs-field-feedback"
            ></div>

        </div>

    `;


    /*
     * ARTISTAS
     */

    songsCurrentSong.artists.forEach(
        (
            artist,
            index
        ) => {

            html += `

                <div class="songs-field">

                    <div class="songs-field-title">

                        <strong>
                            Artista
                            ${
                                songsCurrentSong.artists.length > 1
                                    ? index + 1
                                    : ""
                            }
                        </strong>

                        <span>
                            1 punto
                        </span>

                    </div>

                    <div class="songs-answer-row">

                        <input
                            id="songs-artist-answer-${index}"
                            type="text"
                            autocomplete="off"
                            placeholder="Nombre del artista"
                        >

                        <button
                            type="button"
                            onclick="checkSongAnswer(
                                'artist',
                                ${index}
                            )"
                        >
                            Confirmar
                        </button>

                    </div>

                    <div
                        id="songs-artist-feedback-${index}"
                        class="songs-field-feedback"
                    ></div>

                </div>

            `;

        }
    );


    /*
     * TÍTULO
     */

    html += `

        <div class="songs-field">

            <div class="songs-field-title">

                <strong>
                    Canción
                </strong>

                <span>
                    1 punto
                </span>

            </div>

            <div class="songs-answer-row">

                <input
                    id="songs-title-answer"
                    type="text"
                    autocomplete="off"
                    placeholder="Nombre de la canción"
                >

                <button
                    type="button"
                    onclick="checkSongAnswer('title')"
                >
                    Confirmar
                </button>

            </div>

            <div
                id="songs-title-feedback"
                class="songs-field-feedback"
            ></div>

        </div>

    `;


    fields.innerHTML =
        html;


    resetSongsPlayerUI();

}


/* =========================================================
   RESET DEL PLAYER VISUAL
   ========================================================= */

function resetSongsPlayerUI(){

    const progress =
        document.getElementById(
            "songs-progress-bar"
        );


    if(progress){

        progress.style.width =
            "0%";

    }


    const currentTime =
        document.getElementById(
            "songs-current-time"
        );


    if(currentTime){

        currentTime.textContent =
            "0:00";

    }


    const totalTime =
        document.getElementById(
            "songs-total-time"
        );


    if(totalTime){

        totalTime.textContent =
            "0:00";

    }

}


/* =========================================================
   CARGAR CANCIÓN EN YOUTUBE
   ========================================================= */

function loadCurrentSong(){

    if(
        !songsCurrentSong
    ){

        return;

    }


    if(
        !songsPlayer ||
        !songsPlayerReady
    ){

        return;

    }


    try{

        songsPlayer.loadVideoById(
            songsCurrentSong.videoId
        );

        songsPlayer.pauseVideo();

    }catch(error){

        console.warn(
            "No se pudo cargar la canción:",
            error
        );

    }


    resetSongsPlayerUI();

}


/* =========================================================
   PLAY DESDE 0
   ========================================================= */

function songsPlay(){

    if(
        !songsPlayer ||
        !songsPlayerReady
    ){

        return;

    }


    try{

        songsPlayer.seekTo(
            0,
            true
        );

        songsPlayer.playVideo();

        startSongsProgress();

    }catch(error){

        console.warn(
            error
        );

    }

}


/* =========================================================
   PAUSAR
   ========================================================= */

function songsPause(){

    if(
        !songsPlayer ||
        !songsPlayerReady
    ){

        return;

    }


    try{

        songsPlayer.pauseVideo();

    }catch(error){

        console.warn(
            error
        );

    }

}


/* =========================================================
   CONTINUAR
   ========================================================= */

function songsContinue(){

    if(
        !songsPlayer ||
        !songsPlayerReady
    ){

        return;

    }


    try{

        songsPlayer.playVideo();

        startSongsProgress();

    }catch(error){

        console.warn(
            error
        );

    }

}


/* =========================================================
   REINICIAR A 0
   ========================================================= */

function songsRestart(){

    if(
        !songsPlayer ||
        !songsPlayerReady
    ){

        return;

    }


    try{

        songsPlayer.seekTo(
            0,
            true
        );

        songsPlayer.playVideo();

        startSongsProgress();

    }catch(error){

        console.warn(
            error
        );

    }

}


/* =========================================================
   PROGRESO DE CANCIÓN
   ========================================================= */

function startSongsProgress(){

    if(
        songsProgressTimer
    ){

        clearInterval(
            songsProgressTimer
        );

    }


    songsProgressTimer =
        setInterval(
            updateSongsProgress,
            250
        );

}


/* =========================================================
   ACTUALIZAR PROGRESO
   ========================================================= */

function updateSongsProgress(){

    if(
        !songsPlayer ||
        !songsPlayerReady
    ){

        return;

    }


    try{

        const current =
            songsPlayer.getCurrentTime();


        const duration =
            songsPlayer.getDuration();


        if(
            !duration ||
            duration <= 0
        ){

            return;

        }


        const percentage =
            Math.max(
                0,
                Math.min(
                    100,
                    (
                        current /
                        duration
                    ) * 100
                )
            );


        const progress =
            document.getElementById(
                "songs-progress-bar"
            );


        if(progress){

            progress.style.width =
                `${percentage}%`;

        }


        const currentTime =
            document.getElementById(
                "songs-current-time"
            );


        if(currentTime){

            currentTime.textContent =
                formatSongsTime(
                    current
                );

        }


        const totalTime =
            document.getElementById(
                "songs-total-time"
            );


        if(totalTime){

            totalTime.textContent =
                formatSongsTime(
                    duration
                );

        }

    }catch(error){

        /*
         * El reproductor puede no estar
         * disponible temporalmente.
         */

    }

}


/* =========================================================
   FORMATO DE TIEMPO
   ========================================================= */

function formatSongsTime(
    seconds
){

    if(
        !Number.isFinite(
            seconds
        )
    ){

        return "0:00";

    }


    seconds =
        Math.max(
            0,
            Math.floor(
                seconds
            )
        );


    const minutes =
        Math.floor(
            seconds / 60
        );


    const remaining =
        seconds % 60;


    return (
        `${minutes}:` +
        `${String(
            remaining
        ).padStart(
            2,
            "0"
        )}`
    );

}


/* =========================================================
   CERRAR JUEGO DE SONGS
   ========================================================= */

function closeSongsGame(){

    songsGameOpen =
        false;


    if(
        songsProgressTimer
    ){

        clearInterval(
            songsProgressTimer
        );

        songsProgressTimer =
            null;

    }


    if(
        songsPlayer
    ){

        try{

            songsPlayer.stopVideo();

        }catch(error){

            console.warn(
                error
            );

        }


        try{

            songsPlayer.destroy();

        }catch(error){

            console.warn(
                error
            );

        }

    }


    songsPlayer =
        null;

    songsPlayerReady =
        false;


    const modal =
        document.getElementById(
            "songs-modal"
        );


    if(modal){

        modal.style.display =
            "none";

    }


    const menu =
        document.getElementById(
            "main-menu"
        );


    if(menu){

        menu.style.display =
            "flex";

    }

}


/* =========================================================
   ACTUALIZAR MARCADORES
   ========================================================= */

function refreshSongsScores(){

    updateSongsScoreboard();

    updateScoreboard();

}


/* =========================================================
   FIN DEL SCRIPT
   ========================================================= */
