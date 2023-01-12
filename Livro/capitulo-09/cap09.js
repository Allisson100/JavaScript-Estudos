// ----------------------------------------------------------

// function adicionarTarefa() {
//     // cria referência ao campo de entrada de dados
//     var inTarefa = document.getElementById("inTarefa");
//     var tarefa = inTarefa.value; // obtém o conteúdo digitado
//     // se não informou ...

//     if (tarefa == "") {
//         alert("Informe a tarefa"); // exibe alerta
//         inTarefa.focus(); // posiciona no campo inTarefa
//         return; // retorna
//     }

//     // cria referência ao elemento divQuadro (local onde tag h5 será inserida)
//     var divQuadro = document.getElementById("divQuadro");
//     var h5 = document.createElement("h5"); // cria o elemento HTML h5
//     var texto = document.createTextNode(tarefa); // cria um texto

//     h5.appendChild(texto); // define que o texto será filho de h5
//     divQuadro.appendChild(h5); // ...e que h5 será filho de divQuadro

//     inTarefa.value = ""; // limpa o campo de edição
//     inTarefa.focus(); // jogo o cursor neste campo
// }

// // cria referência ao btAdicionar e após associa evento à função
// var btAdicionar = document.getElementById("btAdicionar");
// btAdicionar.addEventListener("click", adicionarTarefa);

// function selecionarTarefa() {
//     var h5 = document.getElementsByTagName("h5"); // obtém tags h5 da página
//     var numH5 = h5.length; // obtém número de tags h5

//     if (numH5 == 0) { // se zero...
//         alert("Não há tarefas para selecionar"); // exibe alerta
//         return; // retorna
//     }

//     var aux = -1; // variável auxiliar para indicar linha selecionada

//     // percorre a lista de elementos h5 inseridos na página
//     for (var i = 0; i < numH5; i++) {
//         // se tag é da class tarefaSelecionada (está selecionada)
//         if (h5[i].className == "tarefaSelecionada") {
//             h5[i].className = "tarefaNormal"; // troca para normal
//             aux = i; // muda valor da variável auxiliar
//             break; // sai da repetição
//         }
//     }

//     // se a linha que está selecionada é a última, irá voltar para a primeira
//     if (aux == numH5 - 1) {
//         aux = -1;
//     }

//     h5[aux + 1].className = "tarefaSelecionada"; // muda estilo da próxima tag h5
// }

// var btSelecionar = document.getElementById("btSelecionar");
// btSelecionar.addEventListener("click", selecionarTarefa);

// function retirarSelecionada() {
//     // cria referência ao elemento que irá "perder" um filho
//     var divQuadro = document.getElementById("divQuadro");
//     var h5 = document.getElementsByTagName("h5"); // obtém tags h5 da página
//     var numH5 = h5.length; // obtém quantidade de h5

//     var aux = -1; // variável auxiliar para indicar linha selecionada

//     // percorre a lista de elementos h5 inseridos na página
//     for (var i = 0; i < numH5; i++) {
//         // verifica className da tag h5
//         if (h5[i].className == "tarefaSelecionada") { // se selecionada
//             aux = i; // muda valor da variável aux
//             break; // sai da repetição
//         }
//     }

//     // se não há tarefa selecionada (ou se lista vazia...)
//     if (aux == -1) {
//         alert("Selecione uma tarefa para removê-la...");
//         return;
//     }

//     // solicita confirmação (exibindo o conteúdo da tag h5 selecionada)
//     if (confirm("Confirma Exclusão de '" + h5[aux].textContent +"'?")) {
//         divQuadro.removeChild(h5[aux]); // remove um dos filhos de divQuadro
//     }
// }

// var btRetirar = document.getElementById("btRetirar");
// btRetirar.addEventListener("click", retirarSelecionada);

// function gravarTarefas() {
//     var h5 = document.getElementsByTagName("h5"); // obtém tags h5 da página
//     var numH5 = h5.length; // obtém quantidade de h5

//     if (numH5 == 0) { // se zero...
//         alert("Não há tarefas para serem salvas"); // exibe alerta
//         return; // retorna
//     }

//     var tarefas = ""; // irá "acumular" as tarefas
//     // percorre a lista de elementos h5 inseridos na página
//     for (var i = 0; i < numH5; i++) {
//         tarefas += h5[i].textContent + ";"; // acumula conteúdo de cada h5
//     }

//     // grava as tarefas em localStorage, removendo o último ";"
//     localStorage.setItem("tarefasDia", tarefas.substr(0, tarefas.length - 1));

//     // confere se dados foram armazenados em localStorage
//     if (localStorage.getItem("tarefasDia")) {
//         alert("Ok! Tarefas Salvas");
//     }
// }

// var btGravar = document.getElementById("btGravar");
// btGravar.addEventListener("click", gravarTarefas);

// function recuperarTarefasSalvas() {
//     // verifica se há tarefas salvas no navegador do usuário
//     if (localStorage.getItem("tarefasDia")) {
//         // cria um vetor com a lista de tarefas (separadas pelo split(";"))
//         var tarefas = localStorage.getItem("tarefasDia").split(";");

//         // cria referência ao divQuadro (local onde as tags h5 serão inseridas)
//         var divQuadro = document.getElementById("divQuadro");

//         // percorre todas as tarefas
//         for (var i = 0; i < tarefas.length; i++) {
//             var h5 = document.createElement("h5"); // cria o elemento HTML h5
//             var texto = document.createTextNode(tarefas[i]); // cria um texto
            
//             h5.appendChild(texto); // define que o texto será filho de h5
//             divQuadro.appendChild(h5); // ...e que o h5 será filho de divQuadro
//         }
//     }
// }
// recuperarTarefasSalvas();

// ----------------------------------------------------------

// function exibirMoedas() {
//     // gera números aleatórios, entre 1 e 5, para cada moeda
//     var num1_00 = Math.ceil(Math.random() * 5);
//     var num0_50 = Math.ceil(Math.random() * 5);
//     var num0_25 = Math.ceil(Math.random() * 5);
//     var num0_10 = Math.ceil(Math.random() * 5);

//     // cria referência ao local onde as imagens serão inseridas
//     var divMoedas = document.getElementById("divMoedas");

//     // texto alternativo das imagens (para questões de acessibilidade)
//     var alt1_00 = "Moedas de um real";
//     var alt0_50 = "Moedas de Cinquenta Centavos";
//     var alt0_25 = "Moedas de Vinte e Cinco Centavos";
//     var alt0_10 = "Moedas de Dez Centavos";

//     // chama o método criarMoedas passando os argumentos
//     criarMoedas(num1_00, divMoedas, "1_00.png", alt1_00, "moeda1_00");
//     criarMoedas(num0_50, divMoedas, "0_50.png", alt0_50, "moeda0_50");
//     criarMoedas(num0_25, divMoedas, "0_25.png", alt0_25, "moeda0_25");
//     criarMoedas(num0_10, divMoedas, "0_10.png", alt0_10, "moeda0_10");
// }
// exibirMoedas(); // chama o método exibirMoedas

// function criarMoedas(num, pai, moeda, textoAlt, classe) {
//     // cria laço de repetição para inserir várias imagens de moedas na página
//     for (var i = 1; i <= num; i++) {
//         var novaMoeda = document.createElement("img"); // cria elemento img
//         novaMoeda.src = "img09/" + moeda; // atributo src
//         novaMoeda.textoAlt = textoAlt; // texto alternativo
//         novaMoeda.className = classe; // classe da moeda(css)
//         pai.appendChild(novaMoeda); // hierarquia DOM
//     }

//     var br = document.createElement("br"); // cria uma quebra de linha (br)
//     pai.appendChild(br);
// }

// function conferirSoma() {
//     // cria referência ao campo de entrada e obtém o seu conteúdo
//     var inSoma = document.getElementById("inSoma");
//     var soma = Number(inSoma.value);

//     // valida o preenchimento do campo
//     if (soma == 0 || isNaN(soma)) {
//         alert("Informe o valor da soma (use ponto para separar decimais)");
//         inSoma.focus();
//         return;
//     }

//     // captura divMoedas que é o local onde as moedas foram inseridas
//     var divMoedas = document.getElementById("divMoedas");

//     // captura as tags img filhas de divMoedas
//     var moedas = divMoedas.getElementsByTagName("img");
//     var totalMoedas = 0; // declara e inicializa acumulador

//     // percorre as tags img e verifica propriedade className
//     for (var i = 0; i < moedas.length; i++) {
//         if (moedas[i].className == "moeda1_00") {
//             totalMoedas += 1; // acumula 1 (para moedas de 1)

//         } else if (moedas[i].className == "moeda0_50") {
//             totalMoedas += 0.50; // acumula 0.50 (para moedas de 0.50)

//         } else if (moedas[i].className == "moeda0_25") {
//             totalMoedas += 0.25; // acumula 0.25 (para moedas de 0.25)

//         } else {
//             totalMoedas += 0.10; // acumula 0.10 (para moedas de 0.10)
//         }
//     }

//     var div = document.createElement("div"); // cria elemento div
//     var h3 = document.createElement("h3"); // cria elemento h3

//     // verifica se o valor informado é igual ao total de Moedas exibido
//     if (soma == totalMoedas.toFixed(2)) {
//         div.className = "alert alert-success"; // define a classe da div
//         var mensagem = "Parabéns!! Você acertou!"; // e mensagem a ser exibida

//     } else {
//         div.className = "alert alert-danger";
//         var mensagem = "Ops... A resposta correta é " + totalMoedas.toFixed(2);
//     }

//     var texto = document.createTextNode(mensagem); // cria elemento de texto
//     h3.appendChild(texto); // texto é filho de h3
//     div.appendChild(h3); // h3 é filho da div criada na function
//     divMoedas.appendChild(div); // e a div com alerta é filha de divMoedas
//     btConferir.disabled = true; // desabilita botão (resposta já foi exibida)
// }

// var btConferir = document.getElementById("btConferir");
// btConferir.addEventListener("click", conferirSoma);

// var btExibir = document.getElementById("btExibir");
// btExibir.addEventListener("click", function() {
//     location.reload();
// });

// ----------------------------------------------------------

// recuperarFilmes();

// var btAdicionar = document.getElementById("btAdicionar");
// btAdicionar.addEventListener("click", adicionarFilme);

// function adicionarFilme() {
//     // cria referência aos campos de entrada
//     var inTitulo = document.getElementById("inTitulo");
//     var inGenero = document.getElementById("inGenero");

//     var titulo = inTitulo.value; // obtém conteúdo dos campos
//     var genero = inGenero.value;

//     // valida preenchimento
//     if (titulo == "" || genero == "") {
//         alert("Informe corretamente os dados");
//         inTitulo.focus();
//         return;
//     }

//     // cria referência ao elemento tbFilmes
//     var tbFilmes = document.getElementById("tbFilmes");

//     // chama function que irá inserir filme na tabela inserirLinha(tbFilmes, titulo, genero);
//     // chama function que irá gravar dados em localStorage
//     gravarFilme(titulo, genero);

//     inTitulo.value = ""; // limpa campos de entrada
//     inGenero.value = "";
//     inTitulo.focus(); // posiciona o cursor em inTitulo
// }

// function gravarFilme(titulo, genero) {
//     // se há filmes salvos em localStorare ...
//     if (localStorage.getItem("filmesTitulo")) {
//         // ... obtém os dados e acrescenta ";" e o título/gênero informado
//         var filmesTitulo = localStorage.getItem("filmesTitulo") + ";" + titulo;
//         var filmesGenero = localStorage.getItem("filmesGenero") + ";" + genero;
        
//         localStorage.setItem("filmesTitulo", filmesTitulo); // grava dados
//         localStorage.setItem("filmesGenero", filmesGenero); // em localStorage

//     } else {
//         // senão, é a primeira inclusão (salva sem delimitador)
//         localStorage.setItem("filmesTitulo", titulo);
//         localStorage.setItem("filmesGenero", genero);
//     }
// }

// function inserirLinha(tabela, titulo, genero) {
//     var linha = tabela.insertRow(-1); // adiciona uma linha na tabela
//     var col1 = linha.insertCell(0); // cria colunas na linha inserida
//     var col2 = linha.insertCell(1);
//     var col3 = linha.insertCell(2);

//     col1.textContent = titulo; // joga um conteúdo em cada célula
//     col2.textContent = genero;
//     col3.innerHTML = "<input type='checkbox'>"; // innerHTML renderiza código
// }

// function recuperarFilmes() {
//     // se houver dados salvos em localStorage
//     if (localStorage.getItem("filmesTitulo")) {
//         // obtém conteúdo e converte em elementos de vetor (na ocorrência ";")
//         var titulos = localStorage.getItem("filmesTitulo").split(";");
//         var generos = localStorage.getItem("filmesGenero").split(";");

//         // cria referência ao elemento tbFilmes
//         var tbFilmes = document.getElementById("tbFilmes");

//         // percorre elementos do vetor e os insere na tabela
//         for (var i = 0; i < titulos.length; i++) {
//             inserirLinha(tbFilmes, titulos[i], generos[i]);
//         }
//     }
// }

// // cria referência ao checkbox ckTodos (na linha de título da tabela)
// var ckTodos = document.getElementById("ckTodos");

// // executa função anônima quando houver uma troca de status
// ckTodos.addEventListener("change", function () {
//     // cria referência à tabela e aos campos input (filhos da tabela)
//     var tbFilmes = document.getElementById("tbFilmes");
//     var ckExcluir = tbFilmes.getElementsByTagName("input");

//     var status = ckTodos.checked; // obtém status de ckTodos ...

//     // ... e percorre os demais checkbox para aplicar este status
//     for (var i = 1; i < ckExcluir.length; i++) {
//         ckExcluir[i].checked = status;
//     }
// });

// var btExcluir = document.getElementById("btExcluir");
// btExcluir.addEventListener("click", removerFilmes);

// function removerFilmes() {
//     // cria referência à tabela e aos campos input (filhos da tabela)
//     var tbFilmes = document.getElementById("tbFilmes");
//     var ckExcluir = tbFilmes.getElementsByTagName("input");

//     var temSelecionado = false; // para verificar se há filmes selecionados

//     // percorre campos input type checkbox da tabela (exceto "Todos" no título)
//     for (var i = 1; i < ckExcluir.length; i++) {
//         if (ckExcluir[i].checked) { // se está selecionado
//             temSelecionado = true; // muda valor da "flag"
//             break; // sai da repetição
//         }
//     }

//     // se não temSelecionado (se valor da variável é false)
//     if (!temSelecionado) {
//         alert("Não há filmes selecionados para exclusão");
//         return;
//     }

//     // solicita confirmação de exclusão dos filmes selecionados
//     if (confirm("Confirma Exclusão dos Filmes Selecionados?")) {
//         // exclui conteúdo armazenado em localStorage
//         localStorage.removeItem("filmesTitulo");
//         localStorage.removeItem("filmesGenero");

//         // primeiro irá gravar em localStorage os filmes não selecionados
//         for (i = 1; i < ckExcluir.length; i++) {
//             // se não está selecionado (para exclusão)
//             if (!ckExcluir[i].checked) {
//                 // obtém o conteúdo da tabela (coluna 0: título; coluna 1: gênero)
//                 var titulo = tbFilmes.rows[i].cells[0].textContent;
//                 var genero = tbFilmes.rows[i].cells[1].textContent;
//                 gravarFilme(titulo, genero); // chama gravarFilme com dados da tabela
//             }
//         }

//         // agora irá remover as linhas selecionadas (do fim para o início)
//         for (i = ckExcluir.length - 1; i > 0; i--) {
//             if (ckExcluir[i].checked) {
//                 tbFilmes.deleteRow(i); // remove a linha
//             }
//         }

//         ckExcluir[0].checked = false; // desmarca ckTodos (que é o input0)
//     }
// }


// ----------------------------------------------------------