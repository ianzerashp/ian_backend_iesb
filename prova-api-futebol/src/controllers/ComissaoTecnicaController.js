const ComissaoTecnica = require('../models/ComissaoTecnica')

async function buscarTodos(req, res) {
    res.json(await ComissaoTecnica.find())
}

async function buscarPorID(req, res) {
    const comissaoTecnica = await ComissaoTecnica.findById(req.params.id)
    if (comissaoTecnica) {
        res.json(comissaoTecnica)
    } else {
        res.status(404).json({ mensagem: "Comissão técnica não encontrada!" })
    }
}

async function criar(req, res) {
    const comissaoTecnica = new ComissaoTecnica(req.body)
    const comissaoTecnicaCriada = await comissaoTecnica.save()
    res.status(201).json(comissaoTecnicaCriada)
}

async function atualizar(req, res) {
    const comissaoTecnicaAtualizada = await ComissaoTecnica.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (comissaoTecnicaAtualizada) {
        res.json({
            mensagem: "Comissão técnica atualizada com sucesso!",
            comissaoTecnicaAtualizada
        })
    } else {
        res.status(404).json({ mensagem: "Comissão técnica não encontrada!" })
    }
}

async function excluir(req, res) {
    const comissaoTecnicaExcluida = await ComissaoTecnica.findByIdAndDelete(req.params.id)
    if (comissaoTecnicaExcluida) {
        res.json({
            mensagem: "Comissão técnica excluída com sucesso!",
            comissaoTecnicaExcluida
        })
    } else {
        res.status(404).json({ mensagem: "Comissão técnica não encontrada!" })
    }
}

module.exports = {
    buscarTodos,
    buscarPorID,
    criar,
    atualizar,
    excluir
}