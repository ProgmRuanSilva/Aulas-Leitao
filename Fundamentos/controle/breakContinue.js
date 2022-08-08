//break não infuencia em um bloco tipo if, só em switch
//o uso do brak é desengorajado use quando nesssario

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let x in nums) {
    if (x == 5) { 
        break // ele influencia o bloco mais proximo dele 
    }
    console.log(`${x} = ${nums[x]}`)
}

for (let y in nums) {
    if (y == 5) {
        continue //nesse caso ele desviou para o laço corrente para a proxima
    }
    console.log(`${y} = ${nums[y]}`)
}

externo:
for (let a in nums) {
    for( let b in nums) {
        if(a == 2 && b == 3) break externo //aqui a gente está delcarando qual nós queremos que ele pare
        console.log(`Par = ${a}, ${b}`)
    }
} // Cuidado ao usar o Prof disse nâo use 

