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

//bilgisayar 3 sayıdan birini rastgele alsın 1. taş 2. kağıt 3. makas

rockBtn.addEventListener("click", rockBtnFun);
paperBtn.addEventListener("click", paperBtnFun);
scissorsBtn.addEventListener("click", scissorsBtnFun);

function rockBtnFun() {
  let randomGame = Math.floor(Math.random() * 3) + 1;
  console.log(randomGame);
  if (randomGame === 1) {
    message.textContent = "It's a tie!";
  } else if (randomGame === 2) {
    message.textContent = "You lose! paper beats rock";
    comTotalScore++;
    computerScore.textContent = comTotalScore;
  } else {
    message.textContent = "You win! rock beats scissors";
    myTotalScore++;
    myScore.textContent = myTotalScore;
  }
}
function paperBtnFun() {
  let randomGame = Math.floor(Math.random() * 3) + 1;
  console.log(randomGame);
  if (randomGame === 3) {
    message.textContent = "You lose! scissors beats paper";
    comTotalScore++;
    computerScore.textContent = comTotalScore;
  } else if (randomGame === 2) {
    message.textContent = "It's a tie!";
  } else {
    message.textContent = "You win! paper beats rock";
    myTotalScore++;
    myScore.textContent = myTotalScore;
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
