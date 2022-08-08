// Função factory é uma função que retorna um objeto

const prod1 = {
    come: "...",
    preco: 45
}

const prod2 = {
    come: "...",
    preco: 1234
}

//Factory Simples

function criarPessoa() {
    return {
        nome: "Ana",
        sobrenome: "Silva"
    }
}

console.log(criarPessoa())
// Criamos um Objeto edentro de uma função então sempre em que eu chamar ele vai criar sempre