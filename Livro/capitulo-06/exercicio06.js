// ----------------------------------------------------------

// a) Você deve desenvolver um programa de criptografia para transmitir mensagens entre amigos.O programa deve ler uma mensagem e, em seguida, exibi-la criptografada. A criptografia consiste em: a) exibir todas as letras das
// posições pares da mensagem; b) exibir todas as letras das posições ímpares da mensagem. O programa deve
// conter ainda um botão para decriptografar a mensagem, ou seja, retornar a mensagem original a partir do texto cifrado.


// var btCrip = document.getElementById("btCrip");
// btCrip.addEventListener("click", cripMensagem);

// function cripMensagem () {
//     var inMensagem = document.getElementById("inMensagem");

//     var outResposta = document.getElementById("outResposta");

//     var mensagem = inMensagem.value;

//     if (mensagem == "") {
//         alert("Por favor digite a mensagem!");
//     }

//     var respostaCrip = "";

//     var respostaPar = "";
//     var respostaImpar = "";

//     var flag = 0;

//     var tamanho = mensagem.length;

//     for (i = 0; i < tamanho; i++) {

//             if (i % 2 != 0) {
//                 respostaPar += mensagem.charAt(i);
//             } else {
//                 respostaImpar += mensagem.charAt(i);
//             }
        

//         flag = (flag + 1);
//         // console.log(respostaPar);
//         // console.log(respostaImpar);
//     }

//     respostaCrip = respostaPar + respostaImpar;
//     outResposta.textContent = respostaCrip;
// }

// var btDescrip = document.getElementById("btDescrip");
// btDescrip.addEventListener("click", DescripMensagem);

// function DescripMensagem () {
//     var respostaDescrip = "";

//     var outResposta = document.getElementById("outResposta");

//     var resposta = document.getElementById("outResposta").innerHTML;

//     var separar = Math.floor(resposta.length / 2);

//     pares = [];
//     impares = [];

//     for (i = 0; i < separar; i++) {
//         pares.push(resposta.charAt(i));
//     }

//     for (i = separar; i < resposta.length; i++){
//         impares.push(resposta.charAt(i));
//     }

//     for (i = 0; i < impares.length; i++) {
//         if (i % 2 == 0) {
//             respostaDescrip += impares[i];
//             pares.unshift(impares[i]);
//         } else {
//             respostaDescrip += pares[i];
//             impares.unshift(pares[i]);
//         }
//     }

//     console.log(respostaDescrip);
//     console.log(pares);
//     console.log(impares);

//     outResposta.textContent = respostaDescrip;
// }

// ----------------------------------------------------------

// b) Elaborar um programa que leia o nome de um autor de um livro. Em seguida, exiba-o no formato de uma citação bibliográfica com o sobrenome, seguido pelas iniciais do nome.

// var btCitacao = document.getElementById("btCitacao");
// btCitacao.addEventListener("click", criarCitacao);

// function criarCitacao () {
//     var inNome = document.getElementById("inNome");
//     var outResposta = document.getElementById("outResposta");

//     var nome = inNome.value;

//     var partes = nome.split(" ");

//     var tam = partes.length;

//     var ultimoNome = partes[tam - 1];

//     var letras = [];

//     var flag = 0;

//     for (i = flag; i < tam - 1; i++) {

//         if (partes[i].length == 2 || partes[i] == "dos") {
//             flag = flag + 1; 
//         } else {
//             letras.push(partes[i].charAt(0));

//             flag++;
//         }
//     }

//     var respostaLetras = "";

//     for (i = 0; i < letras.length; i++) {
        
//         respostaLetras += letras[i].toUpperCase() + ". ";
//     }

//     outResposta.textContent = `Citação Bibliográfica ${ultimoNome.toUpperCase()}, ${respostaLetras}`;
// }

// ----------------------------------------------------------

// c) Uma palavra ou frase é um palíndromo quando pode ser lida nos dois sentidos, como RADAR, MUSSUM, ABBA. Elaborar um programa que leia uma frase e informe se ela é ou não um palíndromo (converter a frase para caixa alta).

// btPalin = document.getElementById("btPalin");
// btPalin.addEventListener("click", verificarPalindromo);

// function verificarPalindromo () {
//     var inFrase = document.getElementById("inFrase");
//     var outResposta = document.getElementById("outResposta");

//     var frase = inFrase.value;

//     var letras = [];

//     var flag = 0;

//     if (frase == "") {
//         alert("Por favor, digite uma frase!");
//         inFrase.focus();
//         return;
//     }

//     for (i = flag; i < frase.length; i++) {
//         if (frase.charAt(i) == " ") {
//             flag++;;

//         } else {
//             letras.push(frase.charAt(i));
//             flag ++;
//         }
//     }

//     var tam = Math.floor(letras.length/2);

//     var comparacao = 0;

//     if (letras.length % 2 != 0) {
//         for (i = 0; i < tam; i++) {
//             for (a = letras.length - 1; a > tam; a--) {
//                 if (letras[i].toLowerCase() == letras[a].toLowerCase()) {
//                     comparacao++;
//                 }
//             }
//         }
//     } else {
//         for (i = 0; i < tam; i++) {
//             for (a = letras.length - 1; a >= tam; a--) {
//                 if (letras[i].toLowerCase() == letras[a].toLowerCase()) {
//                     comparacao++;
//                 }
//             }
//         }
//     }

//     if (comparacao == tam) {
//         outResposta.textContent = `${frase.toUpperCase()} é um Palíndromo`
//         console.log("São Palindromas");
//     } else {
//         outResposta.textContent = `${frase.toUpperCase()} não é um Palíndromo`
//         console.log("Não são Palindromas");
//     }
// }

// ----------------------------------------------------------

// d) Suponha que o prazo para o pagamento de uma infração de trânsito com desconto seja de 90 dias. Elaborar um programa que leia a data de uma infração e o valor da multa. Informe qual a data limite do pagamento com desconto (até 90 dias) e o valor a ser pago até essa data (com 20% de desconto).

// var btCalcular = document.getElementById("btCalcular");
// btCalcular.addEventListener ("click", calcularMulta);

// function calcularMulta () {
//     var inData = document.getElementById("inData");
//     var inValor = document.getElementById("inValor");

//     var outResposta01 = document.getElementById("outResposta01"); 
//     var outResposta02 = document.getElementById("outResposta02");

//     var data = inData.value;
//     var valor = Number(inValor.value);

//     var partes = data.split("-");

//     var hoje = new Date();
//     var dataInfracao = new Date();
//     var dataLimiteDescont = new Date();

//     if (valor == "") {
//         alert("Por favor coloque o valor da multa!")
//         inValor.focus();
//         return;
//     } else if (data == "") {
//         alert("Por favor coloque uma data")
//         inData.focus();
//         return;
//     }

//     dataInfracao.setDate(Number(partes[2]));
//     dataInfracao.setMonth(Number(partes[1]) - 1);
//     dataInfracao.setFullYear(Number(partes[0]));

//     var desconto = valor - ((valor * 20) / 100);

//     var atraso = Math.round((hoje - dataInfracao) / 86400000);

//     dataLimiteDescont = dataInfracao;

//     dataLimiteDescont.setDate(dataLimiteDescont.getDate() + 90);

//     var diasLimite, mesLimite, anoLimite;

//     diasLimite = dataLimiteDescont.getDate();
//     mesLimite = (dataLimiteDescont.getMonth() + 1);
//     anoLimite = dataLimiteDescont.getFullYear();

//     var diaZero = "";
//     var mesZero = "";

//     //diaZero = dia < 10 ? "0" + dia : dia; // acrescenta 0 se dia menor que 10
//     //mesZero = mes < 10 ? "0" + mes : mes; // acrescenta 0 se mês menor que 10
//     if (diasLimite < 10) {
//         diaZero = "0" + diasLimite;
//     } else {
//         diaZero = diasLimite;
//     }

//     if (mesLimite < 10) {
//         mesZero = "0" + mesLimite;
//     } else {
//         mesZero = mesLimite;
//     }

//     outResposta01.textContent = "Data Limite para Pagto com Desconto: " + diaZero +"/" + mesZero + "/" + anoLimite;

//     if (atraso > 90) {
//         outResposta02.textContent = "Valor com desconto R$: " + valor.toFixed(2);
//     } else {
//         outResposta02.textContent = "Valor com desconto R$: " + desconto.toFixed(2);
//     }
// }