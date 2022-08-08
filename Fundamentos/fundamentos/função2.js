//aramzenando uma função dentro de uma variavel

const imprimirSoma = function (a, b) {
    console.log(a + b)   
}

imprimirSoma(2, 3)

//armazenado uma função arrow em uma variavel

const soma = (a, b) => { // a seta reduz o espaço da função
    return a + b
}

console.log(soma(2, 3))

//retorno implicito
const subtracao = (a , b) => a - b 
// está forma é ainda menor com a seta vc já coloca a função e retorno mas só pode usar em uma linha
console.log(subtracao(2, 3));

const imprimir2 = a => console.log(a)
imprimir2("Legal!!!")