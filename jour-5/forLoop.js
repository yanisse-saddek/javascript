// Sommes des carrés
result = 0;
for(i=5; i <= 10; i++){
    result = result + i * i;
}
console.log(result)

// Comptons 
var result = 0
for(i=100; i<=1000; i++){
    if(i%7 === 0){
    result++
    }
}
console.log(result)

// Chanceux 
var result = 0
for(i=1; i<=20; i++){
    de= Math.ceil(Math.random() * 6)
    if(de>=5){
        result = result + de
    }
}
console.log(result)

// Des boites
premier tour 
	box 1 = 5	
	box 1 + box 2 = 10
	box 2 = 5 + 12 = 17;	

Second tour 
	box 1 = 17 
	box 1 + box 2 = 17 + 17 = 34
	box 2 = 17 + 13 = 30

    // Box 1 = 17
    // Box 2 = 30
    // i     = 14


// Des setiob
box1 = 12

(i = 12; i =/= 0;  i-3){
	afficher box1 = 12
	box1 = 12 + 12
}   

(i = 9; i =/= 0;  i-3){
	afficher box1 = 24
	box1 = 24 + 9  === 33
} 
(i = 6; i =/= 0;  i-3){
	afficher box1 = 33
	box1 = 33 + 6  === 39
} 
(i = 3; i =/= 0;  i-3){
	afficher box1 = 39
	box1 = 39 + 6  === 45
}  
 
    //Box1 = 42
    //i    = 0 

    
    
// Encore des boites
box 1 = 0;
box 2 = 3;

i = 0  /  i > -4  / i-1       
//        0 > -4  / 0 -1
    i % 2===0 
//  0 % 2===0
    affiche box1 + i 
//      0    +  0                                       affiche box1 = 0
    box2 + 1
//  3 + 1                            box2 = 4

i = -1 / i > -4  / i-1
//       -1 > -4 / -2
    affiche box2 + i 
//  4 + -1                                                affiche box 2 = 3
    box1 - 1
//  0-1                             box1 = -1


i = -2 / i >-4 / i-1
//      -2 > -4 / -3
    i % 2 === 0
    affiche box1 + i
//          -1 + -2                                     affiche box 1 = -3
    box2+ 1
//  3 + 1                           box 2 = 4

i = -3 / i >-4 / i-1
//       -3 > -4/ -4
    affiche box2 +i                                     
//          4 + -3                                      affiche box2 = 1


// Affiche box1 = -3
// Afficeh box2 = 1
// Affiche i = -4