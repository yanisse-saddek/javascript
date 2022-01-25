//String
var test = 'My name is moi-même'
console.log(test);

//Concaténation
var name = 'Yanisse'
console.log('Nice to meet you ' + name);

// String length
var testLength = 'Im very very very long'
console.log(testLength.length)

// Replace
var food = 'croissant is meh'
console.log(food.replace('meh', 'so good'))

// Up & Down 
var basic = 'This is Cool'
var basicUp = basic.toUpperCase()
var basicDown = basic.toLowerCase()
console.log(basic + ' ' + basicUp + ' ' + basicDown)

// Split
var word = 'banana'
var letters = word.split('')
console.log(letters)

// Template
var age = 18
var template = `I'm ${age} years old`
console.log(template)

// Bonus
var changed = 'Bonjour'
changed = changed.replaceAll('o', 'a');
console.log(changed)

var blabla = "J'adore les chats"
blablaReplace = blabla.replace('chats', 'chiens')
console.log(blablaReplace);

var blablaLast = blabla.lastIndexOf(" ");
blablaLast = blabla.substring(0, blablaLast);
console.log(`${blablaLast} gato`);

var perso1 = {
    couleur:"rouge",
    prenom:"jean-proute",
}
var perso2 = ['vert', 'jean-jolin'];
    console.log(`La couleur préférée de ${perso1.prenom} est le ${perso1.couleur}`);
    console.log(`La couleur préféréer de ${perso2[1]} est le ${perso2[0]}`);    


