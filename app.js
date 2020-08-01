const backButton = document.getElementById("go-back");
const playButton = document.getElementById("play-now");
const rulesButton = document.getElementById("how-to-play");
const gamebutton = document.getElementById("game-buttons");
const instruction = document.getElementById("instruction");

playButton.onclick = (evt) => {
    location.href = "./game.html";
}

rulesButton.onclick = (evt) => {
    gameButton.style.display = "none";
    instruction.style.display = "inherit";
}

backButton.onclick = (evt) => {
    gameButton.style.display = "inherit";
    instruction.style.display = "none";
}