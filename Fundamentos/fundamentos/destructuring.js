const pessoa = {
    nome: "Ana",
    idade: 5,
    endereco: {
        logradouro: "Rua ABC",
        numero: 1000
    }
}

const {nome , idade} = pessoa // quando o par de chaves é definido na const ele assume o opreador destructuring
console.log(nome, idade)//sumiu bixo

const { nome: n, idade: i} = pessoa // ele tambem pode mudar o nome da variavel atravez de: (variavel: novo nome)
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada);

const { endereco: {logradouro, numero, cep}} = pessoa // cuidado com o  caminho em que vc seta a descontrução 
console.log(logradouro, numero, cep)