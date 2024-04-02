
function randomGenerate(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // генерация случайного числа
}

function checkIsNumber(value) {
  let parsedValue = parseFloat(value);
  return parsedValue == value && !isNaN(parsedValue) && isFinite(parsedValue);
}

gameBotFunction = function () {
  let attempts = 3;
  let mysteryNumber = randomGenerate(0, 100);
  console.log("mysteryNumber: " + mysteryNumber);

  getResult();

  function getResult() {
    let answerNum = 0;

    do {
      answerNum = prompt("Угадайте число от 0 до 100");

      if (answerNum == null) {
        alert("Вы завершили игру!");
        return;
      }
    } while (checkIsNumber(answerNum) == false);

    if (answerNum == mysteryNumber) {
      confirm("Вы победили!");
      return;
    } else if (answerNum > mysteryNumber) {
      alert("Ваше число больше!");
    } else if (answerNum < mysteryNumber) {
      alert("Ваше число меньше!");
    }

    attempts--;

    if (attempts > 0) {
      getResult();
    } else {
      if (confirm("Может, хотите попробовать снова?")) {
        gameBotFunction();
      } else {
        alert("Вы завершили игру!");
      }
    }
  }
};

gameBotFunction();
