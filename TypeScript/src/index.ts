function sendSpaceship (name:string, captain:string){
    const spaceship = {
        name,
        captain,
        speed: 20,
        inMission: true,
        crew: []
    }
    alert(`A nave ${spaceship.name} comandada pelo capitão ${spaceship.captain} foi enviada em uma missão`)

    return spaceship
}

function accelerate (targeteSpeed:number, spaceship:{name:string, speed:number} ){
    if(spaceship.speed > targeteSpeed){
        alert(`Reduzindo a velocidade da nave ${spaceship.name} para ${targeteSpeed}Km/s`)
    }else if(spaceship.speed < targeteSpeed){
        alert(`Aumentando a velocidade da nave ${spaceship.name} para ${targeteSpeed}Km/s`)
    }else {
        alert(`Mantendo a velocidade da nave ${spaceship.name} em ${targeteSpeed}Km/s`)
    
    }
}

const spaceshipName = prompt('Insira o nome da nave a ser enviada')
const spaceshipCaptain = prompt('Insira o nome do capitão da nave')

const currentShip = sendSpaceship(spaceshipName, spaceshipCaptain)

const speed = Number(prompt('Insira a velocidade desejada para a nave'))

accelerate(speed, currentShip)


