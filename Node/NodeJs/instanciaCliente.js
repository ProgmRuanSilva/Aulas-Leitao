const contatorA = require('./Instanciaunica')
const contatorB = require('./Instanciaunica')

const contadorC = require('./instanciaNova')()
const contadord = require('./instanciaNova')()

contatorA.inc()
contatorA.inc()
console.log(contatorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)
//ele sempre ao ser invocado usa a mesma instancia do alvo

