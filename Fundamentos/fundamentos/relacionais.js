//oepradores ralacionais sempre produzem um resultado de verdadeiro ou falso

console.log("01)", "1" == 1) // operador de compraração se é igual 
console.log("02)", "1" === 1) // operador de estrita compraração igualitaria
console.log("03)", "3" != 3)  // operador de diferença
console.log("04)", "3" !== 3) // operador de estrita diferença 

console.log("05)", 3 < 2 ) // maior
console.log("06)", 3 > 2 ) // menor 
console.log("07)", 3 <= 2 ) // maior ou igual
console.log("08)", 3 >= 2 ) // menor ou igual

const d1 = new Date()
const d2 = new Date()
console.log("09)", d1 === d2)
console.log("10)", d1 == d2)
console.log("11)", d1.getTime() === d2.getTime)
console.log("12)", undefined == null)
console.log("13)", undefined === null)


// o simbulo de = é para atribução == é um simbulo de comparação binario
