const mongoose = require('mongoose');

const eventosSchema = new mongoose.Schema({
    fechaActual: {type: String, required:true},
    eventos: {type:Array, required:true},
})

const Eventos = mongoose.model('eventos', eventosSchema)

module.exports = Eventos;