const url = 'https://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
//axios faz requisicões em http

const chineses  = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const salario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)

    const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(salario)

    console.log(func)
})

//tá dando erro pq o site tá fora do ar