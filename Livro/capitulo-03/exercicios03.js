// ----------------------------------------------------------

// a) Elaborar um programa que leia um número. Informe se ele é par ou ímpar.

// var btExibir = document.getElementById("btExibir");
// btExibir.addEventListener("click" , verificarParImpar);

// function verificarParImpar() {
//     var inNumero = document.getElementById("inNumero");
//     var numero = inNumero.value;
    
//     var outResposta01 = document.getElementById("outResposta01");

//     if (numero == "" || isNaN(numero)) {
//         alert("Por favor digite um número válido");
//         inNumero.focus();
//         return;
//     }

//     //Pesquisei e descobri que devemos informar que o campo é um número só após verificar se o valor no input text está vazio ou com algum valor sem ser número(NaN). Caso contrário ele entende que 0 tbm é vazio e retorna o alert de número inválido
//     numero = Number(numero);

//     if (numero == 0) {
//         outResposta01.textContent = "Resposta: " + numero + " é Par."
//     }

//     if (numero % 2 == 0) {
//         outResposta01.textContent = "Resposta: " + numero + " é Par."
//     } else {
//         outResposta01.textContent = "Resposta: " + numero + " é Ímpar."
//     }
// }

// ----------------------------------------------------------

//b) Elaborar um programa que leia a velocidade permitida em uma estrada e a velocidade de um condutor. Se a velocidade for inferior ou igual à permitida, exiba “Sem Multa”. Se a velocidade for de até 20% maior que a permitida, exiba “Multa Leve”. E, se a velocidade for superior a 20% da velocidade permitida, exiba “Multa Grave”.

// var btExibir = document.getElementById("btExibir");
// btExibir.addEventListener("click" , verificarVelocidade);

// function verificarVelocidade() {
//     var inVelocidadePermitida = document.getElementById("inVelocidadePermitida");
//     var inVelocidadeCondutor = document.getElementById("inVelocidadeCondutor");

//     var veloPermitida = Number(inVelocidadePermitida.value);
//     var veloCondutor = Number(inVelocidadeCondutor.value);

//     var outResposta01 = document.getElementById("outResposta01");

//     if (veloPermitida == "" || isNaN(veloPermitida) || veloCondutor == "" || isNaN(veloCondutor)) {
//         alert("Por favor informe um valor de velocidade válido");
//         inVelocidadePermitida.focus();
//         return;
//     }

//     if (veloCondutor <= veloPermitida) {
//         outResposta01.textContent = "Sem Multa";
//     } else if (veloCondutor > veloPermitida && veloCondutor <= veloPermitida * 1.2) {
//         outResposta01.textContent = "Multa Leve";
//     } else if (veloCondutor > veloPermitida && veloCondutor > veloPermitida * 1.2) {
//         outResposta01.textContent = "Multa Grave";
//     }
// }

// ----------------------------------------------------------

//c) Elaborar um programa para simular um parquímetro, o qual leia o valor de moedas depositado em um terminal de estacionamento rotativo. O programa deve informar o tempo de permanência do veículo no local e o troco (se existir), como no exemplo da Figura 3.9. Se o valor for inferior ao tempo mínimo, exiba a mensagem: “Valor Insuficiente". Considerar os valores/tempos da tabela a seguir. (o máximo é 120min).

// var btExibir = document.getElementById("btExibir");
// btExibir.addEventListener("click" , calcularTempo);

// function calcularTempo() {
//     var inValor = document.getElementById("inValor");
//     var valor = Number(inValor.value);

//     var outResposta01 = document.getElementById("outResposta01");
//     var outResposta02 = document.getElementById("outResposta02");

//     if (valor >= 1 && valor < 1.75) {
//         outResposta01.textContent  = "Tempo: 30min";

//         var troco = valor - 1;

//         outResposta02.textContent = "Troco R$: " + troco.toFixed(2);
//     } else if (valor >= 1.75 && valor < 3) {
//         outResposta01.textContent  = "Tempo: 60min (1hr)";

//         var troco = valor - 1.75;

//         outResposta02.textContent = "Troco R$: " + troco.toFixed(2);
//     } else if (valor >= 3) {
//         outResposta01.textContent  = "Tempo: 120min (2hr)";

//         var troco = valor - 3;

//         outResposta02.textContent = "Troco R$: " + troco.toFixed(2);
//     }
// }

// ----------------------------------------------------------

//d) Elaborar um programa que leia três lados e verifique se eles podem ou não formar um triângulo. Para formar um triângulo, um dos lados não pode ser maior que a soma dos outros dois. Caso possamformar um triângulo, exiba também qual o  tipo o triângulo: Equilátero (3 lados iguais), Isóceles (2 lados iguais) e Escaleno (3 lados diferentes).

// btLimpar = document.getElementById("btLimpar");
// btLimpar.addEventListener("click" , limparCampos);

// function limparCampos() {
//     //recarrega a página
//     location.reload();
// }

// var btVerificar = document.getElementById("btVerificar");
// btVerificar.addEventListener("click" , verificarLados);

// function verificarLados() {
//     var inLadoA = document.getElementById("inLadoA");
//     var inLadoB = document.getElementById("inLadoB");
//     var inLadoC = document.getElementById("inLadoC");

//     var ladoA = Number(inLadoA.value);
//     var ladoB = Number(inLadoB.value);
//     var ladoC = Number(inLadoC.value);

//     var outResposta01 = document.getElementById("outResposta01");
//     var outResposta02 = document.getElementById("outResposta02");

//     if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB) {
//         alert("Com esses valores não é possível formar um triângulo, por favor insira valores corretos!!");
//         inLadoA.focus();
//         return;
//     }

//     if (ladoA == "" || isNaN(ladoA) || ladoB == "" || isNaN(ladoB) || ladoC == "" || isNaN(ladoC)) {
//         alert("Por favor insira os valores dos lados corretamente");
//         inLadoA.focus();
//         return;
//     }

//     if ((ladoA != ladoB && ladoB != ladoC)) {
//         outResposta01.textContent = "É possível formar um triângulo"
//         var tipo = "Escaleno";
//     }

//     if ((ladoA == ladoB && ladoB != ladoC) || (ladoB == ladoC && ladoC != ladoA) || (ladoC == ladoA && ladoA != ladoB)) {
//         outResposta01.textContent = "É possível formar um triângulo"
//         var tipo = "Isóceles";
//     }

//     if (ladoA == ladoB && ladoB == ladoC) {
//         outResposta01.textContent = "É possível formar um triângulo"
//         var tipo = "Equilátero";
//     }

//     outResposta02.textContent = "Tipo: " + tipo;
// }