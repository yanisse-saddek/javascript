// var mysteryWord = "prout"
// mysteryWordArray = mysteryWord.split('')
// hiddenWord = mysteryWordArray.map(function(letter){
//     for(i=0; mysteryWordArray.length; i++){
//         if(mysteryWord[i] === "p"){
//             return mysteryWord[i]
//         }
//     }
// })




// console.log(hiddenWord)


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



let chocolateCake = cakes.filter(function(status){
    if(status.flavor === "chocolate"){
        let chocolateFlavour = []
        chocolateFlavour.push(status);
        return  chocolateFlavour
    }
})
console.log(chocolateCake);















