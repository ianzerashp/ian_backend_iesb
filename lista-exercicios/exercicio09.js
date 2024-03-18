// 9. Faça um script para somar dois números e multiplicar o resultado pelo primeiro número.

const prompt = require('prompt-sync')();

let num1 = Number(prompt("Insira o primeiro número: "));
let num2 = Number(prompt("Insira o segundo número: "));

let soma = num1 + num2;
let multiplicacao = soma * num1;

console.log("O resultado da soma dos dois números multiplicada pelo primeiro número é: " + multiplicacao);