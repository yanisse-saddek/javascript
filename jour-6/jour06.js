// Format
function format(textToDate){
    var date = new Date(textToDate)
    console.log(date)
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    console.log(day+'/'+ month+'/' +year)
}
format('2010-05-15')

// // Age
// function calculateAge(birthdate){
//     var todayDate = new Date();
//     todayYears = todayDate.getFullYear();
//     age = todayYears - birthdate;
//     console.log(age)
// }   
// const { match } = require('assert')
// //calculateAge("2000")

// // Validator 

 var prompt = require('prompt');
     prompt.start()
      prompt.get(['mail', 'username', 'password'] , function(err, result){
          promptMail = result.mail;  
          promptUsername = result.username;  
          promptPassword = result.password;  
         checkProfile(promptMail, promptUsername, promptPassword)
      }); 

 function checkProfile(username, password, mail){
     var usernameReg = /^@$/
     var passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
     var mailReg = /(.+)@(.+){2,}\.(.+){2,}/

     let testUsername = usernameReg.test(username)
     let testPassword = passwordReg.test(password)
     let testMail = mailReg.test(mail)
        if(testMail){
            console.log('mail correct')
        }else{
            console.log('mail faux')
        }
        if(testUsername){
            console.log('username correct')
        }else{
            console.log('username faux')
        }
        if(testPassword){
            console.log('password correct')
        }else{
            console.log('password faux')
        }
 }
