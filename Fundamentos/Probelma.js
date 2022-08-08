function nome(nome) {
    console.log(`ola ${nome}!`)
} 
nome('Ruan')

function aniversario(ano) {
    idade = ano * 365
    console.log(`a quantidade de dias: ${idade}`)
}

aniversario(25)

function salario(horas, preco) {
    salario = preco * horas
    console.log(`Seu salario: ${salario}`)
}
salario(150, 40.5)

function mes(atual) {
    switch(atual) {
        case 1: console.log(`janeiro`) 
        break
        case 2: console.log(`fevereiro`) 
        break
        case 3: console.log(`marco`) 
        break
        case 4: console.log(`abril`) 
        break
        case 5: console.log(`maio`) 
        break
        case 6: console.log(`junho`) 
        break
        case 7: console.log(`julho`) 
        break
        case 8: console.log(`agosto`) 
        break
        case 9: console.log(`setembro`) 
        break
        case 10: console.log(`outubro`) 
        break
        case 11: console.log(`novembro`) 
        break
        case 12: console.log(`dezembro`) 
        break
        default:
            console.log(`mes invalido`)
    }
}

mes(9)

function maior(num1, num2) {
    if(num2 <= num1) {
        console.log(`o numero ${num1} e maior`)
    }
    else if(num2 >= num1) {
        console.log(`o numero ${num2} e maior`)
    }
}

maior(2, 1)