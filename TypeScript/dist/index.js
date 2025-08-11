function sendSpaceship(name, captain) {
    var spaceship = {
        name: name,
        captain: captain,
        speed: 20,
        inMission: true,
        crew: []
    };
    alert("A nave ".concat(spaceship.name, " comandada pelo capita\u0303o ").concat(spaceship.captain, " foi enviada em uma missa\u0303o"));
    return spaceship;
}
function accelerate(targeteSpeed, spaceship) {
    if (spaceship.speed > targeteSpeed) {
        alert("Reduzindo a velocidade da nave ".concat(spaceship.name, " para ").concat(targeteSpeed, "Km/s"));
    }
    else if (spaceship.speed < targeteSpeed) {
        alert("Aumentando a velocidade da nave ".concat(spaceship.name, " para ").concat(targeteSpeed, "Km/s"));
    }
    else {
        alert("Mantendo a velocidade da nave ".concat(spaceship.name, " em ").concat(targeteSpeed, "Km/s"));
    }
}
var spaceshipName = prompt('Insira o nome da nave a ser enviada');
var spaceshipCaptain = prompt('Insira o nome do capitão da nave');
var currentShip = sendSpaceship(spaceshipName, spaceshipCaptain);
var speed = Number(prompt('Insira a velocidade desejada para a nave'));
accelerate(speed, currentShip);
