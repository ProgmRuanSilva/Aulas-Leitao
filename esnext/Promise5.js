function funcionarNao(valor, chanceErro) {
    return new Promise ((resolve, reject) => {
        if (Math.random() < chanceErro) {
            reject('Erro')
        } else {
            resolve(valor)
        }
    })
}

funcionarNao('test', 0.9)
    .then(v => console.log(`valor: ${v}`))
    .catch(err => console.log(`erro: ${err}`))
    //vc pode colocar um them depois mas os dados seram perdidos