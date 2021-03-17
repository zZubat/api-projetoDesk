const express = require('express');
const router = express.Router();
const { CURSOS } = require('../models');

router.get('/', async (req,res) => {
    try{
        const resultado = await CURSOS.findAll();
        res.send(resultado);
    } catch (error){
        res.send(`Error: ${error}`);
    }
});

router.get('/:id', async (req, res) => {
    try{
        const resultado = await CURSOS.findAll({
            where:{
                id: req.params.id
            }
        });
        res.send(resultado);
    } catch (error){
        res.send(`Error: ${error}`);
    }
});


router.post('/', async (req, res) => {
    try {
        const resultado = await CURSOS.create(req.body);
        res.send(`Curso cadastrado com sucesso, com ID: ${resultado.id}`);
    } catch (error) {
        res.send(`Error: ${error}`);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const resultado = await CURSOS.update(req.body, {
            where:{
                id: req.params.id
            }
        });
        res.send('Curso atualizado com sucesso');
    } catch (error) {
        res.send(`Error: ${error}`);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const resultado = await CURSOS.destroy({
            where:{
                id: req.params.id
            }
        })
        res.send('Curso removido com sucesso');
    } catch (error) {
        res.send(`Error: ${error}`);
    }
});

module.exports = router;
