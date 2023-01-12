// ----------------------------------------------------------

// multiplicacao (5, 9);
// console.log(multiplicacao(5,9));

// function multiplicacao (a, b) {

//     var resultado = a * b;

//     return resultado;
// }

// ----------------------------------------------------------

// function mostrarDados() {
//     // cria referência aos elementos da página
//     var inModelo = document.getElementById("inModelo");
//     var inAno = document.getElementById("inAno");
//     var inPreco = document.getElementById("inPreco");

//     var outClassif = document.getElementById("outClassif");
//     var outPrecoVenda = document.getElementById("outPrecoVenda");

//     // obtém o conteúdo dos campos de entrada de dados
//     var modelo = inModelo.value;
//     var ano = Number(inAno.value);
//     var preco = Number(inPreco.value);

//     // valida o preenchimento dos campos
//     if (modelo == "" || ano == 0 || preco == 0 || isNaN(ano) || isNaN(preco)) {
//         alert("Informe corretamente os dados do veículo");
//         inModelo.focus();
//         return;
//     }

//     // chama e atribui o retorno das funções às variáveis
//     var classificacao = classificarVeiculo(ano);
//     var precoVenda = calcularVenda(preco, classificacao);

//     // exibe as respostas
//     outClassif.textContent = modelo + " - " + classificacao;
//     outPrecoVenda.textContent = "Preço de Venda R$: " + precoVenda.toFixed(2);
// }

// // cria referência ao botão e associa ao evento click a funçãomostrarDados
// var btCalcular = document.getElementById("btCalcular");
// btCalcular.addEventListener("click", mostrarDados);

// // função recebe o ano do veículo como parâmetro
// function classificarVeiculo(ano) {
//     var anoAtual = new Date().getFullYear(); // obtém o ano atual
//     var classif;

//     // condições para definir a classificação do veículo
//     if (ano == anoAtual) {
//         classif = "Novo";
//     } else if (ano == anoAtual-1 || ano == anoAtual - 2) {
//         classif = "Seminovo";
//     } else {
//         classif = "Usado";
//     }

//     return classif; // retorna a classificação
// }

// // função recebe valor e status do veículo como parâmetro
// function calcularVenda(valor, status) {
//     var prVenda = (status == "Novo") ? valor * 1.08 : valor * 1.10;
    
//     return prVenda;
// }

// ----------------------------------------------------------

// var itens = []; // vetor global para armazenar os itens do pedido

// function trocarItem() {
//     // cria referência aos elementos select
//     var inPizza = document.getElementById("inPizza");
//     var inBebida = document.getElementById("inBebida");

//     // se estiver marcado
//     if (rbPizza.checked) {
//         inBebida.className = "oculta"; // oculta select das bebidas
//         inPizza.className = "exibe"; // exibe select das pizzas

//     } else {
//         inPizza.className = "oculta"; // oculta as pizzas
//         inBebida.className = "exibe"; // exibe as bebidas
//     }
// }

// // cria referência aos radiobutton's e associa função ao evento change
// var rbPizza = document.getElementById("rbPizza");
// rbPizza.addEventListener("change", trocarItem);

// var rbBebida = document.getElementById("rbBebida");
// rbBebida.addEventListener("change", trocarItem);

// function mostrarNumSabores() {
//     // se radiobutton rbPizza estiver marcado
//         if (rbPizza.checked) {
//             var pizza = inPizza.value; // obtém value do item selecionado
//             // uso o operador condicional (cap. 3), para indicar o número de sabores
//             var num = (pizza == "media") ? 2 : (pizza == "grande") ? 3 : 4;
//             // atributo placeholder exibe uma dica de preenchimento do campo
//             inDetalhes.placeholder = "Até " + num + " sabores";
//         }
//     }

//     // cria referência ao elemento e associa função ao evento focus
//     var inDetalhes = document.getElementById("inDetalhes");
//     inDetalhes.addEventListener("focus", mostrarNumSabores);
//     // cria função (anônima) ao evento blur (quando o campo perde o foco)

//     inDetalhes.addEventListener("blur", function() {
//         inDetalhes.placeholder = ""; // limpa a dica de preenchimento
//     });


// // cria função (anônima) associada ao evento keypress (tecla pressionada)
// inDetalhes.addEventListener("keypress", function (tecla) {
//     // se pressionou tecla de código 13 (enter)
//     if (tecla.keyCode == 13) {
//         adicionarItem(); // irá adicionar item no pedido
//     }
// });

// function adicionarItem() {
//     // cria referência aos elementos da página (ainda não referenciados)
//     var inPizza = document.getElementById("inPizza");
//     var inBebida = document.getElementById("inBebida");
//     var outPedido = document.getElementById("outPedido");

//     // se radiobutton Pizza estiver marcado
//     if (rbPizza.checked) {
//         var num = inPizza.selectedIndex; // obtém nº do item selecionado
//         var produto = inPizza.options[num].text; // texto do item selecionado

//     } else {
//         var num = inBebida.selectedIndex;
//         var produto = inBebida.options[num].text;
//     }

//     var detalhes = inDetalhes.value; // conteúdo do inDetalhes
//     itens.push(produto + " (" + detalhes + ")"); // adiciona ao vetor
//     outPedido.textContent = itens.join("\n"); // exibe em outPedidos
//     limparCampos(); // limpa conteúdo dos campos
// }

// // cria referência ao elemento e associa função ao evento click
// var btAdicionar = document.getElementById("btAdicionar");
// btAdicionar.addEventListener("click", adicionarItem);

// function limparCampos() {
//     rbPizza.checked = true; // marca (seleciona) rbPizza
//     inBebida.className = "oculta"; // oculta select das Bebidas
//     inPizza.className = "exibe"; // exibe select das Pizzas
//     inPizza.selectedIndex = 0; // seleciona 1º item (posição 0)
//     inDetalhes.value = ""; // limpa input Detalhes
//     rbPizza.focus(); // "joga o foco" no rbPizza
// }