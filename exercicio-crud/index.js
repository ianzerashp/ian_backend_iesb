const express = require('express')
const app = express()

// Middlewares

app.use(express.json())

// Rotas

app.get('/', (req, res) => { 
    res.json("OK")
})


// Importando as rotas

const rotasTarefas = require('./routes/tarefas')

app.use(rotasTarefas)

// Start na aplicação

app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000")
});