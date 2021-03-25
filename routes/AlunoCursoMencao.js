const express = require('express');
const router = express.Router();
const { AlunoCursoMencao } = require('../models');

router.get('/', async (req,res) => {
    try{
        const resultado = await AlunoCursoMencao.findAll();
        res.send(resultado);
    } catch (error){
        res.send(`Error: ${error}`);
    }
});

router.get('/:id', async (req, res) => {
    try{
        const resultado = await AlunoCursoMencao.findAll({
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
        const resultado = await AlunoCursoMencao.create(req.body);
        res.send(` cadastrado com sucesso`);
    } catch (error) {
        res.send(`Error: ${error}`);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const resultado = await AlunoCursoMencao.update(req.body, {
            where:{
                id: req.params.id
            }
        });
        res.send(' atualizado com sucesso');
    } catch (error) {
        res.send(`Error: ${error}`);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const resultado = await AlunoCursoMencao.destroy({
            where:{
                id: req.params.id
            }
        })
        res.send(' removido com sucesso');
    } catch (error) {
        res.send(`Error: ${error}`);
    }
});

module.exports = router;