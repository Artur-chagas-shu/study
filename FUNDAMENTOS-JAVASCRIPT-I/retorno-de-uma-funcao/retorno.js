function calcularMedia(a,b){
    const media = (a + b) / 2
    return media
}

const resultado = calcularMedia(10, 20)
console.log(resultado)

function criarProduto(nome, preco){
    const produto = {
        nome,
        preco
    }
    return produto;
}