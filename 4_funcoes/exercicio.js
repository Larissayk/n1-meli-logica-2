// O usuário deverá digitar:
//     - qual operação quer fazer (somar, subtrair, multiplicar e dividir)
//     - qual é o valor 1
//     - qual é o valor 2
    
// Crie um funções para calcular cada uma das operações.
// De acordo com a operação escolhida, utilize o switch para escolher a operação e printar o resultado.
// Caso o usuário não escolha nenhuma, deve mostrar "Operação inválida".

const readline = require("readline-sync");

const operacaoEscolhida = readline.question(
    "Escolha uma operacao (+, -, *, / ): "
);
console.log(`operacao escolhida: ${operacaoEscolhida}`);

const valor1 = parseInt(readline.question(
    "Digite um número: "
));
console.log(`valor1: ${valor1}`);

const valor2 = parseInt(readline.question(
    "Digite um outro número: "
));
console.log(`valor2: ${valor2}`);

function soma () {
    return valor1 + valor2;
};

function subtração () {
    return valor1 - valor2;
};

function divisao () {
    return valor1 / valor2;
};

function multiplicacao () {
    return valor1 * valor2;
}

let resultado = 0;
switch (operacaoEscolhida) {
    case '+':
        resultado = soma(valor1, valor2);
        console.log(`A soma de ${valor1} com ${valor2} é ${resultado}`);
        break;
    case '-':
        resultado = subtração(valor1, valor2);
        console.log(`A subtração de ${valor1} com ${valor2} é ${resultado}`);
        break;
    case '/':
        resultado = divisao(valor1, valor2);
        console.log(`A divisão de ${valor1} com ${valor2} é ${resultado}`);
        break;
    case '*':
        resultado = multiplicacao(valor1, valor2);
        console.log(`A soma de ${valor1} com ${valor2} é ${resultado}`);
        break;
      default:
        console.log('Operacao invalida!');
};
