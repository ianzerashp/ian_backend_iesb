const yup = require('yup')

const schema = yup.object().shape({
    nome: yup
        .string("O nome precisa ser um texto")
        .required("O nome é obrigatório"),
    descricao: yup
        .string("A descrição precisa ser um texto")
        .required("A descrição é obrigatória"),
    numeroDeFuncionarios: yup
        .number("O número de funcionários precisa ser um número")
        .required("O número de funcionários é obrigatório"),
    dataCriacao: yup
        .date("A data de criação precisa ser uma data"),
    objetivos: yup
        .string("Os objetivos precisam ser um texto")
})

function validarDepartamento(req, res, next) {
    schema
        .validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(err => res.status(400).json(
            {
                mensagem: "Erro na validação dos campos!",
                erro: err.errors
            }
        ))
}

module.exports = {
    validarDepartamento
}