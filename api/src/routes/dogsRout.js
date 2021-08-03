const { Router } = require('express');
const { Dog, Temperament } = require('../db')
const router = Router();

router.post('/', (req, res) => {
    
    Dog.create({
        id: req.body.id,
        name: req.body.name,
        height: req.body.height,
        weight: req.body.weight,
        life_span: req.body.life_span,
    })

    return res.status(200).json(req.body)
})

router.get('/dogs', (req, res) => {
    let aux = []


})
module.exports = router;