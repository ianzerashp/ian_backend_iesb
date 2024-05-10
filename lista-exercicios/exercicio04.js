// 4. O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um script para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor.

const prompt = require('prompt-sync')();

let custoFabrica = Number(prompt("Insira o custo de fábrica do carro em reais: "));

// Aqui, pra reduzir o código, somei o percentual do distribuidor e os impostos e armazenei em uma só variável

let taxas = custoFabrica * (73 / 100);

let custoFinal = custoFabrica + taxas;

console.log("O custo final ao consumidor será de: R$" + custoFinal.toFixed(2));