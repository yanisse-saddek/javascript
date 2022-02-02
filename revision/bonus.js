function makeItSpongeBob(text){
    text = text.split('')
    for(i=0; i<text.length; i++){
        if(i%2 === 0){
            text[i] = text[i].toUpperCase();
        }else if(i%2 !== 0){
            text[i] = text[i].toLowerCase(); 
        }
    }
    text = text.join('')
    console.log(text)
}
makeItSpongeBob('Javascript is easy')

