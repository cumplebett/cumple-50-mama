/* =========================================================
   CUMPLE BETT — SCRIPT PRINCIPAL
   ========================================================= */

const scores = {
    team1: { kahoot: 0, rondo: 0, songs: 0 },
    team2: { kahoot: 0, rondo: 0, songs: 0 },
    team3: { kahoot: 0, rondo: 0, songs: 0 }
};


/* =========================================================
   ROSCOS
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
   ASIGNACIÓN DE EQUIPOS
   ========================================================= */

const TEAM_DATA = {
    team1: rosco3, // 🔴 Los Originales — ROSCO 3
    team2: rosco1, // 🔵 Los Herederos — ROSCO 1
    team3: rosco2  // 🟢 Las Históricas — ROSCO 2
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
   STORAGE
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
        console.error("Error cargando puntajes:", error);
    }
}


function saveScores() {
    localStorage.setItem("bettScores", JSON.stringify(scores));
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

    const totals = {
        team1: getTotal("team1"),
        team2: getTotal("team2"),
        team3: getTotal("team3")
    };

    Object.keys(totals).forEach(team => {

        const number = team.replace("team", "");
        const total = totals[team];

        const scoreCard =
            document.getElementById(`score-team-${number}`);

        const totalCell =
            document.getElementById(`total-${number}`);

        const kahootCell =
            document.getElementById(`kahoot-${number}`);

        const rondoCell =
            document.getElementById(`rondo-${number}`);

        const songsCell =
            document.getElementById(`songs-${number}`);


        if (scoreCard) {
            scoreCard.textContent = total;
        }

        if (totalCell) {
            totalCell.textContent = total;
        }

        if (kahootCell) {
            kahootCell.textContent = scores[team].kahoot;
        }

        if (rondoCell) {
            rondoCell.textContent = scores[team].rondo;
        }

        if (songsCell) {
            songsCell.textContent = scores[team].songs;
        }

    });

    updateRondoSidebar();
}


function addPoints(team, game, points) {

    if (!scores[team] || scores[team][game] === undefined) {
        return;
    }

    scores[team][game] += points;

    saveScores();
    updateScoreboard();
}


/* =========================================================
   REINICIAR MARCADOR GENERAL
   ========================================================= */

function resetScores() {

    const confirmation = confirm(
        "¿Seguro que querés reiniciar el marcador general?\n\nSe van a borrar los puntos de Kahoot, Pasapalabra y Canciones."
    );

    if (!confirmation) {
        return;
    }

    scores.team1.kahoot = 0;
    scores.team1.rondo = 0;
    scores.team1.songs = 0;

    scores.team2.kahoot = 0;
    scores.team2.rondo = 0;
    scores.team2.songs = 0;

    scores.team3.kahoot = 0;
    scores.team3.rondo = 0;
    scores.team3.songs = 0;

    saveScores();
    updateScoreboard();

    alert("🔄 Marcador reiniciado correctamente.");
}


/* =========================================================
   ABRIR JUEGOS
   ========================================================= */

function openGame(game) {

    if (game === "rondo") {
        openRondo();
        return;
    }

    const modal = document.getElementById("game-modal");
    const title = document.getElementById("modal-title");
    const description = document.getElementById("modal-description");
    const icon = document.getElementById("modal-icon");

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
                        Respondan el Kahoot sobre Bett y después carguen
                        qué equipo terminó en cada posición.
                    </p>

                    <button
                        class="back-button"
                        onclick="window.open('https://play.kahoot.it/v2/?quizId=9d7e3a63-484c-4be8-948d-30978619b503', '_blank')"
                        style="margin-bottom: 25px;"
                    >
                        🧠 Abrir Kahoot
                    </button>


                    <h3 style="margin-bottom: 15px;">
                        🏆 Resultado
                    </h3>


                    <div style="margin-bottom: 12px;">

                        <label>
                            🥇 1° puesto — 3 puntos
                        </label>

                        <select
                            id="kahoot-team-1"
                            class="kahoot-select"
                            style="width:100%; padding:12px; margin-top:6px; border-radius:8px;"
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


                    <div style="margin-bottom: 12px;">

                        <label>
                            🥈 2° puesto — 2 puntos
                        </label>

                        <select
                            id="kahoot-team-2"
                            class="kahoot-select"
                            style="width:100%; padding:12px; margin-top:6px; border-radius:8px;"
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


                    <div style="margin-bottom: 20px;">

                        <label>
                            🥉 3° puesto — 1 punto
                        </label>

                        <select
                            id="kahoot-team-3"
                            class="kahoot-select"
                            style="width:100%; padding:12px; margin-top:6px; border-radius:8px;"
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


    if (game === "songs") {

        if (icon) {
            icon.textContent = "🎵";
        }

        if (title) {
            title.textContent = "Canciones";
        }

        if (description) {

            description.innerHTML = `
                <p>
                    Adiviná la canción, el artista y el año o década.
                </p>
            `;
        }
    }


    modal.classList.add("active");
}


/* =========================================================
   KAHOOT
   ========================================================= */

function saveKahootResult() {

    const first =
        document.getElementById("kahoot-team-1");

    const second =
        document.getElementById("kahoot-team-2");

    const third =
        document.getElementById("kahoot-team-3");


    if (!first || !second || !third) {
        alert("No se pudo cargar el resultado.");
        return;
    }


    const teamFirst = first.value;
    const teamSecond = second.value;
    const teamThird = third.value;


    if (!teamFirst || !teamSecond || !teamThird) {
        alert("⚠️ Tenés que seleccionar los tres puestos.");
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
   CERRAR MODAL GENERAL
   ========================================================= */

function closeGame() {

    const modal =
        document.getElementById("game-modal");

    if (modal) {
        modal.classList.remove("active");
    }
}


/* =========================================================
   PASAPALABRA / RONDO
   ========================================================= */

function openRondo() {

    const modal =
        document.getElementById("rondo-modal");

    if (modal) {
        modal.classList.add("active");
    }

    selectRosco("team1");
}


function closeRondo() {

    const modal =
        document.getElementById("rondo-modal");

    if (modal) {
        modal.classList.remove("active");
    }
}


function resetRondo() {

    if (!currentTeam) {
        selectRosco("team1");
        return;
    }

    rondoState[currentTeam] =
        createInitialRondoState();

    currentLetterIndex = 0;
    currentRosco = TEAM_DATA[currentTeam];


    Object.keys(currentRosco).forEach(letter => {
        delete currentRosco[letter].correct;
    });


    renderRosco();
    updateRondoSidebar();
}


function showRoscoSelection() {

    // La selección de equipo está siempre visible
    // en las pestañas del HTML.

}


function selectRosco(team) {

    if (!TEAM_DATA[team]) {
        return;
    }


    currentTeam = team;

    currentRosco =
        TEAM_DATA[team];

    currentLetterIndex = 0;


    rondoState[team] =
        createInitialRondoState();


    Object.keys(currentRosco).forEach(letter => {
        delete currentRosco[letter].correct;
    });


    renderRosco();

    updateRondoSidebar();


    document
        .querySelectorAll(".rondo-tab")
        .forEach((tab, index) => {

            tab.classList.toggle(
                "active",
                index ===
                Number(team.replace("team", "")) - 1
            );

        });
}


function updateRondoSidebar() {

    if (!currentTeam) {
        return;
    }


    const teamLabel =
        document.getElementById("turn-team");

    const scoreLabel =
        document.getElementById("rondo-current-score");


    if (teamLabel) {

        const icons = {
            team1: "🔴",
            team2: "🔵",
            team3: "🟢"
        };


        teamLabel.textContent =
            `${icons[currentTeam]} ${getTeamName(currentTeam)}`;
    }


    if (scoreLabel) {

        scoreLabel.textContent =
            rondoState[currentTeam].hits;

    }

}


/* =========================================================
   ROSCO
   ========================================================= */

function getLetters() {

    return Object.keys(currentRosco);

}


function renderRosco() {

    const container =
        document.getElementById("rosco");


    if (!container) {
        return;
    }


    container.innerHTML = "";


    const letters =
        getLetters();


    letters.forEach((letter, index) => {

        const button =
            document.createElement("button");


        button.className =
            "rosco-letter";


        button.textContent =
            letter;


        button.id =
            `letter-${letter}`;


        button.onclick = function () {

            goToLetter(index);

        };


        container.appendChild(button);

    });


    showCurrentQuestion();
}


function goToLetter(index) {

    if (!currentRosco) {
        return;
    }


    const letters =
        getLetters();


    if (
        index < 0 ||
        index >= letters.length
    ) {
        return;
    }


    currentLetterIndex =
        index;


    showCurrentQuestion();
}


function showCurrentQuestion() {

    if (!currentRosco || !currentTeam) {
        return;
    }


    const letters =
        getLetters();


    const letter =
        letters[currentLetterIndex];


    const item =
        currentRosco[letter];


    if (!item) {
        return;
    }


    const letterDisplay =
        document.getElementById("question-letter") ||
        document.getElementById("current-letter");


    const typeDisplay =
        document.getElementById("question-type");


    const clue =
        document.getElementById("question-text") ||
        document.getElementById("rondo-clue");


    if (letterDisplay) {
        letterDisplay.textContent =
            letter;
    }


    const phrase =
        item.type === "contains"
            ? `CONTIENE LA ${letter}`
            : `CON LA LETRA ${letter}`;


    if (typeDisplay) {
        typeDisplay.textContent =
            phrase;
    }


    if (clue) {
        clue.innerHTML =
            item.clue;
    }


    updateRoscoLetterStyles();
    updateRondoSidebar();
}


function updateRoscoLetterStyles() {

    if (!currentRosco || !currentTeam) {
        return;
    }


    const state =
        rondoState[currentTeam];


    Object.keys(currentRosco).forEach(letter => {

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
            "passed",
            "current"
        );

    });


    const letters =
        getLetters();


    const currentLetter =
        letters[currentLetterIndex];


    const currentButton =
        document.getElementById(
            `letter-${currentLetter}`
        );


    if (currentButton) {

        currentButton.classList.add(
            "current"
        );

    }


    state.answered.forEach(letter => {

        const button =
            document.getElementById(
                `letter-${letter}`
            );


        if (!button) {
            return;
        }


        const item =
            currentRosco[letter];


        if (item.correct) {

            button.classList.add(
                "correct"
            );

        } else {

            button.classList.add(
                "incorrect"
            );

        }

    });


    state.passed.forEach(letter => {

        const button =
            document.getElementById(
                `letter-${letter}`
            );


        if (button) {

            button.classList.add(
                "passed"
            );

        }

    });

}
/* =========================================================
   RESPUESTAS DEL ROSCO
   ========================================================= */

function answerRondo(isCorrect) {

    if (!currentRosco || !currentTeam) {
        return;
    }

    const state = rondoState[currentTeam];

    const letters = getLetters();

    const letter =
        letters[currentLetterIndex];

    const item =
        currentRosco[letter];


    if (
        !item ||
        state.answered.includes(letter)
    ) {
        return;
    }


    item.correct = isCorrect;

    state.answered.push(letter);


    if (isCorrect) {

        state.hits++;

    } else {

        state.misses++;

    }


    updateRondoSidebar();

    moveToNextLetter();
}


/* =========================================================
   PASAPALABRA
   ========================================================= */

function passRondo() {

    if (!currentRosco || !currentTeam) {
        return;
    }


    const state =
        rondoState[currentTeam];


    const letters =
        getLetters();


    const letter =
        letters[currentLetterIndex];


    if (
        state.answered.includes(letter) ||
        state.passed.includes(letter)
    ) {
        return;
    }


    state.passed.push(letter);


    moveToNextLetter();
}


/* =========================================================
   BOTONES DEL HTML
   ========================================================= */

/*
 * El HTML utiliza:
 *
 * answerQuestion('correct')
 * answerQuestion('pass')
 * answerQuestion('wrong')
 *
 * Estas funciones traducen esos botones
 * al funcionamiento interno del rosco.
 */

function answerQuestion(action) {

    if (action === "correct") {

        answerRondo(true);

        return;
    }


    if (action === "wrong") {

        answerRondo(false);

        return;
    }


    if (action === "pass") {

        passRondo();

        return;
    }

}


/* =========================================================
   AVANZAR A LA SIGUIENTE LETRA
   ========================================================= */

function moveToNextLetter() {

    if (!currentTeam || !currentRosco) {
        return;
    }


    const state =
        rondoState[currentTeam];


    const letters =
        getLetters();


    let nextIndex =
        currentLetterIndex + 1;


    /*
     * Primero busca hacia adelante.
     */

    while (
        nextIndex <
        letters.length
    ) {

        const nextLetter =
            letters[nextIndex];


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


            showCurrentQuestion();

            return;
        }


        nextIndex++;

    }


    /*
     * Si llegó al final,
     * vuelve a buscar desde A.
     */

    nextIndex = 0;


    while (
        nextIndex <
        letters.length
    ) {

        const nextLetter =
            letters[nextIndex];


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


            showCurrentQuestion();

            return;
        }


        nextIndex++;

    }


    /*
     * Si no quedan letras,
     * termina automáticamente.
     */

    finishRondo();

}


/* =========================================================
   FINALIZAR PASAPALABRA
   ========================================================= */

function finishRondo() {

    if (!currentTeam) {
        return;
    }


    const state =
        rondoState[currentTeam];


    if (state.finished) {
        return;
    }


    state.finished = true;


    const hits =
        state.hits;


    /*
     * El puntaje del Pasapalabra
     * es igual a la cantidad de respuestas
     * correctas.
     */

    const points =
        hits > 0
            ? hits
            : 0;


    scores[currentTeam].rondo =
        points;


    saveScores();

    updateScoreboard();


    showRondoResults();

}


/* =========================================================
   RESULTADO DEL PASAPALABRA
   ========================================================= */

function showRondoResults() {

    const state =
        rondoState[currentTeam];


    const game =
        document.getElementById(
            "rondo-game"
        );


    if (!game) {
        return;
    }


    game.innerHTML = `

        <div
            style="
                text-align:center;
                padding:30px;
            "
        >

            <h2>
                🎉 Pasapalabra terminado
            </h2>


            <p
                style="
                    font-size:20px;
                    margin-top:20px;
                "
            >
                <strong>
                    ${getTeamName(currentTeam)}
                </strong>
            </p>


            <p
                style="
                    font-size:18px;
                    margin-top:20px;
                "
            >
                ✅ Correctas:
                <strong>
                    ${state.hits}
                </strong>
            </p>


            <p
                style="
                    font-size:18px;
                "
            >
                ❌ Incorrectas:
                <strong>
                    ${state.misses}
                </strong>
            </p>


            <p
                style="
                    font-size:22px;
                    margin-top:20px;
                "
            >
                🏆 Puntos obtenidos:
                <strong>
                    ${state.hits}
                </strong>
            </p>


            <button
                class="back-button"
                onclick="closeRondo()"
                style="
                    margin-top:20px;
                "
            >
                Cerrar
            </button>

        </div>

    `;

}


/* =========================================================
   NOMBRES DE LOS EQUIPOS
   ========================================================= */

function getTeamName(team) {

    if (team === "team1") {

        return "Los Originales";

    }


    if (team === "team2") {

        return "Los Herederos";

    }


    if (team === "team3") {

        return "Las Históricas";

    }


    return team;

}


/* =========================================================
   INICIALIZACIÓN
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadScores();

        updateScoreboard();

    }
);
