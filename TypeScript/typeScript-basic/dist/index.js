const spaceships = [];
function createSpaceship(name, pilot, crewLimit) {
    const spaceShip = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false
    };
    spaceships.push(spaceShip);
    alert(`A nave ${spaceShip.name} foi criada`);
}
function findSpaceship(name) {
    let spaceship;
    spaceship = spaceships.find(ship => ship.name === name);
    return spaceship;
}
function addCrewMember(member, spaceShip) {
    if (spaceShip.crew.length >= spaceShip.crewLimit) {
        alert(`${member} nao pode ser adicionado, limite de tripulantes atingido`);
    }
    else {
        spaceShip.crew.push(member);
        alert(`${member} foi adicionado a tripulação da nave ${spaceShip.name}`);
    }
}
function sendInMission(spaceShip) {
    if (!spaceShip.inMission && spaceShip.crew.length === spaceShip.crewLimit / 3) {
        spaceShip.inMission = true;
        alert(`Enviando a nave ${spaceShip.name} para a missão`);
    }
    else if (spaceShip.crew.length < Math.floor(spaceShip.crewLimit / 3)) {
        alert(`A nave ${spaceShip.name} nao pode ser enviada para a missão, nao possui tripulantes suficientes`);
    }
    else if (spaceShip.inMission) {
        alert(`${spaceShip.name} já está  em missão`);
    }
}
function listSpaceShips() {
    const message = spaceships.reduce((text, ship) => {
        const tripulantes = ship.crew.join(', ');
        const status = ship.inMission ? 'Em missão' : 'Disponível';
        return text + `
    Nave: ${ship.name}
    Piloto: ${ship.pilot}
    Tripulantes: ${tripulantes}
    limite de tripulantes: ${ship.crewLimit}
    Status: ${status}
    `;
    }, '');
    alert(message);
}
function firstMenuOptions() {
    const name = prompt('Qual o nome da nave a set registrada?');
    const pilot = prompt(`Qual o nome do pilota da nave ${name}?`);
    const crewLimit = Number(prompt(`Qual o limite de tripulantes da nave ${name}?`));
    const confirmation = confirm(`Confirma a criação da nave ${name}\npiloto: ${pilot}\nlimite de tripulantes ${crewLimit}?`);
    if (confirmation) {
        createSpaceship(name, pilot, crewLimit);
    }
}
function secondMenuOption() {
    const member = prompt('Qual é o nome do tripulante?');
    const spaceshipName = prompt(`Para qual nave ${member} deverá ser designado?`);
    const spaceship = findSpaceship(spaceshipName);
    if (spaceship) {
        const confirmation = confirm(`Confirma a inclusão de ${member} na tripulação da ${spaceship.name}?`);
        if (confirmation) {
            addCrewMember(member, spaceship);
        }
    }
}
function thirdMenuOption() {
    const spaceshipName = prompt('Qual é o nome da nave a ser enviada?');
    const spaceship = findSpaceship(spaceshipName);
    if (spaceship) {
        const confirmation = confirm(`Confirma e envio da ${spaceship.name} na missão?`);
        if (confirmation) {
            sendInMission(spaceship);
        }
    }
}
function fourthMenuOption() {
    listSpaceShips();
}
let userOption = 0;
while (userOption !== 5) {
    const menu = `Painel Principal
    1 - Registrar uma nova nave
    2 - Adicionar membro da tripulação
    3 - Enviar nave em missão
    4 - Listar naves registradas
    5 - Encerrar
  `;
    userOption = Number.parseInt(prompt(menu));
    switch (userOption) {
        case 1:
            firstMenuOptions();
            break;
        case 2:
            secondMenuOption();
            break;
        case 3:
            thirdMenuOption();
            break;
        case 4:
            fourthMenuOption();
            break;
        case 5:
            alert('Encerrando o sistema...');
            break;
        default:
            alert('Opção inválida! Retornando ao painel principal...');
            break;
    }
}
