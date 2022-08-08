//Else vem do Inglês Outra
const imprimirrResultado = function(nota) {
    if(nota >= 7) { 
        console.log("Aprovado!")
    } else { // else serve para se o resultado for: false 
        console.log("Reprovado!")
    }
} //lembrando se tiver mais de uma sentença é nessecario divisão de blocos

imprimirrResultado(10)
imprimirrResultado(4)
imprimirrResultado("Epa") //cuidado javascript é uma linguagem fracamente tipada

