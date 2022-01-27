// Array
var fruits = ['mango', 'lemon', 'blueberry'];
console.log(fruits)

// Access
var ingredients = ['eggs','milk','butter'];
console.log(ingredients[2]);
console.log(ingredients.indexOf('butter'))

// Add & Remove
var objects = ['pen', 'book', 'lamp'];

objects.unshift('chair')
console.log(objects);
objects.pop();
console.log(objects)
objects.push('laptop');
console.log(objects)
objects.shift();
console.log(objects)

// Order
var numbers = [4, 10, 8, 12, 6]
numbers.reverse()   
console.log(numbers)
numbers.sort()
console.log(numbers)

// Boucle
var total = 0;
var limit = 10;

for(i = 0; i <= limit; i++){
    total += i;
    console.log(total)
}

// Reverse
var sentence = "Hello Konexio!";
var reversedSentence =""

for( var index = sentence.length - 1; index >= 0; index--){
    reversedSentence = reversedSentence + sentence[index]
}
console.log(reversedSentence)

// Bonus
var min = 0;
var max = 100;

for(i = min; i<=max; i++){
    if(i%7 === 0){continue;}
    if(i%15 === 0){
        console.log('FizzBuzz')
    }else if(i%5 === 0){
        console.log('Buzz')
    }else if(i%3 === 0){
        console.log('Fizz')
    }else{
        console.log(i)
    }
}

// Bonus 2
var total = 0;
var limit = 10;
var i = 0;

while(i < limit){
    i++;
    total += i;
}
console.log(total)

// Bonus 3
