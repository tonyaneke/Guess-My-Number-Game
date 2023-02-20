'use strict';

// console.log(document.querySelector(`.message`).textContent);

// const result = (document.querySelector(
//   `.message`
// ).textContent = `💘 Correct Number`);
// console.log(result);

// document.querySelector(`.number`).textContent = 13;
// document.querySelector(`.score`).textContent = 13;

// document.querySelector(`.guess`).value = 23;
// console.log( document.querySelector(`.guess`).value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

const score$ = function (scores) {
  document.querySelector(`.score`).textContent = scores;
};
// document.querySelector(`.number`).textContent = secretNumber;

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess);

  //when there's no input
  if (!guess) {
    // document.querySelector(`.message`).textContent = `No Number 💥`;
    displayMessage(`No Number `);

    //when player wins
  } else if (guess === secretNumber) {
    // document.querySelector(`.message`).textContent = `💘 Correct Number`;
    displayMessage(`💘 Correct Number`);
    score++;
    // document.querySelector(`.score`).textContent = score;
    score$(score);
    document.querySelector(`.number`).textContent = secretNumber;

    // manipulating styles
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;

    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(`.message`).textContent =
      //   guess > secretNumber ? `📈 Too High!!` : `📉 Too Low!!`;
      displayMessage(guess > secretNumber ? `📈 Too High!!` : `📉 Too Low!!`);
      score--;
      // document.querySelector(`.score`).textContent = score;
      score$(score);
    } else {
      // document.querySelector(`.message`).textContent = `YOU lost 😭`;
      displayMessage(`YOU lost 😭`);
      document.querySelector(`.score`).textContent = 0;
    }
  }

  //   // when guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(`.message`).textContent = `📉 Too Low!!`;
  //     score--;
  //     document.querySelector(`.score`).textContent = score;
  //   } else {
  //     document.querySelector(`.message`).textContent = `YOU lost 😭`;
  //     document.querySelector(`.score`).textContent = 0;
  //   }
  // }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  // document.querySelector(`.message`).textContent = `start guessing...`;
  displayMessage(`Start Guessing...`);
  // document.querySelector(`.score`).textContent = score;
  score$(score);
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`body`).style.backgroundColor = `grey`;
  document.querySelector(`.guess`).value = ``;

  document.querySelector(`.number`).style.width = `15rem`;
});
