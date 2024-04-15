const express = require('express')
const router = express.Router()

// Armazenando as pessoas em um array, mais uma vez sem clubismo

let pessoas = [
    {
        "nome": "Fagner",
        "idade": 34,
        "email": "fagnerbatepouco@sccp.com",
        "telefone": "1220122012"
    },
    {
        "nome": "Wesley",
        "idade": 19,
        "email": "wesleydibraldinho@liso.com",
        "telefone": "1910191019"
    }
]

// READ -> Buscar todas as pessoas

router.get('/pessoas', (req, res) => {
    res.json(pessoas)
})

// READ -> Busca de pessoa por id

router.get('/pessoas/:id', (req, res) => {
    const idPessoa = req.params.id
    const pessoa = pessoas[idPessoa]

    if (pessoa) {
        return res.json({pessoa})
    }
    return res.status(404).json({ mensagem: "Pessoa não encontrada!" })
})

// CREATE -> Criar uma nova pessoa

router.post('/pessoas', (req, res) => {
    const dadosPessoa = req.body

    if (!dadosPessoa.nome || !dadosPessoa.idade || !dadosPessoa.email || !dadosPessoa.telefone) {
        return res.status(400).json({ mensagem: "Todos os atributos devem ser preenchidos!" })
    }

    const novaPessoa = {
        nome: dadosPessoa.nome,
        idade: dadosPessoa.idade,
        email: dadosPessoa.email,
        telefone: dadosPessoa.telefone
    }

    pessoas.push(novaPessoa)

    res.status(201).json({
        mensagem: "Pessoa criada com sucesso!", })
})

// UPDATE -> Atualizar pessoa

router.put('/pessoas/:id', (req, res) => {
    const idPessoa = req.params.id
    const novosDados = req.body

    if (!novosDados.nome || !novosDados.idade || !novosDados.email || !novosDados.telefone) {
        return res.status(400).json({ mensagem: "Todos os atributos devem ser preenchidos!" })
    }

    if (!pessoas[idPessoa]) {
        return res.status(404).json({ mensagem: "Pessoa não encontrada!" })
    }

    pessoas[idPessoa] = {
        nome: novosDados.nome,
        idade: novosDados.idade,
        email: novosDados.email,
        telefone: novosDados.telefone
    }

    res.json({ mensagem: "Pessoa atualizada com sucesso!" })
})

// DELETE -> Deletar pessoa

router.delete('/pessoas/:id', (req, res) => {
    const idPessoa = req.params.id
    if (!pessoas[idPessoa]) {
        return res.status(404).json({ mensagem: "Pessoa não encontrada!" })
    }
    pessoas.splice(idPessoa, 1)
    res.json({ mensagem: "Pessoa excluída com sucesso!" })
})

// Exportando as rotas 

module.exports = router