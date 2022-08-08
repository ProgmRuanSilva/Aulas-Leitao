function soBoaNoticia(nota) {
    if(nota >= 7) { // if significa: se 
        console.log("Aprovado com " + nota)

    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)
function seForVerdadeEuFalo(valor) {
    if(valor) { //note que aqui temos uma só variavel que a linguagem interpreta como boolean
        console.log("verdade... " + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo("")
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(" ")
seForVerdadeEuFalo("?")
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})