// 7. Faça um script que leia duas notas de um aluno, calcule e escreva a média final deste aluno. Considerar que a média é ponderada e que o peso das notas é 4 e 6.

const prompt = require('prompt-sync')();

let nota1 = Number(prompt("Insira a nota 1 do aluno: "));
let nota2 = Number(prompt("Insira a nota 2 do aluno: "));

let media = ((nota1 * 4) + (nota2 * 6)) / (4 + 6);

console.log("A média final do aluno foi de: " + media);