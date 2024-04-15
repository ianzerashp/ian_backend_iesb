const express = require('express')
const router = express.Router()

// Armazenando as pessoas em um array, com 2 demonstrações nada clubistas da estrutura "Pessoa"

let pessoas = [
    {
        "nome": "Cássio Ramos",
        "idade": 36,
        "email": "cassiorramos12@sccp.com",
        "telefone": "1220122012"
    },
    {
        "nome": "Yuri Alberto",
        "idade": 22,
        "email": "perdepoucogol@queraiva.com",
        "telefone": "1910191019"
    }
]

// READ -> Buscar todas as pessoas

router.get('/pessoas', (req, res) => {
    res.json(pessoas)
})

// READ -> Buscar uma pessoa por id

router.get('/pessoas/:id', (req, res) => {
    const idPessoa = req.params.id
    res.json(pessoas[idPessoa])
})

// CREATE -> Adicionar uma nova pessoa na lista

router.post('/pessoas', (req, res) => {
    const dadosPessoa = req.body
    const novaPessoa = {
        nome: dadosPessoa.nome,
        idade: dadosPessoa.idade,
        email: dadosPessoa.email,
        telefone: dadosPessoa.telefone
    }

    pessoas.push(novaPessoa)

    res.json({ mensagem: "Pessoa adicionada com sucesso!"})
})

// UPDATE -> Atualizar uma pessoa existente pelo ID

router.put('/pessoas/:id', (req, res) => {
    const idPessoa = req.params.id
    const pessoaAtualizada = req.body
    pessoas[idPessoa] = pessoaAtualizada
    res.json({ mensagem: "Você atualizou essa pessoa na lista!" })
})

// DELETE -> Remover uma pessoa da lista

router.delete('/pessoas/:id', (req, res) => {
    const idPessoa = req.params.id
    pessoas.splice(idPessoa, 1)
    res.json({ mensagem: "Você removeu a pessoa da lista!" })
})

// Exportando as rotas

module.exports = router