const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c }
//antigamente era feito assim

const obj2 = {a, b, c}
//agora é assim, ele já atribui o valor "se quiser mudar tem que ser o de cima"
console.log(obj2, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)
//Forma de ajuntar atributos

const obj5 = {
    funcao1: function() {
        //...
    },
    funcao2() {
        //...
    }
}
//forma 2 reduzida de fazer uma função em um objeto
console.log(obj5)