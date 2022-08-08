//Bom ele inicia falando que não é nessesario sempre retornar algo dentro de uma função
function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}
console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 17, 22, 44))
console.log(area(5, 5))// undefined é dessa chamada

//cuidado com os tipos de retorno flecssibilidade é boa mas é perigosa
