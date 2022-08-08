//Else if: Ou se. = Caso Contrario...
//Else é usado quando: há muitas opções de if 
Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim 
}

const imprimireResultado = function (nota) { 
    if (nota.entre(9, 10)) {
        console.log("Guadro de Honra")
    } else if(nota.entre(7, 8.99)){ //Usando pra encadear muitas condições 
        console.log("Aprovado")
    } else if(nota.entre(4, 6.99)) {
        console.log("Recuperação")
    } else if(nota.entre(0, 3.99)) {
        console.log("Reprovado") 
    } else { // Não é nessario mas indicado
        console.log("Nota Invalida")
    }
    console.log("Fim")
}

imprimireResultado(10)
imprimireResultado(8.9)
imprimireResultado(6.55)
imprimireResultado(2.3)
imprimireResultado(-1)
imprimireResultado(11)

//else if  é  um tipo de encadeamento em que só se assume um bloco de script
// ele é determiativo ou seja precisa de parametros
//else só vê uma sentença e depois vai pra fora do bloco
// else no final é opcicional 