// ----------------------------------------------------------

// // a)Criar dez imagens de números (de 0 a 9) como se fossem velas de aniversário e salvá-las na pasta img. Em seguida, elaborar um programa que leia uma idade e insira as imagens correspondentes na página conforme o número informado. O programa deve permitir idades entre 1 e 120 anos.

// // Código HTML:
    // <div class="container-fluid">
    //     <div class="row">
    //         <div class="col-sm-4">
    //             <img src="img/ex9_3.jpg" alt="Velas" class="imgProg">
    //         </div>

    //         <div class="col-sm-8" id="divVelas">
    //             <h1>Velas de Aniversário</h1>

    //             <p>
    //                 <label for="inIdade">Idade</label>
    //                 <input type="text" class="form-control" id="inIdade">
    //             </p>

    //             <p>
    //                 <input type="button" class="btn btn-primary" value="Exibir Velas" id="btExibir">
    //                 <input type="button" class="btn btn-danger" value="Novas Velas" id="btExcluir">
    //             </p>
    //         </div>
    //     </div>
    // </div>

// // Código JS:

// var btExibir = document.getElementById("btExibir");
// btExibir.addEventListener("click", adicionarDados);

// function adicionarDados () {
//     var divVelas = document.getElementById("divVelas")
//     var inIdade = document.getElementById("inIdade");

//     var idade = inIdade.value;

//     if (idade == "" || isNaN(idade)) {
//         alert("Por favor, digite a idade corretamente");
//         inIdade.focus();
//         return;
//     }

//     if (idade > 120) {
//         alert("Por favor digite a idade novamente, pois o programa só aceita números até 120");
//         inIdade.focus();
//         return;
//     }

//     inIdade.value = "";

//     var alt = [
//         "Numeração zero das velas de aniversário",
//         "Numeração um das velas de aniversário",
//         "Numeração dois das velas de aniversário",
//         "Numeração três das velas de aniversário",
//         "Numeração quatro das velas de aniversário",
//         "Numeração cinco das velas de aniversário",
//         "Numeração seis das velas de aniversário",
//         "Numeração sete das velas de aniversário",
//         "Numeração oito das velas de aniversário",
//         "Numeração nove das velas de aniversário" 
//     ]


//     criarVelas (idade, alt, divVelas);
// }

// function criarVelas (idade, alt, divVelas) {

//     var algarismos = idade.split("");

//     console.log(algarismos);

//     var limite = 1;
//     var inicio = 0;

//     for (i = 0; i < 10; i++) {
//         for (a = inicio; a < limite; a++) {
//            var flag = algarismos[a];

//            if (flag == i) {
//                 var novaVela = document.createElement("img");
//                 novaVela.src = `imgVelas/${i}_vela.png`;
//                 novaVela.alt = alt[i];
//                 divVelas.appendChild(novaVela);

//                 inicio++;
//                 limite++;
//                 i = 0;
//            }
//         }
//     }

//     btExibir.disabled = true;
// }

// var btExcluir = document.getElementById("btExcluir");
// btExcluir.addEventListener("click", excluirVelas);

// function excluirVelas () {
//     // Eu poderia usar simplesmente a função location.reload(), mas decidi fazer desse jeito pra aprender a remover as tags que eu criei, que nesse caso foram as tags img.
//     var divVelas = document.getElementById("divVelas");
//     var imagem = divVelas.getElementsByTagName("img");

//     var numImg = imagem.length;

//     for (i = 0; i < numImg; i++) {
//         divVelas.removeChild(imagem[0]);
//     }

//     btExibir.disabled = false;
// }

// ----------------------------------------------------------

// // b) Elaborar um programa que leia um nome e, ao clicar no botão Exibir Partes do Nome, insira linhas de cabeçalho h3 na página com as partes do nome em cores aleatórias. Ao clicar no botão, o programa deve verificar a existência de linhas de cabeçalho h3 na página, excluindo-as se houver.

// //Código HTML:

    // // <div class="container-fluid">
    // //     <div class="row">
    // //         <div class="col-sm-4">
    // //             <img src="img/ex9_3.jpg" alt="Imagem qualquer" class="imgProg">
    // //         </div>

    // //         <div class="col-sm-8" id="divH3">
    // //             <h1>Nome Colorido</h1>

    // //             <p>
    // //                 <label for="inNome">Nome Completo:</label>
    // //                 <input type="text" class="form-control" id="inNome">
    // //             </p>

    // //             <p>
    // //                 <input type="button" class="btn btn-primary" value="Exibir Partes do Nome" id="btExibir">
    // //             </p>
    // //         </div>
    // //     </div>
    // // </div>

// // Código JS:

// btExibir = document.getElementById("btExibir");
// btExibir.addEventListener("click", adicionarDados);

// function adicionarDados () {
//     var divH3 = document.getElementById("divH3");
//     var inNome = document.getElementById("inNome")
//     var nome = inNome.value;

//     var separarNome = nome.split(" ");

//     for (i = 0; i < separarNome.length; i++) {
//         if (separarNome[i] == "") {
//             alert("Por favor, digite o nome COMPLETO!!");
//             inNome.focus();
//             return;
//         }
//     }

//     if (nome == "" || separarNome.length == 1) {
//         alert("Por favor, digite o nome COMPLETO!!");
//         inNome.focus();
//         return;
//     }

//     criarNome(separarNome, divH3);
// }

// function criarNome (separarNome, pai) {
    
//     var hTres = pai.getElementsByTagName("h3");
//     var numH3 = hTres.length;

//     var br = pai.getElementsByTagName("br");

//     var flag = (numH3 > 0) ? true : false;

//     if (flag) {
//         for (i = 0; i < numH3; i++) {
//             pai.removeChild(hTres[0]);
//             pai.removeChild(br[0]);
//         }
//     }

//     for (i = 0; i < separarNome.length; i++) {

//         var h3 = document.createElement("h3");
//         pai.appendChild(h3);
//         h3.className = "cor-" + sortearCor();
       
//         var texto = document.createTextNode(separarNome[i]);
//         h3.appendChild(texto);
  
//         var br = document.createElement("br");
//         pai.appendChild(br);
//     }
// }

// function sortearCor () {
//     var sorteio = Math.floor(Math.random() * 10);
//     return sorteio;
// }

// ----------------------------------------------------------

// c) Elaborar um programa que leia o nome de um clube e, ao clicar em Adicionar, insira-o na página a partir de uma tag h5 (alinhada à direita e em itálico). Ao clicar em Montar Tabela de Jogos, o programa deve verificar se o número de tags h5 existentes na página é par. Se for, exiba os jogos (na ordem de inserção) em uma tabela, também inserida pelo programa na página. Os clubes devem ser recuperados das tags h5 existentes na página. Se o número de tags h5 for ímpar, exiba mensagem de advertência. Depois de montar a tabela, o programa deve desabilitar os botões Adicionar e Montar Tabela de Jogos.

// // Código HTML:

// {/* <div class="container-fluid">
//         <div class="row">
//             <div class="col-sm-4">
//                 <img src="img/ex9_3.jpg" alt="Imagem qualquer" class="imgProg">
//             </div>

//             <div class="col-sm-8" id="divPai">
//                 <h1>Copa do Brasil - Classificados</h1>

//                 <p>
//                     <label for="inClube">Clube:</label>
//                     <input type="text" class="form-control" id="inClube">
//                 </p>

//                 <p>
//                     <input type="button" class="btn btn-primary" value="Adicionar" id="btAdicionar">
//                     <input type="button" class="btn btn-success" value="Montar Tabela de Jogos" id="btMontar">
//                     <input type="button" class="btn btn-danger" value="Novos Clubes" id="btNovosClubes">
//                 </p>

//                 <div class="posicao" id="divPosicao"></div>
//             </div>
//         </div>
//     </div> */}

// // Código JS:

// var copiaClubes = [];

// var btAdicionar = document.getElementById("btAdicionar");
// btAdicionar.addEventListener("click", adicionarDados);

// function adicionarDados () {
//     var divPosicao = document.getElementById("divPosicao");
//     var inClube = document.getElementById("inClube");

//     var time = inClube.value;

//     if (time == "") {
//         alert("Pro favor insira um nome de time!!");
//         inClube.focus();
//         return;
//     }

//     var clubes = [];
//     clubes.push(time);
//     copiaClubes.push(time);

//     criarLista(clubes, divPosicao);

//     inClube.value = "";
//     inClube.focus();
// }

// function criarLista(clubes, pai) {

//     for (i = 0; i < clubes.length; i++) {
//         var h5 = document.createElement("h5");
//         pai.appendChild(h5);
//         h5.className = "formatacao";
    
//         var texto = document.createTextNode(clubes[i]);
//         h5.appendChild(texto);
//     }
// }

// var btMontar = document.getElementById("btMontar");
// btMontar.addEventListener("click", criarTabela);

// function criarTabela () {

//     if (copiaClubes.length % 2 != 0) {
//         alert("Há um número impar de times cadastrados, por favor insira mais um time para montar a tabela");
//         return;
//     }

//     btAdicionar.disabled = true;
//     btMontar.disabled = true;

//     var divPai = document.getElementById("divPai");

//     var table = document.createElement("table");
//     divPai.appendChild(table);
//     table.className = "table table-striped";
//     table.id = "tabelaJogos";

//     var tr = document.createElement("tr");
//     table.appendChild(tr);

//     var th = document.createElement("th");
//     tr.appendChild(th); 
//     th.className = "centro";


//     var texto = document.createTextNode("Tabela de Jogos");
//     th.appendChild(texto);


    
//     criarLinhaTabela();
// }

// function criarLinhaTabela() {

//     var tabela = document.getElementById("tabelaJogos");

//     for (i = 0; i < copiaClubes.length; i++) {
//         var linha = tabela.insertRow(-1);
//         var col1 = linha.insertCell(0);
//         col1.className = "mudar";
//         var col2 = linha.insertCell(1);
//         col2.className = "mudar";
    
//         col1.textContent = copiaClubes[i];
//         col2.textContent = copiaClubes[i + 1];

//         i++
//     }
// }

// var btNovosClubes = document.getElementById("btNovosClubes");
// btNovosClubes.addEventListener("click", novaTabela);

// function novaTabela () {
//     location.reload();
// }

// ----------------------------------------------------------