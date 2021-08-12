const { Router } = require('express');
const { Dog, Temperament } = require('../db')
const router = Router();

router.post('/', async(req, res)=> {
    try{
        const { name, height, weight, life_span, temperament}= req.body

        let save = await Dog.findOrCreate({where: { name }, defaults: { name, height, weight, life_span }})

        let finall = await Temperament.findAll()
        save.setTemperaments(temperament.map(e => { 
            
            let algo = finall.map(a=> {
                if(a.name === e){
                   return a.id
                }
            })
            return algo
        }))

        return res.status(200).send({ name, height,  weight, life_span, temperament})
    }
    catch(err) {

        return res.status(401).send(err)
    }
})
module.exports= router;