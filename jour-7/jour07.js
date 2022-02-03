// // File System
// var fs = require('fs')

const { setDefaultResultOrder } = require("dns");

// fs.readFile('jour07.txt', function(err, data){
//     if(err){
//         console.log(err)
//         return;
//     }
// console.log("Contenu du fichier : " + data.toString());
// })

// // Map Double
// var array = [1,2,3,4,5];
// var double = array.map(function(num){
//     return num*2
// })
// console.log(double)

// // Map Names
// var longNames = [
// 	{
// 		firstName: "Jane",
// 		lastName: "Doe"
// 	},
// 	{
// 		firstName: "John",
// 		lastName: "Smith"
// 	}
// ]
// var shortNames = longNames.map(function(person){
//     var name =
//         {
//             name: person.firstName +" " + person.lastName,
//         }

//     return (name)
// })
// console.log(shortNames)

// Filter Numbers
var array = [1, "toto", 34, "javascript", 8];
var numbers = array.filter(function (data) {
  if (!isNaN(data)) {
    return data;
  }
});
console.log(numbers);

// Filter Even
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var even = numbers.filter(function (number) {
  if (number % 2 === 0) {
    return number;
  }
});
console.log(even);

// // Cakes
var cakes = [
  {
    name: "cake",
    flavor: "vanilla",
    status: "available",
  },
  {
    name: "brownie",
    flavor: "chocolate",
    status: "available",
  },
  {
    name: "pie",
    flavor: "strawberry",
    status: "available",
  },
  {
    name: "muffin",
    flavor: "pistachio",
    status: "available",
  },
  {
    name: "donut",
    flavor: "chocolate",
    status: "available",
  },
];
let chocolateCake = cakes.filter(function (status) {
  if (status.flavor === "chocolate") {
    status.status = "sold out!";
    let chocolateFlavour = [];
    chocolateFlavour.push(status);
    return chocolateFlavour;
  }
});
console.log(chocolateCake);

// Pendu
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
