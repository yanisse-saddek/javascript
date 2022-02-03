// Format
function format(textToDate){
    var date = new Date(textToDate)
    console.log(date)
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    console.log(day+'/'+ month+'/' +year)
}
// format('2010-05-15')

// Age
function calculateAge(birthdate){
    var todayDate = new Date();
    todayYears = todayDate.getFullYear();
    age = todayYears - birthdate;
    console.log(age)
}   
//calculateAge("2000")

// Validator 

 var prompt = require('prompt');
// prompt.start()
//       prompt.get(['mail', 'username', 'password'] , function(err, result){
//           promptMail = result.mail;  
//           promptUsername = result.username;  
//           promptPassword = result.password;  
//          checkProfile(promptUsername, promptPassword, promptMail)
// }); 

 function checkProfile(username, password, mail){
     var usernameReg = /^[A-Za-z][A-Za-z0-9_]{7,29}$/
     var passwordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
     var mailReg = /(.+)@(.+){2,}\.(.+){2,}/

     let testUsername = usernameReg.test(username)
     let testPassword = passwordReg.test(password) // Une maj min / un chiffre / Un chiffre bizarre
     let testMail = mailReg.test(mail)

        if(testMail && testUsername && testPassword){
            console.log('All good!!!')
        }else{
            console.log('Error')
        }
 }

// Bonus
var moment = require('moment')

function formatMoment(textToDate){
    date = moment(textToDate)
    
    years = date.format('YYYY'); 
    month = date.month() +1; 
    day = date.date(); 
    console.log(day+'/'+month+'/'+years)
}
formatMoment('2010-05-15')

function calculateAgeMoment(birthYear){
    var todayYear = moment().format('YYYY');
    age = todayYear - birthYear
    console.log("Age :", age)
}
calculateAgeMoment(2000)