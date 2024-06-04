const mongoose = require('mongoose')

const funcionarioSchema = new mongoose.Schema({
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

const Funcionario = mongoose.model('Funcionario', funcionarioSchema)

module.exports = Funcionario