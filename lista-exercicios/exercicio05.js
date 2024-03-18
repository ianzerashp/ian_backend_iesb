// 5. O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Escreva um script para ler o custo de fábrica de um carro, a porcentagem do distribuidor e o imposto, e calcular e escrever o custo final ao consumidor

const prompt = require('prompt-sync')();

let custoFabrica = Number(prompt("Insira o custo de fábrica do carro em reais: "));
let porcDistribuidor = Number(prompt("Insira a porcentagem do distribuidor: ") / 100) * custoFabrica;
let porcImposto = Number(prompt("Insira a porcentagem do imposto: ") / 100) * custoFabrica;

let custoFinal = custoFabrica + porcDistribuidor + porcImposto;

console.log("O custo final do veículo ao consumidor será de: R$" + custoFinal.toFixed(2));