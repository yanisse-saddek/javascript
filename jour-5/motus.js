function game() {
 var tentatives = 6;
  var colors = require("colors");
  var mysteryWord = "pizza";
  var mysteryWordArray = mysteryWord.split("");
  var hiddenWord = mysteryWordArray;
  var firstLetter = mysteryWordArray[0];
  var showWordTentative = [];
  function checkWord(typedWord) {
    tentatives--;
    var text = typedWord;
    newText = [];

    for (i = 0; i < hiddenWord.length; i++) {
      newText[i] = text[i];
    }

    for (i = 0; i < mysteryWord.length; i++) {
      if (text[i] == mysteryWord[i]) {
        newText[i] = text[i].red;
      } else if (mysteryWord.includes(text[i])) {
        newText[i] = text[i].yellow;
      }
    }
    showWordTentative.push(newText.join(""));

    if (text == mysteryWord) {
      console.log("Bravo tu as gagné !!!!!  Le mot était :".green, mysteryWord);
    } else if (tentatives === 0 ||text.length < mysteryWord.length || text.length > mysteryWord.length) {
        console.log("Perdu, le mot était :".red, mysteryWord);
      } else if (tentatives > 0) {
        console.log("loupé!")
      getText();
        }
    }

  function getText() {
      console.clear()
      for (i = 0; i < showWordTentative.length; i++) {
        console.log("\n");
        console.log(i+1, ")", showWordTentative[i]);
        console.log("---");
      }
        console.log(
      "Le mot commence par",
      firstLetter,
      "et contient",
      mysteryWord.length,
      "lettres"
    );
    var prompt = require("prompt");
    prompt.start();
    prompt.get("word", function (err, result) {
      console.log("Il te reste", tentatives, " tentatives");
      typedWord = result.word;
      checkWord(typedWord);
    });
  }
  getText();
}

game();
