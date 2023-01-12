// ----------------------------------------------------------

// a) Elaborar um programa para gerar uma tabela com os jogos de uma fase eliminatória de um campeonato. O programa deve conter três funções (a serem executadas no evento click de cada botão) para: 1) validar o preenchimento, adicionar um clube ao vetor e listar os clubes; 2) listar os clubes (se houver); 3) montar a tabela de jogos, no formato primeiro x último, segundo x penúltimo e assim por diante. Exibir mensagem e não listar a tabela de jogos, caso o número de clubes informados seja ímpar.

// var times = [];

// btAdicionar = document.getElementById("btAdicionar");
// btAdicionar.addEventListener("click", cadastrarTimes);

// function cadastrarTimes () {
//     var inClube = document.getElementById("inClube");
//     var clube = inClube.value; // Lê o nome do time

//     if (clube == "") {
//         alert("Por favor digite o nome do time!");
//         inClube.focus();
//         return;
//     }

//     times.push(clube);

//     inClube.value = "";
//     inClube.focus();

//     listarTimes();
// }

// btListar = document.getElementById("btListar");
// btListar.addEventListener("click", listarTimes);

// function listarTimes () {

//     var outLista = document.getElementById("outLista");

//     var lista = "";

//     if (times.length == 0) {
//         alert("Não há times cadastrados!");
//         return;
//     }

//     for (i = 0; i < times.length; i++){
//         lista += (i + 1) + ". " + times[i] + "\n";
//     }

//     outLista.textContent = lista;
// }

// btJogos = document.getElementById("btJogos");
// btJogos.addEventListener("click", tabelaJogos);

// function tabelaJogos () {
//     var outLista = document.getElementById("outLista");

//     var copiaTimes = times.slice();

//     var tabela = "";

//     if ((copiaTimes.length % 2) != 0) {
//         alert("Por favor, coloque um número par de times para formar a tabela! \nTimes Cadastrados: " + times.   length);
//     } else {
//         for (i = 0; i < copiaTimes.length; i++) {
//             tabela += copiaTimes[0] + " X " + copiaTimes[(copiaTimes.length - 1)] + "\n";
//             var retirar =  copiaTimes.pop();
//             retirar = copiaTimes.shift();
//         }

//         outLista.textContent = tabela;
//     }
// }

// ----------------------------------------------------------

// b) Elaborar um programa que adicione números a um vetor. O programa deve impedir a inclusão de números repetidos. Exibir a lista de números a cada inclusão. Ao clicar no botão Verificar Ordem, o programa deve analisar o conteúdo do vetor e informar se os números estão ou não em ordem crescente.

// var btAdicionar = document.getElementById("btAdicionar");
// btAdicionar.addEventListener("click", adicionarNumeros);

// var valores = [];

// function adicionarNumeros () {
//     var inNumero = document.getElementById("inNumero");
//     var numero = Number(inNumero.value);

//     var outResposta01 = document.getElementById("outResposta01");

//     if (numero == "" || isNaN(numero)) {
//         alert("Digite um número válido!");
//         return;
//     }

//     valores.push(numero);

//     inNumero.value = "";
//     inNumero.focus(); 

//     outResposta01.textContent = "Números: " + valores.join(", ");
// }

// var btVerificar = document.getElementById("btVerificar");
// btVerificar.addEventListener("click", verificarOrdem);

// function verificarOrdem () {
//     var outResposta02 = document.getElementById("outResposta02");

//     var copiaValores = valores.slice();

//     copiaValores.sort(function (a, b) { return a - b });

//     if (JSON.stringify(copiaValores) == JSON.stringify(valores)) {
//         outResposta02.textContent = "Os números estão em ordem crescente";
//     } else {
//         outResposta02.textContent = "Atenção.. Os números não estão em ordem crescente";
//     }
// }

// ----------------------------------------------------------

// c) Elaborar um programa que leia nome e número de acertos de candidatos inscritos em um concurso. Listar os dados a cada inclusão. Ao clicar no botão Aprovados 2ª Fase, ler o número de acertos para aprovação dos candidatos para a 2ª fase do concurso. O programa deve, então, exibir os candidatos aprovados, ou seja, apenas os que obtiveram nota maior ou igual à nota informada. Exibir os candidatos aprovados em ordem decrescente de número de acertos. Caso nenhum candidato tenha sido aprovado, exibir mensagem.

// btAdicionar = document.getElementById("btAdicionar");
// btAdicionar.addEventListener("click", adicionarCandidato);

// var alunos = [];

// function adicionarCandidato () {
//     var inCandidatos = document.getElementById("inCandidatos");
//     var inAcertos = document.getElementById("inAcertos");

//     var outAprovados = document.getElementById("outAprovados");

//     var candidatos = inCandidatos.value;
//     var acertos = Number(inAcertos.value);

//     if (candidatos == "" | acertos == "" | isNaN(acertos)) {
//         alert("Por favor, complete os campos corretamente!");
//         inCandidatos.focus();
//         return;
//     }

//     alunos.push({nome: candidatos, nota: acertos})

//     inCandidatos.value = "";
//     inAcertos.value = "";

//     listaCandidatos();
// }

// var btListar = document.getElementById("btListar");
// btListar.addEventListener("click", listaCandidatos);

// function listaCandidatos () {

//     var lista = "";

//     for (i = 0; i < alunos.length; i++) {
//         lista += alunos[i].nome + " - " + alunos[i].nota + " Acertos\n";
//     }

//     outAprovados.textContent = lista;
// }

// var btAprovados = document.getElementById("btAprovados");
// btAprovados.addEventListener("click", candidatosAprovados);

// function candidatosAprovados () {
//     var quantidade = Number(prompt("Quantos acertos é necessário para passar de fase ?"));

//     var lista = "";

//     for (i = 0; i < alunos.length; i++) {
//         if (alunos[i].nota >= quantidade) {
//             lista += alunos[i].nome + " - " + alunos[i].nota + " Acertos\n";
//         }
//     }

//     outAprovados.textContent = lista;
// }

// ----------------------------------------------------------

// d) Elaborar um programa que leia as últimas notícias da sua região e armazene-as em um vetor. Exibir na página, a cada inclusão, somente a quantidade de notícias cadastradas. O programa deve conter um botão que solicite o número de notícias que o usuário deseja visualizar e, então, liste as notícias em ordem inversa da inclusão. Ou seja, apenas as notícias mais recentes devem ser listadas, de acordo com o número informado pelo usuário. Validar esse número para que seja inferior ou igual à quantidade de notícias cadastradas.

// var btAdicionar = document.getElementById("btAdicionar");
// btAdicionar.addEventListener("click", criarNoticia);

// var texto = [];

// function criarNoticia () {
//     var inNoticia = document.getElementById("inNoticia");

//     var noticia = inNoticia.value;

//     if (noticia == "") {
//         alert("Por favor, digite uma notícia antes de adicioná-la!!");
//         inNoticia.focus();
//         return;
//     }

//     texto.push(noticia);

//     inNoticia.value = "";
//     inNoticia.focus();

//     criarLista();
// }

// function criarLista () {
//     var outNoticia = document.getElementById("outNoticia");

//     var resposta = "";

//     for (i = 0; i < texto.length; i++) {
//         resposta += (i + 1) + "ª) " + texto[i] + "\n" 
//     }

//     outNoticia.textContent = resposta;
// }

// var btListar = document.getElementById("btListar");
// btListar.addEventListener("click", ultimasNoticias);

// function ultimasNoticias () {
//     var quantidade = Number(prompt("Qunatas notícias você quer ver ?"));

//     if (quantidade > texto.length) {
//         alert("Você quer uma quantidade maior do que existe no sistema, por favor digite um número menor!");
//         return;
//     }

//     var copiaTexto = texto.slice();

//     copiaTexto.reverse();

//     var resposta = "";

//     for (i = 0; i < quantidade; i++) {
//         resposta += (copiaTexto.length - i)+ "ª) " + copiaTexto[i] + "\n";
//     }

//     outNoticia.textContent = resposta;
// }
