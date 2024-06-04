const mongoose = require('mongoose')

const jogadorSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true
    },
    nacionalidade: {
        type: String,
        required: true
    },
    salario: {
        type: Number,
        required: true
    },
    posicao: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Posicao',
        required: true
    },
    cargo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cargo',
        required: true
    }
});

const Jogador = mongoose.model('Jogador', jogadorSchema)

module.exports = Jogador