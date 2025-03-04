
const palavra = prompt("Informe uma palavra, para testar se ela é um palindromo: ");

let palavraInvertida = "";
for(let i = palavra.length - 1; i >= 0; i--) {

    palavraInvertida += palavra[i];
}

if (palavra == palavraInvertida) {

    alert("A palavra " + palavra + " é um palindromo" + " , Palavra invertida : " + palavraInvertida);
}else {

    alert("A palavra " + palavra + " não é um palindromo" + " , Palavra invertida : " + palavraInvertida);
}