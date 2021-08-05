const { Router } = require('express');
const { Dog, Temperament } = require('../db')
const router = Router();
const { temperaments }  = require('./tryApi')

router.get('/', async(req, res)=> {

    try{
        let list = await temperaments()

        list.forEach((e) => {
            e.create({name: list})
        })
        return res.status(200).send(list) 
    }
    catch{
        return res.status(401).send("Error")
    }
    
})
module.exports= router;