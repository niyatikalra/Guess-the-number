
let remainingGuesses = 10;
let prevUserIpt = [];

let btn = document.querySelector("#subt");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let guessNum = Math.round(Math.random() * 100 + 1);

  if (remainingGuesses === 0) {
    document.querySelector(".lowOrHi").innerText =
      "No more guesses left. Refresh the page to start again.";
    return;
  }

  let userIpt = parseInt(document.querySelector("#guessField").value);

  if (isNaN(userIpt) || userIpt <= 0 || userIpt > 100) {
    document.querySelector(".lowOrHi").innerText =
      "ENTER NUMBERS BETWEEN 1 TO 100 ONLY!";
    return;
  }

  remainingGuesses--;

  if (userIpt > guessNum) {
    document.querySelector(".lowOrHi").innerText = "You guessed the HIGHER number";
   
  } else if(userIpt < guessNum) {
    document.querySelector(".lowOrHi").innerText = "You guessed the LOWER number";
  }else{ document.querySelector(".lowOrHi").innerText = "You won";
  remainingGuesses = 0;

  }

  let remGuess = document.querySelector(".lastResult");
  remGuess.innerText = remainingGuesses;



  prevUserIpt.push(userIpt);
  document.querySelector(".guesses").innerText = prevUserIpt.join(", ");

  document.querySelector("#guessField").value = "";
});
