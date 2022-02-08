const request = require('request');

// // Countries
const { json } = require('stream/consumers');
var countriesNames = []
var apiGet = "https://restcountries.com/v3.1/all";

request(apiGet, function(err, response, body){
    if(err){
        console.log(err)
        return;
    }
    var countries = JSON.parse(body)
    for(i=0; i<countries.length; i++){
        countriesNames.push(countries[i].name.common)
    }
    countriesNames.join('')
    // console.log(countriesNames)
})

// Chuck Norris

function getFact(){
    var apiGet = "https://api.chucknorris.io/jokes/random";
    request(apiGet, function(err, response, body){
        if(err){
            console.log(err)
            return;
        }

        var joke = JSON.parse(body)
        console.log(joke.value)
    
    })
}
// getFact()

// // Pokemon

function randomPokemon(number){
    var apiGet = "https://pokeapi.co/api/v2/pokemon/" + number;
        request(apiGet, function(err, response, body){
            if(err){
                console.log(err)
                return;
            }
            var pokemon = JSON.parse(body)
            console.log("Name:",pokemon.name)
            console.log('Id:', number)
        })

}
randomPokemon(25)

