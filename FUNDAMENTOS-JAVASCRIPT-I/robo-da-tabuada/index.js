
const number = parseFloat(prompt("Informe um numero: "));
let resultadoString = "";
for (let i = 1; i <= 20; i++) {
    let result = number * i
    resultadoString += number + " x " + i + " = " + result + "\n"
}

alert(resultadoString)