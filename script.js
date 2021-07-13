function setButtonColour(button, red, green, blue) {
  button.setAttribute(
    "style",
    `background-color: rgb(${red}, ${green}, ${blue})`
  );
}

function makeColourValue() {
  return Math.round(Math.random() * 255);
}

var heading = document.getElementById("colourValue");
var answerMessage = document.getElementById("answer");
var buttons = document.getElementsByClassName("colourButton");

function startGame() {
  answerMessage.innerHTML = "";
  content.setAttribute("style", "background-color: whitesmoke");
  var answerButton = Math.round(Math.random() * (buttons.length - 1));
  for (var i = 0; i < buttons.length; i++) {
    var red = makeColourValue();
    var green = makeColourValue();
    var blue = makeColourValue();

    setButtonColour(buttons[i], red, green, blue);

    if (i === answerButton) {
      heading.innerHTML = `RGB = (${red}, ${green}, ${blue})`;
      var winningRed = red;
      var winningGreen = green;
      var winningBlue = blue;
    }

    buttons[i].addEventListener("click", function () {
      if (this === buttons[answerButton]) {
        answerMessage.innerHTML = "Correct!";
        content.setAttribute(
          "style",
          `background-color: rgb(${winningRed}, ${winningGreen}, ${winningBlue})`
        );
      } else {
        answerMessage.innerHTML = "Wrong answer! Guess again!";
      }
    });
  }
}

function reload() {
  location.reload();
}

startGame();
document.getElementById("resetButton").addEventListener("click", reload);
