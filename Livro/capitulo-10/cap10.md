# Capítulo 10 - É muito bom programar... Programe!


### Programa Jockey Club

Código HTML:

    <div class="container-fluid">
        <div class="row">

            <div class="col-sm-4">
                <img src="img/ex10_1.jpg" alt="Jockey Club" class="imgProg">
            </div>

            <div class="col-sm-8">

            <h1>Jockey Club - Controle de Apostas</h1>

                <div class="row">
                    <div class="col-sm-6">
                        <p>
                            <label for="inCavalo">Nº Cavalo:</label>
                            <input type="text" class="form-control aDireita" id="inCavalo" autofocus>
                        </p>
                    </div>

                    <div class="col-sm-6">
                        <h5 id="outCavalo"></h5>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-6">
                        <p>
                            <label for="inAposta">Aposta R$:</label>
                            <input type="text" class="form-control aDireita" id="inValor">
                        </p>
                    </div>
                    <div class="col-sm-6">

                        <input type="button" class="btn btn-primary margemSup" value="Apostar" id="btApostar">
                        <input type="button" class="btn btn-success margemSup" value="Ganhador" id="btGanhador">
                        <input type="button" class="btn btn-danger margemSup" value="Novo Páreo" id="btNovo">
                    </div>
                </div>

                <pre id="outApostas"></pre>

            </div>
        </div>
    </div>

Código JS:

    // constante com nomes dos cavalos participantes do páreo
    const CAVALOS = ["Marujo", "Tordilho", "Belga", "Twister", "Jade", "Lucky"];

    // vetor que irá armazenar um objeto aposta (com nº cavalo e valor da aposta)
    var apostas = [];

    function adicionarAposta() {
        // cria referência aos elementos inValor e outApostas
        // (inCavalo é referenciado em variável global na sequência do programa)
        var inValor = document.getElementById("inValor");
        var outApostas = document.getElementById("outApostas");

        // obtém o nº do cavalo e valor da aposta
        var cavalo = Number(inCavalo.value);
        var valor = Number(inValor.value);

        // valida os dados
        if (isNaN(cavalo) || isNaN(valor) || valor == 0 || !validarCavalo(cavalo)) {
            alert("Aposta Inválida");
            inCavalo.focus();
            return;
        }

        // adiciona ao vetor de objetos (atributos cavalo e valor)
        apostas.push({ cavalo: cavalo, valor: valor });

        // variável para exibir a lista das apostas realizadas
        var lista = "Apostas Realizadas\n-------------------------------------\n";

        // percorre o vetor e concatena em lista as apostas realizadas
        for (var i = 0; i < apostas.length; i++) {
            lista += "Nº " + apostas[i].cavalo + " " + obterCavalo(apostas[i].cavalo);
            lista += " - R$: " + apostas[i].valor.toFixed(2) + "\n";
        }
        outApostas.textContent = lista; // exibe a lista das apostas
        inCavalo.value = ""; // limpa campos de entrada
        inValor.value = "";
        inCavalo.focus(); // posiciona o cursor em inCavalo
    }

    // cria referência ao botão e associa ao evento click a função indicada
    var btApostar = document.getElementById("btApostar");
    btApostar.addEventListener("click", adicionarAposta);

    function validarCavalo(num) {
        var tam = CAVALOS.length; // obtém nº de cavalos da const CAVALOS

        // verifica se o número do cavalo (passado como argumento) é válido
        if (num >= 1 && num <= tam) {
            return true;
        } else {
            return false;
        }
    }

    function mostrarCavalo() {
        // cria referência ao elemento outCavalo (para exibir dados do cavalo)
        var outCavalo = document.getElementById("outCavalo");

        // se não preencheu o campo, limpa outCavalo e retorna
        // (não exibe mensagem de alerta, pois pode sair por um clique em Ganhador)
        if (inCavalo.value == "") {
            outCavalo.textContent = "";
            return;
        }

        // obtém o conteúdo do campo de entrada
        var cavalo = Number(inCavalo.value);

        // valida (se número do cavalo for preenchido)
        if (isNaN(cavalo) || !validarCavalo(cavalo)) {
            outCavalo.textContent = "Número do Cavalo Inválido";
            return;
        }

        // cria variáveis com retorno dos métodos a serem exibidos em outCavalo
        var nomeCavalo = obterCavalo(cavalo);
        var numApostas = contarApostas(cavalo);
        var total = totalizarApostas(cavalo);

        // exibe nome, nº de apostas e total apostado no cavalo
        outCavalo.textContent = nomeCavalo + " (Apostas: " + numApostas;
        outCavalo.textContent += " - R$: " + total.toFixed(2) + ")";
    }

    // cria referência ao botão e associa ao evento blur a função indicada
    var inCavalo = document.getElementById("inCavalo");
    inCavalo.addEventListener("blur", mostrarCavalo);


    function obterCavalo(num) {
        var posicao = num - 1; // posição no vetor (subtrai 1, pois inicia em 0)

        return CAVALOS[posicao]; // nome do cavalo (da const CAVALOS)
    }

    function contarApostas(numCavalo) {
        var contador = 0;
        // percorre o vetor apostas

        for (var i = 0; i < apostas.length; i++) {
            // verifica se a aposta é no cavalo passado como argumento
            if (apostas[i].cavalo == numCavalo) {
                contador++; // conta +1 quando a aposta for no cavalo do argumento
            }
        }

        return contador; // retorna o nº de apostas no cavalo numCavalo
    }

    function totalizarApostas(numCavalo) {
        var total = 0;
        for (var i = 0; i < apostas.length; i++) {
            if (apostas[i].cavalo == numCavalo) {
                total = total + apostas[i].valor; // soma o valor das apostas
            }
        }

        return total; // retorna a soma dos valores apostados em numCavalo
    }

    // quando o campo recebe o foco, limpa o conteúdo e dados do cavalo

    inCavalo.addEventListener("focus", function () {
        inCavalo.value = "";
        document.getElementById("outCavalo").textContent = "";
    });

    function ganhadorPareo() {
        // solicita o número do cavalo ganhador (já converte para número)
        var ganhador = Number(prompt("Nº Cavalo Ganhador: "));

        // para validar o preenchimento do prompt anterior
        if (isNaN(ganhador) || !validarCavalo(ganhador)) {
            alert("Cavalo Inválido");
            return;
        }

        // cria referência ao elemento outApostas (onde será exibido o resumo)
        var outApostas = document.getElementById("outApostas");

        // concatena em resumo o resultado a ser exibido no elementooutApostas
        var resumo = "Resultado Final do Páreo\n"

        resumo += "-------------------------------------\n"
        resumo += "Nº Total de Apostas: " + apostas.length + "\n";
        resumo += "Total Geral R$: " + totalizarGeral().toFixed(2) + "\n\n";
        resumo += "Ganhador Nº " + ganhador + " - " + obterCavalo(ganhador) + "\n";
        resumo += "-------------------------------------\n"
        resumo += "Nº de Apostas: " + contarApostas(ganhador) + "\n";
        resumo += "Total Apostado R$: " + totalizarApostas(ganhador).toFixed(2);

        outApostas.textContent = resumo; // exibe o resultado
        btApostar.disabled = true; // desabilita os botões apostar e ganhador
        btGanhador.disabled = true;
        btNovo.focus(); // joga o foco no botão "Novo Páreo"
    }
    // cria referência ao botão e associa ao evento click a função indicada
    var btGanhador = document.getElementById("btGanhador");
    btGanhador.addEventListener("click", ganhadorPareo);

    function totalizarGeral() {
        var total = 0;

        // percorre o vetor para somar o total das apostas
        for (var i = 0; i < apostas.length; i++) {
            total = total + apostas[i].valor;
        }

        return total; // retorna o total das apostas
    }

    // cria referência ao btNovo e cria função anônima associada ao evento click
    var btNovo = document.getElementById("btNovo");

    btNovo.addEventListener("click", function() {
        location.reload(); // recarrega a página
    });


###  Programa Reserva de Poltrona sem Teatro

Código HTML:

    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-3">
                <img src="img/ex10_2.jpg" alt="Teatro" class="imgProg">
            </div>

            <div class="col-sm-9">
                <h1>Teatro: Show Musical - Reserva de Poltronas</h1>
                <div class="row">
                    <div class="col-sm-2">
                        <p>
                            <label for="inPoltrona">Nº da Poltrona:</label>
                            <input type="text" class="form-control aDireita" id="inPoltrona" autofocus>
                        </p>
                    </div>

                    <div class="col-sm-4">
                        <input type="button" class="btn btn-primary margemSup" value="Reservar" id="btReservar">
                        <input type="button" class="btn btn-danger margemSup" value="Confirmar Reserva" id="btConfirmar">
                    </div>

                    <div class="col-sm-6">
                        <p>Legenda:</p>
                        <p>
                            <img src="img/disponivel.jpg"> Disponível
                            <img src="img/reservada.jpg" class="margemEsq"> Reservada
                            <img src="img/ocupada.jpg" class="margemEsq"> Ocupada
                        </p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-12" id="divPalco">
                        <p class="bg-primary text-white text-center">
                            Palco do Teatro
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

Código JS:

    const POLTRONAS = 240; // constante com o número de poltronas do teatro

    var reservadas = []; // vetor com as poltronas reservadas pelo cliente

    function montarPalco() {
        var ocupadas = []; // declara vetor para receber as poltronas ocupadas
        
        // verifica se há poltronas salvas em localStorage
        if (localStorage.getItem("teatroOcupadas")) {
        // preenche o vetor com as poltronas ocupadas do teatro (salvas em localStorage)
            ocupadas = localStorage.getItem("teatroOcupadas").split(";");
        }

        // captura divPalco, que é o local onde as imagens são inseridas
        var divPalco = document.getElementById("divPalco");

        // repetição para montar o nº total de poltronas (definida na constante)
        for (var i = 1; i <= POLTRONAS; i++) {
            var figure = document.createElement("figure"); // cria tag figure
            var imgStatus = document.createElement("img"); // cria tag img

            if (ocupadas.indexOf(i.toString()) >= 0) { // se consta em ocupadas
                imgStatus.src = "img10/ocupada.png"; // imagem ocupada.png

            } else { // se não constar ...
                imgStatus.src = "img10/disponivel.png"; // imagem disponivel.png
            }

            imgStatus.className = "poltrona"; // classe com dimensão da img

            var figureCap = document.createElement("figcaption"); // cria figcaption
            var zeros = "";

            if (i < 10) { // condições para exibir zeros nas poltronas...
                zeros = "00"; // menores que 10

            } else if (i < 100) {
                zeros = "0"; // menores que 100
            }

            var num = document.createTextNode("[" + zeros + i + "]"); // cria texto
            
            figureCap.appendChild(num); // define os pais de cada tag criada
            figure.appendChild(imgStatus);
            figure.appendChild(figureCap);

            if (i % 24 == 12) { // se módulo 24, restar 12 (é o corredor)
                figure.style.marginRight = "60px"; // define margem direita de 60px
            }

            divPalco.appendChild(figure); // indica que figure é filha de divPalco

            if (i % 24 == 0) { // se módulo 24, restar 0
                var br = document.createElement("br"); // cria tag br (quebra de linha)
                divPalco.appendChild(br); // indica que br é filha de divPalco
            }
        }
    }

    montarPalco(); // chama function montarPalco()

    function reservarPoltrona() {
        var poltrona = Number(inPoltrona.value); // obtém conteúdo de inPoltrona

        // valida o preenchimento do campo de entrada... não pode ser maior que a const
        if (poltrona <= 0 || isNaN(poltrona) || poltrona > POLTRONAS) {
            alert("Informe um número de poltrona válido");
            inPoltrona.focus();
            return;
        }

        var ocupadas = []; // declara vetor para receber as poltronas ocupadas

        // se há poltronas salvas em localStorage
        if (localStorage.getItem("teatroOcupadas")) {
            // preenche o vetor com as poltronas ocupadas do teatro (salvas em localStorage)
            ocupadas = localStorage.getItem("teatroOcupadas").split(";");
        }

        // se poltrona escolhida já está ocupada (existe em localStorage)
        if (ocupadas.indexOf(poltrona.toString()) >= 0) {
            alert("Poltrona " + poltrona + " já está ocupada...");
            inPoltrona.value = "";
            inPoltrona.focus();
            return;
        }

        // captura divPalco para obter a imagem
        var divPalco = document.getElementById("divPalco");

        // captura imagem da poltrona, filha de divPalco. É -1 pois começa em 0
        var imgPoltrona = divPalco.getElementsByTagName("img")[poltrona - 1];
        imgPoltrona.src = "img10/reservada.png"; // modifica atributo da imagem
        reservadas.push(poltrona); // adiciona poltrona ao vetor reservadas
        inPoltrona.value = ""; // limpa campo
        inPoltrona.focus(); // jogo o foco em inPoltrona
    }

    var btReservar = document.getElementById("btReservar");
    btReservar.addEventListener("click", reservarPoltrona);

    // cria referência ao campo de entrada inPoltrona
    var inPoltrona = document.getElementById("inPoltrona");

    inPoltrona.addEventListener("keypress", function (tecla) {
        if (tecla.keyCode == 13) {
            reservarPoltrona();
        }
    });

    function confirmarReserva() {
        if (reservadas.length == 0) {
            alert("Não há poltronas reservadas");
            inPoltrona.focus(); // elemento já foi referenciado de forma global
            return;
        }

        // captura divPalco para obter as imagens
        var divPalco = document.getElementById("divPalco");

        var ocupadas = "";

        if (localStorage.getItem("teatroOcupadas")) {
            ocupadas = localStorage.getItem("teatroOcupadas") + ";";
        }

        for (var i = 0; i < reservadas.length; i++) {
            ocupadas += reservadas[i] + ";";
            
            // captura imagem da poltrona, filha de divPalco. É -1 pois começa em 0
            var imgPoltrona = divPalco.getElementsByTagName("img")[reservadas[i] - 1];
            imgPoltrona.src = "img10/ocupada.png"; // modifica atributo daimagem
        }

        reservadas = []; // limpa vetor (pois as reservas já foram salvas em localStorage)

        // .length-1 é para retirar o último ";"
        localStorage.setItem("teatroOcupadas", ocupadas.substr(0,
        ocupadas.length - 1));
    }

    var btConfirmar = document.getElementById("btConfirmar");
    btConfirmar.addEventListener("click", confirmarReserva);

### Jogo “Descubra a Palavra”

Código HTML:

    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <h1>Jogo "Descubra a Palavra"</h1>

                <a href="cap10.html" class="btn btn-primary">Cadastrar Palavras</a>
                <a href="ex10_3lista.html" class="btn btn-success">Listar Palavras</a>
                <a href="ex10_3jogo.html" class="btn btn-danger">Iniciar Jogo</a>

                <h2>Cadastrar Palavras</h2>

                <p>
                    <label for="inPalavra">Palavra:</label>
                    <input type="text" class="form-control" id="inPalavra" autofocus>
                </p>

                <p>
                    <label for="inDica">Dica da Palavra:</label>
                    <input type="text" class="form-control" id="inDica">
                </p>

                <input type="button" class="btn btn-primary" value="Cadastrar" id="btCadastrar">
            </div>
        </div>
    </div>

Código JS da página de cima:

    function cadastrarPalavra() {
        // cria referência aos elementos de entrada de dados
        var inPalavra = document.getElementById("inPalavra");
        var inDica = document.getElementById("inDica");
        var palavra = inPalavra.value; // obtém conteúdo dos campos
        var dica = inDica.value;

        // valida preenchimento (palavra não deve possuir espaço em branco)
        if (palavra == "" || dica == "" || palavra.indexOf(" ") >= 0) {
            alert("Informe uma palavra válida (sem espaços) e sua dica correspondente");
            inPalavra.focus();
            return;
        }

        // se já existe...
        if (localStorage.getItem("jogoPalavra")) {
            // grava conteúdo anterior + ";" e a palavra / dica
            localStorage.setItem("jogoPalavra", localStorage.getItem("jogoPalavra") + ";" + palavra);
            localStorage.setItem("jogoDica", localStorage.getItem("jogoDica") + ";" + dica);

        } else {
            // senão, é a primeira inclusão: grava apenas a palavra e dica
            localStorage.setItem("jogoPalavra", palavra);
            localStorage.setItem("jogoDica", dica);
        }

        // verifica se salvou
        if (localStorage.getItem("jogoPalavra")) {
            alert("Ok! Palavra " + palavra + " Cadastrada com Sucesso");
        }

        inPalavra.value = ""; // limpa campos de edição
        inDica.value = "";
        inPalavra.focus(); // joga foco em inPalavra
    }

    // cria referência ao elemento btCadastrar e associa function ao evento click
    var btCadastrar = document.getElementById("btCadastrar");
    btCadastrar.addEventListener("click", cadastrarPalavra);

Código HTML da página Lista:

    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <h1>Jogo "Descubra a Palavra"</h1>

                <a href="ex10_3.html" class="btn btn-primary">Cadastrar Palavras</a>
                <a href="ex10_3lista.html" class="btn btn-success">Listar Palavras</a>
                <a href="ex10_3jogo.html" class="btn btn-danger">Iniciar Jogo</a>

                <div class="row">
                    <div class="col-sm-9">
                        <h2>Listagem das Palavras</h2>
                    </div>

                    <div class="col-sm-3">
                        <input type="checkbox" class="margemSup" id="ckMostrar">Mostrar Palavras
                    </div>
                </div>

                <table class="table table-striped" id="tbPalavras">
                    <tr>
                        <th>Palavra</th>

                        <th>Dica</th>
                            <th>
                            <label><input type="checkbox" id="ckTodos"> Todos </label>
                        </th>
                    </tr>
                </table>

                <p class="aDireita">
                    <input type="button" class="btn btn-danger oculta" value="Excluir Selecionados" id="btExcluir">
                </p>
            </div>
        </div>
    </div>

Código JS da página Lista:

    function montarTabela() {
        // se houver dados salvos em localStorage
        if (localStorage.getItem("jogoPalavra")) {
            // obtém conteúdo e converte em elementos de vetor (na ocorrência ";")
            var palavras = localStorage.getItem("jogoPalavra").split(";");
            var dicas = localStorage.getItem("jogoDica").split(";");

            // cria referência ao elemento tbPalavras
            var tbPalavras = document.getElementById("tbPalavras");
            var linha, col1, col2, col3; // declara as variáveis

            // percorre elementos do vetor e os insere na tabela
            for (var i = 0; i < palavras.length; i++) {
                linha = tbPalavras.insertRow(-1); // adiciona uma linha na tabela
                col1 = linha.insertCell(0); // cria colunas na linha inserida
                col2 = linha.insertCell(1);
                col3 = linha.insertCell(2);
                col1.textContent = palavras[i]; // joga um conteúdo em cada célula
                col2.textContent = dicas[i];
                col3.innerHTML = "<input type='checkbox'>"; // exibe campo checkbox
            }
        }
    }

    // cria referência ao ckMostrar (se marcado, deve exibir tabela e botão excluir)
    var ckMostrar = document.getElementById("ckMostrar");

    // cria function anônima, associada ao evento change do ckMostrar
    ckMostrar.addEventListener("change", function () {
        if (ckMostrar.checked) { // se marcado ...
            montarTabela(); // exibe tabela (palavras e dicas)
            btExcluir.className = "btn btn-danger exibe"; // exibe o botão Excluir

        } else { // senão ...
            location.reload(); // recarrega a página
        }
    });

    // cria referência ao checkbox ckTodos (na linha de título da tabela)
    var ckTodos = document.getElementById("ckTodos");

    // executa função anônima quando houver uma troca de status
    ckTodos.addEventListener("change", function () {
        // cria referência à tabela e aos campos input (filhos da tabela)
        var tbPalavras = document.getElementById("tbPalavras");
        var ckExcluir = tbPalavras.getElementsByTagName("input");
        var status = ckTodos.checked; // obtém status de ckTodos ...

        // ... e percorre os demais checkbox para aplicar este status
        for (var i = 1; i < ckExcluir.length; i++) {
            ckExcluir[i].checked = status;
        }
    });

    function removerPalavras() {
        // cria referência à tabela e aos campos input (filhos da tabela)
        var tbPalavras = document.getElementById("tbPalavras");
        var ckExcluir = tbPalavras.getElementsByTagName("input");
        var temSelecionado = false; // para verificar se há palavras selecionadas

        // percorre campos input type checkbox da tabela (exceto "Todos" no título)
        for (var i = 1; i < ckExcluir.length; i++) {
            if (ckExcluir[i].checked) { // se está selecionado
                temSelecionado = true; // muda valor da "flag"
                break; // sai da repetição
            }
        }

        // se não temSelecionado (se valor da variável é false)
        if (!temSelecionado) {
            alert("Não há palavras selecionadas para exclusão");
            return;
        }

        // solicita confirmação de exclusão das palavras selecionadas
        if (confirm("Confirma Exclusão das Palavras Selecionadas?")) {
            // exclui conteúdo armazenado em localStorage
            localStorage.removeItem("jogoPalavra");
            localStorage.removeItem("jogoDica");

            var palavras = ""; // para acumular as palavras da tabela dicas = "";

            // primeiro irá gravar em localStorage as palavras não selecionadas
            for (i = 1; i < ckExcluir.length; i++) {
                // se não está selecionado (para exclusão)
                if (!ckExcluir[i].checked) {
                    // obtém o conteúdo da tabela (coluna 0: palavra; coluna 1: dica)
                    palavras += tbPalavras.rows[i].cells[0].textContent + ";";
                    dicas += tbPalavras.rows[i].cells[1].textContent + ";";
                }
            }

            // se vazio, significa que marcou todos checkbox (não salva em localStorage)
            if (palavras != "") {
                // .length-1 (para retirar o último ";")
                localStorage.setItem("jogoPalavra", palavras.substr(0, palavras.length - 1));
                localStorage.setItem("jogoDica", dicas.substr(0, dicas.length - 1));
            }

            // agora irá remover as linhas selecionadas (do fim para o início)
            for (i = ckExcluir.length - 1; i > 0; i--) {
                if (ckExcluir[i].checked) {
                    tbPalavras.deleteRow(i); // remove a linha
                }
            }

            ckExcluir[0].checked = false; // desmarca ckTodos (que é o input 0)
        }
    }

    var btExcluir = document.getElementById("btExcluir");
    btExcluir.addEventListener("click", removerPalavras);
    

Código HTML da página do Jogo:

    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <h1>Jogo "Descubra a Palavra"</h1>

                <a href="cap10.html" class="btn btn-primary">Cadastrar Palavras</a>
                <a href="ex10_3lista.html" class="btn btn-success">Listar Palavras</a>
                <a href="ex10_3jogo.html" class="btn btn-danger">Iniciar Jogo</a>

                <div class="row margemJogo">
                    <div class="col-sm-4 corFundo">
                        <h2 class="aDireita">
                            <label for="inLetra">Informe uma letra:</label>
                        </h2>
                    </div>

                    <div class="col-sm-2 corFundo">
                        <input type="text" class="form-control margemJogo" id="inLetra" autofocus>
                    </div>

                    <div class="col-sm-6 corFundo">
                        <input type="button" class="btn btn-primary margemJogo" value="Jogar" id="btJogar">
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-8">
                        <h2>
                            Palavra:<span id="outPalavra" class="entreLetras fonteAzul"></span>
                        </h2>

                        <h2>
                            Nº Chances: <span id="outChances" class="fonteVermelho">4</span>
                        </h2>

                        <h2>
                            Erros:<span id="outErros" class="entreLetras fonteVermelho"></span>
                        </h2>

                        <h2 id="outMensagemFinal"></h2>
                    </div>

                    <div class="col-sm-4 bordaQuadro">
                        <h3> Situação do Jogador </h3>
                        <img src="img/status4.jpg" alt="Situação do Jogador" id="imgStatus" class="imgProg">
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-12 corFundo margemDica">
                        <input type="button" value="Ver Dica" class="btn btn-primary" id="btVerDica">
                        <span id="outDica">* Custo: 1 chance</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

Código JS da página do Jogo:

    var palavraSorteada; // declara variáveis globais
    var dicaSorteada;

    // cria referência aos elementos que irão conter eventos associados a functions
    var inLetra = document.getElementById("inLetra");
    var btJogar = document.getElementById("btJogar");
    var btVerDica = document.getElementById("btVerDica");

    function montarJogo() {
        // cria referência ao local onde a palavra sorteada (letra inicial e _) é exibida
        var outPalavra = document.getElementById("outPalavra");

        // obtém conteúdo do localStorage e separa em elementos de vetor
        var palavras = localStorage.getItem("jogoPalavra").split(";");
        var dicas = localStorage.getItem("jogoDica").split(";");
        var tam = palavras.length; // número de palavras cadastradas

        // gera um número entre 0 e tam-1 (pois arredonda para baixo)
        var numAleatorio = Math.floor(Math.random() * tam);

        // obtém palavra (em letras maiúsculas) e dica na posição do nº aleatório gerado
        palavraSorteada = palavras[numAleatorio].toUpperCase();
        dicaSorteada = dicas[numAleatorio];

        var novaPalavra = ""; // para montar palavra exibida (com letra inicial e "_")

        // for para exibir a letra inicial e as demais ocorrências desta letra na palavra
        for (var i = 0; i < palavraSorteada.length; i++) {
            // se igual a letra inicial, acrescenta esta letra na exibição
            if (palavraSorteada.charAt(0) == palavraSorteada.charAt(i)) {
                novaPalavra += palavraSorteada.charAt(0);

            } else { // senão...
                novaPalavra += "_"; // acrescenta "_"
            }
        }

        outPalavra.textContent = novaPalavra; // exibe a novaPalavra
    }

    if (localStorage.getItem("jogoPalavra")) { // se houver palavras cadastradas
        montarJogo(); // sorteia e "monta" palavra do jogo

    } else { // senão...
        alert("Cadastre palavras para jogar"); // exibe alerta
        inLetra.disabled = true; // desabilita inLetra e botões
        btJogar.disabled = true; // (por isso, eles são referenciados
        btVerDica.disabled = true; // no início do programa)
    }

    function mostrarDica() {
        // cria referência aos elementos da página a serem alterados nesta function
        var outErros = document.getElementById("outErros");
        var outDica = document.getElementById("outDica");
        var outChances = document.getElementById("outChances");
        var erros = outErros.textContent; // obtém o conteúdo do elemento outErros

        // verifica se o jogador já clicou anteriormente no botão
        if (erros.indexOf("*") >= 0) {
            alert("Você já solicitou a dica...");
            inLetra.focus();
            return;
        }

        outDica.textContent = " * " + dicaSorteada; // exibe a dica
        outErros.textContent = erros + "*"; // acrescenta "*" nos erros

        var chances = Number(outChances.textContent) - 1; // diminui 1 em chances

        outChances.textContent = chances; // mostra o nº de chances
        trocarStatus(chances); // troca a imagem
        verificarFim(); // verifica se atingiu limite de chances

        inLetra.focus(); // joga o foco em inLetra (já referenciado no início do prog)
    }

    // associa ocorrência do evento click deste elemento à function mostrarDica()
    btVerDica.addEventListener("click", mostrarDica);

    function trocarStatus(num) {
        if (num > 0) {
            var imgStatus = document.getElementById("imgStatus");
            imgStatus.src = "img/status" + num + ".jpg";
        }
    }

    function jogarLetra() {
        var outPalavra = document.getElementById("outPalavra");
        var outErros = document.getElementById("outErros");
        var outChances = document.getElementById("outChances");
        // obtém o conteúdo do campo inLetra e converte-o para maiúscula
        var letra = inLetra.value.toUpperCase();
        // valida o preenchimento de uma única letra
        if (letra == "" || letra.length != 1) {
        alert("Informe uma letra");
        inLetra.focus();
        return;
        }
        var erros = outErros.textContent; // obtém o conteúdo dos elementos da página
        var palavra = outPalavra.textContent;

        // se a letra apostada já consta em erros, significa que ele já apostou esta letra
        if (erros.indexOf(letra) >= 0 || palavra.indexOf(letra) >= 0) {
            alert("Você já apostou esta letra");
            inLetra.focus();
            return;
        }

        if (palavraSorteada.indexOf(letra) >= 0) { // se letra consta em palavraSorteada
            var novaPalavra = ""; // para compor novaPalavra

            // for para montar palavra a ser exibida
            for (var i = 0; i < palavraSorteada.length; i++) {
                // se igual a letra apostada, acrescenta esta letra na exibição
                if (palavraSorteada.charAt(i) == letra) {
                    novaPalavra += letra;

                } else { // senão...
                    novaPalavra += palavra.charAt(i); // acrescenta a letra ou ""_" existente
                }
            }
            outPalavra.textContent = novaPalavra; // exibe a novaPalavra

        } else { 
            // se letra não consta em palavraSorteada
            erros += letra; // acrescenta letra em erros
            outErros.textContent = erros; // exibe os erros

            var chances = Number(outChances.textContent) - 1; // diminui nº de chances
            outChances.textContent = chances; // exibe novo nº de chances

            trocarStatus(chances); // troca imagem
        }

        verificarFim(); // verifica se já ganhou ou perdeu

        inLetra.value = "";
        inLetra.focus();
    }

    btJogar.addEventListener("click", jogarLetra);
    // associa evento keypress à function anônima que verifica se pressionou enter (13)

    inLetra.addEventListener("keypress", function (tecla) {
        if (tecla.keyCode == 13) {
            jogarLetra(); // ... e chama jogarLetra
        }
    });

    function verificarFim() {
        var outChances = document.getElementById("outChances");
        var outMensagemFinal = document.getElementById("outMensagemFinal");

        var chances = Number(outChances.textContent); // obtém número de chances

        if (chances == 0) { // se 0, perdeu
            // display-3 é um estilo do Bootstrap
            outMensagemFinal.className = "display-3 fonteVermelho";
            outMensagemFinal.textContent = "Ah... é " + palavraSorteada + ". Você Perdeu!";

            concluirJogo();

            // se não é 0 e a palavra exibida em outPalavra é igual a palavra sorteada, ganhou

        } else if (outPalavra.textContent == palavraSorteada) {
            outMensagemFinal.className = "display-3 fonteAzul";
            outMensagemFinal.textContent = "Parabéns!! Você Ganhou.";
            concluirJogo();
        }
    }

    // function concluirJogo, modifica o texto da dica e desabilita os botões de jogar
    function concluirJogo() {
        var outDica = document.getElementById("outDica");
        outDica.textContent = "* Clique no botão 'Iniciar Jogo' para jogar novamente";

        inLetra.disabled = true;
        btJogar.disabled = true;
        btVerDica.disabled = true;
    }



FIM DO LIVRO!!!