// 2. Escreva um script para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.

const prompt = require('prompt-sync')();

let totalEleit = parseInt(prompt("Insira o número total de eleitores: "));
let votosBrancos = parseInt(prompt("Insira o número de votos brancos: "));
let votosNulos = parseInt(prompt("Insira o número de votos nulos: "));
let votosValidos = parseInt(prompt("Insira o número de votos válidos: "));

let percBrancos = (votosBrancos / totalEleit) * 100;
let percNulos = (votosNulos / totalEleit) * 100;
let percValidos = (votosValidos / totalEleit) * 100;

console.log("O percentual de votos brancos com relação ao total de eleitores é de: " + percBrancos + "%.")
console.log("O percentual de votos nulos com relação ao total de eleitores é de: " + percNulos + "%.")
console.log("O percentual de votos válidos com relação ao total de eleitores é de: " + percValidos + "%.")