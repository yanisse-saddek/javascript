// Sum
var numbers = []
for(i = 0; i<= 50; i++){
    randNum = Math.ceil(Math.random() * 100)
    numbers.push(randNum)
}
console.log(numbers)
var total = 0
for(i = 0; i< numbers.length; i++){
    total = total + numbers[i]
}
console.log('Le total du tableau est ', total)

// Max
var numbers = []
for(i = 0; i<= 50; i++){
    randNum = Math.ceil(Math.random() * 200)
    if(randNum > 50 && randNum < 200){
        numbers.push(randNum)
    }
}
console.log(numbers)
bigNumber = 0
for(i = 0; i <= numbers.length; i++){
    if(numbers[i]>=bigNumber){
        bigNumber = numbers[i]
    }
}
console.log(bigNumber)

// Unique

var numbers = []
for(i = 0; i<= 50; i++){
    randNum = Math.ceil(Math.random() * 200)
    if(randNum > 50 && randNum < 200){
        numbers.push(randNum)
    }
}
i=0
while(i<=numbers.length){
    if(numbers[i] >= 75 && numbers[i] <= 100){
        i= numbers[i]
    }
    i++
}
console.log(i)

// Nested Loop
var words = ["hello", "goodbye", "yes", "no", "stop", "go go go"];
var letters = [];
var count = 0;
for(i=0; i< words.length; i++){
    split = words[i].split('')
    for(j = 0 ; j< split.length; j++){
        if(split[j] === 'o'){
            count++
        }
    }

}
console.log(count)
