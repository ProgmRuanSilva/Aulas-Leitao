//For in percorre os atributos de um determinado objeto 

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
// for in te dá os indices
for(let i in notas) {
    console.log(i, notas [i])
}  // lembrando que ele está mostrando o indice não da pra selecionar os atributos

const pessoa = {
    nome: "Ana",
    sobrenome: "Silva",
    idade: 29,
    peso:64
}

for(let atributo in pessoa) {
console.log(`${atributo} = ${pessoa[atributo]}`)
} //nesse caso é melohr para percorrer atributos

