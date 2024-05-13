// configuração do express
const express = require('express')
const tutorial = require('./routes/tutorial')


// configuração do express
const app = express()

// middleware express.json -> transforma o corpo da requisição em json
app.use(express.json())

// rotas
app.get("/", (req, res) => {
    res.send("OK")
})

// aponto para minha publicação que esse router existe
app.use(tutorial)

// start da aplicação
app.listen(3000, () => {
    console.log("Aplicação rodada em http://localhost:3000")
})


