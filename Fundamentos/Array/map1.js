//map tem a ideia de transformar o array em outro array com os dados transformados
//os elementos tem o mesmo tamanho

const nums = [1, 2, 3, 4, 5]
let resultado = nums.map(function(e) {
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10 //arrow function sempre tem return
const triplo = e => e * 3 
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro) //podemos mudar as posições
console.log(resultado)