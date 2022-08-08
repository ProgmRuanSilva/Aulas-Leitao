// Vamos ver um exemplo de função sem call back o objetivo é fazer com que todos os numeros abaixo de 7 saiam
const notas = [7.7, 6.5, 5.3, 8.9, 3.6, 7.1, 9.0]

let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7 ) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//Com callBack sem arrow
//.filter() cria um outro array em que só entrará que for true
notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2)
//essa é a forma com arrow
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)