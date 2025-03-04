
const baralho = []


do {
    switch (opcao = parseFloat(prompt("Cartas no baralho: " + baralho.length + "\n Escolha uma opção\n" +
        "1: Adicionar carta\n" +
        "2: Puxar uma cara\n" +
        "3: Encerrar\n")
    )) {
        case 1:
            const carta = prompt("Informe a carta que deseja adicionar: ");
            baralho.push(carta);
            break;
        case 2:
            if (baralho.length == 0) {
                alert("Baralho vazio");
                break
            } else {
                const cartaPuxada = baralho.pop();
                alert("Carta puxada: " + cartaPuxada);
                break;
            }
            case 3:
                alert("Encerrando o programa ...");
                break;
            default:
                alert("Opção inválida");

    }

} while (opcao != 3)