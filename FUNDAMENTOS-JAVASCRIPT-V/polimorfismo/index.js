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
