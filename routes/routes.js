const Router = require('express').Router();
const eventosControllers = require('../controllers/eventosControllers')
const {obtenerEventos, obtenerImg} = eventosControllers

Router.route('/eventos') 
.get(obtenerEventos)


Router.route('/img/:id') 
.get(obtenerImg)
module.exports = Router