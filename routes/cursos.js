const { Router } = require('express');
const express = require('express');
const router = express.Router();
const { CURSOS, ALUNO } = require('../models');

router.get('/cursos', async (req,res)=>{
    const tarefas = await Tarefa.findAll({
        include: [
            {
                model: User,
                as: "ALUNOs",
                through: { attributes: [] }
            }
        ]
    });
    res.json(tarefas); 
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

router.post('/cursos', async (req, res)=>{
    const {ALUNO, ...data } = req.body;
    const CURSOS = await CURSOS.create(data);
    CURSOS.setUsers(ALUNO)
    res.json(CURSOS);
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
