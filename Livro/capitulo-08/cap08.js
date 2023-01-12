// ----------------------------------------------------------

// function trocarClube() {
//     // cria referência aos elementos da página
//     var imgClube = document.getElementById("imgClube");
//     var divTitulo = document.getElementById("divTitulo");

//     var clube; // define variável que irá receber o nome do clube

//     // verifica qual radiobutton está selecionado
//     if (rbBrasil.checked) {
//         clube = "Brasil";

//     } else if (rbPelotas.checked) {
//         clube = "Pelotas";

//     } else {
//         clube = "Farroupilha";
//     }

//     // define as classes de divTitulo: row e cores do clube
//     divTitulo.className = "row cores"+clube;

//     // modifica a imagem de acordo com a seleção do cliente
//     imgClube.src = "img/" + clube.toLowerCase() + ".png";
//     imgClube.className = "exibe"; // exibe a imagem
//     imgClube.alt = "Símbolo do " + clube; // modifica atributo alt
    
//     // salva no navegador a escolha do cliente
//     localStorage.setItem("clube", clube);
// }

// // captura os elementos do radiobutton
// var rbBrasil = document.getElementById("rbBrasil");
// var rbPelotas = document.getElementById("rbPelotas");
// var rbFarroupilha = document.getElementById("rbFarroupilha");

// // associa ao evento change a function trocarClube
// rbBrasil.addEventListener("change", trocarClube);
// rbPelotas.addEventListener("change", trocarClube);
// rbFarroupilha.addEventListener("change", trocarClube);

// function verificarClube() {
//     // se já estiver salvo algum clube
//     if (localStorage.getItem("clube")) {
//         var clube = localStorage.getItem("clube"); // obtém o nome do clube

//         // conforme o clube, marca um dos elementos do input type radio
//         if (clube == "Brasil") {
//             rbBrasil.checked = true;

//         } else if (clube == "Pelotas") {
//             rbPelotas.checked = true;

//         } else {
//             rbFarroupilha.checked = true;
//         }

//         trocarClube(); // chama a function que troca a imagem e as cores
//     }
// }

// // chama function que verifica se cliente já selecionou clube anteriormente
// verificarClube();

// ----------------------------------------------------------

// function incluirAposta() {
//     // cria referência aos elementos de entrada de dados da página
//     var inNome = document.getElementById("inNome");
//     var inPeso = document.getElementById("inPeso");

//     var nome = inNome.value; // conteúdo do campo nome
//     var peso = Number(inPeso.value); // conteúdo do campo peso (em número)

//     // se vazios ou Not-a-Number
//     if (nome == "" || peso == 0 || isNaN(peso)) {
//         alert("Informe nome e peso da aposta"); // exibe alerta
//         inNome.focus(); // joga cursor em nome
//         return; // abandona execução da function
//     }

//     // chama function que verifica se peso já foi apostado
//     if (verApostaExiste(peso)) {
//         alert("Alguém já apostou este peso, informe outro...");
//         inPeso.focus();
//         return;
//     }

//     // se houver dados salvos no localStorage
//     if (localStorage.getItem("melanciaNome")) {
//         // obtém o conteúdo já salvo e acrescenta ";" + dados da aposta
//         var melanciaNome = localStorage.getItem("melanciaNome") + ";" + nome;
//         var melanciaPeso = localStorage.getItem("melanciaPeso") + ";" + peso;

//         // salva os dados em localStorage
//         localStorage.setItem("melanciaNome", melanciaNome);
//         localStorage.setItem("melanciaPeso", melanciaPeso);

//     } else { // senão, é a primeira aposta (não tem ";"")
//         localStorage.setItem("melanciaNome", nome); // salva os dados
//         localStorage.setItem("melanciaPeso", peso);
//     }

//     mostrarApostas(); // chama function que mostra as apostas já salvas
//     inNome.value = ""; // limpa os campos de formulário
//     inPeso.value = "";
//     inNome.focus(); // joga o foco (cursor) no campo inNome
// }

// // cria referência ao botão e associa a ocorrência do evento click à function
// var btApostar = document.getElementById("btApostar");
// btApostar.addEventListener("click", incluirAposta);

// function verApostaExiste(peso) {
//     var existe = false; // valor inicial é false

//     // se existe algum dado salvo em localStorage...
//     if (localStorage.getItem("melanciaPeso")) {
//         // obtém seu conteúdo. A string é dividida em itens de vetor a cada ";"
//         var pesos = localStorage.getItem("melanciaPeso").split(";");

//         // verifica se existe com indexOf()
//         // O peso deve ser convertido em string, pois o vetor contém strings
//         if (pesos.indexOf(peso.toString()) >= 0) {
//             existe = true; // apenas neste caso troca o valor do "flag"
//         }
//     }
//     return existe; // retorna true ou false
// }

// function mostrarApostas() {
//     // cria referência ao elemento que exibe as apostas
//     var outApostas = document.getElementById("outApostas");

//     // se não há apostas armazenadas em localStorage
//     if (!localStorage.getItem("melanciaNome")) {
//         // limpa o espaço de exibição das apostas (para quando "Limpar Apostas")
//         outApostas.textContent = "";
//         return; // retorna (não executa os comandos abaixo)
//     }

//     // obtém o conteúdo das variáveis salvas no localStorage, separando-as
//     // em elementos de vetor a cada ocorrência do ";"
//     var nomes = localStorage.getItem("melanciaNome").split(";");
//     var pesos = localStorage.getItem("melanciaPeso").split(";");

//     var linhas = ""; // irá acumular as linhas a serem exibidas

//     // repetição para percorrer todos os elementos do vetor
//     for (var i = 0; i < nomes.length; i++) {
//         // concatena em linhas os nomes dos apostadores e suas apostas
//         linhas += nomes[i] + " - " + pesos[i] + "gr \n";
//     }

//     // exibe as linhas (altera o conteúdo do elemento outApostas)
//     outApostas.textContent = linhas;
// }

// // chama a function quando a página é carregada, para mostrar apostas salvas
// mostrarApostas();

// function verificarVencedor() {
//     // se não há apostas armazenadas em localStorage
//     if (!localStorage.getItem("melanciaNome")) {
//         alert("Não há apostas cadastradas");
//         return; // retorna (não executa os comandos abaixo)
//     }

//     // solicita o peso correto da melancia
//     var pesoCorreto = Number(prompt("Qual o peso correto da melancia?"));

//     // se não informou, retorna
//     if (pesoCorreto == 0 || isNaN(pesoCorreto)) {
//         return;
//     }

//     // obtém os dados armazenados, separando-os em elementos de vetor
//     var nomes = localStorage.getItem("melanciaNome").split(";");
//     var pesos = localStorage.getItem("melanciaPeso").split(";");

//     // valor inicial para vencedor é o da primeira aposta
//     var vencedorNome = nomes[0];
//     var vencedorPeso = Number(pesos[0]);

//     // percorre as apostas
//     for (var i = 1; i < nomes.length; i++) {
//         // calcula a diferença de peso do "vencedor" e da aposta atual
//         difVencedor = Math.abs(vencedorPeso - pesoCorreto);
//         difAposta = Math.abs(Number(pesos[i]) - pesoCorreto);

//         // se a diferença da aposta atual (no for) for menor que a do"vencedor"
//         if (difAposta < difVencedor) {
//             vencedorNome = nomes[i]; // troca o "vencedor"
//             vencedorPeso = Number(pesos[i]); // para este elemento
//         }
//     }

//     // monta mensagem com dados do vencedor
//     var mensagem = "Resultado - Peso Correto: " + pesoCorreto + "gr";
//     mensagem += "\n----------------------------------------------";
//     mensagem += "\nVencedor: " + vencedorNome;
//     mensagem += "\nAposta: " + vencedorPeso + "gr";
//     alert(mensagem);
// }

// var btVencedor = document.getElementById("btVencedor");
// btVencedor.addEventListener("click", verificarVencedor);

// function limparApostas() {
//     // solicita confirmação para excluir as apostas
//     if (confirm("Confirma exclusão de todas as apostas?")) {
//         localStorage.removeItem("melanciaNome"); // remove as variáveis salvas
//         localStorage.removeItem("melanciaPeso"); // em localStorage
//         mostrarApostas(); // exibe a listagem vazia
//     }
// }

// var btLimpar = document.getElementById("btLimpar");
// btLimpar.addEventListener("click", limparApostas);

// ----------------------------------------------------------

// a) Acrescentar no site da Loja de Esportes um contador de visitas do cliente ao site. Assim, na primeira visita do cliente à loja, exibir em um parágrafo do site a mensagem:

// Muito Bem-Vindo! Esta é a sua primeira visita ao nosso site.

// Nas próximas visitas, exibir:

// Que bom que você voltou! Esta é a sua visita de número x ao nosso site.

// var outResposta = document.getElementById ("outResposta");

// contador();
// soma();

// function contador() {
  
//     if (!localStorage.getItem("vezesVisitadas")) {
//         outResposta.textContent = "Muito Bem-Vindo! Esta é a sua primeira visita ao nosso site.";
//     } else {
//         outResposta.textContent = "Que bom que você voltou! Esta é a sua visita de número " + localStorage.getItem("vezesVisitadas") + " ao nosso site.";
//     }
// }

// function soma () {

//     if (localStorage.getItem("vezesVisitadas")) {
//         var vezes = localStorage.getItem("vezesVisitadas");
//         vezes++;
//         localStorage.setItem("vezesVisitadas", vezes);
//     } else {
//         localStorage.setItem("vezesVisitadas", 2);
//     }
// }

// ----------------------------------------------------------

// b) Elaborar um programa para cadastrar produtos na lista de compras da semana. Salvar e exibir a listagem dos produtos em ordem alfabética.

// criarLista();
        
// var btAdicionar = document.getElementById("btAdicionar");
// btAdicionar.addEventListener("click", addDados);

// function addDados () {
//     var inProduto = document.getElementById("inProduto");

//     var outResposta = document.getElementById("outResposta");

//     var produto = inProduto.value;

//     if (produto == "") {
//         alert("Por favor, digite o nome do produto!")
//         inProduto.focus();
//         return;
//     }

//     addProduto(produto);
//     criarLista();

//     inProduto.value = "";
//     inProduto.focus();
// }


// function addProduto (produto) {

//     if (localStorage.getItem("produto")) {
//         localStorage.setItem("produto", localStorage.getItem("produto") + ";" + produto);
//     } else {
//         localStorage.setItem("produto", produto);
//     }
// }

// function criarLista () {
    
//     var lista = "";

//     if (!localStorage.getItem("produto")) {
//         // limpa o espaço de exibição das apostas (para quando "LimparApostas")
//         outResposta.textContent = "";
//         return; // retorna (não executa os comandos abaixo)
//     }

//     var compras = localStorage.getItem("produto").split(";");
        
//     compras.sort (function (a , b) {
//         let x = a.toUpperCase(),
//             y = b.toUpperCase();
        
//         return x == y ? 0 : x > y ? 1 : -1;
//     })

//     console.log(compras);

//     for (var i = 0; i < compras.length; i++) {
//         compras[i] = compras[i][0].toUpperCase() + compras[i].substring(1).toLowerCase();

//         lista += compras[i] + "\n";
//     }

//     console.log(lista);

//     outResposta.textContent = "Produtos Adicionados\n------------------------------\n" + lista;
// }

// var btLimpar = document.getElementById("btLimpar");
// btLimpar.addEventListener("click", limparDados);

// function limparDados () {
//     localStorage.removeItem("produto");
//     outResposta.textContent = "";
//     inProduto.focus();
// }

// ----------------------------------------------------------

// c) Elaborar um programa para cadastrar os serviços a serem realizados por um auto center, que organize a ordem de execução dos serviços. Armazenar os serviços no navegador do usuário e a cada clique no botão Executar Serviço remover o primeiro serviço e exibi-lo na página. O programa deve atualizar o número de serviços pendentes quando: a) a página for aberta; b) um serviço for incluído; c) um serviço for removido.

// //OBS: TIVE DIFICULDADE EM FAZER ESSE EXERCICIO, MAS CONSEGUI FAZER. SEI QUE DEVE TER UMA MANEIRA DE REDUZIR O CÓDIGO, MAS POR ENQUANTO COMO ESTOU APRENDENDO ACHEI QUE FICOU BOM.


// if (localStorage.getItem("servicoPendente")) {
//     outServicosPendentes.textContent =  localStorage.getItem("pendentes");
//     outResposta.textContent = criarLista();

// } else {
//     outServicosPendentes.textContent =  localStorage.getItem("pendentes") * 0;
//     outResposta.textContent = "Todos os serviços foram executados!!";

// }

// var btAdicionar = document.getElementById("btAdicionar");
// btAdicionar.addEventListener("click", addDados);

// function addDados () {
//     var inServico = document.getElementById("inServico");

//     var outServicosPendentes = document.getElementById("outServicosPendentes");
//     var outResposta = document.getElementById("outResposta");

//     var servico = inServico.value;

//     if (servico == "") {
//         alert("Por favor adicioane o serviço!!");
//         inServico.focus();
//         return;
//     }

//     if (localStorage.getItem("pendentes")) {
//         if (localStorage.getItem("pendentes") < 1) {
//             localStorage.removeItem("pendentes");
//         }
//     }

//     adicionarServicoLocalStorage(servico); 
//     servicosPendentesLocalStorage();
//     criarLista();
    

//     outServicosPendentes.textContent =  localStorage.getItem("pendentes");
//     outResposta.textContent = criarLista();
// }

// function adicionarServicoLocalStorage (servico) {

//     if (localStorage.getItem("servicoPendente") == undefined) {
//         localStorage.removeItem("servicoPendente");
//     }

//     if (localStorage.getItem("servicoPendente")) {
//         localStorage.setItem("servicoPendente", localStorage.getItem("servicoPendente") + ";" + servico);
//     } else {
//         localStorage.setItem("servicoPendente", servico);
//     }

//     inServico.value = "";
//     inServico.focus();
// }

// function servicosPendentesLocalStorage () {
//     if (localStorage.getItem("pendentes")) {
//         var numero = Number(localStorage.getItem("pendentes"));
//         numero++;

//         localStorage.setItem("pendentes", numero);
//     } else {
//         localStorage.setItem("pendentes", 1);
//     }
// }

// function criarLista () {
//     if (!localStorage.getItem("servicoPendente")) {
//         outServicosPendentes.textContent = "";
//         return;
//     }

//     var array = localStorage.getItem("servicoPendente").split(";");
//     var lista = "";

//     lista += "Serviço em Execução\n----------------------------------------\n" + array[0];

//     return lista;
// }

// btExecutar = document.getElementById("btExecutar");
// btExecutar.addEventListener("click", executarServico);

// function executarServico () {


//     var diminuir = Number(localStorage.getItem("pendentes"));
//     diminuir--;
    
//     localStorage.setItem("pendentes", diminuir);

//     var array2 = localStorage.getItem("servicoPendente").split(";");

//     pendenteZero(array2);

//     outServicosPendentes.textContent =  pendenteZero();

//     trocaArray(array2);

//     if (array2 == "") {
//         outResposta.textContent = "Todos os serviços foram executados!!";
//         localStorage.removeItem("servicoPendente");
//         localStorage.removeItem("pendentes");
//     } else {
//         outResposta.textContent = "Serviço em Execução\n----------------------------------------\n" + array2[0];
//     }
// }

// function trocaArray (array2) {

//     var remover = array2.shift();

//     localStorage.setItem("servicoPendente", array2[0]);

//     for (var i = 1; i < array2.length; i++) {
//         localStorage.setItem("servicoPendente", localStorage.getItem("servicoPendente") + ";" + array2[i])
//     }
// }

// function pendenteZero (array2) {
//     var pend = 0;

//     if (localStorage.getItem("pendentes") > 0) {
//         pend = localStorage.getItem("pendentes");
//     } else {
//         pend = localStorage.getItem("pendentes") * 0;
//         localStorage.setItem("pendentes", pend);
//     }

//     return pend;
// }