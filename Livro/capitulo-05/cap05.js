// var pacientes = []; // declara vetor global

// function adicionarPaciente() {
//     // cria referência aos elementos de entrada e saída de dados da página
//     var inPaciente = document.getElementById("inPaciente");

//     var outLista = document.getElementById("outLista");

//     var nome = inPaciente.value; // obtém nome do paciente

//     // verifica preenchimento do nome do paciente
//     if (nome == "") {
//         alert("Informe o nome do paciente");
//         inPaciente.focus();
//         return;
//     }

//     pacientes.push(nome); // adiciona o nome no final do vetor

//     var lista = ""; // string para concatenar pacientes

//     // percorre os elementos do vetor
//     for (i = 0; i < pacientes.length; i++) {
//         lista += (i + 1) + ". " + pacientes[i] + "\n";
//     }

//     // altera o conteúdo da tag outLista
//     outLista.textContent = lista;
    
//     // limpa campo e posiciona cursor em inPaciente
//     inPaciente.value = "";
//     inPaciente.focus();
// }

// // cria referência ao btAdicionar e associa function ao evento click
// var btAdicionar = document.getElementById("btAdicionar");
// btAdicionar.addEventListener("click", adicionarPaciente);

// function atenderPaciente() {
//     // verifica se vetor pacientes está vazio
//     if (pacientes.length == 0) {
//         alert("Não há pacientes na lista de espera");
//         inPaciente.focus();
//         return;
//     }

//     // cria referência aos elementos de saída de dados
//     var outAtendimento = document.getElementById("outAtendimento");
//     var outLista = document.getElementById("outLista");

//     // remove paciente do início da fila (e obtém nome)
//     var atender = pacientes.shift();

//     // exibe nome do paciente em atendimento
//     outAtendimento.textContent = atender;

//     // string para concatenar pacientes
//     var lista = "";

//     // percorre os elementos do vetor
//     for (i = 0; i < pacientes.length; i++) {
//         lista += (i + 1) + ". " + pacientes[i] + "\n";
//     }

//     // altera o conteúdo da tag outLista
//     outLista.textContent = lista;
// }

// var btAtender = document.getElementById("btAtender");
// btAtender.addEventListener("click", atenderPaciente);

// function adicionarUrgencia() {
//     // cria referência aos elementos de entrada e saída de dados da página
//     var inPaciente = document.getElementById("inPaciente");

//     var outLista = document.getElementById("outLista");

//     var nome = inPaciente.value; // obtém nome do paciente

//     // verifica preenchimento do nome do paciente
//     if (nome == "") {
//         alert("Informe o nome do paciente");
//         inPaciente.focus();
//         return;
//     }

//     pacientes.unshift(nome); // adiciona o nome no final do vetor

//     var lista = ""; // string para concatenar pacientes

//     // percorre os elementos do vetor
//     for (i = 0; i < pacientes.length; i++) {
//         lista += (i + 1) + ". " + pacientes[i] + "\n";
//     }

//     // altera o conteúdo da tag outLista
//     outLista.textContent = lista;
    
//     // limpa campo e posiciona cursor em inPaciente
//     inPaciente.value = "";
//     inPaciente.focus();
// }
    
// // cria referência ao btAdicionar e associa function ao evento click
// var btUrgencia = document.getElementById("btUrgencia");
// btUrgencia.addEventListener("click", adicionarUrgencia);

// ----------------------------------------------------------

// var idades = [5, 6, 8, 3, 0, 6];
// alert(idades.indexOf(6)); // retorna 1
// alert(idades.lastIndexOf(6)); // retorna 5
// alert(idades.indexOf(7)); // retorna -1

// ----------------------------------------------------------

// // declara vetor de escopo global que irá conter os números já apostados
// var erros = [];

// // gera um número aleatório entre 1 e 100
// var sorteado = Math.floor(Math.random() * 100) + 1;

// // declara constante com o número de chances
// const CHANCES = 6;

// function apostarNumero() {
//     // cria referência ao campo de entrada e obtém seu conteúdo
//     var inNumero = document.getElementById("inNumero");
//     var numero = Number(inNumero.value);

//     // valida o número
//     if (numero <= 0 || numero > 100 || isNaN(numero)) {
//         alert("Informe um número válido...");
//         inNumero.focus();
//         return;
//     }

//     // referencia espaços das saídas de dados
//     var outDica = document.getElementById("outDica");
//     var outErros = document.getElementById("outErros");
//     var outChances = document.getElementById("outChances");

//     // se aposta do jogador for igual ao número sorteado
//     if (numero == sorteado) {
//         alert("Parabéns!! Você Acertou!!!");
//         // troca status dos botões
//         btApostar.disabled = true;
//         btJogar.className = "exibe";
//         outDica.textContent = "Parabéns!! Número sorteado: " + sorteado;
//     } else {
//         // se número existe no vetor erros
//         if (erros.indexOf(numero) >= 0) {
//             alert("Você já apostou o número " + numero + ". Tente outro...");

//         } else {
//             erros.push(numero); // adiciona número ao vetor

//             var numErros = erros.length; // obtém tamanho do vetor
//             var numChances = CHANCES - numErros; // calcula nº de chances

//             // exibe nº de erros, conteúdo do vetor e nº de chances
//             outErros.textContent = numErros + " (" + erros.join(", ") + ")";
//             outChances.textContent = numChances;

//             if (numChances == 0) {
//                 alert("Suas chances acabaram...");
//                 btApostar.disabled = true;
//                 btJogar.className = "exibe";
//                 outDica.textContent = "Game Over!! Número Sorteado: " +
//                 sorteado;

//             } else {
//                 // usa operador ternário (condicional) para mensagem da dica
//                 var dica = numero < sorteado ? "maior" : "menor";
//                 outDica.textContent = "Dica: Tente um número " + dica + " que " + numero;
//             }
//         }
//     }

//     // Limpa campo de entrada e posiciona cursor neste campo
//     inNumero.value = "";
//     inNumero.focus();
// }
// var btApostar = document.getElementById("btApostar");
// btApostar.addEventListener("click", apostarNumero);

// function jogarNovamente() {
//     location.reload(); // recarrega a página
// }

// var btJogar = document.getElementById("btJogar");
// btJogar.addEventListener("click", jogarNovamente);

// ----------------------------------------------------------

// var carros = []; // declara vetor global

// function adicionarCarros() {
//     // Cria referência aos elementos contendo os dados de entrada
//     var inModelo = document.getElementById("inModelo");
//     var inPreco = document.getElementById("inPreco");

//     var modelo = inModelo.value; // obtém conteúdo dos campos
//     var preco = Number(inPreco.value);

//     // verifica preenchimento dos campos
//     if (modelo == "" || preco == 0 || isNaN(preco)) {
//         alert("Informe corretamente os dados");
//         inModelo.focus();
//         return;
//     }

//     // adiciona dados ao vetor de objetos
//     carros.push({ modelo: modelo, preco: preco });

//     // limpa campos e posiciona cursor em inModelo
//     inModelo.value = "";
//     inPreco.value = "";
//     inModelo.focus();
//     listarCarros(); // chama function que lista os carros
// }

// // cria referência ao btAdicionar e associa function ao evento click deste botão
// var btAdicionar = document.getElementById("btAdicionar");
// btAdicionar.addEventListener("click", adicionarCarros);

// function listarCarros() {
//     // verifica se vetor está vazio
//     if (carros.length == 0) {
//         alert("Não há carros na lista");
//         return;
//     }

//     var lista = ""; // para concatenar lista de carros

//     // percorre os elementos do vetor
//     for (var i = 0; i < carros.length; i++) {
//         // adiciona à lista, cada objeto do vetor
//         lista += carros[i].modelo + " - R$: " + carros[i].preco.toFixed(2) + "\n";
//     }

//     // referencia elemento e altera conteúdo exibido
//     document.getElementById("outLista").textContent = lista;
// }

// var btListar = document.getElementById("btListar");
// btListar.addEventListener("click", listarCarros);

// function filtrarCarros() {
//     // faz a leitura do valor máximo a partir do método prompt
//     var maximo = Number(prompt("Qual o valor máximo que o cliente deseja pagar?"));

//     // se não preencheu ou conteúdo inválido ...
//     if (maximo == 0 || isNaN(maximo)) {
//         return; // ... retorna
//     }

//     // para concatenar lista de carros que obedecem ao critério de pesquisa / filtro
//     var lista = "";

//     // percorre todos os elementos do vetor
//     for (var i = 0; i < carros.length; i++) {
//         // verifica se o preço é inferior (ou igual) ao máximo
//         if (carros[i].preco <= maximo) {
//             lista += carros[i].modelo + " - R$: " + carros[i].preco.toFixed(2) + "\n";
//         }
//     }

//     var outLista = document.getElementById("outLista"); // cria referência a outLista

//     // se a lista esta vazia, significa que nenhum veículo foi encontrado (no for)
//     if (lista == "") {
//         outLista.textContent = "Não há carros com preço até R$ " + maximo.toFixed(2);
//     } else {
//         // senão, mostra os veículos obtidos
//         outLista.textContent = "Carros até R$ " + maximo.toFixed(2) + "\n------------------------\n" + lista;
//     }
// }

// var btFiltrar = document.getElementById("btFiltrar");
// btFiltrar.addEventListener("click", filtrarCarros);

// ----------------------------------------------------------

