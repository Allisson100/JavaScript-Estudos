// // a) Elaborar um programa que leia um número. Calcule e informe os seus vizinhos, ou seja, o número anterior e posterior

// var numero = Number(prompt("Digite um número qualquer:"));

// var anterior = numero - 1;
// var posterior = numero + 1;

// alert("O número anterior ao número " + numero + " é " + anterior + " e o número posterior é " + posterior + ". \nAnterior: " + anterior + "\nPosterior: " + posterior + ".");

// ----------------------------------------------------------

// //  b) Elaborar um programa para uma pizzaria, o qual leia o valor total de uma conta e quantos clientes vão pagá-la. Calcule e informe o valor a ser pago por cliente. 

// var conta = Number(prompt("Qual é o valor da conta ?"));
// var clientes = Number(prompt("Quantas pessoas vão dividir a conta ?"));

// var total = conta / clientes;

// alert("O valor por cliente será de R$ " + total.toFixed(2) + "."); 

// ----------------------------------------------------------

// //  c) Elaborar um programa para uma loja, o qual leia o preço de um produto e informe as opções de pagamento da loja. Calcule e informe o valor para pagamento à vista com 10% de desconto e o valor em 3x.

// var preco = Number(prompt("Qual o valor do produto ?"));

// var desconto = preco * 0.9;
// var parcelado = preco / 3;

// alert("Você tem duas opções de pagamento: \nÀ vista: R$ " + desconto.toFixed(2) + ". \nParcelado em 3X: R$ " + parcelado.toFixed(2) + ".");

// ----------------------------------------------------------

// // d) Elaborar um programa que leia 2 notas de um aluno em uma disciplina. Calcule e informe a média das notas.

// var nota1 = Number(prompt("Qual foi sua nota na primeira prova ?"));
// var nota2 = Number(prompt("Qual foi sua nota na segunda prova ?"));

// var media = (nota1 + nota2) / 2;

// alert("Você ficou com a média de: " + media + ".");