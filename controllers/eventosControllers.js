const Eventos = require('../models/Eventos') 
const fs = require('fs')
const path = require('path')

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
    obtenerImg: async(req,res)=>{
        const foto = req.params.id
        
       
        res.sendFile(path.join(__dirname,`../public/img/${foto}`))
        
    },

}


module.exports = eventosControllers;