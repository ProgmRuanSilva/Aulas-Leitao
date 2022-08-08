//Operadores Uniarios não são infix, sempre são ou pós ou Pré Fix
let num1 = 1
let num2 = 2

num1++ // ele acrecenta o valor em um
console.log(num1)

--num1 // a forma Pré fixada tem Preferencia na Leitura de precedencia
console.log(num1)

console.log(++num1 === num2--) //na hora da comparação ele interpreta o ++num1 antes por isso o resultado é: true
console.log(num1 === num2)
