const yup = require('yup')

const schema = yup.object().shape({
    nome: yup
        .string('Campo nome precisa ser um texto')
        .required('Campo nome é obrigatório'),
    abreviacao: yup
        .string('Campo abreviação precisa ser um texto')
        .required('Campo abreviação é obrigatório'),
    descricao: yup
        .string('Campo descricao precisa ser um texto')
        .required('Campo descricao é obrigatório'),
    funcao: yup
        .string('Campo função precisa ser um texto'),
    requisitos: yup
        .string('Campo requisitos precisa ser um texto')
})

function validarPosicao(req, res, next) {
    schema
        .validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(err => res.status(400).json({
            mensagem: 'Erro na validação dos campos',
            erro: err.errors
        }))
}

module.exports = {
    validarPosicao
}