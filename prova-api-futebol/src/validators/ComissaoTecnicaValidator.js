const yup = require('yup')

const schema = yup.object().shape({
    nome: yup
        .string('Campo nome precisa ser um texto')
        .required('Campo nome é obrigatório'),
    cargo: yup
        .string('Campo cargo precisa ser um texto')
        .required('Campo cargo é obrigatório'),
    idade: yup
        .number('Campo idade precisa ser um número')
        .required('Campo idade é obrigatório'),
    salario: yup
        .number('Campo salário precisa ser um número')
        .required('Campo salário é obrigatório'),
    dataContratacao: yup
        .date('Campo dataContratacao precisa ser uma data')
})

function validarComissaoTecnica(req, res, next) {
    schema
        .validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(err => res.status(400).json({
            mensagem: 'Erro na validação dos campos',
            erro: err.errors
        }))
}

module.exports = {
    validarComissaoTecnica
}