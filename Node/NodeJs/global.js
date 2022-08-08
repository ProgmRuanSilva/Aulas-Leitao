//console.log(global)
// não é indicado usar o escopo global

global.MinhaApp = Object.freeze({
    saudacao() {
        return 'Estou em todos os Lugares'
    },
    nome: 'Saudação pode a partir de agora pra todos'
})