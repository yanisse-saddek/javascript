// // File System
// var fs = require('fs')

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
var array = [1, "toto", 34, "javascript", 8]
var numbers = array.filter(function(data){
    if(!isNaN(data)){
        return data
    }
})
console.log(numbers)

// Filter Even
var numbers = [1, 2, 3, 4, 5, 6, 7, 8]
var even = numbers.filter(function(number){
    if(number % 2 === 0){
        return number
    }
})
console.log(even)

// // Cakes
var cakes = [
	{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
]

var chocolateCake = cakes.map(function(cake){
    if(cake.flavor === "chocolate"){
        cake.status = "sold out!"
    }
    return cake

})
console.log(chocolateCake)
