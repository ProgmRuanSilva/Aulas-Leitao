//não aceita repetição e nâo indexavel
const times = new Set()
times.add('vasco')
times.add('São Paulo').add('palmeiras').add('corintians')
times.add('flamengo')
times.add('vasco')

console.log(times)

const nomes = ['Raquel', "Lucas", "Julia", "Lucas"]
const nomesSet = new Set(nomes)
console.log(nomesSet)