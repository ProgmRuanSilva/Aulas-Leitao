//array em JS na verdade é um obj

console.log(typeof Array, typeof new Array, typeof [])
//ele começa com uma estrutura indexada
//não misture os dados (hemogenia)
let aprovados = new Array('bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])//primeiro elemento
//como ele é indexado vc tem que descrever qual dado vc quer
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia')//indicado para adicionar em array
console.log(aprovados.length)
aprovados[9] = 'Rafael'//funciona com os outros valores entre ele e o anterios atribuido com undefined
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados)
aprovados.sort()//ele vai ordernar o array
console.log(aprovados)
//em alguns casos ele não altera o array mas cria outro
delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2)
console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])
aprovados.splice(1, 1, 'Elemento1', 'Elemento2')//ele começa apartir do determinado
console.log(aprovados)
//ter um array constante não significa que os dados são imutaveis
