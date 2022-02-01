 function multiply(num){
     if(num){
         for(i=1; i<=10; i++){
             console.log(i, 'x', num,  '=', i*num )
         }
     }else{
         console.log('error')
     }
 }

 function addition(num){
    if(num){
        for(i=1; i<=10; i++){
            console.log(i, '+', num,  '=', i+num )
        }
    }else{
        console.log('error')
    }
}

module.exports = {
    addition,
    multiply,
};
