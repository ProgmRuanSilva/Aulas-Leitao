//O fato dessa função não ter parametro não significa que vc não pode passar nenhum parametro
function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
// até esse o reultado é Esperado
console.log(soma(1.1, 2.2, "Teste"))
console.log(soma(`a`, `b`, `c`))