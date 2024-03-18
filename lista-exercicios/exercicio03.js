// 3. Escreva um script para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário.

const prompt = require('prompt-sync')();

let salAtual = Number(prompt("Insira o salário mensal atual do funcionário: "));
let percReajuste = Number(prompt("Insira o percentual de reajuste do salário: "));

let salNovo = salAtual + (salAtual * (percReajuste / 100));

console.log ("O salário do funcionário após o reajuste será de: R$" + salNovo);