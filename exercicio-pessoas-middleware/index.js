const express = require('express')
const app = express()

// Middlewares

app.use(express.json())

const pessoasRouter = require('./routes/pessoas')
app.use(pessoasRouter)

// Start na aplicação 

app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000")
})