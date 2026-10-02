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
   CARGAR PUNTAJES GUARDADOS
   ========================================= */

function loadScores() {

    const savedScores = localStorage.getItem("bettScores");

    if (savedScores) {

        const parsedScores = JSON.parse(savedScores);

        scores.team1 = parsedScores.team1 || scores.team1;
        scores.team2 = parsedScores.team2 || scores.team2;
        scores.team3 = parsedScores.team3 || scores.team3;
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
   CALCULAR TOTAL
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

    /* EQUIPO 1 */

    document.getElementById("score-team-1").textContent =
        getTotal("team1");

    document.getElementById("kahoot-1").textContent =
        scores.team1.kahoot;

    document.getElementById("rondo-1").textContent =
        scores.team1.rondo;

    document.getElementById("songs-1").textContent =
        scores.team1.songs;

    document.getElementById("total-1").textContent =
        getTotal("team1");


    /* EQUIPO 2 */

    document.getElementById("score-team-2").textContent =
        getTotal("team2");

    document.getElementById("kahoot-2").textContent =
        scores.team2.kahoot;

    document.getElementById("rondo-2").textContent =
        scores.team2.rondo;

    document.getElementById("songs-2").textContent =
        scores.team2.songs;

    document.getElementById("total-2").textContent =
        getTotal("team2");


    /* EQUIPO 3 */

    document.getElementById("score-team-3").textContent =
        getTotal("team3");

    document.getElementById("kahoot-3").textContent =
        scores.team3.kahoot;

    document.getElementById("rondo-3").textContent =
        scores.team3.rondo;

    document.getElementById("songs-3").textContent =
        scores.team3.songs;

    document.getElementById("total-3").textContent =
        getTotal("team3");
}


/* =========================================
   SUMAR PUNTOS
   ========================================= */

function addPoints(team, game, points) {

    if (!scores[team]) return;

    if (!scores[team][game]) {
        scores[team][game] = 0;
    }

    scores[team][game] += points;

    saveScores();
    updateScoreboard();
}


/* =========================================
   RESTAR PUNTOS
   ========================================= */

function removePoints(team, game, points) {

    if (!scores[team]) return;

    scores[team][game] -= points;

    if (scores[team][game] < 0) {
        scores[team][game] = 0;
    }

    saveScores();
    updateScoreboard();
}


/* =========================================
   REINICIAR TODOS LOS PUNTAJES
   ========================================= */

function resetScores() {

    const confirmReset = confirm(
        "¿Seguro que querés reiniciar todos los puntajes?"
    );

    if (!confirmReset) return;


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
}


/* =========================================
   ABRIR JUEGO
   ========================================= */

function openGame(game) {

    const modal = document.getElementById("game-modal");

    const title = document.getElementById("modal-title");
    const description = document.getElementById("modal-description");
    const icon = document.getElementById("modal-icon");


    if (game === "kahoot") {

        icon.textContent = "🧠";

        title.textContent = "Kahoot";

        description.textContent =
            "Acá vamos a cargar las preguntas sobre Bett.";
    }


    if (game === "rondo") {

        icon.textContent = "🔤";

        title.textContent = "Rondo";

        description.textContent =
            "Tres equipos, tres roscos y preguntas de cultura general.";
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
   CERRAR JUEGO
   ========================================= */

function closeGame() {

    const modal = document.getElementById("game-modal");

    modal.classList.remove("active");
}


/* =========================================
   CERRAR MODAL AL HACER CLICK AFUERA
   ========================================= */

document.addEventListener("click", function(event) {

    const modal = document.getElementById("game-modal");

    if (event.target === modal) {
        closeGame();
    }

});


/* =========================================
   ESC PARA CERRAR
   ========================================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeGame();
    }

});


/* =========================================
   INICIAR
   ========================================= */

loadScores();
