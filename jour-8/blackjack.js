var colors = require('colors')
var prompt = require('prompt')
console.log('Tape "tirer" pour tirer une carte, ou "passer" pour passer ton tour'.blue)
function draw(){
    prompt.start()
    prompt.get('choice',(err, data) => {
        tirerCarte(data.choice)
    })
}

var score = 0;
var hiddenBank = Math.ceil(Math.random() * (21 - 16) + 16);
max = 1; min = 10;
function tirerCarte(choice){
    if(choice !== "tirer" && choice !== "passer"){
        console.log('Tape "tirer" pour tirer une carte, ou "passer" pour passer ton tour')
        draw()
    }else{
        if(choice == "tirer"){
            var randomCard = Math.ceil(Math.random() * (10 - 1) + 1);
            score+= randomCard;
            console.log("Total de tes cartes", score)
            if(score > 21){
                pass();
            }else{
                draw()
            }
        }else if(choice == "passer" && score > 16){
            console.log('Tu as passé ton tour')
            pass();
        }else if(choice =="passer" && score<=16){
            console.log('Il te faut un score de minimum 16 pour passer ton tour.')
            draw()
        }
    }


    function pass(){
        loseText = 'Perdu!' + " le score de la banque était " + hiddenBank;
        blackJack = "Blackjack!"+ "le score de la banque était " + hiddenBank;
        winText = 'Bravo!' + " le score de la banque était " +hiddenBank;
        if(score > 21){
            console.log(loseText.red)
        }else if(score == 21){
            console.log(blackJack.green)
        }else if(score > hiddenBank){
            console.log(winText.green)
        }else if(score<=hiddenBank){
            console.log(loseText.red)
        }
    }
}
draw()