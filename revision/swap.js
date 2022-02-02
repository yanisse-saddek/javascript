function swap(text){
    text = text.split('')
    for(i=0; i<text.length; i++){
        if(text[i] == text[i].toUpperCase()){
            text[i] = text[i].toLowerCase()
        }else if(text[i] == text[i].toLowerCase()){
            text[i] = text[i].toUpperCase();
        }
    }
    text = text.join('')
    console.log(text)
}
swap('Hello World')