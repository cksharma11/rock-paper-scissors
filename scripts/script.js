const getPlayerScoreBox = document => document.getElementById('player_score');
const getComputerScoreBox = document =>
  document.getElementById('computer_score');
const getResultBox = document => document.getElementById('result');

const winCounts = {
  playerWinCount: 0,
  computerWinCount: 0
};

const winningCombinations = [
  ['rock', 'scissor'],
  ['paper', 'rock'],
  ['scissor', 'paper']
];

const isComputerWon = function(computerMove, playersMove) {
  return winningCombinations.some(condition => {
    return computerMove == condition[0] && playersMove == condition[1];
  });
};

const randomGenerator = function() {
  return Math.floor(Math.random() * 3);
};

const getAllMoves = function() {
  return ['rock', 'paper', 'scissor'];
};

const getComputerMove = function() {
  const moves = getAllMoves();
  const index = randomGenerator();
  return moves[index];
};

const startGame = function() {
  const playerMove = event.target.id;
  const computerMove = getComputerMove();
  checkWinConditions(computerMove, playerMove);
  updateScore();
};

const updateScore = function() {
  const playerScoreBox = getPlayerScoreBox(document);
  const computerScoreBox = getComputerScoreBox(document);
  playerScoreBox.innerText = winCounts.playerWinCount;
  computerScoreBox.innerText = winCounts.computerWinCount;
};

const handleComputerWin = function(resultBox, computerMove, playerMove) {
  winCounts.computerWinCount++;
  resultBox.style.color = 'red';
  return (resultBox.innerText = `Your move ${playerMove} Computer's move ${computerMove} Computer Won!`);
};

const handlePlayerWin = function(resultBox, computerMove, playerMove) {
  winCounts.playerWinCount++;
  resultBox.style.color = 'green';
  return (resultBox.innerText = `Your move ${playerMove} Computer's move ${computerMove} You Won!`);
};

const handleDraw = function(resultBox, computerMove, playerMove) {
  resultBox.style.color = 'white';
  return (resultBox.innerText = `Your move ${playerMove} Computer's move ${computerMove} Draw!`);
};

const checkWinConditions = function(computerMove, playerMove) {
  const resultBox = getResultBox(document);
  if (computerMove == playerMove) {
    return handleDraw(resultBox, computerMove, playerMove);
  }
  if (isComputerWon(computerMove, playerMove)) {
    return handleComputerWin(resultBox, computerMove, playerMove);
  }
  return handlePlayerWin(resultBox, computerMove, playerMove);
};

const setOnClickListners = function() {
  const main = document.getElementById('main');
  main.onclick = startGame;
};

window.onload = setOnClickListners;
