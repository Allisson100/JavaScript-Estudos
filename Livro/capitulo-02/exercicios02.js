// ----------------------------------------------------------

// // a) Umafarmáciaestácom uma promoção – Na compra de duas unidades de um mesmo medicamento, o cliente recebe como desconto os centavos do valor total. Elaborar um programa que leia descrição e preço de um medicamento. Informe o valor do produto na promoção.

// var calcular = document.getElementById("btCalcular");
// calcular.addEventListener("click" , promocaoRemedio);

// function promocaoRemedio() { 
//     var medicamento = document.getElementById("inMedicamento").value;
//     var preco = Number(document.getElementById("inPreco").value);

//     var desconto = Math.floor(preco * 2);

//     var resposta1 = document.getElementById("outResposta1");
//     var resposta2 = document.getElementById("outResposta2");

//     resposta1.textContent = "Promoção de " + medicamento + ".";
//     resposta2.textContent = "Leve dois por apenas " + desconto.toFixed(2) + ".";
// }

// ----------------------------------------------------------

// //b) Elaborar um programa para uma lan house de um aeroporto – O programa deve ler o valor de cada 15 minutos de uso de um computador e o tempo de uso por um cliente em minutos. Informe o valor a ser pago pelo cliente, sabendo que as frações extras de 15 minutos devem ser cobradas de forma integral.

// var calcular = document.getElementById("btCalcular");
// calcular.addEventListener("click" , valorHora);

// function valorHora() {
//     var valorQuinzeMinutos = Number(document.getElementById("inValorMinuto").value);
//     var tempo = Number(document.getElementById("inTempo").value);

//     var valorMinuto = valorQuinzeMinutos / 15;
//     var valorTotal = valorMinuto * tempo;

//     document.getElementById("outResposta1").textContent = "O valor a pagar é R$ " + valorTotal.toFixed(2) + ".";
// }

// ----------------------------------------------------------

// //c) Um supermercado está com uma promoção – Para aumentar suas vendas no setor de higiene, cada etiqueta de produto deve exibir uma mensagem anunciando 50% de desconto (para um item) na compra de três unidades do produto. Elaborar um programa que leia descrição e preço de um produto. Após, apresente as mensagens indicando a promoção.

// var calcular = document.getElementById("btCalcular");
// calcular.addEventListener("click" , promocao);

// function promocao() {
//     var produto = document.getElementById("inProduto").value;
//     var valorProduto = Number(document.getElementById("inPreco").value);

//     var promocaoTerceiroProduto = valorProduto / 2;
//     var valorTotal = (valorProduto * 2) + promocaoTerceiroProduto;

//     var respostaUm = document.getElementById("outResposta1");
//     var respostaDois = document.getElementById("outResposta2");

//     respostaUm.textContent = produto;

// }
