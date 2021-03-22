const express = require('express');
const router = express.Router();
const { MENCOES } = require('../models');

router.get('/', async (req,res) => {
    try{
        const resultado = await MENCOES.findAll();
        res.send(resultado);
    } catch (error){
        res.send(`Error: ${error}`);
    }
});

router.get('/:id', async (req, res) => {
    try{
        const resultado = await MENCOES.findAll({
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
        const resultado = await MENCOES.create(req.body);
        res.send(`Menção cadastrado com sucesso, com ID: ${resultado.id}`);
    } catch (error) {
        res.send(`Error: ${error}`);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const resultado = await MENCOES.update(req.body, {
            where:{
                id: req.params.id
            }
        });
        res.send('Menção atualizado com sucesso');
    } catch (error) {
        res.send(`Error: ${error}`);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const resultado = await MENCOES.destroy({
            where:{
                id: req.params.id
            }
        })
        res.send('Menção removido com sucesso');
    } catch (error) {
        res.send(`Error: ${error}`);
    }
});

module.exports = router;