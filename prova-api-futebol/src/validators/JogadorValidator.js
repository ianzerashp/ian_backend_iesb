const yup = require('yup')

const schema = yup.object().shape({
    nome: yup
        .string('Campo nome precisa ser um texto')
        .required('Campo nome é obrigatório'),
    idade: yup
        .number('Campo idade precisa ser um número')
        .required('Campo idade é obrigatório'),
    nacionalidade: yup
        .string('Campo nacionalidade precisa ser um texto')
        .required('Campo nacionalidade é obrigatório'),
    posicao: yup
        .string('Campo posição precisa ser um texto')
        .required('Campo posição é obrigatório'),
    salario: yup
        .number('Campo salário precisa ser um número')
        .required('Campo salário é obrigatório')
})

function validarJogador(req, res, next) {
    schema
        .validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(err => res.status(400).json({
            mensagem: 'Erro na validação dos campos',
            erro: err.errors
        }))
}

module.exports = {
    validarJogador
}