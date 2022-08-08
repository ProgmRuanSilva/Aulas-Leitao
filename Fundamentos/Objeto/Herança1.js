//ele disse que vai fazer um nó na cabeça
//o objetivo da herança pra poder reutilizar o codigo.
//entre herança e composição é preferivel composição. mas é impotante saber herança
//a herança é baseafa em prototipos.
//resumindo ele procura um dna do obj de referencia de ele não achar o atributo
//ele sempre procura uma referencia no dna dele, vc tem que fazer ele apontar pra um outro obj ex: carro 
//o atributo só pode estar em uma função

const ferrari = {
    modelo: 'f40',
    velMax:324
}

const volvo = {
    modelo: 'v40',
    velMax: 200
}

console.log(ferrari.__proto__) //ele procura em toda cadeia de prototipos. (DNA)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)// mas isso não se aplica a um função sua
console.log(Object.prototype.__proto__ === null)

function meuObjeto() {}
console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)
//obs: obj não tem prototype, pois, não é uma função.