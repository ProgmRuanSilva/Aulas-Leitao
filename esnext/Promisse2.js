
function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Executando Promisse')
            resolve('erro')
        }, tempo)
    })
}

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)