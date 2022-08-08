function Operacao(n1, n2) {
    return {
        soma: n1 + n2,
        subtracao: n1 - n2,
        multi: n1 * n2,
        divi: n1 / n2
    }
}
console.log('1')
console.log(Operacao(5, 5))
//concluido facil :)
// 1) usei o modo factory para criar objs que eu conseguisse colocar os parametros.

//Proximo é retornar os lados do triangulo:

// vendo as possibilidades temos else if, )Errado por falta de parametro ) vou tentar usar operadores relacionais

function triangulo(l1, l2, l3) {
  const Escaleno = l1 != l2 && l2 != l3
  const Isoceles = l1 === l2 && l2 != l3
  const Equilatero = l1 === l2 && l3 === l2
  return{Escaleno, Isoceles, Equilatero}
}
console.log("2)")
console.log(triangulo(2, 2, 3))

// 2) ainda não consegui, 21/04/2022 RECEBA!!!!!! após varias tentativas consegui

function expoente(n1, n2) {
    console.log(n1 * n2)
}
console.log("3)")
expoente(2, 3)
// 3) Bem Facil é só elevar o numero um ao dois 

function divisaoDivisor(n1, n2) {
    console.log(n1 / n2)
}
console.log("4)")
divisaoDivisor(5, 5)
// 4) Pelo jeito pronto era só fazer uma divisão pelo o que eu entendi

// 5) Criar uma Função em que se troque o valor por um numero decimal
function operacaoDecimaria(n1, n2) {
    n1 += n2
    const n3 = n1 += 0.1 
    console.log('R$' + (n1++));
}
console.log("5)")
operacaoDecimaria(0.1, 0.2)

// 6) não entendi mais é uma coisa com juros

// 7) baskara esquece

// 8) de acordo com o enunciado é uma forma de contabilizar os pontos de um jogador

// 9) não entendi

// 10) criar uma função em que se verifica se o numero inteiro resultara em uma divisão por 3

function numeroInteiro(numero) {
    console.log(`O Seu Numero ${numero} é:`)
        if(numero === 3) {
            console.log("Verdadeiro")
        }
        else {
            console.log("Falso")
        }
}
console.log("10")
numeroInteiro(4)