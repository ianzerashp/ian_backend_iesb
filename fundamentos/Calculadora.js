const somar = function (numA, numB) {
    return numA + numB
}

const subtrair = function (numA, numB) {
    return numA - numB
}

const multiplicar = function (numA, numB) {
    return numA * numB
}

const dividir = function (numA, numB) {
    return numA / numB
}

console.log(somar(5,3))

// Exportando as funcionalidades

module.exports = {
    somar, subtrair, multiplicar, dividir
}