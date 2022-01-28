// Object
var cat = {
    name:"Garfield",
    age:3,
    isCute:true,
}
console.log(cat)
console.log(cat.age)
if(cat.isCute === true){
    console.log('So cute!!!!!!!')
}

// Combine
var cat = {
    name:"Minoushka",
    age:5,
    isCute:false,
    color:['white', 'black']
}
var cat2 = {
    name:"Garfield",
    age:3,
    isCute:true,
    color:['orange', 'black']
}
var cats = [cat, cat2];
console.log(cats[0].age)
console.log(cat.age)
console.log(cats[1].isCute)
console.log(cat.isCute)

// Even 
function checkIfEven(num){
    if(num % 2 ){
        console.log('Odd')
    }else{
        console.log('Even')
    }
}
checkIfEven(7.6)

// Compare
function compare(num1, num2){
    if(num1 > num2){
        console.log(num1, " is bigger than ", num2)
    }else if(num1 === num2){
        console.log('Both are the same')
    }
    else{
        console.log(num2, " is bigger than ", num1)
    }
}
compare(090, 10)

// Add Up
function addUp(num){
    newNum = 0;
    for(i = num; i > 0; i--){
        newNum = newNum + i;
    }
    console.log(newNum)
}
addUp(12)

// Time
function format(numSecond){
    var heures = Math.floor(numSecond/3600)
    var minutes = Math.floor((numSecond - (heures * 3600)) /60);
    var secondes = numSecond - (heures * 3600) - (minutes * 60);
    console.log('Hours : ', heures, ' Minutes : ', minutes, ' Seconds ', secondes)
}
format(3700)

// Bonus
function generatePassword(num){
    if(num.length > 15 || num.length<6){
        console.log('error')
    }
    randArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    var password = [];
    
    for(i = 0; i <= num.length; i++){
    randNumber = Math.round(Math.random() * randArray.length -1 )
     password.push(randArray[randNumber])
    }
    console.log(password.join(''))
}
generatePassword('pipiproutent')

//Bonus 2
function launchDice(numberOfDice){
    allDiceValue = 0;
    for(i=1; i<= numberOfDice; i++){
        deValue = Math.ceil(Math.random() * 6);
        allDiceValue += deValue;
    }
    console.log(allDiceValue);
    return allDiceValue;
}
var player1 = launchDice(5)
var player2 = launchDice(5)
       
if(player1 > player2){
    console.log('Le joueur 1 a gagné')
}else if(player2 > player1){
    console.log('Le joueur 2 a gagné')
}else{
    console.log('equal')
}