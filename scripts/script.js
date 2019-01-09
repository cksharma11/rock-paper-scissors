const moves = ['rock', 'paper', 'scissor'];
const resultDiv = document.getElementById('result');
const playerScoreDiv = document.getElementById('player_score');
const computerScoreDiv = document.getElementById('computer_score');

let playerWinCount = 0;
let computerWinCount = 0;

const winningComditions = [
  ['rock', 'scissor'],
  ['paper', 'rock'],
  ['scissor', 'paper']
];

const hasWon = function(computerMove, playersMove) {
  return winningComditions.some(condition => {
    return computerMove == condition[0] && playersMove == condition[1];
  });
};

const randomGenerator = function() {
  return Math.floor(Math.random() * 3);
};

const getComputerMove = function() {
  const index = randomGenerator();
  return moves[index];
};

const startGame = function(event) {
  document.getElementById(event.target.id).style.border = '2px solid blue';
  const playerMove = event.target.id;
  const computerMove = getComputerMove();
  checkWinConditions(computerMove, playerMove);
  updateScore();
};

const updateScore = function() {
  playerScoreDiv.innerText = playerWinCount;
  computerScoreDiv.innerText = computerWinCount;
};

const checkWinConditions = function(computerMove, playerMove) {
  if (computerMove == playerMove) {
    return (resultDiv.innerText = `Your move ${playerMove} Computer's move ${computerMove} Draw!`);
  }
  if (hasWon(computerMove, playerMove)) {
    computerWinCount++;
    return (resultDiv.innerText = `Your move ${playerMove} Computer's move ${computerMove} Computer Won!`);
  }
  playerWinCount++;
  return (resultDiv.innerText = `Your move ${playerMove} Computer's move ${computerMove} You Won!`);
};
