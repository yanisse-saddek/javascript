function game(){
    var tentatives = 6;
    var colors = require("colors");
    
    function checkWord(typedWord){
        var text = typedWord;
        var mysteryWord = "brute";
        var mysteryWordArray = mysteryWord.split("");
        var hiddenWord = mysteryWordArray;
        var firstLetter = mysteryWordArray[0];
        console.log('Le mot commence par ', firstLetter)
        tentatives--
    
        for (i = 0; i < mysteryWord.length; i++) {
            if (text[i] === mysteryWordArray[i]) {
                hiddenWord[i] = text[i].red;
              }
            else if (mysteryWord.includes(text[i])  ) {
                hiddenWord[i] = text[i].yellow;
              }
            else {
                hiddenWord[i] = '-';
            }
        }
        if(tentatives>0){
            console.log(hiddenWord.join(''))
            getText()
        }else if(tentatives===0){
            console.log('Perdu, le mot était :', mysteryWord)
        }
        
        if(text == mysteryWord){
            console.log('Bravo tu as gagné !!!!!  Le mot était :', mysteryWord)
        }
        
    }
    function getText(){
        var prompt = require('prompt')
        prompt.start()
        prompt.get('word', function(err, result){
            console.log("Il te reste",tentatives, " tentatives")
            typedWord = result.word
            checkWord(typedWord)
        })
    }
    getText()
    }
    
    game()