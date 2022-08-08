let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}
//funções arrow é uma função anonima, então vc deve armazenar em uma constante se quiser chama-lá

dobro = a => 2 * a // só se tiver apenas um parametro 
console.log(dobro(Math.PI))
//Geralmente é muito ultilizada
// pervebi que => é o equivalente a function

let ola = function () {
    return `olá`
}

ola = () => `Olá`
ola = _ => `Olá` // Possui um Parameto
console.log(ola())
// a função arrow tem um intuito de minimizar as funções