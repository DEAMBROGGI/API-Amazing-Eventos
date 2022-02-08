const Eventos = require('../models/Eventos') 
const fs = require('fs')

const eventosControllers = {
    obtenerEventos: async(req,res)=>{
        let eventos
        let error = null 
        try{
           eventos = await Eventos.find()
            
        }catch(error){
            error = error
            console.error(error)
        }      

        res.json(
            ...eventos, 
            
        )
        
    },
    

}


module.exports = eventosControllers;