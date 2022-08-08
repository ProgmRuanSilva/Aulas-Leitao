// creio que a ideia seja copiar esse exemplo e fazer em uma função construtora.

/*
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}
*/

// bom vamos lá:

function criarPessoa(name) {
    return {
        name,
    }
}

console.log(`Meu Nome é: `, criarPessoa("João"))

// no caso eu não entendi direito. ele tinha falado pra editar aquele codigo

function Pessoa(nome) {
    this.nome = nome
    this.falar = function() {
        console.log(`Meu Nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()