// ----------------------------------------------------------

// a) Elaborar um programa que leia o nome e a idade de um atleta de um clube de natação. O programa deve exibir o nome com “-” abaixo das letras do nome e a categoria do atleta, que pode ser “Infantil” (até 12 anos), “Juvenil” (entre 13 e 18 anos) ou “Adulto” (acima de 18 anos). O programa deve conter as funções:

// • retornarTracos() – que receba um nome como parâmetro e retorne uma linha com “-” para as letras do nome (nos espaços, manter os espaços).

// • categorizarAluno() – que receba um número como parâmetro e retorne a categoria do aluno, conforme indicação no enunciado do exercício.

// var btCategoria = document.getElementById("btCategoria");
// btCategoria.addEventListener("click", pegarDados);

// function pegarDados () {
//     var inNome = document.getElementById("inNome");
//     var inIdade = document.getElementById("inIdade");

//     var outResposta01 = document.getElementById("outResposta01");
//     var outResposta02 = document.getElementById("outResposta02");

//     var nome = inNome.value;
//     var idade = inIdade.value;

//     if (nome == "" || idade == "" || isNaN(idade)) {
//         alert("Digite os dados corretamente")
//         inNome.focus();
//         return;
//     }

//     var resposta = "";
//     resposta += nome + "\n";

//     retornarTracos(nome, resposta);
//     categorizarAluno(idade);
// }

// function retornarTracos (nome, resposta) {
//     var tam = nome.length;

//     var traco = "";

//     for (i = 0; i < tam; i++) {
//         if (nome.charAt(i) != " ") {
//             traco += "-";
//         } else {
//             traco += " ";
//         }
//     }

//     resposta += traco + "\n";

//     outResposta01.textContent = resposta;
// }

// function categorizarAluno (idade, resposta) {
//     var categoria = (idade <= 12) ? "Infantil" : (idade <= 18) ? "Juvenil" : "Adulto";

//     outResposta02.textContent = "Categoria: " + categoria;
// }

// ----------------------------------------------------------

// b) Elaborar um programa que leia o nome completo de um aluno. O programa deve validar o preenchimento de um nome completo e exibir a senha inicial do aluno, a qual será o sobrenome seguido pelo número de vogais do nome completo dele. O programa deve conter as funções:

// • validarNome() – que receba um nome como parâmetro e retorne true (nome completo) ou false (nome incompleto).

// • obterSobrenome() – que receba um nome como parâmetro e retorne o último nome do aluno em letras minúsculas.

// • contarVogais() – que receba um nome e retorne o número de vogais deste, com dois dígitos.

// btSenha = document.getElementById("btSenha");
// btSenha.addEventListener("click", obterDados);

// var vogais = [];

// function obterDados () {
//     var inNome = document.getElementById("inNome");

//     var outResposta = document.getElementById("outResposta");

//     var nome = inNome.value;

//     validarNome(nome);
//     obterSobrenome(nome);
//     contarVogais(nome);

//     outResposta.textContent = "Senha inicial: " + obterSobrenome(nome) + contarVogais(nome);
// }

// function validarNome (nome) {
//     let validacao = nome.split(" ");

//     if (validacao.length <= 1) {
//         alert("Por favor digite o nome completo!!");
//     }
// }

// function obterSobrenome (nome) {
//     let partes = nome.split(" ");

//     var sobrenome = partes[partes.length - 1].toLowerCase();

//     return sobrenome;
// }

// function contarVogais (nome) {
//     var totalVogais = 0;

//     var vogais = ["a", "ã", "à", "á", "e", "ê", "é", "i", "í", "o", "ó", "ô", "u"];


//     for (i = 0; i < nome.length; i++ ) {
//         if(vogais.indexOf(nome.toLowerCase().charAt(i)) != -1) {
//             totalVogais++;
//         }
//     }

//     var zeroVogal = (totalVogais < 10) ? "0" + totalVogais : totalVogais;

//     return zeroVogal;
// }

// ----------------------------------------------------------

// c) Elaborar um programa para uma veterinária, o qual leia o preço de uma vacina e se o cliente possui ou não convênio. Caso possua algum convênio, exibir uma caixa de seleção com os convênios “Amigo dos Animais” e “Saúde Animal”. O programa deve exibir o valor do desconto (10% sem convênio; 20% para “Amigo dos Animais”; 50% para “Saúde Animal”) e o valor a ser pago. Criar a função:

// • calcularDesconto() – que receba os parâmetros valor e taxa de desconto. Retornar o valor do desconto.

// var rbSim = document.getElementById("rbSim");
// rbSim.addEventListener("change", exibirConteudo);

// var rbNao = document.getElementById("rbNao");
// rbNao.addEventListener("change", exibirConteudo);

// function exibirConteudo () {
//     if (rbSim.checked) {
//         pBox.className = "exibir";
//     } else {
//         pBox.className = "oculta";
//     }
// }

// var btDesconto = document.getElementById("btDesconto");
// btDesconto.addEventListener("click", mostrarDados);

// function mostrarDados () {
//     var inValorVacina = document.getElementById("inValorVacina");
//     var inConvenio = document.getElementById("inConvenio");

//     var outResposta01 = document.getElementById("outResposta01")
//     var outResposta02 = document.getElementById("outResposta02")

//     var valor = inValorVacina.value;
//     var convenio = inConvenio.value;

//     var taxaDesconto = 0;

//     if (rbNao.checked) {
//         taxaDesconto = 0.1;

//     } else if (convenio == "amigo") {
//         taxaDesconto = 0.2;

//     } else if (convenio == "saude") {
//         taxaDesconto = 0.5;
//     }

//     calcularDesconto(valor, taxaDesconto);

//     outResposta01.textContent = "Desconto R$: " + calcularDesconto(valor, taxaDesconto).toFixed(2);
//     outResposta02.textContent = "A pagar R$: " + (valor - calcularDesconto(valor, taxaDesconto)).toFixed(2);
// }

// function calcularDesconto (valor, taxaDesconto) {
//     var desconto = valor * taxaDesconto;

//     return desconto;
// }
