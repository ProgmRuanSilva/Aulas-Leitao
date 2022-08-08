//nesses caso estamos atribuindo o que definimos em outro modulo 
//ou seja estamos colocando a variavel que definimos em outro local para essa const aqui
//essa é a forma de requerer o módulo
const moduloA = require('./moduloA') //se vc quiser buscar em outra pasta é só adcionar os pontos antes da barra
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.atelogo)
console.log(moduloA)

console.log(moduloB.boaNoite())
console.log(moduloB.bomDia)
console.log(moduloB)
//IIIIINNCRRIIIIIIVEEEEEELLLLL

//a gente baixou o lodash atraves do terminal do vs