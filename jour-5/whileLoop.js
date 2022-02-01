// Comptons 
var num = 50;
while(num <= 200){
    if(num % 2 === 0){
console.log(num)
    }
    num++
}

// Try again
var dice = null;
var count = 0;
while(dice < 6){
    lancer = Math.ceil(Math.random() * 6)
    dice = dice + lancer;
    count++
}
console.log(count)

// Course
var usainBolt = 0;
var tysonGay = 0;
while(usainBolt < 100 || tysonGay < 100){
        randNum = Math.ceil(Math.random() * 10)
        usainBolt += randNum;
        randNum2 = Math.ceil(Math.random() * 10)
        tysonGay +=  randNum2;   
}
if(usainBolt > tysonGay && usainBolt >= 100){
    console.log('usain prout a gagner')
}else if(tysonGay > usainBolt && tysonGay >= 100){
    console.log('tyson prout a gagné')}

// Des boites    

var box1 = 12;
var box2 = 5;
premier tour :
    tant que box1 > 0
    //        12 > 0
        affiche box2
    //           5 
        retire 10 a box1
    //          box1 = 2
        affiche box1
    //          box1 = 2

Second tour : 
    tant que box1 > 0
//              2>0
    afifche box2 
//          5;
    affiche 10 a box1
//          box1 = 2 - 10 : -8


// Encore des boites !!!
var i = 0;
var box1 = 7;
tant que i > 0{
//        0 > 0
    i++
//  0+1
    affiche box1 + i
//          7+0
}
// Affiche i = 0
// Affiche box1 = 7