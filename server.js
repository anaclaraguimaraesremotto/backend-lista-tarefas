const express = require('express')
const app = express();
const PORT = 3000;

app.use(express.json());

let tarefas = [];

app.post('/tarefas', (req, res) => {
    const {tarefa} = req.body;
    tarefas.push(tarefa);
    res.status(201).json('Tarefa adicionada com sucesso');
});

app.get('/tarefas', (req, res) => {
    res.status(200).json(tarefas)
});

// app.get('/tarefas/:id', (req, res) => {
    
// })

// app.put('/tarefas/:id', (req, res) => {

// })

// app.delete('/tarefas/:id', (req, res) => {

// })

app.listen(PORT, () =>{
    console.log(`Servidor rodando na porta em http://localhost:${PORT}`);
});