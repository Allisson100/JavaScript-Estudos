// ----------------------------------------------------------

// a)Elaborar um programa que leia o nome de uma fruta e um número. O programa deve repetir a exibição do nome da fruta, de acordo com o número informado. Utilize o “*” para separar os nomes.

// var btRepetir = document.getElementById("btRepetir");
// btRepetir.addEventListener("click", repeteFruta)

// function repeteFruta () {
//     var inFruta = document.getElementById("inFruta");
//     var inNumero = document.getElementById("inNumero");

//     var outResposta = document.getElementById("outResposta");

//     var numero = Number(inNumero.value);
//     var fruta = inFruta.value;

//     var resposta = ""; //Criar a variavel da resposta

//     for (var i = numero; i > 1; i--) {
//         resposta = resposta + fruta + " * ";
//     }

//     if (i == 1) {
//         resposta = resposta + fruta;
//     }

//     outResposta.textContent = resposta;
// }

// ----------------------------------------------------------

// b)Digamos que o número de chinchilas de uma fazenda triplica a cada ano, após o primeiro ano. Elaborar um programa que leia o número inicial de chinchilas e anos e informe ano a ano o número médio previsto de chinchilas da fazenda. Validar a entrada para que o número inicial de chinchilas seja maior ou igual a 2 (um casal).

// Não consegui fazer quebra de linha, depois dar uma analisada.

// var btPrevisao = document.getElementById("btPrevisao");
// btPrevisao.addEventListener("click", previsaoChin);

// function previsaoChin () {
//     var inChin = document.getElementById("inChin");
//     var inAnos = document.getElementById("inAnos");

//     var outResposta = document.getElementById("outResposta");

//     var chin = Number(inChin.value);
//     var anos = Number(inAnos.value);

//     var resposta = "";

//     if (chin < 2 || isNaN(chin)) {
//         alert("Coloque um número válido *Mínimo dois (casal)*");
//         inChin.focus();
//         return;
//     }

//     if (anos == "" || isNaN(anos)) {
//         alert("Coloque um número válido *maior que zero*");
//         inAnos.focus();
//         return;
//     }

//     for (var i = 1; i <= anos; i++) {

//         if (i == 1) {
//             resposta = `${resposta} ${i} ° Ano: ${chin} Chinchilas \n`;
//         } else {
//             var triplica = (chin * 3);

//             resposta = `${resposta} ${i} ° Ano: ${triplica} Chinchilas \n`;

//             chin = triplica;
//         }

//     }

//     outResposta.textContent = resposta;
// }

// ----------------------------------------------------------

// c)Elaborar um programa que leia um número e verifique se ele é ou não é perfeito. Un número dito perfeito é aquele que é igual à soma dos seus divisores inteiro (exceto o próprio número). O programa deve exibir os divisores do número e a soma deles.

// var btVerificar = document.getElementById("btVerificar");
// btVerificar.addEventListener("click", numeroPerfeito);

// function numeroPerfeito () {
//     var inNumero = document.getElementById("inNumero");

//     var outResposta01 = document.getElementById("outResposta01");
//     var outResposta02 = document.getElementById("outResposta02");

//     var numero = Number(inNumero.value);

//     var resposta = "";

//     var valores = [];

//     if (numero == "" || isNaN(numero)) {
//         alert("Coloque um número válido");
//         inNumero.focus();
//         return;
//     }

//     for (i = 1; i <= numero; i++) {
        
//         if (numero % i == 0){
//             valores.push(i);
//         }
//     }

//     valores.pop();
//     resposta = valores;

//     var soma = 0;

//     for(var i = 0; i < valores.length; i++){
//         soma += valores[i];
//     }

//     if (soma == numero) {
//         outResposta02.textContent = numero + " É um número perfeito";
//     } else {
//         outResposta02.textContent = numero + " Não é um número perfeito";
//     }


//     outResposta01.textContent = "Divisores do " + numero + ": " + resposta + " (Soma: " + soma + ")";
// } 

// ----------------------------------------------------------

// d)Elaborar um programa que leia um número e exiba estrelas na página, em linhas diferentes. A cada nova linha, o número de estrelas deve ser incrementado. Observação: caso você informe um valor alto, as linhas podem ultrapassar o tamanho da imagem e se alinhar à margem esquerda da página.

// btCriar = document.getElementById("btCriar");
// btCriar.addEventListener("click", geradorEstrelasDois);

// function geradorEstrelasDois () {
//     var inNumero = document.getElementById("inNumero");

//     var outResposta = document.getElementById("outResposta");

//     var numero = Number(inNumero.value);

//     var estrela = "*";

//     var resposta = "";

//     for (i = 1; i <= numero; i++) {
        
//         resposta += estrela.repeat(i);
//         resposta += "\n";
//         console.log(resposta)
//     }
//     outResposta.textContent = resposta;
// }

// ----------------------------------------------------------


