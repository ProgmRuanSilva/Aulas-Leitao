// while é Melhor para repetir um codigo inderteminada
function getInteroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0 // não poderia começar com -1 pois ja seria false daria erro

while (opcao != -1) { //quando elel entra ela rodara inderterminadamente até que a expresssão seja falsa
    opcao = getInteroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log("Até a Proxima")