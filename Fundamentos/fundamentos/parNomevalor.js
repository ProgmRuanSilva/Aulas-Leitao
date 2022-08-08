// par nome/valor

const saudacao = "Opa" // contexto léxico 1
//contexto Léxico: é o local no qual a sua variavel foi definda fisicamente no seu codigo

function exec() {
    const saudacao = "Falaa" // contexto léxico 2: nesse contexto ele busca em ecopos maiores que ele pra retornar o valor
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: "Pedro",
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: "Rua Milton Leite",
        numero: 123
    }
}

//vc pode ter a mesma chave em cotexto diferentes

console.log(saudacao)
console.log(exec())
console.log(cliente)
