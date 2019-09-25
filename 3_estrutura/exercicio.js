var produto = [
  {
    nome: "Danone",
    tempoValidade: 15,
    congelado: false
  },
  {
    nome: "Panetone",
    tempoValidade: 90,
    congelado: false
  },
  {
    nome: "brocoles",
    tempoValidade: 200,
    congelado: true
  },
  {
    nome: "sorvete",
    tempoValidade: 100,
    congelado: true
  }
];

var readline = require("readline-sync");

var produtoEscolhido = parseInt(
  readline.question(
    "Escolha um numero de 0 a 3, onde 0: Danone, 1: Panetone, 2: Brocoles, 3: sorvete: "
  )
);
console.log(`produtoEscolhido: ${produto[produtoEscolhido].nome}`);

var diasParaVencimento = parseInt(
  readline.question("Digite quantos dias faltam para o produto vencer: ")
);
console.log(`dias para vencimento: ${diasParaVencimento}`);
console.log(`congelado? ${produto[produtoEscolhido].congelado}`);

var porcentagem =
  (diasParaVencimento * 100) / produto[produtoEscolhido].tempoValidade;
console.log(`porcentagem: ${porcentagem}`);

if (porcentagem <= 2) {
  console.log(`Descartar produto, muito proximo de vencer`);
} else if (porcentagem <= 10 && produto[produtoEscolhido].congelado == false) {
  console.log(`Desconto!  Produto não congelado e próximo da validade`);
} else if (porcentagem <= 5 && produto[produtoEscolhido].congelado == true) {
  console.log(`Desconto! Produto congelado e próximo da validade`);
} else {
  console.log(`Produto longe do vencimento`);
}

// Você deverá:
//     - Printar a mensagem "Descartar produto, muito proximo de vencer" caso produto esteja com 2% ou menos de dias para vencer;

//     - Printar a mensagem "Desconto!  Produto não congelado e próximo da validade." caso produto não seja congelado e esteja com 10% ou menos de dias para vencer;

//     - Printar a mensagem "Desconto! Produto congelado e próximo da validade." caso produto seja congelado e com 5% ou menos de dias para vencer;

//     - Printar a mensagem "Produto longe do vencimento." caso produto esteja com mais de 10% dos dias para vencer;
