const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')

// Configurações

const PORT = 3000
const app = express()

// Usando Dotenv e Conectando com o banco MongoDB

const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_HOST = process.env.DB_HOST
const DB_NAME = process.env.DB_NAME

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`)
    .then(() => console.log("Conectado ao banco Mongo!"))
    .catch(err => console.log("Erro ao conectar ao banco Mongo: ", err))


// Middlweares

app.use(express.json())

// Models

const Pessoa = mongoose.model('pessoa', { nome: String })

// Rotas

// Criar pessoa

app.post('/pessoas', async (req, res) => {
    const pessoa = new Pessoa(req.body)
    const pessoaCriada = await pessoa.save()
    res.status(201).json(pessoaCriada)
})

// Recuperar lista de pessoas

app.get('/pessoas', async (req, res) => {
    const pessoas = await Pessoa.find()
    res.json(pessoas)
})

// Recuperar lista de pessoas pelo ID

app.get('/pessoas/:id', async (req, res) => {
    const pessoa = await Pessoa.findById(req.params.id)
    res.json(pessoa)
})

// Remover pessoa

app.delete('/pessoas/:id', async (req, res) => {
    await Pessoa.findByIdAndDelete(req.params.id)
    res.json({ mensagem: "Pessoa excluida com sucesso!" })
})

// Atualizar pessoa

app.put('/pessoas/:id', async (req, res) => {
    const pessoaAtualizada = await Pessoa.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(pessoaAtualizada)
})

// Start na aplicação

app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`)
})