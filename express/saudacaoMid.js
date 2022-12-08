function saudacao(nome) {
    return function(req, res, next) {
        console.log(`Seja Bem Vindo! ${nome}` )
        next()
    }
}
module.exports = saudacao

//ele assume que os parametros dentro são uma req
//para podermos passar os parametros dentro do uso externo é necessario usar return function(req, res, next) {assim vc pode manipular o atributo}
//ao usar no index é necessario utilizar o atributo