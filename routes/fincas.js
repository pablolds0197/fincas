const { Router } = require('express') //Desestructuración. Extraer un atributo de un objeto.

const route = Router()

//Importar métodos del controlador
const { fincaGet, fincaPost, fincaPut, fincaDelete,findFincasByCantidadDias } = require('../controllers/fincas')

route.get('/', fincaGet)

route.post('/', fincaPost)

route.put('/', fincaPut)

route.delete('/', fincaDelete)

route.get('/filtrarDias', findFincasByCantidadDias);

module.exports = route