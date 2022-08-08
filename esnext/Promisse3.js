const { resolve } = require("path")

function gerarNum(min, max) {
    if (min > max) {
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        const aleatorio = parseInt(Math.random() * (max, min + 1)) + min
        resolve(aleatorio)
    })
}

gerarNum(10, 30)
    .then(num => num * 10)
    .then(numX10 => `O Numero: ${numX10}`)
    .then(console.log)