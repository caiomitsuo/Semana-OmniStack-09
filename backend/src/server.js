const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');
const app = express();

mongoose.connect('mongodb+srv://caio:caio@cluster0-p5yum.mongodb.net/semana09?retryWrites=true&w=majority',{
useNewUrlParser: true,
useUnifiedTopology:true,
}),
//express mini framework para não precisar fazer tudo do zero, possui definições de rotas junto com app.listen

//get é usado para buscar uma informação no back end, POST para criar nova info do back end
//PUT pa ra editar alguma informação, 
//req.query = Acessar query params
//req.params = Acessa route params (para edição,delete)
//req.body =  Acessar corpo da requisição(para criação,edição)
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..' ,'uploads')))
app.use(routes);

app.listen(3333);
