//o switch é feito para multiplas selelções
const imprimirResultado = function (nota) { // switch não retorna verdadeiro ou falso, ela retorna um valor 
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log("Quadro de Honra") // em caso de resltado que vc queira o mesmo retorno vc simplismente pode colocar depois como nesse caso
            break
        case 8: case 7:
            console.log("Aprovado")
            break
        case 6: case 5: case 4:
            console.log("Recuperação")
            break
        case 3: case 2: case 1: case 0:
            console.log("Reprovado")
        default: // default pode ficar em qualquer lugar
            console.log("Não indentificado")
    }
console.log("Fim") // quando o break é acionado ele encerra o switch
}
// Um dos Problemas do Switch é que ele executa todos os cases que estão abaixo, sem o break

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)
