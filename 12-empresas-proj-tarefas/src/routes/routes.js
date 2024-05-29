const express = require('express')
const router = express.Router()

// Controllers

const ProjetoController = require('../controllers/ProjetoController')
const TarefaController = require('../controllers/TarefaController')
const FuncionarioController = require('../controllers/FuncionarioController')
const CargoController = require('../controllers/CargoController')

// Validators

const { validarID } = require('../validators/IdValidator')
const { projetoValidador } = require('../validators/ProjetoValidator')
const { tarefaValidador } = require('../validators/TarefaValidator')
const { validarFuncionario } = require('../validators/FuncionarioValidator')
const { validarCargo } = require('../validators/CargoValidator')

// Projetos

router.post('/projetos', projetoValidador, ProjetoController.create)
router.get('/projetos', ProjetoController.getAll)
router.get('/projetos/:id', validarID, ProjetoController.getById)
router.put('/projetos/:id', validarID, projetoValidador, ProjetoController.update)
router.delete('/projetos/:id', validarID, ProjetoController.remove)

// Tarefas

router.post('/tarefas', tarefaValidador, TarefaController.create)
router.get('/tarefas', TarefaController.getAll)
router.get('/tarefas/:id', validarID, TarefaController.getById)
router.put('/tarefas/:id', validarID, tarefaValidador, TarefaController.update)
router.delete('/tarefas/:id', validarID, TarefaController.remove)

// Funcionários

router.get('/funcionarios', FuncionarioController.buscarTodos)
router.get('/funcionarios/:id', validarID, FuncionarioController.buscarPorID)
router.post('/funcionarios', validarFuncionario, FuncionarioController.criar)
router.put('/funcionarios/:id', validarID, validarFuncionario, FuncionarioController.atualizar)
router.delete('/funcionarios/:id', validarID, FuncionarioController.excluir)

// Cargo

router.get('/cargos', CargoController.buscarTodos)
router.get('/cargos/:id', validarID, CargoController.buscarPorID)
router.post('/cargos', validarCargo, CargoController.criar)
router.put('/cargos/:id', validarID, validarCargo, CargoController.atualizar)
router.delete('/cargos/:id', validarID, CargoController.excluir)

module.exports = router