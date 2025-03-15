
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

    switch (opcao) {}

    } while (opcao != 6);
