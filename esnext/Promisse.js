//usamos qundo temos um processamento assincrono.
function falarDepoisDe(segundos, frase) {
    return new Promise ((resolve, reject)  => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que Legal!')
    .then(frase => frase.concat('mais ainda'))
    .then(outraFrase => console.log(outraFrase))
    // catch e para quando acontece algum erro 
