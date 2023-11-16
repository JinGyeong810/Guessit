let correctGuesses = 0
let incorrectGuesses = 0
let targetNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 7;
let lastGuessNumber = null;

function countUpdate(){
  const correctGuessesSpan = document.getElementById("correctGuesses");
  const incorrectGuessesSpan = document.getElementById("incorrectGuesses");

  correctGuessesSpan.textContent = `${correctGuesses}`;
  incorrectGuessesSpan.textContent = `${incorrectGuesses}`;
}

function newGame(){
  targetNumber = Math.floor(Math.random() * 100) + 1;
  attemptsLeft = 7;
  lastGuessNumber = null;
  enableInputAndButton()
  document.getElementById("message").textContent = "Up or Down";
  message.style.color = "black";
  document.getElementById("guessInput").value = "";
  document.getElementById("attemptsLeft").textContent = attemptsLeft;
  document.getElementById("lastGuess").textContent = "지난번에 입력한 숫자: ";
  document.getElementById("hint").textContent = "예상한 숫자가 정답보다 크면 down, 작으면 up이 출력됩니다.";
  checkGuess();
}

function checkGuess() {
  const userGuess = parseInt(document.getElementById("guessInput").value);
  const message = document.getElementById("message");
  const attemptsSpan = document.getElementById("attemptsLeft");
  const lastGuessSpan = document.getElementById("lastGuess")
  const correctGuessesSpan = document.getElementById("correctGuesses");
  const incorrectGuessesSpan = document.getElementById("incorrectGuesses");

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = "올바른 숫자를 입력하세요 (1-100)!";
    return;
  }

  attemptsLeft--;
  lastGuessNumber = userGuess;

  if (userGuess === targetNumber) {
    message.textContent = `축하합니다! 정답을 맞췄습니다. 정답은 ${targetNumber} 입니다.`;
    message.style.color = "green";
    correctGuesses++;
    disableInputAndButton();
  } else {
    message.textContent = userGuess > targetNumber ? "Down!" : "Up!";
    message.style.color = "red";
    attemptsSpan.textContent = attemptsLeft;

    if (attemptsLeft === 0) {
      message.textContent = `게임 종료! 정답을 맞추지 못했습니다. 정답은 ${targetNumber} 입니다.`;
      incorrectGuesses++;
      disableInputAndButton();
    }
  }
  
  lastGuessSpan.textContent = `지난번에 입력한 숫자: ${lastGuessNumber}`;
  countUpdate();
  
}

function enableInputAndButton() {
  document.getElementById("guessInput").disabled = false;
  document.querySelector("button").disabled = false;
}

function disableInputAndButton() {
  document.getElementById("guessInput").disabled = true;
  document.querySelector("button").disabled = true;
}
