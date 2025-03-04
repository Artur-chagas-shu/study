

let pacientes = [];
let condicao = true;



while (condicao === true) {
    let lista = '';

    for (let i = 0; i < pacientes.length; i++) {
         lista += " Paciente " + (i + 1 )+ " - " + pacientes[i] + '\n';
    }

    alert("Pacientes na fila de espera: " + lista);

    switch (prompt("Escolha uma opção\n" +
        "1: Adicionar paciente\n" +
        "2: Atender paciente\n" +
        "3: Encerrar\n"
    )) {
        case "1":
            pacientes.push(prompt("Informe o nome do paciente: "));
            break;
        case "2":
            let atendido = pacientes.shift();
            alert("O paciente " + atendido  + " foi atendido.");
            break;
        case "3":
            alert("Encerrando o programa ...");
            condicao = false;
            break;
        default:
            alert("Opção inválida");
    }
}