// o contexto é importante principalmente em função

const valor = 'Global'

function minhaFuncao() { // até aqui tudo bem já que não há uma descrição de valor dentro da função
    console.log(valor) // se eu colocase o valor de Local ela executaria primeiro 
}

function exec() {
    const valor = 'Local' // nessa execução ele define mas depois entra como minha função 
    minhaFuncao()// quando decrarada ela vai carregar a outra função e na outra ela carregará a const
}

exec()
//dentro de JS uma Função não só carrega os seus parametros, mas tambem aonde ela foi escrita.