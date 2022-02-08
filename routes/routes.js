const Router = require('express').Router();
const eventosControllers = require('../controllers/eventosControllers')
const {obtenerEventos} = eventosControllers

Router.route('/eventos')
.get(obtenerEventos)



module.exports = Router