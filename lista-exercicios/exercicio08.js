// 8. Faça um script que determine o volume de uma caixa d’água cilíndrica, sendo que o raio e a altura devem ser fornecidos.
// OBS: V = PI * Raio^2 * Altura

const prompt = require('prompt-sync')();

let raio = Number(prompt("Insira o raio da caixa d'água cilíndrica: "));
let altura = Number(prompt("Insira a altura da caixa d'água cilíndrica: "));
let volume = Math.PI * raio**2 * altura;

console.log("O volume dessa caixa d'água cilíndrica é de: " + volume.toFixed(2));