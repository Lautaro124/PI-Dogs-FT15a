const { Router } = require('express');
const { Dog, Temperament } = require('../db')
const router = Router();
const { temperaments }  = require('./tryApi')

router.get('/', async(req, res)=> {
    try{
        let list = await temperaments()
        
        list.forEach((e) => { 
            e.forEach(a=> {
                if(a){
                    
                    Temperament.findOrCreate({where: {name: a}})  
                } 
            })
        })
        
        return res.status(200).send(list) 
    }
    catch(err){

        return res.status(401).send(err)
    }
})
module.exports= router;