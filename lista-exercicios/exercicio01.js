// 1. Faça um Programa que receba quatro notas de um aluno, calcule e imprima a média aritmética das notas e a mensagem de aprovado para média superior ou igual a 7.0 ou a mensagem de reprovado para média inferior a 7.0.

const prompt = require('prompt-sync')();

let nota1 = Number(prompt("Insira a primeira nota: "));
let nota2 = Number(prompt("Insira a segunda nota: "));
let nota3 = Number(prompt("Insira a terceira nota: "));
let nota4 = Number(prompt("Insira a quarta nota: "));
let media = (nota1 + nota2 + nota3 + nota4) / 4;

if(media >= 7) {
    console.log("Você foi aprovado!")
} else {
    console.log("Você foi reprovado!")
}