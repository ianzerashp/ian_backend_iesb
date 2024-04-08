/* Professor, eu usei os comandos na ordem que foram colocados no Classroom, 
apesar de ser mais lógico criar primeiro e ler depois. */

const express = require('express')
const router = express.Router()

// Usando um array pra armazenar as tarefas

let tarefas = []

// READ -> Buscar todas as tarefas

router.get('/tarefas', (req, res) => {
    res.json(tarefas)
})

// READ -> Buscar uma tarefa por id

router.get('/tarefas/:id', (req, res) => {
    const idTarefa = req.params.id
    res.json(tarefas[idTarefa])
})

// CREATE -> Adicionar uma nova tarefa

router.post('/tarefas', (req, res) => {
    const novaTarefa = req.body
    tarefas.push(novaTarefa)
    res.json({ mensagem: "Você adicionou uma nova tarefa!" })
})

// UPDATE -> Atualizar uma tarefa existente pelo ID

router.put('/tarefas/:id', (req, res) => {
    const idTarefa = req.params.id
    const tarefaAtualizada = req.body
    tarefas[idTarefa] = tarefaAtualizada
    res.json({ mensagem: "Você atualizou a tarefa!" })
})

// DELETE -> Remover uma tarefa da lista

router.delete('/tarefas/:id', (req, res) => {
    const idTarefa = req.params.id
    tarefas.splice(idTarefa, 1)
    res.json({ mensagem: "Você removeu a tarefa!" })
})

// Exportando as rotas
module.exports = router