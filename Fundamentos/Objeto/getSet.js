//formas de criar emcapsulamento
//é vc ter atributos privados que vc pode ler e modificar de uma forma mais controlada
//get é pra ler os arquivos 
//set é pra modificar

const sequencia = {
    _valor: 1, //convenção que essa é uma variavel que vc pretende usar os atributos dentro do obj
    get valor() {return this._valor++}, // get é uma função que coloca os valores dentro deles e set também
    set valor(valor) { // Nesse caso o set é usado pra modificar o valor quando quiser
        if(valor > this._valor) {
            this._valor = valor
        }
    } //JS não aceita sobrecarga de parametros dentro dele a não ser esse
}

console.log(sequencia.valor, sequencia.valor)// esse é o modo de chamar o get dentro da variavel
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 //ele não deixa por respeito ao if que diz depois do set que ele não pode ser menor
console.log(sequencia.valor, sequencia.valor)
