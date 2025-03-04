
const nome = prompt("Qual o seu nome?");
let visitedCities = "";
let numberOfCities = 0;

let visited =  visited = prompt ( nome +" voce ja visitou alguma cidade? (Sim/Não)");

while (visited == "sim") {
    let city = prompt("Qual a cidade que voce visitou?");
    visitedCities += " - " + city + "\n";
    numberOfCities++
    visited = prompt ( nome +" voce ja visitou alguma cidade? (Sim/Não)");
}

alert(
    "Ola, " + nome + "\n" +
    "Voce visitou " + numberOfCities + " cidades" + "\n" +
    visitedCities);