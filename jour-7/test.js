// var cakes = [
// 	{
// 		name: "cake",
// 		flavor: "vanilla",
// 		status: "available"
// 	},
// 	{
// 		name: "brownie",
// 		flavor: "chocolate",
// 		status: "available"
// 	},
// 	{
// 		name: "pie",
// 		flavor: "strawberry",
// 		status: "available"
// 	},
// 	{
// 		name: "muffin",
// 		flavor: "pistachio",
// 		status: "available"
// 	},
// 	{
// 		name: "donut",
// 		flavor: "chocolate",
// 		status: "available"
// 	},
// ]
// var chocolateCakes = cakes.filter((cake) => cake.flavor === "chocolate").map((cake) =>{
//     cake.status = "sold out!"
//     return cake
// })

// console.log(chocolateCakes)
var mysteryWord = "ok"
mysteryWordArray = mysteryWord.split('')
letter = [];
hiddenWord = mysteryWordArray.map(function(letter){
    return letter;
})

for(i=0; i<mysteryWord.length; i++){
    hiddenWord[i] =  '-'
}

function game(promptLetter){
    letter.push(lettre)

    for(i=0; i<mysteryWord.length; i++){
        for(j=0; j<letter.length;j++){
            if(mysteryWord[i] === letter[j]){
                hiddenWord[i] =  letter[j]
        }
        }
    }
    if(hiddenWord.join('') === mysteryWord){
        console.log()
    }else{
        console.log(hiddenWord.join(''))
        promptText()
    }
    
}  


function promptText(){
    var prompt = require('prompt');
    prompt.start()
          prompt.get('lettre', function(err, result){
            lettre = result.lettre;
            game(lettre)
            
    }); 
}
promptText()


