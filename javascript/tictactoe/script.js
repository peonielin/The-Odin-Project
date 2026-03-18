const gridboxes = document.querySelectorAll(".box");
const resetButton = document.querySelector(".reset");
const gameContainer = document.querySelector(".game-container");
const statusMessage = document.querySelector(".status-message");
const playerOneName = document.querySelector(".playerOneName");
const playerTwoName = document.querySelector(".playerTwoName");
const submitButton = document.querySelector(".submit");
const names = document.querySelector(".names");

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let gameState = ["", "", "", "", "", "", "", "", ""];
let PlayerOne = "x";
let PlayerTwo = "o";
let PlayerFlag = 1;
let gameOver = false;
let currentPlayer = "";
let previousPlayer = "";

gridboxes.forEach((box) => {
  box.addEventListener("click", addPlayerUnit);
});

function startGame() {
  if (!playerOneName.value || !playerTwoName.value) {
    statusMessage.textContent = "Please enter both player names!";
    return;
  }
}
submitButton.addEventListener("click", checkNames);

function checkNames() {
  playerOneNameValue = playerOneName.value;
  playerTwoNameValue = playerTwoName.value;
  currentPlayer = playerOneName.value;
  previousPlayer = playerTwoName.value;
  statusMessage.textContent = `${currentPlayer} to start game`;
  playerOneName.remove();
  playerTwoName.remove();
  submitButton.remove();
  names.remove();
}

startGame();

function checkWinner() {
  for (let i = 0; i < winningConditions.length; i++) {
    let cellA = gameState[winningConditions[i][0]];
    let cellB = gameState[winningConditions[i][1]];
    let cellC = gameState[winningConditions[i][2]];

    if (cellA !== "" && cellA === cellB && cellB === cellC) {
      statusMessage.textContent = `${previousPlayer} has won! Press restart to play again`;
      gameOver = true;
      return;
    }
  }

  if (gameState.every((cell) => cell !== "")) {
    statusMessage.textContent = "You have drawn. Try again! ";
    gameOver = true;
  }
}

function addPlayerUnit(e) {
  if (gameOver == true) return;
  let clickedCell = e.target;
  if (clickedCell.tagName === "P") return;
  const addPlayer = document.createElement("p");
  if (PlayerFlag == 1) {
    addPlayer.textContent = PlayerOne;
    previousPlayer = currentPlayer;
    currentPlayer = playerTwoNameValue;
    PlayerFlag = 2;
    let i = clickedCell.id;
    gameState[i] = PlayerOne;
  } else if (PlayerFlag == 2) {
    addPlayer.textContent = PlayerTwo;
    previousPlayer = currentPlayer;
    currentPlayer = playerOneNameValue;
    PlayerFlag = 1;
    let i = clickedCell.id;
    gameState[i] = PlayerTwo;
  }
  statusMessage.textContent = `It is ${currentPlayer}'s turn`;
  clickedCell.appendChild(addPlayer);
  checkWinner();
}

resetButton.addEventListener("click", resetGame);

function resetGame() {
  // reset state
  gameState = ["", "", "", "", "", "", "", "", ""];
  gameOver = false;
  PlayerFlag = 1;
  currentPlayer = "";
  previousPlayer = "";
  playerOneNameValue = "";
  playerTwoNameValue = "";

  // clear the board
  gridboxes.forEach((cell) => {
    cell.textContent = "";
  });

  // clear and re-add the inputs
  playerOneName.value = "";
  playerTwoName.value = "";
  submitButton.textContent = "Submit";
  statusMessage.textContent = "Please enter both player names!";
  gameContainer.insertBefore(names, resetButton);
  names.appendChild(playerOneName);
  names.appendChild(playerTwoName);
  names.appendChild(submitButton);

  // re-attach submit listener
  submitButton.addEventListener("click", checkNames);
}
