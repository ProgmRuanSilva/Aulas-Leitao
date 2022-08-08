// Closure é o escopo criado quando uma função é declarada
//esse escopo permite a função acessar e manipular variáveis externas á função

//Contexto léxico em ação!
const x = 'Global'

function fora() {
    const x = 'local' // Em JS uma função carrega a memoria de onde ela foi declarada
    function dentro() {
        return x
    }
    return dentro
}
// Nesse caso dentro está em fora.
const minhaFuncao = fora()
console.log(minhaFuncao())

// ou seja toda função carrega seu 'Fechamento' ou Closure.
// Uma função carrega a memoria de onde ela veio. 