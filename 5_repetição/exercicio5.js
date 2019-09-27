
// 1) Crie um programa para printar todos os números pares de 1 a 100.
// - Números pares são todos os números que dividos por 2 tem resto 0
// - Qual operador que retorna o resto da divisão? Vamos usar ele!

// let numero = 0;

// for (i = 1; i <= 100; i++) {
//     if (i%2 ==0){
//         numero = i;
//         console.log(`Número pares de 1 a 100: ${numero}`);
//     }
// };


// 2) Crie um programa gerador de estrelas. O usuário informa um número, e o programa gera uma pirâmide de estrelas no seguinte formato:
// // Ex.: Usuário informa 5 e o programa retorna
// // *
// // * *
// // * * *
// // * * * * 
// // * * * * * 
// - Você pode concatenar uma string usando: + ou +=

// const readline = require("readline-sync");

// const numero = parseInt(readline.question(
//     "Digite um número: "
// ));

// let estrelas = "";
// let inicio = 1;

// while (inicio <= numero) {
//   inicio++;
//   estrelas = estrelas + "*";
//   console.log(`Estrelas: ${estrelas}`);
// }


// 3) Crie um programa que pergunta ao usuário seu nome. Depois que o usuário digitar o nome, o programa deverá responder "Olá [nome]".
// Enquanto usuário digitar qualquer palavra, print o que ele está digitando mas avise que para sair ele pode dizer "Tchau".
// O programa vai dizer "Tchau [nome]" e finalizar o programa.
// - Aqui você pode usar while ou do/while para resolver

// const readline = require("readline-sync");

// const nome = readline.question(
//     "Digite o seu nome "
// );

// console.log(`Olá ${nome}, boa noite!`);

// let palavra = '';


// do {
//     palavra = readline.question(
//         "Digite uma palavra "
//     );
//   }
//   while (palavra !== "tchau");

// console.log(`Tchau ${nome}`);




// 4) Crie um  programa contador de passos, que acumule os valores de passos informados pelo usuário até que a meta seja atingida.
// A meta a ser atingida é de 500 passos.
// - Aqui você pode usar while ou do/while para resolver, mas tente resolver com o que você não utilizou no exercicio 3.

const readline = require("readline-sync");

let passos = 0;

do {
    passos += parseInt(readline.question(
        "Digite o numero de passos "
    ));
  }
  while (meta <= 500);

console.log(`Você cumpriu sua meta ${passos}`);

