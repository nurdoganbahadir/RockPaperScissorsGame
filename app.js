const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorsBtn = document.querySelector(".scissorsBtn");
const message = document.querySelector(".message");
const myScore = document.querySelector(".myScore");
const computerScore = document.querySelector(".ComputerScore");

let myTotalScore = 0;
let comTotalScore = 0;

//bilgisayar 3 sayıdan birini rastgele alsın 1. taş 2. kağıt 3. makas

let randomGame = Math.floor(Math.random() * 3) + 1;
console.log(randomGame);

rockBtn.addEventListener("click", rockBtnFun);
// paperBtn.addEventListener("click", paperBtnFun);
// scissorsBtn.addEventListener("click", scissorsBtnFun);

function rockBtnFun() {
  randomGame = Math.floor(Math.random() * 3) + 1;
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
