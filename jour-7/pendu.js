function game() {
  console.clear()
  var colors = require('colors')
  var allRandomWords = ['gateau', 'proute', 'oui', 'non', 'voiture', 'ordinateur', 'tablette', 'souris', 'lettre']
  var random = Math.floor(Math.random() * allRandomWords.length)
  var mysteryWord = allRandomWords[random];
  mysteryWordArray = mysteryWord.split('');
  letter = [];
  count = 10;
  hiddenWord = mysteryWordArray.map(function (letter){
    return letter;
  });

  for (i = 0; i < mysteryWord.length; i++) {
    hiddenWord[i] = "-";
  }
  function check(promptLetter) {

    letter.push(lettre);
    for (i = 0; i < mysteryWord.length; i++) {
      for (j = 0; j < letter.length; j++) {
        if (mysteryWord[i] === letter[j]) {
          hiddenWord[i] = letter[j];
        }
      }
    }
    console.clear()
    
    for (i = 0; i < lettre.length; i++) {
      if (!hiddenWord.includes(lettre[i])) {
        count--;
      }
    }

    if (hiddenWord.join("") === mysteryWord) {
      console.log("Bravo tu as réussi ! Le mot était:".green, mysteryWord);
      console.log(bravo)
    } else if (count === 0) {
      console.log("Tu as perdu ! Le mot était:".red, mysteryWord);
      console.log(perdu)
    }else if (count <= 5) {
      console.log("Il te reste", count.toString().red, "essais!");
      promptText();
    } else if (count <= 10) {
      console.log("Il te reste", count.toString().green, "essais!");
      promptText();
    }
  }

  function promptText() {
    var prompt = require("prompt");
    console.log("Le mot contient", hiddenWord.length, "caractères :", hiddenWord.join(''))
    prompt.start();
    prompt.get("Lettre", function (err, result) {
      lettre = result.Lettre;
      check(lettre);
    });
  }
  promptText();
}

game();

perdu = `                                                                                                                  
                                                                                                  
                                                                        ddddddd                  
                                                                        d:::::d                  
                                                                        d:::::d                  
                                                                        d:::::d                  
                                                                        d:::::d                   
ppppp   ppppppppp       eeeeeeeeeeee    rrrrr   rrrrrrrrr       ddddddddd:::::d uuuuuu    uuuuuu  
p::::ppp:::::::::p    ee::::::::::::ee  r::::rrr:::::::::r    dd::::::::::::::d u::::u    u::::u  
p:::::::::::::::::p  e::::::eeeee:::::eer:::::::::::::::::r  d::::::::::::::::d u::::u    u::::u  
pp::::::ppppp::::::pe::::::e     e:::::err::::::rrrrr::::::rd:::::::ddddd:::::d u::::u    u::::u  
p:::::p     p:::::pe:::::::eeeee::::::e r:::::r     r:::::rd::::::d    d:::::d u::::u    u::::u  
p:::::p     p:::::pe:::::::::::::::::e  r:::::r     rrrrrrrd:::::d     d:::::d u::::u    u::::u  
p:::::p     p:::::pe::::::eeeeeeeeeee   r:::::r            d:::::d     d:::::d u::::u    u::::u  
p:::::p    p::::::pe:::::::e            r:::::r            d:::::d     d:::::d u:::::uuuu:::::u  
p:::::ppppp:::::::pe::::::::e           r:::::r            d::::::ddddd::::::ddu:::::::::::::::uu
p::::::::::::::::p  e::::::::eeeeeeee   r:::::r             d:::::::::::::::::d u:::::::::::::::u
p::::::::::::::pp    ee:::::::::::::e   r:::::r              d:::::::::ddd::::d  uu::::::::uu:::u
p::::::pppppppp        eeeeeeeeeeeeee   rrrrrrr               ddddddddd   ddddd    uuuuuuuu  uuuu
p:::::p                                                                                          
p:::::p                                                                                          
p:::::::p                                                                                         
p:::::::p                                                                                         
p:::::::p                                                                                         
ppppppppp                                                                                         
                                                                                                                  
`;

bravo = `                                                                                             
 bbbbbbb                                                                                     
 b:::::b                                                                                     
 b:::::b                                                                                     
 b:::::b                                                                                     
 b:::::b                                                                                     
 b:::::bbbbbbbbb    rrrrr   rrrrrrrrr   aaaaaaaaaaaaavvvvvvv           vvvvvvv ooooooooooo   
 b::::::::::::::bb  r::::rrr:::::::::r  a::::::::::::av:::::v         v:::::voo:::::::::::oo 
 b::::::::::::::::b r:::::::::::::::::r aaaaaaaaa:::::av:::::v       v:::::vo:::::::::::::::o
 b:::::bbbbb:::::::brr::::::rrrrr::::::r         a::::a v:::::v     v:::::v o:::::ooooo:::::o
 b:::::b    b::::::b r:::::r     r:::::r  aaaaaaa:::::a  v:::::v   v:::::v  o::::o     o::::o
 b:::::b     b:::::b r:::::r     rrrrrrraa::::::::::::a   v:::::v v:::::v   o::::o     o::::o
 b:::::b     b:::::b r:::::r           a::::aaaa::::::a    v:::::v:::::v    o::::o     o::::o
 b:::::b     b:::::b r:::::r          a::::a    a:::::a     v:::::::::v     o::::o     o::::o
 b:::::bbbbbb::::::b r:::::r          a::::a    a:::::a      v:::::::v      o:::::ooooo:::::o
 b::::::::::::::::b  r:::::r          a:::::aaaa::::::a       v:::::v       o:::::::::::::::o
 b:::::::::::::::b   r:::::r           a::::::::::aa:::a       v:::v         oo:::::::::::oo 
 bbbbbbbbbbbbbbbb    rrrrrrr            aaaaaaaaaa  aaaa        vvv            ooooooooooo   
                                                                                             
                                                                                             
                                                                                             
                                                                                             
                                                                                             
                                                                                             
                                                                                             `