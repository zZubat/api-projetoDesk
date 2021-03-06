const express = require('express');
const router = express.Router();
const { MENCAO } = require('../models');

router.get('/', async (req,res) => {
    try{
        const resultado = await MENCAO.findAll();
        res.send(resultado);
    } catch (error){
        res.send(`Error: ${error}`);
    }
});

router.get('/:id', async (req, res) => {
    try{
        const resultado = await MENCAO.findAll({
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
        const resultado = await MENCAO.create(req.body);
        res.send(`Menção cadastrado com sucesso, com ID: ${resultado.id}`);
    } catch (error) {
        res.send(`Error: ${error}`);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const resultado = await MENCAO.update(req.body, {
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
        const resultado = await MENCAO.destroy({
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