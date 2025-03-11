function dobro(x) {
    alert("O dobro de " + x + " é " + (x * 2));

}

// dobro(5);
// dobro(7);
// dobro()

function dizerOla(nome = "Visitante") {
    alert("Ola, " + nome + "!");
}

// dizerOla("Artur");
// dizerOla();

function soma(a, b) {
    alert("A soma de " + a + " + " + b + " = " + (a + b));
}
// soma(6, 7);

function criarUsuario(nome, email, senha, tipo = 'admin') {
    const usuario = {
        nome,
        email,
        senha,
        tipo
    }
    console.log(usuario);
}


function muitosParametros(nome, telefone, endereco, aniversario, email, senha) {

}
function objetoComoParametro(usuario) {
    usuario.nome,
    usuario.email

}

muitosParametros('Artur', '123', 'Rua 1', '01/01/2000', 'email', 'senha');

const dadosDoUsuario = {
    nome: '',
    telefone: '',
    endereco: '',
    aniversario: '',
    email: '',
    senha: ''
}

objetoComoParametro(dadosDoUsuario);