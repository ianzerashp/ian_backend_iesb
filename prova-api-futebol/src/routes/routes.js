const express = require('express')
const router = express.Router()

// Utilizando controllers

const PosicaoController = require('../controllers/PosicaoController')
const CargoController = require('../controllers/CargoController')
const FuncionarioController = require('../controllers/funcionarioController')
const ComissaoTecnicaController = require('../controllers/ComissaoTecnicaController')
const JogadorController = require('../controllers/JogadorController')
const DepartamentoController = require('../controllers/DepartamentoController')

// Utilizando validators

const { validarID } = require('../validators/IdValidator')
const { validarPosicao } = require('../validators/PosicaoValidator')
const { validarCargo } = require('../validators/CargoValidator')
const { validarDepartamento } = require('../validators/DepartamentoValidator')
const { validarFuncionario } = require('../validators/FuncionarioValidator')
const { validarComissaoTecnica } = require('../validators/ComissaoTecnicaValidator')
const { validarJogador } = require('../validators/JogadorValidator')

// Rotas de posições

router.get('/posicoes', PosicaoController.buscarTodos)
router.get('/posicoes/:id', validarID, PosicaoController.buscarPorID)
router.post('/posicoes', validarPosicao, PosicaoController.criar)
router.put('/posicoes/:id', validarID, validarPosicao, PosicaoController.atualizar)
router.delete('/posicoes/:id', validarID, PosicaoController.excluir)

// Rotas de cargos

router.get('/cargos', CargoController.buscarTodos)
router.get('/cargos/:id', validarID, CargoController.buscarPorID)
router.post('/cargos', validarCargo, CargoController.criar)
router.put('/cargos/:id', validarID, validarCargo, CargoController.atualizar)
router.delete('/cargos/:id', validarID, CargoController.excluir)

// Rotas de departamentos

router.get('/departamentos', DepartamentoController.buscarTodos)
router.get('/departamentos/:id', validarID, DepartamentoController.buscarPorID)
router.post('/departamentos', validarDepartamento, DepartamentoController.criar)
router.put('/departamentos/:id', validarID, validarDepartamento, DepartamentoController.atualizar)
router.delete('/departamentos/:id', validarID, DepartamentoController.excluir)

// Rotas de funcionários

router.get('/funcionarios', FuncionarioController.buscarTodos)
router.get('/funcionarios/:id', validarID, FuncionarioController.buscarPorID)
router.post('/funcionarios', validarFuncionario, FuncionarioController.criar)
router.put('/funcionarios/:id', validarID, validarFuncionario, FuncionarioController.atualizar)
router.delete('/funcionarios/:id', validarID, FuncionarioController.excluir)

// Rotas de comissão técnica

router.get('/comissao-tecnica', ComissaoTecnicaController.buscarTodos)
router.get('/comissao-tecnica/:id', validarID, ComissaoTecnicaController.buscarPorID)
router.post('/comissao-tecnica', validarComissaoTecnica, ComissaoTecnicaController.criar)
router.put('/comissao-tecnica/:id', validarID, validarComissaoTecnica, ComissaoTecnicaController.atualizar)
router.delete('/comissao-tecnica/:id', validarID, ComissaoTecnicaController.excluir)

// Rotas de jogadores

router.get('/jogadores', JogadorController.buscarTodos)
router.get('/jogadores/:id', validarID, JogadorController.buscarPorID)
router.post('/jogadores', validarJogador, JogadorController.criar)
router.put('/jogadores/:id', validarID, validarJogador, JogadorController.atualizar)
router.delete('/jogadores/:id', validarID, JogadorController.excluir)

// Exportação

module.exports = router