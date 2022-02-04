function game() {
  console.clear()
  var colors = require('colors')
  var mysteryWord = "tablette";
  mysteryWordArray = mysteryWord.split("");
  letter = [];
  count = 10;
  hiddenWord = mysteryWordArray.map(function (letter) {
    return letter;
  });
  for (i = 0; i < mysteryWord.length; i++) {
    hiddenWord[i] = "-";
  }
  function check(promptLetter) {

    letter.push(lettre);
    for (i = 0; i < mysteryWord.length; i++) {
      for (j = 0; j < letter.length; j++) {
        if (mysteryWord[i] === letter[j]) {
          hiddenWord[i] = letter[j];
        }
      }
    }

    for (i = 0; i < lettre.length; i++) {
      if (!hiddenWord.includes(lettre[i])) {
        count--;
      }
    }
    console.clear()

    if (hiddenWord.join("") === mysteryWord) {
      console.log("Bravo tu as réussi ! Le mot était:".green, mysteryWord);
    } else if (count === 0) {
      console.log("Tu as perdu ! Le mot était:".red, mysteryWord);
    } else if (count <= 10) {
      console.log("Il te reste", count.toString(), "essais!");
      promptText();
    }
  }

  function promptText() {
    var prompt = require("prompt");
    console.log("Le mot contient", hiddenWord.length, "caractères :", hiddenWord.join(''))
    prompt.start();
    prompt.get("Lettre", function (err, result) {
      lettre = result.Lettre;
      check(lettre);
    });
  }
  promptText();
}

game();

