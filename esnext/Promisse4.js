function gerarNum(min, max, tempo) {
    if (min > max) [max, min] = [min, max]
        return new Promise(resolve => {
            setTimeout(function() {
                const fator = max -  min + 1
                const aleatorio = parseInt(Math.random() * fator) + min
                resolve(aleatorio)
            }, tempo)
        
    })
}

function gerarNum() { //ele espera todos resultarem positivo
    return Promise.all([
        gerarNum(1, 60, 4000), 
        gerarNum(1, 60, 1000), 
        gerarNum(1, 60, 500), 
        gerarNum(1, 60, 3000), 
        gerarNum(1, 60, 100), 
        gerarNum(1, 60, 1500), 
    ])
} 

gerarNum()
    .then(numeros => console.log(numeros))