// function calcularMedia() {
//     // cria referência aos elementos da página
//     var inNome = document.getElementById("inNome");
//     var inNota1 = document.getElementById("inNota1");
//     var inNota2 = document.getElementById("inNota2");

//     var outSituacao = document.getElementById("outSituacao");
//     var outMedia = document.getElementById("outMedia");

//     // obtém os conteúdos dos campos de edição da página
//     var nome = inNome.value;
//     var nota1 = Number(inNota1.value);
//     var nota2 = Number(inNota2.value);

//     // calcula a média das notas
//     var media = (nota1 + nota2) / 2;

//     // apresenta a média (altera o conteúdo do elemento outMedia)
//     outMedia.textContent = "Média das Notas: " + media.toFixed(1);

//     // cria a condição
//     if (media >= 7) {
//         // altera o texto e estilo da cor do elemento outSituacao
//         outSituacao.textContent = "Parabéns " + nome + "! Você foi aprovado(a)";
//         outSituacao.style.color = "blue";
//     } else {
//         outSituacao.textContent = "Ops " + nome + "... Você foi reprovado(a)";
//         outSituacao.style.color = "red";
//     }
// }

// // cria uma referência ao elemento btResultado (botão)
// var btResultado = document.getElementById("btResultado");
// // registra um evento associado ao botão, para carregar uma função
// btResultado.addEventListener("click", calcularMedia);

// ----------------------------------------------------------

// function calcularPeso() {
//     // cria referência aos elementos manipulados pela function
//     var inNome = document.getElementById("inNome");

//     var rbMasculino = document.getElementById("rbMasculino");
//     var rbFeminino = document.getElementById("rbFeminino");

//     var inAltura = document.getElementById("inAltura");

//     var outResposta = document.getElementById("outResposta");

//     // obtém o conteúdo dos campos de edição da página
//     var nome = inNome.value;
//     var masculino = rbMasculino.checked;
//     var feminino = rbFeminino.checked;
//     var altura = Number(inAltura.value);

//     // verifica se nome foi preenchido e sexo selecionado
//     if (nome == "" || (masculino == false && feminino == false)) {
//         alert("Por favor, informe o nome e selecione o sexo...");
//         inNome.focus(); // posiciona (joga o foco) no campo de edição inNome
//         return;
//     }

//     // se altura vazio (0) ou NaN: Not-a-Number (um texto for informado, por exemplo)
//     if (altura == 0 || isNaN(altura)) {
//         alert("Por favor, informe a altura corretamente...");
//         inAltura.focus();
//         return;
//     }

//     // se masculino (significa se masculino == true)
//     if (masculino) {
//         var peso = 22 * Math.pow(altura, 2); // Math.pow eleva ao quadrado
//     } else {
//         var peso = 21 * Math.pow(altura, 2);
//     }

//     // apresenta a resposta (altera o conteúdo da linha outResposta)
//     outResposta.textContent = nome + ": Seu peso ideal é " +
//     peso.toFixed(3) + " kg";
// }
// // cria referência ao elemento btCalcular e registra evento associado a calcularPeso
// var btResultado = document.getElementById("btCalcular");
// btCalcular.addEventListener("click", calcularPeso);

// function limparCampos() {
//     // Limpa os conteúdos dos elementos
//     document.getElementById("inNome").value = "";
//     document.getElementById("rbMasculino").checked = false;
//     document.getElementById("rbFeminino").checked = false;
//     document.getElementById("inAltura").value = "";
//     document.getElementById("outResposta").textContent = "";
    
//     // posiciona (joga o foco) no elemento inNome
//     document.getElementById("inNome").focus();
// }

// var btLimpar = document.getElementById("btLimpar");
// btLimpar.addEventListener("click", limparCampos);

// ----------------------------------------------------------

// var bairro = prompt("Bairro de Entrega: ");
// var taxaEntrega;

// switch (bairro) {
//     case "Centro":
//         taxaEntrega = 5.00;
//         break;

//     case "Fragata":
//     case "Três Vendas":
//         taxaEntrega = 7.00;
//         break;

//     case "Laranjal":
//         taxaEntrega = 10.00;
//         break;

//     default:
//         taxaEntrega = 8.00;
// }

// alert("Taxa R$: " + taxaEntrega.toFixed(2));

// ----------------------------------------------------------

// function calcularFuso() {
//     // cria uma referência aos elementos da página
//     var inHoraBrasil = document.getElementById("inHoraBrasil");
//     var outHoraFranca = document.getElementById("outHoraFranca");

//     // obtém e converte o conteúdo do campo inHoraBrasil
//     var horaBrasil = Number(inHoraBrasil.value);

//     // se não preencheu ou Not-a-Number (NaN)
//         if (inHoraBrasil.value == "" || isNaN(horaBrasil)) {
//         alert("Informe a hora no Brasil corretamente"); // exibe alerta
//         inHoraBrasil.focus(); // posiciona em inHoraBrasil
//         return;
//     }

//     var horaFranca = horaBrasil + 5; // calcula o horário na França

//     // se passar das 24 horas na Franca ...
//     if (horaFranca > 24) {
//         horaFranca = horaFranca - 24; // ... subtrai 24
//     }

//     // exibe resposta (altera conteúdo do elemento outHoraFranca)
//     outHoraFranca.textContent = "Hora na França: " + horaFranca.toFixed(2);
// }

// // cria uma referência ao elemento btExibir e registra event associado a function
// var btExibir = document.getElementById("btExibir");
// btExibir.addEventListener("click", calcularFuso);

// ----------------------------------------------------------

// function calcularRaiz() {
//     // cria uma referência aos elementos da página
//     var inNumero = document.getElementById("inNumero");
//     var outResposta = document.getElementById("outResposta");
//     var numero = Number(inNumero.value); // obtém conteúdo do campo inNumero

//     // se não preencheu ou Not-a-Number (NaN)
//     if (numero == 0 || isNaN(numero)) {
//         alert("Informe um número válido..."); // exibe alerta
//         inNumero.focus(); // posiciona no campo inNumero
//         return; // retorna
//     }

//     var raiz = Math.sqrt(numero); // calcula raiz quadrada do número
//     // se valor da variável raiz igual a este valor arredondado para baixo...
//     if (raiz == Math.floor(raiz)) {
//         outResposta.textContent = "Raiz: " + raiz; // mostra a raiz
//     } else {
//         // senão, exibe mensagem indicando que não há raiz exata
//         outResposta.textContent = "Não há raiz exata para " + numero;
//     }
// }

// // cria referência ao elemento btExibir e registra evento que irá carregar function
// var btExibir = document.getElementById("btExibir");
// btExibir.addEventListener("click", calcularRaiz);

// ----------------------------------------------------------

// function calcularNotas() {
//     // cria uma referência aos elementos da página
//     var inSaque = document.getElementById("inSaque");

//     var outNotasCem = document.getElementById("outNotasCem");
//     var outNotasCinquenta = document.getElementById("outNotasCinquenta");
//     var outNotasDez = document.getElementById("outNotasDez");

//     // Limpa mensagens (caso, segunda execução)
//     outNotasCem.textContent = "";
//     outNotasCinquenta.textContent = "";
//     outNotasDez.textContent = "";
//     var saque = Number(inSaque.value); // converte conteúdo do campo inSaque

//     // se não preencheu ou Not-a-Number (NaN)
//     if (saque == 0 || isNaN(saque)) {
//         alert("Informe o valor do saque corretamente"); // exibe alerta
//         inSaque.focus(); // posiciona em inSaque
//         return;
//     }

//     // verifica se saque não é múltiplo de 10
//     if (saque % 10 != 0) {
//         alert("Valor inválido para notas disponíveis (R$ 10, 50, 100)");
//         inSaque.focus();
//         return;
//     }

//     // calcula notas de 100, 50 e 10
//     var notasCem = Math.floor(saque / 100);
//     var resto = saque % 100;
//     var notasCinquenta = Math.floor(resto / 50);

//     resto = resto % 50;

//     var notasDez = Math.floor(resto / 10);

//     // exibe as notas apenas se houver
//     if (notasCem > 0) {
//         outNotasCem.textContent = "Notas de R$ 100: " + notasCem;
//     }

//     if (notasCinquenta > 0) {
//         outNotasCinquenta.textContent = "Notas de R$ 50: " +
//         notasCinquenta;
//     }

//     if (notasDez > 0) {
//         outNotasDez.textContent = "Notas de R$ 10: " + notasDez;
//     }
// }

// // cria referência ao elemento btExibir e associa function ao evento click
// var btExibir = document.getElementById("btExibir");
// btExibir.addEventListener("click", calcularNotas);

// ----------------------------------------------------------