function criarProduto(nome, preco) {
    return {
        nome, //essas variaveis vc pode declarar quando chamadas.
        preco, // vc tambem pode colocar funções dentro.
        desconto: 0.1 //vc pode deixar valores padrão dentro dela.
    }
}

console.log(criarProduto("Notebook", 2199.49))
console.log(criarProduto("Ipad", 1199.49))