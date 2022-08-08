class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu Nome é ${nome}`) //nesse caso ele tem asseco ao  nome já que é factory 
    }
}
 
const p2 = criarPessoa('João')
p2.falar()