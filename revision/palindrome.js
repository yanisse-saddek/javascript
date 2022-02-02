function checkPal(text){
    text = text.split('')
    correct=0

    for(i=1; i<=text.length; i++){
        let lastElement = text[text.length - i];
        if(lastElement === text[i -1]){
            correct++
        }else{
            faux = false
        }
    }
    if(correct===text.length){
        console.log('palindrome')
    }else if(correct!== text.length){
        console.log('nope')
    }
}   

checkPal('kayak')