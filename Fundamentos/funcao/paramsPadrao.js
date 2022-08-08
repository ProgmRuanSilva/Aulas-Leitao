// estrategia 1 para gerar valor padão 
function soma1(a, b, c) {
    a = a || 1 // nesse caso a primeira parte for a falsa ele assume o valor da segunda
    b = b || 1 //todos tem o operador OU
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2 ,3), soma1(0, 0, 0), ) 
// 1/ nesse caso o valor não foi setado então todos assumem o valor de 1
// 2/ nesse caso só passamos o valor do primeiro parametro então os outros assumem o valor de 1
// 3/ nesse caso foram passadas todas os parametros então foi dado como a operação certa
// 4/ nesse caso o 0 retorna false então ele gera um bug

//etrategia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1 //nesse caso etou perguntando se existe o valor de 1
    c = isNaN(c) ? 1 : c // nesse caso se não for un numero ele assume o valor de 1
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3) , soma2(0, 0, 0))

//valoe padrão do es2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))

// se for usar esse metodo é o melhor embora o primeiro caso seja o mais utilizado 