const mongoose = require('mongoose')

const departamentoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    numeroDeFuncionarios: {
        type: Number,
        required: true
    },
    dataCriacao: {
        type: Date,
        required: false
    },
    objetivos: {
        type: String,
        required: false
    }
})

const Departamento = mongoose.model('Departamento', departamentoSchema);

module.exports = Departamento;