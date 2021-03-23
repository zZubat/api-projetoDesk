const express = require('express');
const router = express.Router();
const { ALUNO } = require('../models');

router.get('/', async (req,res) => {
    try{
        const resultado = await ALUNO.findAll();
        res.send(resultado);
    } catch (error){
        res.send(`Error: ${error}`);
    }
});

router.get('/:id', async (req, res) => {
    try{
        const resultado = await ALUNO.findAll({
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
        const resultado = await ALUNO.create(req.body);
        res.send(`Aluno cadastrado com sucesso, com ID: ${resultado.id}`);
    } catch (error) {
        res.send(`Error: ${error}`);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const resultado = await ALUNO.update(req.body, {
            where:{
                id: req.params.id
            }
        });
        res.send('Aluno atualizado com sucesso');
    } catch (error) {
        res.send(`Error: ${error}`);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const resultado = await ALUNO.destroy({
            where:{
                id: req.params.id
            }
        })
        res.send('Aluno removido com sucesso');
    } catch (error) {
        res.send(`Error: ${error}`);
    }
});

module.exports = router;