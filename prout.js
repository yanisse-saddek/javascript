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