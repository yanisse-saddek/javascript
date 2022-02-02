function countEach(text){
    text = text.split('')
    o = 0;
    x = 0;
    majCount = 0;

for(i=0; i<text.length; i++){
    if(text[i] == "o" || text[i] === "O"){
            o++
        }
    else if(text[i] === "x" || text[i] === "X"){
            x++
        }  
    else{
        console.log('Error')
    }
    for(i=0; i<text.length; i++){
        if(text[i] === text[i].toUpperCase()){
            majCount++
        }
    }
    return majCount
    }
    if(x === o){
        return true
    }else{
        return false
    }
}
console.log(countEach('xOxO'))