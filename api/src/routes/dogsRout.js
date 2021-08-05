const { Router } = require('express');
const { Dog, Temperament } = require('../db')
const router = Router();
const { list, namesFilter }  = require('./tryApi')

router.get('/', async(req, res) => {
    const {name} = req.query  
    
    if(name){
        let lista2 = await namesFilter(name)

        return res.status(200).send(lista2)
    }
       
    let lista = await list()
    
    return res.status(200).send(lista)
})


    



module.exports = router;