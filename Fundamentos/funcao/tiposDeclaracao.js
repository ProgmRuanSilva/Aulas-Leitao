// os tipos de declaração pode influenciar em seu codigo

console.log(soma(3, 4)) //nesse primeiro caso vc pode ver que vc pode chamar a conclusão da função sem antes declarar
//function declaration  // isso ocorre pq o JS sempre lê as funções primeiro, isso é diferente do segundo e terceiro caso.
function soma(x, y) {
    return x + y
}

//function expression
const sub = function (x, y) {
    return x - y
}

//named function expression
const mult = function mult(x, y) { //o caso á se usar será em logar coisas do tipo
    return x * y
} // forma pouco usada