// // Countries

// const request = require('request');
// const { json } = require('stream/consumers');
// var countriesNames = []
// var apiGet = "https://restcountries.com/v3.1/all";

// request(apiGet, function(err, response, body){
//     var countries = JSON.parse(body)
//     for(i=0; i<countries.length; i++){
//         countriesNames.push(countries[i].name.common)
//     }
//     countriesNames.join('')
//     console.log(countriesNames)
// })

// // Chuck Norris

// const request = require('request');
// var apiGet = "https://api.chucknorris.io/jokes/random";
// function getFact(){
//     request(apiGet, function(err, response, body){
//         var joke = JSON.parse(body)
//         console.log(joke.value)
    
//     })
// }
// getFact()

// // Pokemon

const request = require('request');

function randomPokemon(number){
    var apiGet = "https://pokeapi.co/api/v2/pokemon/";

        request(apiGet, function(err, response, body){
            var pokemon = JSON.parse(body)
            console.log(pokemon.results[number].name)
        })

}
randomPokemon(5)

