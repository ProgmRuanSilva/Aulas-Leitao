//comentarios:

const alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 9.2}
]

//imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

//na maneira imperativa ele descreve descnecessariamente os detalhes 

//Declarativa
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)

//Na Declarativa ele só diz o que tem que ser feito, e isso faz com que o codigo seja melhor