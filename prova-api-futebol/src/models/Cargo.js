const mongoose = require('mongoose')

const cargoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    requisitos: {
        type: String,
        required: false
    },
    funcao: {
        type: String,
        required: true
    },
    departamento: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Departamento',
        required: false
    }
})

const Cargo = mongoose.model('Cargo', cargoSchema)

module.exports = Cargo