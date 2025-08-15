type Planet = "Mercury" | "Venus" | "Earth" | "Mars" | "Jupiter" | "Saturn" | "Uranus" | "Neptune"

let planet : Planet

let homePlanet: Planet 

function checkPlanet(planet: Planet){
    if (planet == "Earth") {
        console.log("We live on ${planet}")
        
}
}

type GreetingCallback = (name:String) => void

function greet(callbackfn: GreetingCallback,) {
    let name = ''
    callbackfn(name)
}