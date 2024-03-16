// Importando módulo core HTTP
const http = require('http')

let contador = 0
console.log("Contador iniciado!")
console.log("Contador de Requisições: 0")

//Criando um servidor(backend - api) através do módulo http
http.createServer((req, res) => {

    // construindo a lógica da api

    contador++
    console.log("Contador de Requisições: " + contador)
    res.write(`Você é o visitante número: ${contador}`)
    res.end()

//startando servidor(backend - api) para executar comunicações na porta 3000
}).listen(3000)