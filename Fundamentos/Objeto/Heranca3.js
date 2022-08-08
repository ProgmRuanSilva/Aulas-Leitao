//ele mostrar aulgumas coisas novas
//do Object.create
const pai = { nome: 'Pedro',  corCabelo: 'preto'}
const filha1 = Object.create(pai)//aqui ele criou o Obj tendo como prototipo o obj pai
filha1.nome = 'Ana' //mudei a variavel
console.log(filha1.corCabelo) //note que eu mudo a let
console.log(filha1.nome) //mas o obj permaneçe inalteravel

const filha2 = Object.create(pai, {  //Nesse aqui vamos mudar um pouco acrecentando algumas lets
    nome: {value: 'Bia', writable: false, enumerable: false} //colocamos algumas variaveis junto com obj
})

console.log(filha2.nome)//imprimir o resultado 
filha2.nome = 'Carla'// note que tentamos mudar o nome mas como definimos, não pode.
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)//imprimindo resultado.

console.log(Object.keys(filha1))//note que aqui podemos ver tranquilamente. 
console.log(Object.keys(filha2))//aqui pq eu mudei não está nem listada.

for(let key in filha2) {
    filha2.hasOwnPropety(key)? //aqui estou falando que ela tem a propriedade de:
    console.log(key) : console.log(`Por herança ${key}`)
}
