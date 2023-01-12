// function mostrarOla() {
//     var nome = document.getElementById("nome").value;
//     document.getElementById("resposta").textContent = "Olá " + nome;
// }

// ----------------------------------------------------------

// // declara a função mostrarOla
// function mostrarOla() {
//     // obtém o conteúdo do campo (com id=) nome
//     var nome = document.getElementById("nome").value;

//     // exibe no parágrafo (resposta): "Olá " e o nome informado
//     document.getElementById("resposta").textContent = "Olá " + nome;
// }

// // cria uma referência ao botão (com id=) mostrar
// var mostrar = document.getElementById("mostrar");

// // registra para o botão "mostrar" um ouvinte para o evento click,
// // que ao ser clicado irá chamar a função mostrarOla
// mostrar.addEventListener("click", mostrarOla);

// ----------------------------------------------------------

// var x = 10 / 2 * Math.sqrt(9) - 4;
// alert(x);

// ----------------------------------------------------------

// function converterDuracao() {
//     // cria referência aos elementos da página
//     var inTitulo = document.getElementById("inTitulo");
//     var inDuracao = document.getElementById("inDuracao");

//     var outTitulo = document.getElementById("outTitulo");
//     var outResposta = document.getElementById("outResposta")

//     // obtém conteúdos dos campos de entrada
//     var titulo = inTitulo.value;
//     var duracao = Number(inDuracao.value);

//     // arredonda para baixo o resultado da divisão
//     var horas = Math.floor(duracao / 60);

//     // obtém o resto da divisão entre os números
//     var minutos = duracao % 60;

//     // altera o conteúdo dos parágrafos de resposta
//     outTitulo.textContent = titulo;
//     outResposta.textContent = horas + " hora(s) e " + minutos + " minuto(s)";
// }

// // cria uma referência ao elemento btConverter (botão)
// var btConverter = document.getElementById("btConverter");
// // registra um evento associado ao botão, para carregar uma função
// btConverter.addEventListener("click", converterDuracao);

// ----------------------------------------------------------

// function mostrarPromocao() {
//     // cria referência aos elementos manipulados pelo programa
//     var inVeiculo = document.getElementById("inVeiculo");
//     var inPreco = document.getElementById("inPreco");

//     var outVeiculo = document.getElementById("outVeiculo");
//     var outEntrada = document.getElementById("outEntrada");
//     var outParcela = document.getElementById("outParcela");

//     // obtém conteúdo dos campos de entrada
//     var veiculo = inVeiculo.value;
//     var preco = Number(inPreco.value);

//     // calcula valor da entrada e das parcelas
//     var entrada = preco * 0.50;
//     var parcela = (preco * 0.50) / 12;
    
//     // altera o conteúdo dos parágrafos de resposta
//     outVeiculo.textContent = "Promoção: " + veiculo;
//     outEntrada.textContent = "Entrada de R$: " + entrada.toFixed(2);
//     outParcela.textContent = "+ 12x de R$: " + parcela.toFixed(2);
// }

// // cria uma referência ao elemento btVerPromocao (botão)
// var btVerPromocao = document.getElementById("btVerPromocao");
// // registra um evento associado ao botão, para carregar uma função
// btVerPromocao.addEventListener("click", mostrarPromocao);

// ----------------------------------------------------------

// function calcularPreco() {
//     // cria referência aos elementos da página
//     var inQuilo = document.getElementById("inQuilo");
//     var inConsumo = document.getElementById("inConsumo");
//     var outValor = document.getElementById("outValor");

//     // obtém conteúdo dos campos de entrada
//     var quilo = Number(inQuilo.value);
//     var consumo = Number(inConsumo.value);

//     // calcula valor a ser pago
//     var valor = (quilo / 1000) * consumo;
    
//     // altera o conteúdo da linha de resposta
//     outValor.textContent = "Valor a pagar R$: " + valor.toFixed(2);

// }

// // cria referência ao elemento btCalcular
// var btCalcular = document.getElementById("btCalcular");
// // registra um evento associado ao botão, para carregar uma função
// btCalcular.addEventListener("click", calcularPreco);

// ----------------------------------------------------------
    