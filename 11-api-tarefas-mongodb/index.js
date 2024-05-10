

// Imports
const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')

// Configurações 
const PORT = 3000
const app = express()

// Conexão com o MongoDB
/* mongoose.connect(`mongodb+srv://ianfarias:qDWCUoC1P4jWihGh@cluster0.kes0e8e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => console.log("Conectado ao MongoDB"))
    .catch(err => console.log("Erro ao conectar no MongoDB: ", err)) */

const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_HOST = process.env.DB_HOST
const DB_NAME = process.env.DB_NAME

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`)
    .then(() => console.log("Conectado ao banco Mongo!"))
    .catch(err => console.log("Erro ao conectar ao banco Mongo: ", err))

// Middlewares
app.use(express.json())

// Models
const Tarefa = mongoose.model('tarefa', { nome: String })
   
// Rotas

app.post('/tarefas', async (req, res) => {
    const tarefa = new Tarefa(req.body)
    const tarefaCriada = await tarefa.save()
    res.status(201).json(tarefaCriada)
})

app.get('/tarefas', async (req, res) => {
    const tarefas = await Tarefa.find()
    res.json(tarefas)
})

app.get('/tarefas/:id', async (req, res) => {
    const tarefa = await Tarefa.findById(req.params.id)
    res.json(tarefa)
})

app.delete('/tarefas/:id', async (req, res) => {
    await Tarefa.findByIdAndDelete(req.params.id)
    res.json({ mensagem: "Tarefa excluída com sucesso!"})
})

app.put('/tarefas/:id', async (req, res) => {
    const tarefaAtualizada = await Tarefa.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(tarefaAtualizada)
})

// Start

app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`)
})