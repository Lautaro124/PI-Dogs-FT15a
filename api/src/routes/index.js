const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogs = require('./dogsRout')
const temp = require('./temperamnt')
const algo = require('./post')

const express = require('express')

const router = Router();
router.use(express.json());
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dog', algo)
router.use('/dogs', dogs);
router.use('/temperament', temp)


module.exports = router;
