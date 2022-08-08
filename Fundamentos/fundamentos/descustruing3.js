//da pra usar descustrucring ne uma função
function rand ({ min = 0, max = 1000}) { //criado um objeto dentro de uma função
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min: 40 }
console.log(rand(obj))
console.log(rand({ min: 955}))
console.log(rand({}))
// da erro console.log(rand())