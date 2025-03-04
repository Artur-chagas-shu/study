let opcao = true;
do {
   
    switch (prompt("Escolha uma opção\n " +
        "1: Opção 1\n" +
        "2: Opção 2\n" +
        "3: Opção 3\n" +
        "4: Opção 4\n" +
        "5: Encerrar\n"


    )) {
        case "1": alert("Voce escolheu a opção 1");
         break;
        case "2": alert("Voce escolheu a opção 2");
         break;
        case "3": alert("Voce escolheu a opção 3");
         break;
        case "4": alert("Voce escolheu a opção 4");
         break;
        case "5": alert("Encerrando o programa ...") 
             opcao = false  ;
         break;
        default: alert("Opção inválida");
    }

}while(opcao == true);
