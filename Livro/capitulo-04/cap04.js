// function mostrarTabuada() {
//     // cria referência aos elementos da página
//     var inNumero = document.getElementById("inNumero");
//     var outTabuada = document.getElementById("outTabuada");

//     // converte conteúdo do campo inNumero
//     var numero = Number(inNumero.value);

//     // valida o número
//     if (numero == 0 || isNaN(numero)) {
//         alert("Informe um número válido...");
//         inNumero.focus();
//         return;
//     }

//     // cria uma variável do tipo String, que irá concatenar a resposta
//     var resposta = "";

//     // cria um laço de repetição
//     for (var i = 1; i <= 10; i++) {
//         // a variável resposta vai acumulando os novos conteúdos
//         resposta = resposta + numero + " x " + i + " = " + numero * i + "\n";
//     }
    
//     // o conteúdo da tag pre é alterado para exibir a tabuada do num
//     outTabuada.textContent = resposta;
// }

// // cria referência ao botão e após associa function ao evento click
// var btMostrar = document.getElementById("btMostrar");
// btMostrar.addEventListener("click", mostrarTabuada);

// ----------------------------------------------------------

// function listarNumeros() {
//     // cria referência aos elementos que a function irá manipular
//     var inNumero = document.getElementById("inNumero");

//     var outResposta = document.getElementById("outResposta");

//     var numero = Number(inNumero.value); // obtém o número informado

//     // verifica validade do número
//     if (numero == 0 || isNaN(numero)) {
//         alert("Informe um número válido...");
//         inNumero.focus();
//         return;
//     }

//     // inicializa variável resposta
//     var resposta = "Entre " + numero + " e 1: ";

//     // cria um for decrescente
//         for (var i = numero; i > 0; i = i - 1) {
//         // resposta vai acumulando números (e vírgulas)
//         resposta = resposta + i + ", ";
//     }
    
//     // altera o conteúdo de outResposta
//     outResposta.textContent = resposta;
// }
// // referencia elemento e após associa function ao evento click
// var btDecrescer = document.getElementById("btDecrescer");
// btDecrescer.addEventListener("click", listarNumeros);

// ----------------------------------------------------------

// // solicita o número e repete a leitura enquanto inválido
// do {
//     var num = Number(prompt("Número: "));
//     if (num == 0 || isNaN(num)) {
//         alert("Digite um número válido...");
//     }
// } while (num == 0 || isNaN(num));

// // declara e inicializa variável que irá exibir pares
// var pares = "Pares entre 1 e " + num + ": ";

// // isola o primeiro par (para evitar última vírgula)
// if (num > 1) {
//     pares = pares + "2";
// }

// // laço para acumular pares (inicia em 4, pois o 2 já foi atribuído)
// for (var i = 4; i <= num; i = i + 2) {
//     pares = pares + ", " + i;
// }

// // exibe lista dos números pares
// alert(pares);

// ----------------------------------------------------------

// alert("Digite 0 para sair");

// // início da repetição
// do {
//     var num = Number(prompt("Número: "));

//     if (num == 0 || isNaN(num)) {
//         var sair = confirm("Confirma saída?"); // solicita confirmação do usuário
        
//         if (sair) {
//             break; // sai da repetição
//         } else {
//             continue; // volta ao início do laço
//         }
//     }

//     // se par, mostra o dobro; ímpar, mostra o triplo
//     if (num % 2 == 0) {
//         alert("O dobro de " + num + " é: " + num * 2);
//     } else {
//         alert("O triplo de " + num + " é: " + num * 3);
//     }

// } while (true); // // enquanto verdade (só sai do laço, pelo break)

// alert("Bye, bye...");

// ----------------------------------------------------------

// // declara e inicializa contadores e acumuladores (variáveis globais)
// var numContas = 0;
// var valTotal = 0;

// // variável string que acumula as contas
// var resposta = "";

// function registrarConta() {
//     // cria referência aos elementos da página manipulados pela function
//     var inDescricao = document.getElementById("inDescricao");
//     var inValor = document.getElementById("inValor");

//     var outListaContas = document.getElementById("outListaContas");
//     var outTotal = document.getElementById("outTotal");

//     // obtém conteúdo dos campos
//     var descricao = inDescricao.value;
//     var valor = Number(inValor.value);

//     // verifica preenchimento dos campos
//     if (descricao == "" || valor == 0 || isNaN(valor)) {
//         alert("Informe os dados corretamente...");
//         inDescricao.focus();
//         return;
//     }

//     // adiciona valores ao contador e acumulador
//     numContas++;

//     valTotal = valTotal + valor;

//     // concatena as contas
//     resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n";

//     // altera o conteúdo das tags de resposta
//     outListaContas.textContent = resposta + "--------------------------------";
//     outTotal.textContent = numContas + " Conta(s) - Total R$: " +
//     valTotal.toFixed(2);
    
//     // limpa campos e posiciona cursor em inDescricao
//     inDescricao.value = "";
//     inValor.value = "";
//     inDescricao.focus();
// }

// // referencia elemento e após associa function ao evento click
// var btRegistrar = document.getElementById("btRegistrar");
// btRegistrar.addEventListener("click", registrarConta);

// ----------------------------------------------------------

