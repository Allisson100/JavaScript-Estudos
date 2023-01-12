# Capítulo 8 - Persistência de dados com localStorage

Veremos como fazer com que informações se tornem persistentes, ou seja, permaneçam salvas no navegador do usuário. 

Uma das formas de fazer isso no HTML 5 é utilizando o localStorage. Com ele é possível, por exemplo, salvar os dados de um cliente de uma loja, como nome, idade ou clube pelo qual o cliente torce. Como as informações ficam salvas no navegador do cliente, quando ele retornar ao site da loja, é possível obter essas informações e personalizar a página de acordo com as escolhas anteriormente feitas por ele.Isso permite, por exemplo, exibir uma saudação de boas-vindas com o nome do cliente.

Os métodos do localStorage vistos a seguir têm as mesmas funcionalidades se aplicados ao sessionStorage. Eles pertencem a Web Storage API (Application Programming Interface) do HTML 5, sendo que no localStorage os dados se mantêm persistentes até serem excluídos pelo usuário, enquanto no sessionStorage os dados se mantêm apenas por uma sessão (basicamente, enquanto o navegador estiver aberto).

###  Salvar e recuperar dados

Para salvar uma informação no navegador do usuário com o localStorage, devemos utilizar o método setItem(). Esse método contém dois parâmetros: chave (nome da variável) e valor (conteúdo da variável). Exemplo:

    localStorage.setItem("idade", 17);

Para recuperar, bem como verificar a existência de um dado armazenado no navegador do usuário, devemos utilizar o método getItem() com o nome da chave utilizada.

    var idade = localStorage.getItem("idade");

Os dados são salvos como strings. Portanto, cuidado com a execução de cálculos, principalmente de adição, sobre os dados que você armazenou no localStorage.

Exemplo com o método LocalStorage

Código CSS:

    img { max-width: 100%; }
    pre { font-size: 1.2em; }
    .oculta { display: none; }
    .exibe { display: inline; }
    .coresBrasil { color: black; background-color: red; }
    .coresPelotas { color: blue; background-color: yellow; }
    .coresFarroupilha { color: green; background-color: white; }

Antes de passar o código html vamos ver um pouco sobre bootstrap.

### Uma “pitada” de Bootstrap

Podemos melhorar a aparência de nossos exemplos de modo bastante simples com o uso de uma biblioteca ou framework de estilos CSS. Uma das bibliotecas de componentes front-end de maior destaque na atualidade é o Bootstrap, que é open source e pode ser utilizado gratuitamente em seus projetos.

Utilizar uma biblioteca de componentes front-end profissional traz inúmeras vantagens, como padronização das páginas, maior rapidez no desenvolvimento do código, maior facilidade de elaboração do layout do site, além da segurança de que estamos utilizando um modelo amplamente testado e que produz páginas responsivas no moderno conceito de mobile first.

Para utilizar o Bootstrap em seus projetos, baixe os arquivos do site da biblioteca ou então referencie um CDN (Content Delivery Network – Rede de Distribuição de Conteúdo), um site onde os arquivos do framework estão disponíveis. Para baixar a biblioteca, acesse o endereço www.getbootstrap.com e clique no botão download. Copie-o para a pasta css em que você vai criar os exemplos.

O Bootstrap permite organizar o layout de uma página em grids. Assim, uma seção da página pode ser dividida em até 12 grids ou colunas. A soma dos tamanhos das colunas deve totalizar 12. Cada grid é criada com um elemento div, uma espécie de container, ou seja, uma “caixa” na qual diversos elementos da página podem ser inseridos. Essas “caixas” devem ficar dentro de um container maior e podem ainda conter novas subdivisões.

Nosso exemplo é para a criação de uma página de uma loja de esportes. O cliente pode selecionar o clube pelo qual ele torce e essa seleção deve ficar salva no navegador.

Código HTML:

    <div class="container-fluid">
        <div class="row" id="divTitulo">
            <div class="col-sm-7">
                <h1>Loja de Esportes Avenida</h1>
                <h2>Produtos esportivos em geral</h2>
            </div>

            <div class="col-sm-3">
                <h5>Qual clube você torce?</h5>
                <input type="radio" name="clube" id="rbBrasil"> Brasil
                <br>
                <input type="radio" name="clube" id="rbPelotas"> Pelotas
                <br>
                <input type="radio" name="clube" id="rbFarroupilha"> Farroupilha
            </div>

            <div class="col-sm-2">
                <img id="imgClube" class="oculta">
            </div>
        </div>
    </div>

Código JS:

    function trocarClube() {
        // cria referência aos elementos da página
        var imgClube = document.getElementById("imgClube");
        var divTitulo = document.getElementById("divTitulo");

        var clube; // define variável que irá receber o nome do clube

        // verifica qual radiobutton está selecionado
        if (rbBrasil.checked) {
            clube = "Brasil";

        } else if (rbPelotas.checked) {
            clube = "Pelotas";

        } else {
            clube = "Farroupilha";
        }

        // define as classes de divTitulo: row e cores do clube
        divTitulo.className = "row cores"+clube;

        // modifica a imagem de acordo com a seleção do cliente
        imgClube.src = "img/" + clube.toLowerCase() + ".png";
        imgClube.className = "exibe"; // exibe a imagem
        imgClube.alt = "Símbolo do " + clube; // modifica atributo alt
        
        // salva no navegador a escolha do cliente
        localStorage.setItem("clube", clube);
    }

    // captura os elementos do radiobutton
    var rbBrasil = document.getElementById("rbBrasil");
    var rbPelotas = document.getElementById("rbPelotas");
    var rbFarroupilha = document.getElementById("rbFarroupilha");

    // associa ao evento change a function trocarClube
    rbBrasil.addEventListener("change", trocarClube);
    rbPelotas.addEventListener("change", trocarClube);
    rbFarroupilha.addEventListener("change", trocarClube);

    function verificarClube() {
        // se já estiver salvo algum clube
        if (localStorage.getItem("clube")) {
            var clube = localStorage.getItem("clube"); // obtém o nome do clube

            // conforme o clube, marca um dos elementos do input type radio
            if (clube == "Brasil") {
                rbBrasil.checked = true;

            } else if (clube == "Pelotas") {
                rbPelotas.checked = true;

            } else {
                rbFarroupilha.checked = true;
            }

            trocarClube(); // chama a function que troca a imagem e as cores
        }
    }

    // chama function que verifica se cliente já selecionou clube anteriormente
    verificarClube();

### Remover dados do localStorage

É importante adicionar em nossos programas uma opção que permita ao usuário remover os dados salvos no localStorage. Para realizar essa tarefa, a linguagem JavaScript dispõe dos métodos removeItem() e clear().

O método removeItem() é utilizado para remover o conteúdo de uma variável salva no domínio da página que o criou. Já o método clear(), por sua vez, remove todas as variáveis pertencentes a um domínio e armazenadas em seu navegador.

    localStorage.removeItem("idade");

### Uso do getElementsByTagName()

Em todos os nossos programas, utilizamos o método getElementById() para recuperar e manipular os elementos da página HTML. Essa é a forma mais rápida de acessar um elemento, visto que o id deve ser único para cada elemento da página. Porém, existem outros métodos que também podem ser utilizados e que, em alguns casos, se tornam mais práticos em termos de organização do código. Um deles é o método getElementsByTagName().

Como o nome sugere, esse método captura os elementos da página com uma determinada TagName. Exemplo:

    <p> Exemplo </p>
    <p> Capítulo 8 </p>

    <script>
        var p = document.getElementsByTagName("p");
        p[0].style.color = "blue";
        p[1].style.color = "red";
    </script>

Esse documento HTML contém dois parágrafos. No script, o método getElementsByTagName() os recupera e, a partir de então, é possível acessá-los como itens de um vetor. Esses itens podem ser contados (a partir da propriedade length), manipulados em uma estrutura de repetição ou acessados individualmente com a indicação do índice do elemento que se quer referenciar.

Exemplo de código JavaScript comopção paraexcluir dados do localStorage:

Código JS:

    function trocarClube() {
        // cria referência aos elementos da página
        var imgClube = document.getElementById("imgClube");
        var divTitulo = document.getElementById("divTitulo");

        // armazena em um vetor a lista de clubes
        var clubes = ["Brasil", "Pelotas", "Farroupilha"];

        // percorre os radiobuttons para verificar qual está selecionado
        for (var i = 0; i < 4; i++) {
            if (inputsRadio[i].checked) { // se selecionado...
                var selecao = i; // armazena índice do radio selecionado
                break; // e sai da repetição
            }
        }

        if (selecao <= 2) { // se selecao <= 2, então torce por algum clube
            divTitulo.className = "row cores"+clubes[selecao]; // modifica cores (divTitulo)

            // muda a propriedade src com a imagem do clube selecionado
            imgClube.src = "img/" + clubes[selecao].toLowerCase() + ".png";
            imgClube.className = "exibe"; // exibe imagem
            imgClube.alt = "Símbolo do " + clubes[selecao]; // texto alternativo
            localStorage.setItem("clube", clubes[selecao]); // salva nome do clube

        } else { // else (selecionou "Nenhum")
            divTitulo.className = "row"; // tira a classe de cores da divTitulo
            imgClube.className = "oculta"; // oculta a imagem
            imgClube.alt = ""; // limpa texto alternativo
            localStorage.removeItem("clube"); // remove variável do localStorage
        }
    }

### Manipular listas no localStorage

o conteúdo inicial atribuído à variável frutas, por exemplo, na localStorage pode ser:

    frutas = "Banana";

Novas inclusões devem inserir o caractere delimitador. Assim:

    frutas = "Banana;Maçã";

Vamos ao exemplo "Qual é o peso da melancia?":

Código HTML:

    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-4">
                <img src="img/ex8_3.jpg" alt="Melancia">
            </div>

            <div class="col-sm-8">
                <h1>Qual é o peso da Melancia?</h1>
                <p><label for="inNome">Nome do Apostador: </label>
                    <input type="text" id="inNome" class="form-control"autofocus>
                </p>

                <p>
                    <label for="inPeso">Peso (em gramas): </label>
                    <input type="text" id="inPeso" class="form-control">
                </p>

                <p>
                    <input type="button" value="Apostar" id="btApostar" class="btn btn-primary">
                    <input type="button" value="Vencedor" id="btVencedor" class="btn btn-warning">
                    <input type="button" value="Limpar Apostas" id="btLimpar" class="btn btn-danger">
                </p>

                <pre id="outApostas"></pre>
            </div>
        </div>
    </div>

Código JS:

    function incluirAposta() {
        // cria referência aos elementos de entrada de dados da página
        var inNome = document.getElementById("inNome");
        var inPeso = document.getElementById("inPeso");

        var nome = inNome.value; // conteúdo do campo nome
        var peso = Number(inPeso.value); // conteúdo do campo peso (em número)

        // se vazios ou Not-a-Number
        if (nome == "" || peso == 0 || isNaN(peso)) {
            alert("Informe nome e peso da aposta"); // exibe alerta
            inNome.focus(); // joga cursor em nome
            return; // abandona execução da function
        }

        // chama function que verifica se peso já foi apostado
        if (verApostaExiste(peso)) {
            alert("Alguém já apostou este peso, informe outro...");
            inPeso.focus();
            return;
        }

        // se houver dados salvos no localStorage
        if (localStorage.getItem("melanciaNome")) {
            // obtém o conteúdo já salvo e acrescenta ";" + dados da aposta
            var melanciaNome = localStorage.getItem("melanciaNome") + ";" + nome;
            var melanciaPeso = localStorage.getItem("melanciaPeso") + ";" + peso;

            // salva os dados em localStorage
            localStorage.setItem("melanciaNome", melanciaNome);
            localStorage.setItem("melanciaPeso", melanciaPeso);

        } else { // senão, é a primeira aposta (não tem ";"")
            localStorage.setItem("melanciaNome", nome); // salva os dados
            localStorage.setItem("melanciaPeso", peso);
        }

        mostrarApostas(); // chama function que mostra as apostas já salvas
        inNome.value = ""; // limpa os campos de formulário
        inPeso.value = "";
        inNome.focus(); // joga o foco (cursor) no campo inNome
    }

    // cria referência ao botão e associa a ocorrência do evento click à function
    var btApostar = document.getElementById("btApostar");
    btApostar.addEventListener("click", incluirAposta);

    function verApostaExiste(peso) {
        var existe = false; // valor inicial é false

        // se existe algum dado salvo em localStorage...
        if (localStorage.getItem("melanciaPeso")) {
            // obtém seu conteúdo. A string é dividida em itens de vetor a cada ";"
            var pesos = localStorage.getItem("melanciaPeso").split(";");

            // verifica se existe com indexOf()
            // O peso deve ser convertido em string, pois o vetor contém strings
            if (pesos.indexOf(peso.toString()) >= 0) {
                existe = true; // apenas neste caso troca o valor do "flag"
            }
        }
        return existe; // retorna true ou false
    }

    function mostrarApostas() {
        // cria referência ao elemento que exibe as apostas
        var outApostas = document.getElementById("outApostas");

        // se não há apostas armazenadas em localStorage
        if (!localStorage.getItem("melanciaNome")) {
            // limpa o espaço de exibição das apostas (para quando "Limpar Apostas")
            outApostas.textContent = "";
            return; // retorna (não executa os comandos abaixo)
        }

        // obtém o conteúdo das variáveis salvas no localStorage, separando-as
        // em elementos de vetor a cada ocorrência do ";"
        var nomes = localStorage.getItem("melanciaNome").split(";");
        var pesos = localStorage.getItem("melanciaPeso").split(";");

        var linhas = ""; // irá acumular as linhas a serem exibidas

        // repetição para percorrer todos os elementos do vetor
        for (var i = 0; i < nomes.length; i++) {
            // concatena em linhas os nomes dos apostadores e suas apostas
            linhas += nomes[i] + " - " + pesos[i] + "gr \n";
        }

        // exibe as linhas (altera o conteúdo do elemento outApostas)
        outApostas.textContent = linhas;
    }

    // chama a function quando a página é carregada, para mostrar apostas salvas
    mostrarApostas();

    function verificarVencedor() {
        // se não há apostas armazenadas em localStorage
        if (!localStorage.getItem("melanciaNome")) {
            alert("Não há apostas cadastradas");
            return; // retorna (não executa os comandos abaixo)
        }

        // solicita o peso correto da melancia
        var pesoCorreto = Number(prompt("Qual o peso correto da melancia?"));

        // se não informou, retorna
        if (pesoCorreto == 0 || isNaN(pesoCorreto)) {
            return;
        }

        // obtém os dados armazenados, separando-os em elementos de vetor
        var nomes = localStorage.getItem("melanciaNome").split(";");
        var pesos = localStorage.getItem("melanciaPeso").split(";");

        // valor inicial para vencedor é o da primeira aposta
        var vencedorNome = nomes[0];
        var vencedorPeso = Number(pesos[0]);

        // percorre as apostas
        for (var i = 1; i < nomes.length; i++) {
            // calcula a diferença de peso do "vencedor" e da aposta atual
            difVencedor = Math.abs(vencedorPeso - pesoCorreto);
            difAposta = Math.abs(Number(pesos[i]) - pesoCorreto);

            // se a diferença da aposta atual (no for) for menor que a do"vencedor"
            if (difAposta < difVencedor) {
                vencedorNome = nomes[i]; // troca o "vencedor"
                vencedorPeso = Number(pesos[i]); // para este elemento
            }
        }

        // monta mensagem com dados do vencedor
        var mensagem = "Resultado - Peso Correto: " + pesoCorreto + "gr";
        mensagem += "\n----------------------------------------------";
        mensagem += "\nVencedor: " + vencedorNome;
        mensagem += "\nAposta: " + vencedorPeso + "gr";
        alert(mensagem);
    }

    var btVencedor = document.getElementById("btVencedor");
    btVencedor.addEventListener("click", verificarVencedor);

    function limparApostas() {
        // solicita confirmação para excluir as apostas
        if (confirm("Confirma exclusão de todas as apostas?")) {
            localStorage.removeItem("melanciaNome"); // remove as variáveis salvas
            localStorage.removeItem("melanciaPeso"); // em localStorage
            mostrarApostas(); // exibe a listagem vazia
        }
    }
    
    var btLimpar = document.getElementById("btLimpar");
    btLimpar.addEventListener("click", limparApostas);

# Execícios

<b>a)</b> Acrescentar no site da Loja de Esportes um contador de visitas do cliente ao site. Assim, na primeira visita do cliente à loja, exibir em um parágrafo do site a mensagem:

Muito Bem-Vindo! Esta é a sua primeira visita ao nosso site.

Nas próximas visitas, exibir:

Que bom que você voltou! Esta é a sua visita de número x ao nosso site.

<b>b)</b> Elaborar um programa para cadastrar produtos na lista de compras da semana. Salvar e exibir a listagem dos produtos em ordem alfabética.

<b>c)</b> Elaborar um programa para cadastrar os serviços a serem realizados por um auto center, que organize a ordem de execução dos serviços. Armazenar os serviços no navegador do usuário e a cada clique no botão Executar Serviço remover o primeiro serviço e exibi-lo na página. O programa deve atualizar o número de serviços pendentes quando: a) a página for aberta; b) um serviço for incluído; c) um serviço for removido.






