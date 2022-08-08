const tecnologias = new Map()
tecnologias.set('react', {frameworks: false})
tecnologias.set('angular', {frameworks: true})

console.log(tecnologias.react)
console.log(tecnologias.get('react').frameworks)

const chavesVariadas = new Map([
    [function() {}, 'Função'],
    [{}, "Objeto"],
    [123, 'Numero'],
])

    chavesVariadas.forEach((vl, ch) => {
        console.log(ch, vl)
    })
    console.log(chavesVariadas.has(123))
    chavesVariadas.delete(123)
    console.log(chavesVariadas.has(123))
    console.log(chavesVariadas.size)

    //chaves não repete chaves, valores sim
    chavesVariadas.set(123, 'a')
    chavesVariadas.set(123, 'b')
    console.log(chavesVariadas)