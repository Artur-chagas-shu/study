
const bulding = []

do {
    let buildings = ""

    switch (opcao = parseFloat(prompt("Imóveis cadastrados: " + bulding.length + "\n" +
        "Escolha uma opção\n" + 1 + ": Adicionar imovel\n" + 2 + ": Listar imoveis\n" + 3 + ": Encerrar\n"))) {
        case 1: {
            const imovel = {}
            imovel.propietario = prompt("Informe o nome do proprietario: ");
            imovel.quartos = prompt("Informe a quantidade de quartos: ");
            imovel.banheiros = prompt("Informe a quantidade de banheiros: ");
            imovel.garagem = prompt("Possui garagem ? (Sim/Não): ");
            bulding.push(imovel);
            break;
        }
        case 2: {
            if (bulding.length == 0) {
                alert("Nenhum imovel cadastrado");
                break;
            } else {
                for (i = 0; i < bulding.length; i++) {
                    buildings += "Proprietario: " + bulding[i].propietario + "\n" +
                        "Quartos: " + bulding[i].quartos + "\n" +
                        "Banheiros: " + bulding[i].banheiros + "\n" +
                        "Garagem: " + bulding[i].garagem + "\n" +
                        "\n";
                }
                alert("Imóveis cadastrados: \n " + buildings);
                break;
            }
        }


        case 3: {
            alert("Encerrando o programa ...");
            break;
        }
        default: {
            alert("Opção inválida");
        }

    }
} while (opcao != 3)