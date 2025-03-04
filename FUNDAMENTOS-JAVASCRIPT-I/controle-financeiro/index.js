
let value = parseFloat(prompt("Informe a quantidade inicial de dinheiro: "));
let encerrar = true

do {
    switch (prompt("Dinheiro disponivel: " + value + " R$" + " \n Escolha uma opção\n" +
        "1: Adicionar dinheiro\n" +
        "2: Remover dinheiro\n" +
        "3: Encerrar\n"
    )) {
        case "1":
            value += parseFloat(prompt("Informe a quantidade de dinheiro que deseja adicionar: "));
            break;
        case "2":
            value -= parseFloat(prompt("Informe a quantidade de dinheiro que deseja remover: "));
            break;
        case "3":
            alert("Encerrando o programa ...")
            encerrar = false


    }

} while (encerrar == true)


