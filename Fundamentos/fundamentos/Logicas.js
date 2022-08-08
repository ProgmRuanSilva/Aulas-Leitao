//Operadores Logicos: 

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 //Forma de ou em javascript o por que é se um dos dois derem certo ele toma sorvete
    const comprarTv50 = trabalho1 && trabalho2 // && por que só sera acionado se os dois trabalhos derem certo
    //const comprartv32 = !!(trabalho1 ^ trabalho2) //bitwise xor: ele opera bit a bit
    const comprarTv32 = trabalho1 != trabalho2 // se forem diferentes
    const manterSaudavel = !comprarSorvete // Operador Unário

    return { comprarSorvete, comprarTv32, comprarTv50, manterSaudavel } //forma de criar obj usando só consts
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))