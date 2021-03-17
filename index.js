const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const porta = 5000;
const CursosRouter = require('./routes/cursos')

app.use(bodyParser.json());
app.use('/cursos', CursosRouter);

app.listen(porta);