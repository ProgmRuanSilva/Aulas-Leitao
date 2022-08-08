//Função geralmente é associada a Algoritimo
//Função em JS é First-Classs Object (Cidadão de Primera Linha)
//Higher-order function (função de alta ordem)
//Função em JS é tratada como Dado

//Função de forma literal
function fun1() { } // o retorno não é obrigatorio ela sempre retorna undefined
// o uso do bloco literal é obrigatorio

// Armazenar em uma variavel
const fun2 = function () { } //se vc chamar a constante com pareteses ela chamará a função  
// se vc simplismente chamar a função ex: passando como parametro para outra. vc estará chamando a função em si.

//Armazenar em um Array
const array = [function (a, b) { return a + b }, fun1, fun2] // é possivel declarar uma função dentro de um array embora não seja tão usada
console.log(array[0] (3, 3))

// Armazenar em um atributo de objeto
const obj = []
obj.falar = function () {return `Opa`}
console.log(obj.falar())

//Passar função como parametro
function run(fun) {
    fun()
}
 run(function () { console.log(`Executando...`)})

 // Um função pode retornar/conter um função

function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
// Aqui está uma função dentro de outra nesse caso o retorno da outra deve ser for a e exatamente depois da resposta
soma(2, 3)(4)// como estou esperando o resultado de uma função ja passo o valor da outra

const cincoMais = soma(2, 3)
cincoMais(4) // Outra forma de fazer a mesma coisa armazenado em uma constante. 

//Esses dois casos acima são para em caso de vc ter varios parametro dentro de uma função