const express = require('express')
const app = express()
const port = 3000

// Middlewares

app.use(express.json())

// 1. Faça uma api para calcular o estoque médio de uma peça, sendo que ESTOQUE MÉDIO = (QUANTIDADE MÍNIMA + QUANTIDADE MÁXIMA) /2.

app.post('/exercicio1', (req, res) => {
    const peca = req.body.peca;
    const quantidadeMinima = req.body.quantidadeMinima;
    const quantidadeMaxima = req.body.quantidadeMaxima;

    const estoqueMedio = (quantidadeMinima + quantidadeMaxima) / 2

    res.json({mensagem: `O estoque médio de ${peca} é de ${estoqueMedio}.`})
})

/* 2. Uma empresa decide dar um aumento de 30% aos funcionários cujo salário é inferior a 1.000 reais. 
Escreva uma api que receba o salário de um funcionário e imprima o valor do salário reajustado  ou uma mensagem caso o funcionário não tenha direito ao aumento.*/

app.post('/exercicio2', (req, res) => {
    const salario = req.body.salario;
  
    if (salario < 1000) {
  
      const aumento = salario * (30/100);
      const salarioReajustado = salario + aumento;
  
      res.json({ mensagem: `O salário reajustado do funcionário é de: R$${salarioReajustado.toFixed(2)}` });
    } else {
      res.json({ atenção: "Seu salário é superior a 1000 reais. Sem direito a aumento!" });
    }
  });
  
/* 3. Escrever uma api que lê o nome de um vendedor, o seu salário fixo, o total de vendas por ele efetuadas e o percentual que ganha sobre o total de vendas. 
Calcular o salário total do vendedor. Escrever o nome do vendedor e seu salário total. */

app.post('/exercicio3', (req, res) => {
    const nomeVendedor = req.body.nomeVendedor;
    const salarioFixo = req.body.salarioFixo;
    const totalVendas = req.body.totalVendas;
    const percentual = req.body.percentual;

    const comissao = (percentual/100) * totalVendas;
    const salarioTotal = salarioFixo + comissao;

    res.json({ mensagem: `Olá, ${nomeVendedor}! Seu salário total é de: R$${salarioTotal.toFixed(2)}!`})
});

/* 4. Faça uma api que leia o nome de um piloto, uma distância percorrida em km e o tempo que o piloto levou para percorrê-la (em horas). 
O programa deve calcular a velocidade média - Velocidade = Distância / Tempo - em km/h, e exibir a seguinte frase: A velocidade média do <nome do piloto> foi <velocidade media calculada> km/h. */

app.post('/exercicio4', (req, res) => {
    const nomePiloto = req.body.nomePiloto;
    const distancia = req.body.distancia;
    const tempo = req.body.tempo;

    const velocidadeMedia = distancia/tempo;

    res.json({ mensagem: `A velocidade média do ${nomePiloto} foi de ${velocidadeMedia} km/h.`})
});

/* 5. Faça uma api que calcule e imprima o salário reajustado de um funcionário de acordo com a seguinte regra:
    • Salários até 2.000, reajuste de 50%
    • Salários maiores que 2.000, reajuste de 30% */

    app.post('/exercicio5', (req, res) => {
        const salario = req.body.salario;
        let salarioReajustado;
    
        if(salario <= 2000) {
            salarioReajustado = salario + (salario * (50/100))
        } else {
            salarioReajustado = salario + (salario * (30/100))
        }
        
        res.json({ mensagem: `O salário do funcionário após o reajuste será de R$${salarioReajustado.toFixed(2)}.`})
    });
    
/* 6. Construa uma api que calcule o peso ideal de uma pessoa. Dados de entrada: altura e sexo. Fórmulas para cálculo do peso:
    • peso ideal de homem = (72,7 x altura) – 58
    • peso ideal da mulher = (62,1 x altura) – 44,7 */

    app.post('/exercicio6', (req, res) => {
        const altura = req.body.altura;
        const sexo = req.body.sexo;
        let pesoIdeal;
    
        if(sexo.toLowerCase() == "homem") {
            pesoIdeal = (72.7 * altura) - 58;
        } else if(sexo.toLowerCase() == "mulher") {
            pesoIdeal = (62.1 * altura) - 44.7;
        } else {
            return res.status(400).json({ mensagem: "Sexo inválido. Insira 'homem' ou 'mulher' como entrada." });
        }
        res.json({ mensagem: `O peso ideal é de ${pesoIdeal.toFixed(2)} kg.`})
    })


/* 7. Faça uma api para ler o código e o preço de 15 produtos, calcular e escrever:
    • O maior preço lido; e
    • A média aritmética dos preços dos produtos. 
    Lembrando que esse exercício também foi feito em sala de aula, apenas o adaptei usando a mesma lógica para melhorar a formatação de saída. */

app.post('/exercicio7', (req, res) => {
    let listaProdutos = []

    req.body.forEach(produto => {
        listaProdutos.push(produto)
    });

    let maiorPrecoLido = 0
    listaProdutos.forEach(produto => {
        if (produto.preco > maiorPrecoLido){
            maiorPrecoLido = produto.preco
        }
    })

    let soma = 0
    console.log("Soma: R$", soma)
    listaProdutos.forEach(produto => {
        console.log("Preço do produto: R$", produto.preco)
        soma = soma + produto.preco
        console.log("Soma: R$", soma)
    })

    let media = soma / listaProdutos.length

    res.json({ mensagem: `O maior preço lido foi: R$${maiorPrecoLido}, e a média foi: ${media.toFixed(2)}.` })
})
    
/* 8. Uma empresa concederá um aumento de salário aos seus funcionários, variável de acordo com o cargo, conforme a tabela abaixo. Faça uma api que leia o salário e o código do cargo de um funcionário e calcule o seu novo salário. Se o cargo do funcionário não estiver na tabela, ele deverá receber 15% de aumento. Mostre o salário antigo, o novo salário e a diferença entre ambos.
Código do Cargo -> Percentual:
    • 101 -> 5%
    • 102 -> 7,5%
    • 103 -> 10% */

app.post('/exercicio8', (req, res) => {
    const salarioAntigo = req.body.salarioAntigo;
    const codigo = req.body.codigo;
    let salarioAtual;
    
    if(codigo == 101) {
        salarioAtual = salarioAntigo + (salarioAntigo * (5/100))
    } else if(codigo == 102) {
        salarioAtual = salarioAntigo + (salarioAntigo * (7.5/100))
    } else if(codigo == 103) {
        salarioAtual = salarioAntigo + (salarioAntigo * (10/100))
    } else {
        salarioAtual = salarioAntigo + (salarioAntigo * (15/100))
    }

    let diferenca = salarioAtual - salarioAntigo;

    res.json({ mensagem: `O salário antigo era de R$${salarioAntigo}. O novo salário será R$${salarioAtual}, e a diferença entre eles é de R$${diferenca}.`})

})

/* 9. Faça uma api que receba o valor do salário mínimo, o número de horas trabalhadas, o número de dependentes do funcionário e a quantidade de horas extras trabalhadas. Calcule e imprima o salário a receber do funcionário seguindo as regras abaixo:

    •  Valor da hora trabalhada é igual a 1/5 do salário mínimo;
    •  Salário do mês é igual ao número de horas trabalhadas vezes o valor da hora trabalhada;
    •  Para cada dependente acréscimo de 32 reais;
    •  Para cada hora extra trabalhada o cálculo do valor da hora trabalhada acrescida de 50 %;
    •  Salário bruto é igual ao salário do mês mais os valores dos dependentes mais os valores das horas extras;
    •  Cálculo do valor do imposto de renda retido na fonte segue a tabela abaixo:
        IRRF | Salário Bruto
        Isento Inferior a 2.000
        10% De 2.000 a 5.000
        20% Superior a 5.000
    • Salário líquido é igual ao salário bruto menos IRRF;
    • A gratificação segue a próxima tabela:
          Salário Líquido | Gratificações
          Até 3.500 | 1.000 reais
          Superior a 3.500 | 500 reais
    • Salário a receber do funcionário é igual ao salário líquido mais a gratificação. */

app.post('/exercicio9', (req, res) => {
    const salarioMinimo = req.body.salarioMinimo;
    const horasTrabalhadas = req.body.horasTrabalhadas;
    const dependentes = req.body.dependentes;
    const horasExtras = req.body.horasExtras;

    const valorHoraTrabalhada = salarioMinimo * (1/5);
    const salarioMes = horasTrabalhadas * valorHoraTrabalhada;
    const acrescimoDependente = dependentes * 32;
    const valorHoraExtra = valorHoraTrabalhada + (valorHoraTrabalhada * (50/100));

    let salarioBruto = salarioMes + acrescimoDependente + valorHoraExtra;

    let imposto;

    if(salarioBruto <= 1999) {
        imposto = 0
    } else if(salarioBruto >= 2000 && salarioBruto <= 5000) {
        imposto = salarioBruto * 0.1
    } else {
        imposto = salarioBruto * 0.2
    }
    const salarioLiquido = salarioBruto - imposto;

    let gratificacao;
    
    if(salarioLiquido <= 3500) {
        gratificacao = 1000
    } else {
        gratificacao = 500
    }

    const salarioFinal = salarioLiquido + gratificacao;

    res.json({ mensagem: `O salário que o funcionário a receber é de: R$${salarioFinal.toFixed(2)}.`}) 
})

// Start da aplicação na porta definida

app.listen(port, () => {
    console.log("Aplicação iniciada em http://localhost:3000")
})