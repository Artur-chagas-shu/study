const vagas = []
function listarVagas(vagas) {
    vagas.forEach(vaga => {
        let indice = parseInt(vagas.indexOf(vaga))
        alert('Número da vaga:' + " - " + (indice + 1) + "\n Titulo:  - " + vaga.titulo + "\n Descrição: - " + vaga.descricao + "\n  Data Limite: - " + vaga.dataLimite + "\n Numero de candidatos - " + vaga.candidatos.length)
    })
}


function criarVaga() {
    let vaga = {
        titulo: prompt("Informe o titulo da vaga: "),
        descricao: prompt("Informe a descricao da vaga: "),
        dataLimite: prompt("Informe a data limite da vaga: "),
        candidatos: []
    }
    let continuar = prompt("Deseja criar a vaga ? \n 1: Sim \n 2: Não " + "\n Titulo:  - " + vaga.titulo + "\n Descricao: - " + vaga.descricao + "\n  Data Limite: - " + vaga.dataLimite + "\n Numero de candidatos - " + vaga.candidatos.length)

    if (continuar == 1) {
        alert("Vaga criada com sucesso")
        vagas.push(vaga)
    } else if (continuar == 2) {
        continuar = prompt("Deseja continuar Criando uma vaga ? \n 1: Sim \n 2: Nao")
        if (continuar == 1) {
            criarVaga()
        } else {
            alert("Encerrando o programa...")
        }
    }
}









function visualizarUmaVaga(indice = parseInt(prompt("Informe o indice da vaga: "))) {


    let nomes = []
    vagas[indice - 1].candidatos.forEach(candidato => {
        nomes.push(candidato.nome + " ")
    })

    alert('Número da vaga:' + " - " + indice + "\n Titulo:  - " + vagas[indice - 1].titulo + "\n Descrição: - " + vagas[indice - 1].descricao + "\n  Data Limite: - " + vagas[indice - 1].dataLimite + "\n Numero de candidatos - " + vagas[indice - 1].candidatos.length + "\n Candidatos: " + nomes

    )


}

function escreverCandidatoNaVaga(vagas) {
    const candidato = {
        nome: prompt("Informe o nome do candidato: "),
    }
    const indice = parseInt(prompt("Informe o indice da vaga: "))
    let nomes = []
    vagas[indice - 1].candidatos.forEach(candidato => {
        nomes.push(candidato.nome + " ")
    })

    alert('Número da vaga:' + " - " + indice + "\n Titulo:  - " + vagas[indice - 1].titulo + "\n Descrição: - " + vagas[indice - 1].descricao + "\n  Data Limite: - " + vagas[indice - 1].dataLimite + "\n Numero de candidatos - " + vagas[indice - 1].candidatos.length + "\n Candidatos: " + nomes

    )

    const continuar = prompt(' Deseja escrever um novo candidato na vaga ?' + '\n 1: Sim \n 2: Nao')
    if (continuar == 1) {
        vagas[indice - 1].candidatos.push(candidato);
    } else {
        alert("Encerrando o programa...")
    }

}


function excluirVaga() {
    indice = prompt("Informe o indice da vaga: ")
    let nomes = []
    vagas[indice - 1].candidatos.forEach(candidato => {
        nomes.push(candidato.nome + " ")
    })

    alert('Número da vaga:' + " - " + indice + "\n Titulo:  - " + vagas[indice - 1].titulo + "\n Descrição: - " + vagas[indice - 1].descricao + "\n  Data Limite: - " + vagas[indice - 1].dataLimite + "\n Numero de candidatos - " + vagas[indice - 1].candidatos.length + "\n Candidatos: " + nomes

    )

    const continuar = prompt(' Deseja excluir a vaga ?' + '\n 1: Sim \n 2: Nao')
    if (continuar == 1) {
        vagas.splice(indice - 1, 1)
        alert("Vaga excluida com sucesso !")
    } else {
        alert("Encerrando o programa...")
    }

}
function menu() {

    let opcao = true


    do {

        switch (prompt("Escolha uma opção: \n " +
            "1: Listar vagas disponiveis.\n" +
            "2: Criar uma nova vaga.\n" +
            "3: Visualizar uma vaga.\n" +
            "4: Inscrever candidato em uma vaga\n" +
            "5: Excluir uma vaga.\n" +
            "6: Encerrar.\n"
        )) {
            case "1": alert("Listando vagas ...");
                listarVagas(vagas);
                break;
            case "2": alert("Forneça as informações da vaga");
                criarVaga();
                break;
            case "3": alert("Visualizando uma vaga");
                visualizarUmaVaga();
                break;
            case "4": alert("Inscreva um candidato na vaga");
                escreverCandidatoNaVaga(vagas);
                break;
            case "5": alert("Excluir Vaga.");
                excluirVaga();
                break;
            case "6": alert("Encerrando o programa ...")
                opcao = false;
                break;
            default: alert("Opção inválida");
        }



    } while (opcao != false)

}

menu()



