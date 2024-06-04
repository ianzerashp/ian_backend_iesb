const mongoose = require('mongoose')

const posicaoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    abreviacao: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    funcao: {
        type: String,
        required: false
    },
    requisitos: {
        type: String,
        required: false
    }
})

const Posicao = mongoose.model('Posicao', posicaoSchema)

module.exports = Posicao