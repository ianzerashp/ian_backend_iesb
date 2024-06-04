const yup = require('yup')

const schema = yup.object().shape({
    nome: yup
        .string('Campo nome precisa ser um texto')
        .required('Campo nome é obrigatório'),
    descricao: yup
        .string('Campo descricao precisa ser um texto')
        .required('Campo descricao é obrigatório'),
    requisitos: yup
        .string('Campo requisitos precisa ser um texto'),
    funcao: yup
        .string('Campo função precisa ser um texto')
        .required('Campo função é obrigatório'),
    departamento: yup
        .string('Campo departamento precisa ser um texto')
})

function validarCargo(req, res, next) {
    schema
        .validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(err => res.status(400).json({
            mensagem: 'Erro na validação dos campos',
            erro: err.errors
        }))
}

module.exports = {
    validarCargo
}