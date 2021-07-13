var heading;
heading = document.getElementById("colourValue");

function setButtonColour(button, red, green, blue) {
  button.setAttribute(
    "style",
    `background-color: rgb(${red}, ${green}, ${blue})`
  );
}

function makeColourValue() {
  return Math.round(Math.random() * 255);
}

var buttons = document.getElementsByClassName("colourButton");
var answerMessage = document.getElementById("answer");

function startGame() {
  var answerButton = Math.round(Math.random() * (buttons.length - 1));
  for (var i = 0; i < buttons.length; i++) {
    var red = makeColourValue();
    var green = makeColourValue();
    var blue = makeColourValue();

    setButtonColour(buttons[i], red, green, blue);

    if (i == answerButton) {
      heading.innerHTML = `(${red}, ${green}, ${blue})`;
      var winningRed = red;
      var winningGreen = green;
      var winningBlue = blue;
    }

    buttons[i].addEventListener("click", function () {
      if (this == buttons[answerButton]) {
        answerMessage.innerHTML = "Correct!";
        page.setAttribute(
          "style",
          `background-color: rgb(${winningRed}, ${winningGreen}, ${winningBlue})`
        );
      } else {
        answerMessage.innerHTML = "Wrong answer! Guess again!";
      }
    });
  }
  answerMessage.innerHTML = "";
  page.setAttribute("style", "background-color: rgb(255,255,255)");
}

startGame();
document.getElementById("resetButton").addEventListener("click", startGame);
