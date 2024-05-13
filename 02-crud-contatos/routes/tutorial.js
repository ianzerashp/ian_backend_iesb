// importa o módulo do express
const express = require('express')
// cria um router
const router = express()

// cria as minhas rotas

// GET /tutorial
router.get('/tutorial', (req, res) => {
    res.json ("BATEU NO /tutorial GET")
})

// exportar o router
module.exports = router