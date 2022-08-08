// this em JS varia: depende da função em que vc chama ele.
// this não varia dentro de um arrow.
// isso é chamado de texto lexico: depende da onde vc chama ele.

const pessoa = {
    saudacao: `Bom dia!`,
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
//o bind amarra o this a uma função

const falar2 = pessoa.falar
falar2() // a função não foi mudada o apenas o resultado do objeto