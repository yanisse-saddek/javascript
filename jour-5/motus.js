function game() {
    var tentatives = 6;
    var colors = require("colors");
    var mysteryWord = "pizza";
    var mysteryWordArray = mysteryWord.split("");
    var hiddenWord = mysteryWordArray;
    var firstLetter = mysteryWordArray[0];
    var showWordTentative = []
    function checkWord(typedWord) {
        tentatives--
        var text = typedWord;
        newText = []
        

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
        if (text == mysteryWord) {
            console.log('Bravo tu as gagné !!!!!  Le mot était :', mysteryWord)
        }else{
            if (tentatives === 0) {
                console.log('Perdu, le mot était :', mysteryWord)
            } else if (text.length < mysteryWord.length || text.length > mysteryWord.length) {
                console.log('perdu t naz')
            } else if (tentatives > 0) {
                getText()
            }
            showWordTentative.push(newText.join(''))
        
            for (i = 0; i < showWordTentative.length; i++) {
                console.log('\n')
                console.log(i,")",showWordTentative[i])
                console.log('---')
            }

        }
    }
    function getText() {
        console.log('Le mot commence par', firstLetter, 'et contient', mysteryWord.length, 'lettres')
        var prompt = require('prompt')
        prompt.start()
        prompt.get('word', function (err, result) {
            console.log("Il te reste", tentatives, " tentatives")
            typedWord = result.word
            checkWord(typedWord)
        })
    }
    getText()

}

game()