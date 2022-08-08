//Desafio: Colocar em modo Promisse o que estava em callback usando fsNode 

const fs = require('fs')
const { resolve } = require('path')
const path = require('path')

function Leitura(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo) {
            resolve(conteudo.toString())
        })
        console.log('Depois de Ler')
    })
}

const caminho = path.join(__dirname, 'dados.txt')

Leitura(caminho)
    .then(conteudo => console.log(conteudo))