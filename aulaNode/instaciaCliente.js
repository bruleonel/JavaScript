const contadorA = require('./instaciaUnica')
const contadorB = require('./instaciaUnica')// Retorna função

const contadorC = require('./instaciaNova')()//Retorna objeto
const contadorD = require('./instaciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)
