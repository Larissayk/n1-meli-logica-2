// - Crie variaveis para o guardar o nome, idade, se é a primeira vez e uma lista produtos favoritos do cliente
// - Atribua valores a essas variaveis
// - Crie um objeto que irá receber os valores dessa variaveis e o imprima o objeto no console


let cliente =
    {
        "nome": "Larissa",
        "idade": 30,
        "ehPrimeiraVez": true,
        "produtosFav": ["Torta de maçã", "Donuts", "Mousse", "Bolo"]
    }

console.log(cliente.produtosFav);
//resposta aqui

/*Você criará um cartão fidelidade na loja Lumelância e deverá seguir os passos abaixo:

- Crie variaveis para o guardar o nome, idade, se é a primeira vez e uma lista produtos favoritos do cliente
- Atribua valores a essas variaveis
- Crie um objeto que irá receber os valores dessa variaveis e o imprima o objeto no console
*/

var nome = "Luma";
var idade = 30;
var primeiraVez = true;
var favoritos = ["açai", "paçoca", "pão na chapa"];

var luma = {
    nome,
    idade,
    primeiraVez,
    favoritos
};

console.log(luma);
