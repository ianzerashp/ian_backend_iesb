const Posicao = require('../models/Posicao')

async function buscarTodos(req, res) {
    res.json(await Posicao.find())
}

async function buscarPorID(req, res) {
    const posicao = await Posicao.findById(req.params.id)
    if (posicao) {
        res.json(posicao)
    } else {
        res.status(404).json({ mensagem: "Posição não encontrada!" })
    }
}

async function criar(req, res) {
    const posicao = new Posicao(req.body)
    const posicaoCriada = await posicao.save()
    res.status(201).json(posicaoCriada)
}

async function atualizar(req, res) {
    const posicaoAtualizada = await Posicao.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (posicaoAtualizada) {
        res.json({
            mensagem: "Posição atualizada com sucesso!",
            posicaoAtualizada
        })
    } else {
        res.status(404).json({ mensagem: "Posição não encontrada!" })
    }
}

async function excluir(req, res) {
    const posicaoExcluida = await Posicao.findByIdAndDelete(req.params.id)
    if (posicaoExcluida) {
        res.json({
            mensagem: "Posição excluída com sucesso!",
            posicaoExcluida
        })
    } else {
        res.status(404).json({ mensagem: "Posição não encontrada!" })
    }
}

module.exports = {
    buscarTodos,
    buscarPorID,
    criar,
    atualizar,
    excluir
}