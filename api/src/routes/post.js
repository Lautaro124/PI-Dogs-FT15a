const { Router } = require('express');
const { Dog, Temperament } = require('../db')
const router = Router();

router.post('/', async(req, res)=> {
    const { name, height, weight, life_span, temperaments } = req.body;
    try {
        const raza = await Dog.create({
            name,
            height,
            weight,
            life_span,
        });

        const temps = await Temperament.findAll({where: {name: temperaments}})

        const al = await raza.addTemperaments(temps);

        res.send(al);

    } catch (error) {
        console.log(error);
    }
})
module.exports= router;