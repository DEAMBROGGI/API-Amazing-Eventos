const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    name: { type: String, required: true },
    precio: {type: Number } ,
    description: { type: String },
    stock: { type: Number, default: 0 },
})

const Producto = mongoose.model('producto', productoSchema)

module.exports = Producto;