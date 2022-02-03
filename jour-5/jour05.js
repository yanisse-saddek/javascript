 // Calculator
  var info = process.argv.splice(2)
  for(i=0; i<info.length; i++){
      if(info[i] !== "+" && info[i] !== '-' && info[i] != '/' && info[i] !== '*')
      info[i] = parseInt(info[i])
  }

  function calculate(num1, operator, num2){
           if(operator == "*"){
              result = num1 * num2 
              console.log(result)
           }
           if(operator == "/"){
              result = num1 / num2 
              console.log(result)
           }
           else if(operator == "+"){
              result = num1 + num2 
              console.log(result)
           }
           else if(operator == "-"){
              result = num1 - num2 
              console.log(result)
           }
           else if(operator == "%"){
              result = num1 % num2 
              console.log(result)
           }
           else{
               console.log('Error')
           }
  }
  calculate(info[0], info[1], info[2])



// // Table
// var numberToMultiply = process.argv.splice(2)
// numberToMultiply = parseInt(numberToMultiply)

// function multiply(num){
//     if(num){
//         for(i=1; i<=10; i++){
//             console.log(i, 'x', num,  '=', i*num )
//         }
//     }else{
//         console.log('error')
//     }
// }

// multiply(numberToMultiply)


// // Separate Table
// var {addition, multiply} = require('./table-utils.js')
// console.log(addition(4))

//Guess
var mysteryNum = Math.ceil(Math.random() * 100);
console.log(mysteryNum)
var prompt = require('prompt');
function play(num){
    console.log('Quel est le nombre mystère ? ')
    if(num > mysteryNum){
       console.log("C'est moins")
       userWrite();

    }else if(num < mysteryNum){
        console.log("C'est plus")
        userWrite();

    }else if(num == mysteryNum){
        console.log('Bravo ! Le nombre était ', mysteryNum)
    }else{
        console.log('error')
        userWrite();
    }
}

// function userWrite(){
//     prompt.start()
//     prompt.get('number' , function(err, result){
//         promptNumber = result.number;  
//         play(promptNumber)  
//     }); 
// }
// userWrite();

var prompt = require('prompt');

var tentative = 0;
var mysteryWord = "pizza"
var textWrote = "pilou"
var correctLetter = [];


function game(){
    console.log('La premiere lettre du mot caché est', mysteryWord[0])
    prompt.start();
    prompt.get('textWrote', function(err, result){
        textWrote = result.textWrote
    });
    for(var i = 0; i<mysteryWord.length; i++){

        console.log(mysteryWord[i])
        for(var j = 0; j<textWrote.length; j++){
            if(mysteryWord[i] === textWrote[j])
            correctLetter.push(textWrote[j])
        }
    }
    console.log(correctLetter)
}

game()