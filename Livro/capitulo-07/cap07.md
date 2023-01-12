# Capitulo 7 - Funções e Eventos

É possível criar
funções com passagem de parâmetros, criar funções anônimas, fazer uma função devolver um determinado valor ou um conjunto de valores e, ainda, utilizar uma função como um módulo que contém um trecho de código que se repete e que pode ser acionado em vários pontos do programa. Assim, cada vez que necessitamos executar esse trecho de
código, chamamos o módulo, sem a necessidade de reescrever seus comandos.

Existe também diversos outros eventos como: change, blur, focus, keypress, entre outros.

### Funções com passagem de parâmetros

    // função recebe 2 parâmetros: nota e media
    function exibirSituacao(nota, media) {
        if (nota >= media) { // compara o valor das variáveis
            alert("Aprovado");
        } else {
            alert("Reprovado");
        }
    }
    var prova1 = Number(prompt("Qual Nota: ")); // lê uma nota
    // chama a função exibirSituacao() passando 2 argumentos
    exibirSituacao(prova1, 7);

 ### Funções com retorno de valor

    multiplicacao (5, 9);
    console.log(multiplicacao(5,9));

    function multiplicacao (a, b) {

        var resultado = a * b;

        return resultado;
    }

-----------------------------------------------------------

    function obterSituacao(nota, media) {
        var situacao = (nota >= media) ? "Aprovado" : "Reprovado";
        return situacao;
    }

Exemplo de programa:

Ele deve ler modelo, ano de fabricação e preço do veículo (o valor que o proprietário deseja receber pelo veículo). Em seguida, o programa deve classificar o veículo como: “Novo” (do ano atual), “Seminovo” (até 2 anos de uso) ou “Usado”. Também deve apresentar o preço de venda do veículo com um acréscimo de 8% no preço dos veículos novos ou de 10% no preço dos veículos classificadoscomo seminovos ou usados.Para a classificação e o cálculo do preço de venda do veículo, serão utilizadas funções com retorno de valor.

Código CSS:

    h1 { border-bottom-style: inset; }
    pre { font-size: 1.2em; }
    .aDireita { text-align: right; }
    span { margin-left: 70px; }
    select { width: 150px; }
    .detalhes { width: 380px; }
    .oculta { display: none; }
    .exibe { display: inline; }

Código HTML:

    <h1>Revenda Herbie - Consignados</h1>

    <p>
        Modelo do Veículo:
        <input type="text" id="inModelo" autofocus>
    </p>

    <p>
        Ano de Fabricação:
        <input type="text" id="inAno" class="aDireita">
    </p>

    <p>
        Preço Proprietário R$:
        <input type="text" id="inPreco" class="aDireita">
    </p>

    <input type="button" value="Classificar/Calcular Preço" id="btCalcular">

    <h3 id="outClassif"></h3>
    <h3 id="outPrecoVenda"></h3>

Código JS:

    function mostrarDados() {
        // cria referência aos elementos da página
        var inModelo = document.getElementById("inModelo");
        var inAno = document.getElementById("inAno");
        var inPreco = document.getElementById("inPreco");

        var outClassif = document.getElementById("outClassif");
        var outPrecoVenda = document.getElementById("outPrecoVenda");

        // obtém o conteúdo dos campos de entrada de dados
        var modelo = inModelo.value;
        var ano = Number(inAno.value);
        var preco = Number(inPreco.value);

        // valida o preenchimento dos campos
        if (modelo == "" || ano == 0 || preco == 0 || isNaN(ano) || isNaN(preco)) {
            alert("Informe corretamente os dados do veículo");
            inModelo.focus();
            return;
        }

        // chama e atribui o retorno das funções às variáveis
        var classificacao = classificarVeiculo(ano);
        var precoVenda = calcularVenda(preco, classificacao);

        // exibe as respostas
        outClassif.textContent = modelo + " - " + classificacao;
        outPrecoVenda.textContent = "Preço de Venda R$: " + precoVenda.toFixed(2);
    }

    // cria referência ao botão e associa ao evento click a funçãomostrarDados
    var btCalcular = document.getElementById("btCalcular");
    btCalcular.addEventListener("click", mostrarDados);

    // função recebe o ano do veículo como parâmetro
    function classificarVeiculo(ano) {
        var anoAtual = new Date().getFullYear(); // obtém o ano atual
        var classif;

        // condições para definir a classificação do veículo
        if (ano == anoAtual) {
            classif = "Novo";
        } else if (ano == anoAtual-1 || ano == anoAtual - 2) {
            classif = "Seminovo";
        } else {
            classif = "Usado";
        }

        return classif; // retorna a classificação
    }

    // função recebe valor e status do veículo como parâmetro
    function calcularVenda(valor, status) {
        var prVenda = (status == "Novo") ? valor * 1.08 : valor * 1.10;

        return prVenda;
    }


### Funções anônimas

As funções anônimas permitem definir a programação de um evento sem atribuir um nome para a função. Apenas se utiliza a palavra reservada function() seguida do trecho de programa que queremos executar.

No geral, são utilizadas para a inserção de pequenos trechos de código.

Exemplo, o programa deve ler o preço de um produto qualquer e exibir as formas de pagamento disponíveis na loja, que variam de 1x até 10x. 

Código HTML:

    <h1>Programa Cálculo das Parcelas</h1>

    <p>
        Preço R$:
        <input type="text" id="inPreco" class="numero" autofocus>
        <input type="button" value="Exibir Formas de Pagto" id="btExibir">
    </p>

    <pre id="outParcelas"></pre>

Código JS:

    // cria uma referência ao botão
    var btExibir = document.getElementById("btExibir");

    // ao clicar no botão, a programação da função anônima é executada
    btExibir.addEventListener("click", function () {
        // cria referência aos elementos da página
        var inPreco = document.getElementById("inPreco");
        var outParcelas = document.getElementById("outParcelas");

        // obtém o conteúdo do campo de entrada
        var preco = Number(inPreco.value);

        // vai acumular as formas de pagamento
        var lista = "";

        // cria uma repetição para montar as opções de pagamento
        for (var i = 1; i <= 10; i++) {
            // acumula em lista o nº da parcela e o cálculo do valor
            lista += i + "x de R$: " + (preco / i).toFixed(2) + "\n";
        }

        // exibe a lista no elemento outParcelas
        outParcelas.textContent = "Opções de Pagamento\n\n" + lista;
    });

###  Funções atribuídas para variáveis

A linguagem JavaScript permite que uma função seja atribuída a uma variável. Ou seja, no lugar de se atribuir uma expressão para a variável, realizamos a atribuição de uma função. Por isso, esse formato é também conhecido como expressão de função. Exemplo:

    var dobro = function(a) {
        return a * 2;
    }

    var num = Number(prompt("Número: "));

    alert("O dobro é: " + dobro(num));

Ainda há vários outros recursos sobre funções que podem ser explorados. É possível fazer uma função retornar um conjunto de valores a partir do uso de vetores, passar objetos por referência, ou seja, que alteram o conteúdo dos parâmetros em memória refletindo-os no restante do programa, criar uma função dentro de outra função ou, então, fazer uma função chamar a si mesma (recursividade), recursos um pouco mais avançados sobre esse tema.

### Eventos JavaScript

Um evento é a ocorrência de uma ação, geralmente produzida por um usuário, em uma página. Clicar em um botão, selecionar um item, sair de um campo, pressionar uma tecla, passar o mouse sobre uma imagem, redimensionar a página são alguns dos eventos que podem ser controlados em um sistema.

A lista de eventos JavaScript passíveis de programação é grande. Eles podem estar relacionados com eventos de interface do usuário (load, unload, resize), eventos de mouse (click, dblclick, mouseover), eventos de teclado (keypress, keydown, keyup) ou eventos de formulário (change, focus, blur).

O exemplo a seguir explora a programação de novos eventos (além do click) visando dar maior interatividade a um sistema de controle de pedidos de uma pizzaria. Imagine que a página deva substituir o bloco de pedidos de um garçom, que, então, vai utilizar um tablet ou smartphone para anotar o pedido de cada cliente. O acesso se dará a partir do navegador do aparelho. A página, portanto, deve conter recursos que facilitem o atendimento para o garçom. Um desses recursos é que a lista de itens deve conter apenas pizzas ou apenas bebidas, conforme a seleção inicial do tipo de item. Ou seja, quando ocorrer a troca entre pizza e bebidas, o conteúdo da lista de itens do pedido deve ser modificado.

Código HTML:

    <h1>Pizzaria Avenida - Controle de Pedidos</h1>

    <p>
        Item do Pedido:
        <input type="radio" name="produto" id="rbPizza" checked autofocus>Pizza
        <input type="radio" name="produto" id="rbBebida"> Bebida

        <span>Item:</span>

        <select id="inPizza">
            <option value="media">Pizza Média</option>
            <option value="grande">Pizza Grande</option>
            <option value="familia">Pizza Família</option>
        </select>

        <select id="inBebida" class="oculta">
            <option value="refri">Refrigerante Litro</option>
            <option value="suco">Jarra de Suco</option>
            <option value="agua">Água Mineral</option>
        </select>
    </p>

    <p>
        Detalhes do Item:
        <input type="text" id="inDetalhes" class="detalhes">
        <input type="button" value="Adicionar" id="btAdicionar">
    </p>

    <pre id="outPedido"></pre>

Código JS:

    var itens = []; // vetor global para armazenar os itens do pedido

    function trocarItem() {
        // cria referência aos elementos select
        var inPizza = document.getElementById("inPizza");
        var inBebida = document.getElementById("inBebida");

        // se estiver marcado
        if (rbPizza.checked) {
            inBebida.className = "oculta"; // oculta select das bebidas
            inPizza.className = "exibe"; // exibe select das pizzas

        } else {
            inPizza.className = "oculta"; // oculta as pizzas
            inBebida.className = "exibe"; // exibe as bebidas
        }
    }
    // cria referência aos radiobutton's e associa função ao evento change
    var rbPizza = document.getElementById("rbPizza");
    rbPizza.addEventListener("change", trocarItem);

    var rbBebida = document.getElementById("rbBebida");
    rbBebida.addEventListener("change", trocarItem);

    function mostrarNumSabores() {
        // se radiobutton rbPizza estiver marcado
            if (rbPizza.checked) {
                var pizza = inPizza.value; // obtém value do item selecionado
                // uso o operador condicional (cap. 3), para indicar o número de sabores
                var num = (pizza == "media") ? 2 : (pizza == "grande") ? 3 : 4;
                // atributo placeholder exibe uma dica de preenchimento do campo
                inDetalhes.placeholder = "Até " + num + " sabores";
            }
        }

        // cria referência ao elemento e associa função ao evento focus
        var inDetalhes = document.getElementById("inDetalhes");
        inDetalhes.addEventListener("focus", mostrarNumSabores);
        // cria função (anônima) ao evento blur (quando o campo perde o foco)

        inDetalhes.addEventListener("blur", function() {
            inDetalhes.placeholder = ""; // limpa a dica de preenchimento
        });


    // cria função (anônima) associada ao evento keypress (tecla pressionada)
    inDetalhes.addEventListener("keypress", function (tecla) {
        // se pressionou tecla de código 13 (enter)
        if (tecla.keyCode == 13) {
            adicionarItem(); // irá adicionar item no pedido
        }
    });

    function adicionarItem() {
        // cria referência aos elementos da página (ainda não referenciados)
        var inPizza = document.getElementById("inPizza");
        var inBebida = document.getElementById("inBebida");
        var outPedido = document.getElementById("outPedido");

        // se radiobutton Pizza estiver marcado
        if (rbPizza.checked) {
            var num = inPizza.selectedIndex; // obtém nº do item selecionado
            var produto = inPizza.options[num].text; // texto do item selecionado

        } else {
            var num = inBebida.selectedIndex;
            var produto = inBebida.options[num].text;
        }

        var detalhes = inDetalhes.value; // conteúdo do inDetalhes
        itens.push(produto + " (" + detalhes + ")"); // adiciona ao vetor
        outPedido.textContent = itens.join("\n"); // exibe em outPedidos
        limparCampos(); // limpa conteúdo dos campos
    }

    // cria referência ao elemento e associa função ao evento click
    var btAdicionar = document.getElementById("btAdicionar");
    btAdicionar.addEventListener("click", adicionarItem);

    function limparCampos() {
        rbPizza.checked = true; // marca (seleciona) rbPizza
        inBebida.className = "oculta"; // oculta select das Bebidas
        inPizza.className = "exibe"; // exibe select das Pizzas
        inPizza.selectedIndex = 0; // seleciona 1º item (posição 0)
        inDetalhes.value = ""; // limpa input Detalhes
        rbPizza.focus(); // "joga o foco" no rbPizza
    }

### Exercícios

<b>a)</b> Elaborar um programa que leia o nome e a idade de um atleta de um clube de natação. O programa deve exibir o nome com “-” abaixo das letras do nome e a categoria do atleta, que pode ser “Infantil” (até 12 anos), “Juvenil” (entre 13 e 18 anos) ou “Adulto” (acima de 18 anos). O programa deve conter as funções:

• retornarTracos() – que receba um nome como parâmetro e retorne uma linha com “-” para as letras do nome (nos espaços, manter os espaços).

• categorizarAluno() – que receba um número como parâmetro e retorne a categoria do aluno, conforme indicação no enunciado do exercício.

<b>b)</b> Elaborar um programa que leia o nome completo de um aluno. O programa deve validar o preenchimento de um nome completo e exibir a senha inicial do aluno, a qual será o sobrenome seguido pelo número de vogais do nome completo dele. O programa deve conter as funções:

• validarNome() – que receba um nome como parâmetro e retorne true (nome completo) ou false (nome incompleto).

• obterSobrenome() – que receba um nome como parâmetro e retorne o último nome do aluno em letras minúsculas.

• contarVogais() – que receba um nome e retorne o número de vogais deste, com dois dígitos.

<b>c)</b> Elaborar um programa para uma veterinária, o qual leia o preço de uma vacina e se o cliente possui ou não convênio. Caso possua algum convênio, exibir uma caixa de seleção com os convênios “Amigo dos Animais” e “Saúde Animal”. O programa deve exibir o valor do desconto (10% sem convênio; 20% para “Amigo dos Animais”; 50% para “Saúde Animal”) e o valor a ser pago. Criar a função:

• calcularDesconto() – que receba os parâmetros valor e taxa de desconto. Retornar o valor do desconto.




