  const { Schema, model } = require('mongoose')
const FincaSchema = Schema({
   numero: {
        type: Number,
        required: [true, 'El Numero de la finca es obligatorio!']
    },
    nombrefinca: {
        type: String,
        required: [true, 'El Nombre de la finca es obligatoria!']
    },
    direccion: {
        type: String,
        required: [true, 'La Direccion de la finca  es obligatorio!']
    },
    valoralquiler: {
        type: Number,
        required: [true, 'El valor del alquiler  es obligatorio!']
    },
    cantidaddias: {
        type: Number,
        required: [true, 'la cantidad de dias son obligatorios   es obligatorio!']
    }
})
module.exports = model('Finca',FincaSchema)