//String
var test = "My name is moi-même"
console.log(test);

//Concaténation
var name = "Yanisse"
console.log('Nice to meet you ' + name);

// String length
var testLength = "Im very very very long"
console.log(testLength.length)

// Replace
var food = "croissant is meh"
console.log(food.replace("meh", "so good"))

// Up & Down 
var basic = "This is Cool"
var basicUp = basic.toUpperCase()
var basicDown = basic.toLowerCase()
console.log(basic + " " + basicUp + " " + basicDown)

// Split
var word = "banana"
var letters = word.split('')
console.log(letters)

// Template
var age = 18
var template = `I'm ${age} years old`
console.log(template)