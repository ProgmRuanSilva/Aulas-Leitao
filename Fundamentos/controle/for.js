let contador = 1
while(contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++ // quando chega em 10 ele acrecenta mais 1 e o codigo para de rodar
}
//; é a separação de declarações em for
for(let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`)
}

// Primeiro é definido a variavel depois os parametrôs depois o incremento
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for(let i = 0; i < notas.length; i++) {  
    console.log(`A Nota é  = ${notas[i]}`)
} //é uma forma de navegar entre um array 
//então depois que ele chega ao tamanho maximo do array ele para por ter uma popiedade maior
    
