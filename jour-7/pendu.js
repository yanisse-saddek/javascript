var mysteryWord = "ok";
mysteryWordArray = mysteryWord.split("");
letter = [];
count = 10;
hiddenWord = mysteryWordArray.map(function (letter) {
  return letter;
});

for (i = 0; i < mysteryWord.length; i++) {
  hiddenWord[i] = "-";
}

function game(promptLetter) {
  letter.push(lettre);
  for (i = 0; i < mysteryWord.length; i++) {
    for (j = 0; j < letter.length; j++) {
      if (mysteryWord[i] === letter[j]) {
        hiddenWord[i] = letter[j];
      }
    }
  }
  if (hiddenWord.join("") === mysteryWord) {
    console.log('youpi');
  }else if(count===0){
    console.log('perdu, le mot était:', mysteryWord)
} else if(count<=10){
    console.log('il te reste', count, 'essais')
    console.log(hiddenWord.join(""));
    promptText();
  }
}

function promptText() {
  var prompt = require("prompt");
  prompt.start();
  prompt.get("lettre", function (err, result) {
      count--
    lettre = result.lettre;
    game(lettre);
  });
}
promptText();
