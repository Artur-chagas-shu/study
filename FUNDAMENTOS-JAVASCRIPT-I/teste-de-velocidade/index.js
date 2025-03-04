
let firstVeicleName = prompt("Qual o nome do primeiro veiculo?");
let firstVeiclSpeed = parseFloat(prompt("Qual a velocidade do primeiro veiculo?"));

let secondVeicleName = prompt("Qual o nome do segundo veiculo?");
let secondVeiclSpeed = parseFloat(prompt("Qual a velocidade do segundo veiculo?"));



if (firstVeiclSpeed > secondVeiclSpeed) {
    alert(
        "O veiculo " +
        firstVeicleName + " e mais rapido que " + secondVeicleName
    )
}else if (firstVeiclSpeed < secondVeiclSpeed) {
    alert(
        "O veiculo " +
        secondVeicleName + " e mais rapido que " + firstVeicleName
    )
}else {
    alert(
        "Os veiculos " +
        firstVeicleName + " e " + secondVeicleName + " possuem a mesma velocidade"
    )
}


