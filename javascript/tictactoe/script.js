const gridboxes = document.querySelectorAll(".box");
const resetButton = document.querySelector(".reset");
const gameContainer = document.querySelector(".game-container");

let PlayerOne = "x";
let PlayerTwo = "o";
let PlayerFlag = 1;
let currentPlayer = "Player One";

gridboxes.forEach((box) => {
  box.addEventListener("click", addPlayerUnit);
});

function addPlayerUnit(e) {
  const resetMessage = gameContainer.querySelector("h1:last-child");
  if (resetMessage) resetMessage.remove();
  const resetPlayerMessage = gameContainer.querySelector("h2");
  if (resetPlayerMessage) resetPlayerMessage.remove();
  let clickedCell = e.target;
  if (clickedCell.tagName === "P") return;
  const addPlayer = document.createElement("p");
  const playerMessage = document.createElement("h2");
  if (PlayerFlag == 1) {
    addPlayer.textContent = PlayerOne;
    currentPlayer = "Player One";
    PlayerFlag = 2;
  } else if (PlayerFlag == 2) {
    addPlayer.textContent = PlayerTwo;
    currentPlayer = "Player Two";
    PlayerFlag = 1;
  }
  playerMessage.textContent = `It is ${currentPlayer}'s turn`;
  clickedCell.appendChild(addPlayer);
  gameContainer.appendChild(playerMessage);
}

resetButton.addEventListener("click", resetGame);

function resetGame() {
  gridboxes.forEach((cell) => {
    cell.textContent = "";
  });
  PlayerFlag = 1;
  const addResetMessage = document.createElement("h1");
  addResetMessage.textContent = "You have reset the game";
  gameContainer.appendChild(addResetMessage);
}
