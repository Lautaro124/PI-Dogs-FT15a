const { Router } = require('express');
const { Dog, Temperament } = require('../db')
const router = Router();

router.get('/', async(req, res)=> {

    let list = await Temperament.findAll()

    return res.status(200).send(list)    
})
module.exports= router;