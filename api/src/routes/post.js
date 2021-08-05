const { Router } = require('express');
const { Dog, Temperament } = require('../db')
const router = Router();

router.post('/', async(req, res)=> {

    const { name, height, weight, life_span }= req.body

    await Dog.create({ name, height,  weight,  life_span})

    res.status(200).json({ name, height, weight, life_span})
})

module.exports= router;