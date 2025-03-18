
function areaDoTriangulo(base, altura) {
    return base * altura / 2
}

function areaDoRetagun(base, altura) {
    return base * altura
}
function areaDoQuadrado(lado) {
    return lado * lado
}
function areaDoTrapezio(baseMaior, baseMenor, altura) {
    return (baseMaior + baseMenor) * altura / 2
}

function areaDoCirculo(raio) {
    return 3.14 * raio * raio
}


do {
    let opcao = parseFloat(prompt("Escolha uma opção\n" +
        "1: Triângulo\n" +
        "2: Retângulo\n" +
        "3: Quadrado\n" +
        "4: Trapezio\n" +
        "5: Circulo\n" +
        "6: Encerrar\n"))

    switch (opcao) {
        case 1: {
            const base = parseFloat(prompt("Informe a base do triângulo: "));
            const altura = parseFloat(prompt("Informe a altura do triângulo: "));
            alert("A area do triângulo é: " + areaDoTriangulo(base, altura));
            break;
        }
        case 2: {
            const base = parseFloat(prompt("Informe a base do retângulo: "));
            const altura = parseFloat(prompt("Informe a altura do retângulo: "));
            alert("A area do retângulo é: " + areaDoRetagun(base, altura));
            break;
        }
        case 3: {
            const lado = parseFloat(prompt("Informe o lado do quadrado: "));
            alert("A area do quadrado é: " + areaDoQuadrado(lado));
            break;
        }
        case 4: {
            const baseMaior = parseFloat(prompt("Informe a base maior do trapezio: "));
            const baseMenor = parseFloat(prompt("Informe a base menor do trapezio: "));
            const altura = parseFloat(prompt("Informe a altura do trapezio: "));
            alert("A area do trapezio é: " + areaDoTrapezio(baseMaior, baseMenor, altura));
            break;
        }
        case 5: {
            const raio = parseFloat(prompt("Informe o raio do circulo: "));
            alert("A area do circulo é: " + areaDoCirculo(raio));
            break;
        }
        case 6: {
            alert("Encerrando o programa ...");
            
        }
    }

    } while (opcao != 6);
