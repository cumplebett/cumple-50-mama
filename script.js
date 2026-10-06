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
        clue: "Isla argentina donde se encuentra la ciudad de Ushuaia.",
        answer: "TIERRA DEL FUEGO",
        type: "contains"
    },
    J: {
        clue: "Nombre del famoso boxeador estadounidense apodado “The Greatest”.",
        answer: "ALI",
        type: "contains"
    },
    K: {
        clue: "Arte marcial japonés cuyo nombre significa “camino de la suavidad”.",
        answer: "JUDO",
        type: "contains"
    },
    L: {
        clue: "Apellido del cantante británico, exintegrante de The Beatles.",
        answer: "LENNON",
        type: "starts"
    },
    M: {
        clue: "Capital de España.",
        answer: "MADRID",
        type: "starts"
    },
    N: {
        clue: "Nombre del barco de la película Titanic.",
        answer: "TITANIC",
        type: "contains"
    },
    O: {
        clue: "Apellido del célebre escritor colombiano autor de Cien años de soledad.",
        answer: "GABO",
        type: "contains"
    },
    P: {
        clue: "Famoso personaje de historieta argentina creado por Quino.",
        answer: "MAFALDA",
        type: "contains"
    },
    Q: {
        clue: "Nombre de la reina protagonista de la película Frozen.",
        answer: "ELSA",
        type: "contains"
    },
    R: {
        clue: "Planeta conocido como el planeta rojo.",
        answer: "MARTE",
        type: "contains"
    },
    S: {
        clue: "Apellido del famoso científico que formuló las leyes del movimiento.",
        answer: "NEWTON",
        type: "contains"
    },
    T: {
        clue: "Nombre de la torre parisina símbolo de Francia.",
        answer: "EIFFEL",
        type: "contains"
    },
    U: {
        clue: "País sudamericano cuya capital es Montevideo.",
        answer: "URUGUAY",
        type: "starts"
    },
    V: {
        clue: "Combustible fósil líquido utilizado principalmente en motores.",
        answer: "NAFTA",
        type: "contains"
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
   ESTADO
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
   STORAGE
   ========================================================= */

function loadScores() {

    try {

        const saved =
            localStorage.getItem("bettScores");

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


function saveScores() {

    localStorage.setItem(
        "bettScores",
        JSON.stringify(scores)
    );

}


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


    if (
        game === "songs"
    ) {

        openSongsGame();

        return;

    }
