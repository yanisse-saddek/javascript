//Number
var integer = 102;
var float = 13.9;
console.log("Integer = " + integer + "\nFloat = " + float )

//Convert
var basic = 34;
var stringified = basic.toString();
console.log(stringified)

//Round
var num = 1.5;
var rounded = Math.round(num)
console.log(rounded)

//Arithmétique
var test = 12; 
var bis = 5;
console.log(test + bis);
console.log(test - bis);
console.log(test / bis);
console.log(test * bis);
console.log(test ** bis)
console.log(test === bis)

//Comparaison
var test = 143; 
var bis = 219;
console.log(test > bis);
console.log(test < bis);
console.log(test !== bis)
console.log(test <= bis)
console.log(test >= bis)

//Condition 
var limit = 50;
var score = 64;
    if(score >= limit){
        console.log('Ok good !!!')
    }else{
        console.log('Nooooooooooo')
    }
score = 30;
score >= limit ? console.log('Good') : console.log('pas good')

//Condition II
var password = "azerty";
if(password.length > 5){
    console.log('The password is secure')
}

//Condition III
password = "azerty";
score = 50;
limit = 30;

if(password.length > 5 && score>=limit){
    console.log('Everything is good')
}
else if(password.length > 5 || score>=limit ){
    console.log('Something is good')
}
else{
    console.log('Nothing is good')
}

//Bonus
var min = 1
var max = 6 
var random = Math.round(Math.random() * (max - min) + min)
if(random === 6){
    console.log('youpi i winned')
}else{
    console.log('so close')
}

//Bonus 2
var month = "January"
switch (month){
    case "January":
        console.log('Winter');
        break;
    case "February":
        console.log('Winter');
        break;
    case "March":
        console.log('Spring');
        break;
    case "April":
        console.log('Spring');
        break;
    case "May":
        console.log('Spring');
        break;
    case "June":
        console.log('Summer');
        break;
    case "July":
        console.log('Summer');
        break;
    case "August":
        console.log('Summer');
        break;
    case "September":
        console.log('Autumn');
        break;
    case "October":
        console.log('Autumn');
        break;
    case "November":
        console.log('Autumn');
        break;
    case "December":
        console.log('Winter');
        break;
    }

//Bonus 3    
var roundedNumber = 12.2;
roundedNumber = roundedNumber.toString();
roundedNumberSplit = (roundedNumber.split('.'))

if(roundedNumberSplit[1] >= 5){
    console.log(Math.ceil(roundedNumber));
}else{
    console.log(Math.floor(roundedNumber))
}

