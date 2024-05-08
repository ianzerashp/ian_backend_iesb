const express = require('express')
const router = express.Router()

// Array para armazenar as pessoas

const listaPessoas = [
    {
        id: 1,
        nome: "Cássio",
        idade: 36,
        email: "cassiao20m@gmail.com",
        telefone: "1119102012"
    }, 
    {
        id: 2,
        nome: "Romero",
        idade: 31,
        email: "romerodesespero@gmail.com",
        telefone: "1191919919"
    }
]

// Utilizando middlewares pra validação

function validarPessoa(req, res, next) {
    const id = req.params.id
    const pessoa = listaPessoas.find(pessoa => pessoa.id == id)
    const index = listaPessoas.findIndex(pessoa => pessoa.id == id)
    if (pessoa) {
        res.pessoa = pessoa
        res.index = index
        return next()
    }
    return res.status(404).json({ mensagem: "Pessoa não encontrada!" })
}

function validarAtributos(req, res, next) {
    const dadosPessoa = req.body
    if (!dadosPessoa.nome || !dadosPessoa.idade || !dadosPessoa.email || !dadosPessoa.telefone) {
        return res.status(400).json({ mensagem: "Todos os dados são obrigatórios!" })
    }
    return next()
}

// READ -> Buscar todas as pessoas

router.get('/pessoas', (req, res) => {
    res.json(listaPessoas)
})

// READ -> Buscar pessoas pelo ID

router.get('/pessoas/:id', validarPessoa, (req, res) => {
    const idPessoa = req.params.id
    return res.json(res.pessoa)
})

// CREATE -> Criar uma nova pessoa

router.post('/pessoas', validarAtributos, (req, res) => {
    const dadosPessoa = req.body
    const novaPessoa = {
        id: listaPessoas.length + 1,
        nome: dadosPessoa.nome,
        idade: dadosPessoa.idade,
        email: dadosPessoa.email,
        telefone: dadosPessoa.telefone
    }

    listaPessoas.push(novaPessoa)

    res.json({
        mensagem: "Pessoa inserida na lista com sucesso!"
    })
})

// UPDATE -> Atualizar uma pessoa

router.put('/pessoas/:id', validarAtributos, validarPessoa, (req, res) => {
    const dadosPessoa = req.body

    const pessoaAtualizada = {
        id: res.pessoa.id,
        nome: dadosPessoa.nome,
        idade: dadosPessoa.idade,
        email: dadosPessoa.email,
        telefone: dadosPessoa.telefone
    }

    listaPessoas[res.index] = pessoaAtualizada

    res.json({
        mensagem: "Pessoa atualizada com sucesso!",
        pessoa: pessoaAtualizada
    })
})

// DELETE -> Deletar pessoa

router.delete('/pessoas/:id', validarPessoa, (req, res) => {
    listaPessoas.splice(res.index, 1)
    res.json({ mensagem: "Pessoa removida com sucesso!" })
})

module.exports = router