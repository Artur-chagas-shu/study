
interface CelestialBody {
    name: string
    mass: number
}

interface Star extends CelestialBody {
    age: number
    planets: Planet[]
}

interface Planet extends CelestialBody {
    populations:number
    createSatellite: (name: string) => void
}

let sun : Star 

sun.name = "Sol"
sun.mass = 1.989 * ( 10 ** 30 )
sun.age = 4.603 * ( 10 ** 9 )
sun.planets = []

type Asteroid = CelestialBody & {
    size: number
}

class MilkyWayPlanet implements Planet {
    name: string
    mass: number
    populations: number;
    

    constructor (name: string, mass: number, populations: number, ){
        this.name = name
        this.mass = mass
        this.populations = populations

    }

    createSatellite: (name: string) => void 

}


interface Planet {
    satellites?: string []
}