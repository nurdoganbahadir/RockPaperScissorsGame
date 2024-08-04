const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorsBtn = document.querySelector(".scissorsBtn");
const message = document.querySelector(".message");
const myScore = document.querySelector(".myScore");
const computerScore = document.querySelector(".ComputerScore");
const yourChoice = document.querySelector(".yourChoice");
const computerChoice = document.querySelector(".computerChoice");

let myTotalScore = 0;
let comTotalScore = 0;

let paperHistory = document.createElement("i");
paperHistory.className = "fa-solid fa-hand";
let scissorsHistory = document.createElement("i");
scissorsHistory.className = "fa-solid fa-hand-scissors";

rockBtn.addEventListener("click", rockBtnFun);
paperBtn.addEventListener("click", paperBtnFun);
scissorsBtn.addEventListener("click", scissorsBtnFun);

function rockBtnFun() {
  let randomGame = Math.floor(Math.random() * 3) + 1;
  console.log(randomGame);

  let rockHistory = document.createElement("i");
  rockHistory.className = "fa-solid fa-hand-back-fist";
  yourChoice.appendChild(rockHistory);
  if (randomGame === 1) {
    message.textContent = "It's a tie!";
    rockHistory = document.createElement("i");
    rockHistory.className = "fa-solid fa-hand-back-fist";
    computerChoice.appendChild(rockHistory);
  } else if (randomGame === 2) {
    message.textContent = "You lose! paper beats rock";
    comTotalScore++;
    computerScore.textContent = comTotalScore;
    paperHistory = document.createElement("i");
    paperHistory.className = "fa-solid fa-hand";
    computerChoice.appendChild(paperHistory);
  } else {
    message.textContent = "You win! rock beats scissors";
    myTotalScore++;
    myScore.textContent = myTotalScore;
    scissorsHistory = document.createElement("i");
    scissorsHistory.className = "fa-solid fa-hand-scissors";
    computerChoice.appendChild(scissorsHistory);
  }
}
function paperBtnFun() {
  let randomGame = Math.floor(Math.random() * 3) + 1;
  console.log(randomGame);
  let paperHistory = document.createElement("i");
  paperHistory.className = "fa-solid fa-hand";
  yourChoice.appendChild(paperHistory);
  if (randomGame === 3) {
    message.textContent = "You lose! scissors beats paper";
    comTotalScore++;
    computerScore.textContent = comTotalScore;
    scissorsHistory = document.createElement("i");
    scissorsHistory.className = "fa-solid fa-hand-scissors";
    computerChoice.appendChild(scissorsHistory);
  } else if (randomGame === 2) {
    message.textContent = "It's a tie!";
    paperHistory = document.createElement("i");
    paperHistory.className = "fa-solid fa-hand";
    computerChoice.appendChild(paperHistory);
  } else {
    message.textContent = "You win! paper beats rock";
    myTotalScore++;
    myScore.textContent = myTotalScore;
    rockHistory = document.createElement("i");
    rockHistory.className = "fa-solid fa-hand-back-fist";
    computerChoice.appendChild(rockHistory);
  }
}
function scissorsBtnFun() {
  let randomGame = Math.floor(Math.random() * 3) + 1;
  console.log(randomGame);
  if (randomGame === 1) {
    message.textContent = "You lose! rock beats scissors";
    comTotalScore++;
    computerScore.textContent = comTotalScore;
  } else if (randomGame === 3) {
    message.textContent = "It's a tie!";
  } else {
    message.textContent = "You win! scissors beats paper";
    myTotalScore++;
    myScore.textContent = myTotalScore;
  }
}
