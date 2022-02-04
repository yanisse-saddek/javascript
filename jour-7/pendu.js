
var mysteryWord = "gateau";
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
  for(i=0; i<lettre.length; i++){
    console.log(lettre[i])
    if(hiddenWord.includes(lettre[i])){
    }else{
      count--
    }
  }
  if (hiddenWord.join("") === mysteryWord) {
    console.log('Bravo tu as réussi ! Le mot était:', mysteryWord);
  }else if(count===0){
    console.log('Tu as perdu ! Le mot était:', mysteryWord)
} else if(count<=10){
    console.log('Il te reste', count.toString(), 'essais!')
    console.log(hiddenWord.join(""));
    promptText();
  }
}


function promptText() {
  var prompt = require("prompt");
  prompt.start();
  prompt.get("Lettre", function (err, result) {

    lettre = result.Lettre;
    game(lettre);
  });
}
promptText();
