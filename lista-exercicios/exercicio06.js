/* 6. Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. 
Escrever um script que leia o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor. */

const prompt = require('prompt-sync')();

let numCarros = parseInt(prompt("Insira o número de carros vendidos: "));
let totalVendas = Number(prompt("Insira o valor total das vendas do funcionário em reais: "));
let salFixo = Number(prompt("Insira o salário fixo do funcionário em reais: "));
let comissao = Number(prompt("Insira a comissão fixa que ele recebe por carro vendido em reais: "));
let bonusVenda = totalVendas * (5/100);

let salFinal = salFixo + comissao + bonusVenda;

console.log("O salário final do vendedor este mês foi de: R$" + salFinal.toFixed(2) + ".");