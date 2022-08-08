function getInteroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)

}

let opcao = -1 //não é nessecario uma delcaração de variavel primeiro

 do { // do While é a unica expresão que á declaração é depois do codigo
    opcao = getInteroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1)

console.log("Até a Proxima!")
//quase ninguem usa