
function areaDoTriangulo() {
    const base = parseFloat(prompt("Informe a base do triângulo: "));
    const altura = parseFloat(prompt("Informe a altura do triângulo: "));
    return (base * altura) / 2
}


function areaDoRetagun() {
    const base = parseFloat(prompt("Informe a base do retângulo: "));
    const altura = parseFloat(prompt("Informe a altura do retângulo: "));
    return base * altura
}
function areaDoQuadrado() {
    const lado = parseFloat(prompt("Informe o lado do quadrado: "));
    return lado * lado
}
function areaDoTrapezio() {
    const baseMaior = parseFloat(prompt("Informe a base maior do trapezio: "));
    const baseMenor = parseFloat(prompt("Informe a base menor do trapezio: "));
    const altura = parseFloat(prompt("Informe a altura do trapezio: "));
    return (baseMaior + baseMenor) * altura / 2
}


function areaDoCirculo() {

    const raio = parseFloat(prompt("Informe o raio do circulo: "));
    return 3.14 * raio * raio
}

function exibirMenu() {
    return parseFloat(prompt("Calculadora Geométrica\n" +
        "1:Calcular área do Triângulo\n" +
        "2:Calcular área do Retângulo\n" +
        "3:Calcular área do Quadrado\n" +
        "4:Calcular área do Trapezio\n" +
        "5:Calcular área do Circulo\n" +
        "6: Encerrar\n"))

}

function executar() {
    let opcao = ''

    do {
        opcao = exibirMenu();
        let resultado
        switch (opcao) {
            case 1: {
                resultado = areaDoTriangulo();
                alert("A area do triângulo é: " + resultado);
                break;
            }
            case 2: {
                resultado = areaDoRetagun();
                alert("A area do retângulo é: " + resultado);
                break;
            }
            case 3: {
                resultado = areaDoQuadrado();
                alert("A area do quadrado é: " + resultado);
                break;
            }
            case 4: {
                resultado = areaDoTrapezio();
                alert("A area do trapezio é: " + resultado);
                break;
            }
            case 5: {
                resultado = areaDoCirculo();
                alert("A area do circulo é: " + resultado);
                break;
            }
            case 6: {
                alert("Encerrando o programa ...");

            }
        }

    } while (opcao != 6)
}


executar();