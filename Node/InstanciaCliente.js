const { inc } = require('./InstanciaUnica')
const contadorA = require('./InstanciaUnica')
const contadorB = require('./InstanciaUnica')

const contadorC = require('./InstanciaNova')()
const contadorD = require('./InstanciaNova')()

contadorB.inc()
contadorB.inc()

console.log(contadorB.valor , contadorA.valor)




contadorC.inc()
contadorC.inc()

console.log(contadorC.valor , contadorD.valor)
