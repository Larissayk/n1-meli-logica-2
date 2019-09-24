//resposta aqui

// - Crie uma variável que irá guardar o array com nome e valor dos produtos
// - Crie uma variável 'posicao' para guardar o produto escolhido pelo usuário
// - Crie uma variável 'porcentagem' que irá guardar qual porcentagem o usuário digitou
// - Procure no array qual produto foi escolhido pelo usuário
// - Calcule o desconto do produto
// - Printe na tela a seguinte frase: "Produto xxx com desconto é R$ xxx"

// Dica: você pode usar a função .toFixed(digits) para limitar o numero de casas decimais do desconto.

// var r = require("readline-sync");
// var a = parseInt(r.question("Digite 1 ou 2"));

// console.log(a);


let produto = [
    {
        "nome":"Torta de maçã",
        "preço": 7.50
    },
    {
        "nome":"Donuts",
        "preço": 4.00
    },
    {
        "nome":"Mousse",
        "preço": 6.30
    },
    {
        "nome":"Bolo",
        "preço": 9.75
    },
]

let r = require("readline-sync");
let produtoEscolhido = parseInt(r.question("Escolha um número de 0 a 3 (0: Torta de maçã, 1: Donuts, 2: Mousse, 3: Bolo"));
let porcentagem = parseInt(r.question("Qual é o desconto? Digite um número de 1 a 100"));
let desconto = (produtoEscolhido:preço)
