const mongoose = require('mongoose')

const comissaoTecnicaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true
    },
    salario: {
        type: Number,
        required: true
    },
    dataContratacao: {
        type: Date,
        required: false
    },
    cargo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cargo',
        required: true
    }
})

const ComissaoTecnica = mongoose.model('ComissaoTecnica', comissaoTecnicaSchema)

module.exports = ComissaoTecnica