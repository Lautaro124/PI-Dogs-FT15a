const { Router } = require('express');
const { Dog, Temperament } = require('../db')
const router = Router();
const { list, namesFilter }  = require('./tryApi')

router.get('/', async(req, res) => {
    let lista = await list()
    return res.status(200).send(lista)
})

router.get('/?name=:name', async(req, res) => {
    let lista2 = await namesFilter(req.params.name)

    return res.status(200).send(lista2)
})


module.exports = router;