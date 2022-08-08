//funções importantes
const pessoa = {
    nome: 'rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) //São chaves do endereço
console.log(Object.values(pessoa)) //os valores dentro o obj
console.log(Object.entries(pessoa)) //lista registros: ele te dá uma arrayy com todos os sub arrays de valores

Object.entries(pessoa).forEach(e => { //a partir disso eu consigo navegar pelos atributos do obj
    console.log(`${e[0]}: ${e[1]}`) //a partir disso pegar os atibutos (se quiser disconstruturing)
})

Object.entries(pessoa).forEach(([chave, valor]) => { //nesse caso estou tirando o elemento 1 e o elemento 2 e dando nomes a eles
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumaerable: true,
    writable: false,
    value: '01/01/2019'
}) // vc pode definir as caracteristicas de uma porpiedade ex: se ela pode ou não ser visivel

pessoa.dataNacimento = '01/01/2017'// nesse caso eu disse que ela pode ser vista mais não mudada.
console.log(pessoa.dataNacimento)
console.log(Object.keys(pessoa))

//Object.assign (ECMAScript 2015)
const dest = { a: 1} //lá em baixo quando junta o primeiro não muda
const o1 = { b: 2} // ele coloca o atributo dentro do primeiro
const o2 = { c: 3, a: 4} // nesse caso ele é sobre escrito
const obj = Object.assign(dest, o1, o2) //resulmindo ele soma tudo
//lembrando que o endreço não muda ele cria outro obj.

Object.freeze(obj)
obj.c = 1234 //ele não muda o valor pois eu usei o freeze
console.log(obj)