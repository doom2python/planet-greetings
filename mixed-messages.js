#!/bin/node
/*  
    Greetings on different planets
*/

const planets = {
    "mercury":{
        _greeting: "Welcome to first planet of the solar system. The average in dar tiem is around 500 degC",
        get greeting(){
            return this._greeting
        }
    },
    "venus":{
        _greeting: "Welcome to the 2nd rocky planet, its mostly co2 here",
        get greeting(){
            return this._greeting
        },
    },
    "earth":{
        _greeting: "Welcome to the Earth , 3rd and most beautiful planet ",
        get greeting(){
            return this._greeting
        }
    },
    "mars":{
        _greeting: "welcome to mars, its also called second Earth!",
        get greeting(){
            return this._greeting
        }
    },
    "jupiter":{
        _greeting: "Welcome to most heaviest planet of the solar system, its mostly gas here",
        get greeting(){
            return this._greeting
        }
    },
    "saturn":{
        _greeting: "Welcome to saturn, this planet has a icy ring around the planet, and its beautiful ",
        get greeting(){
            return this._greeting
        }

    },
    "uranus":{
        _greeting: "Welcome to uranus, Nothng much going here except frozen greenhouse gases lakes",
        get greeting(){
            return this._greeting

        }
    },
    "neptune":{
        _greeting: "Welcome to the most windiest planet of the solar system, take care of your hat! haha.",
        get greeting(){
            return this._greeting
        }
    },
    "pluto":{
        _greeting: "Welcome to the most distant planet of the solar system, We are so distant that the sun appears like a fire-fly in the sky here.",
        get greeting(){
            return this._greeting
        }
    }
}