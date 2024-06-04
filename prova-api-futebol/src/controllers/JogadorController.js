const Jogador = require('../models/Jogador')

async function buscarTodos(req, res) {
    res.json(await Jogador.find())
}

async function buscarPorID(req, res) {
    const jogador = await Jogador.findById(req.params.id)
    if (jogador) {
        res.json(jogador)
    } else {
        res.status(404).json({ mensagem: "Jogador não encontrado!" })
    }
}

async function criar(req, res) {
    const jogador = new Jogador(req.body)
    const jogadorCriado = await jogador.save()
    res.status(201).json(jogadorCriado)
}

async function atualizar(req, res) {
    const jogadorAtualizado = await Jogador.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (jogadorAtualizado) {
        res.json({
            mensagem: "Jogador atualizado com sucesso!",
            jogadorAtualizado
        })
    } else {
        res.status(404).json({ mensagem: "Jogador não encontrado!" })
    }
}

async function excluir(req, res) {
    const jogadorExcluido = await Jogador.findByIdAndDelete(req.params.id)
    if (jogadorExcluido) {
        res.json({
            mensagem: "Jogador excluído com sucesso!",
            jogadorExcluido
        })
    } else {
        res.status(404).json({ mensagem: "Jogador não encontrado!" })
    }
}

module.exports = {
    buscarTodos,
    buscarPorID,
    criar,
    atualizar,
    excluir
}