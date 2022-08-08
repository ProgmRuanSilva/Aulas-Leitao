// são duas formas diferentes de executar uma função.

function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}` 
}
// a diferença entre call e apply é que vc declara os parametros

const produto = {
    nome:'Notebook',
    preco:4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

//vamos agora trabalhar com call
const carro = {preco: 49990, desc: 0.20 }
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$'))
// em call sempre se coloca os parametros dentro da chamada
console.log(getPreco.apply(carro, [0.17, '$']))
// em apply é chamada dentro de um array
// não é bom que se use stings de numeros em comparações
