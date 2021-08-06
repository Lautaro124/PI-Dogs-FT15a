const { Router } = require('express');
const { Dog, Temperament } = require('../db')
const router = Router();

router.post('/', async(req, res)=> {
    try{
        const { name, height, weight, life_span }= req.body

        await Dog.findOrCreate({where: { name, height,  weight,  life_span }})

        let algo = { name, height,  weight, life_span}

        return res.status(200).send(algo)
    }
    catch(err) {
        return res.status(401).send(err)
    }
})
module.exports= router;