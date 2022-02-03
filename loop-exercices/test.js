var dice = null;
var count = 0;
while(dice < 6){
    lancer = Math.ceil(Math.random() * 6)
    dice = lancer;
    count++
}
console.log(count)
