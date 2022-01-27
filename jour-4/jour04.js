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