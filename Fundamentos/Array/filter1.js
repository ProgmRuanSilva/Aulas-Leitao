//Filter como o nome diz tem um maior proposito de filtrar

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true },
    {nome: 'iPadPro', preco: 4199, fragil: true },
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    {nome: 'Copo de Plastico', preco: 18.99, fragil: false }
    ]
console.log(produtos.filter(function(p) {
    return false
}))

const caro = produto => produto.preco >= 500//temos que criar esses parametros com consts
const fragil = produto => produto.fragil//e depois exibilos dentro do campo do console

console.log(produtos.filter(caro).filter(fragil))