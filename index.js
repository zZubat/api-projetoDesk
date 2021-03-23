const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const porta = 5000;
const CursosRouter = require('./routes/cursos')
const MENCOESRouter = require('./routes/mencoes')
const AlunoRouter = require('./routes/aluno')

app.use(bodyParser.json());
app.use('/cursos', CursosRouter);
app.use('/mencoes', MENCOESRouter);
app.use('/aluno', AlunoRouter);

app.listen(porta);