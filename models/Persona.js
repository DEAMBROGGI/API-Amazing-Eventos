const mongoose = require('mongoose');

const personaSchema = new mongoose.Schema({
    userName: {type: String, required:true},
    password: {type:String, required:true},
})

const Persona = mongoose.model('persona', personaSchema)

module.exports = Persona;