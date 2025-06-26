class Vehicle {
    move(){
        console.log('O veiculo esta se movendo')
    }
}

class Car extends Vehicle {
    move(){
        console.log('O carro esta se movendo')
    }
}

class Ship extends Vehicle {
    move(){
        console.log('O navio esta navegando.')
    }
}

class Aircraft extends Vehicle {
    move(speed){
        console.log(
            `A aeronave esta voando. a ${speed}km/h`
        )
    }
}

const delorean = new Car ()
const blackPearl = new Ship()
const epoch = new Aircraft()

/*delorean.move()
blackPearl.move()
epoch.move(100)*/


function start (vehicle) {
    console.log('Iniciando um veiculo...')
    vehicle.move()
}

start(delorean)
start(blackPearl)
start(epoch)