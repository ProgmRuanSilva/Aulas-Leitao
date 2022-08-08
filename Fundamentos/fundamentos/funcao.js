//função é uma trecho de codigo em que vc pode chamala quando quiser

function imprimirSoma(a, b) {
    console.log(a + b);
} //Função sem retorno

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 3, 4, 5, 6, 7, 8)

//javasCript não nessecariamente da erro em operações 

//Função com retorno 

function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))