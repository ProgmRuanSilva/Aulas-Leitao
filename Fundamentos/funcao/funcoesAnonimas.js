//quando se trabalha com funçoes normais vc pode nomear as funcões

const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) {
    return x - y
})
// passamos uma função anonima para uma função

imprimirResultado(3, 4, (x, y) => x * y)
//quando a função é arrow smepre será anonima

const pessoa = {
    falar: function () {
        console.log(`Olá`)
    }
} // esse é um caso em que se cria uma função dentro de uma variavel e obj