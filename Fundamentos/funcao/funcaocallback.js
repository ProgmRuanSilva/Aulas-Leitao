const fabricantes = ["Mercedes", 'Audi', "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

//a ideia do call back é vc passar uma função pra outra função e quando essa coisa acontecer ele de dar uma volta(uma vez ou mais)

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))

//o  evento nesse caso é cada indice do array