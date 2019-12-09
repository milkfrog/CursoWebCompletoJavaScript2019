const contadorA = require('./instanciaUnica') // vira uma unica instancia, tanto do A como do B
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() // invocando a funcao factory
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)
