// ----------------------------------------------------------

// var anuncio = prompt("Anúncio: "); // lê o anúncio
// var tam = anuncio.length; // obtém o tamanho
// var numPalavras = 0; // inicializa contador

// for (var i = 0; i < tam; i++) { // percorre os caracteres do anúncio
//     if (anuncio.charAt(i) == " ") { // se encontrou um espaço
//         numPalavras++; // incrementa contador
//     }
// }

// // exibe anúncio e número de palavras (que é o nº de espaços + 1)
// alert("Anúncio: " + anuncio + "\nNº Palavras: " + (numPalavras + 1));

// ----------------------------------------------------------

// function montarDica() {
//     // cria referência aos elementos da página
//     var inFruta = document.getElementById("inFruta");
//     var outDica = document.getElementById("outDica");

//     // obtém conteúdo do campo de entrada
//     var fruta = inFruta.value;

//     // se vazio, exibe alerta, posiciona em inFruta e retorna
//     if (fruta == "") {
//         alert("Informe a fruta...");
//         inFruta.focus();
//         return;
//     }

//     var resposta = fruta.charAt(0); // letra inicial da fruta
//     var estrelas = "*"; // vai concatenar *
//     var tam = fruta.length; // obtém tamanho da fruta

//     // percorre os demais caracteres da fruta
//     for (var i = 1; i < tam; i++) {
//         // se a letra da posição da variável de controle for igual à primeira...
//         if (fruta.charAt(i) == fruta.charAt(0)) {
//             resposta += fruta.charAt(0); // adiciona a letra inicial

//         } else { // senão,
//             resposta += "_"; // adiciona o sublinhado
//         }

//         estrelas += "*"; // concatena *
//     }
    
//     // exibe a resposta e exibe estrelas (*) em inFruta
//     outDica.textContent = resposta;
//     inFruta.value = estrelas;
// }

// // cria referência ao botão e após associa function ao evento click
// var btMontar = document.getElementById("btMontar");
// btMontar.addEventListener("click", montarDica);

// ----------------------------------------------------------

// function gerarCracha() {
//     // cria referência aos elementos da página
//     var inNome = document.getElementById("inNome");
//     var outCracha = document.getElementById("outCracha");

//     // obtém o conteúdo do campo de entrada
//     var nome = inNome.value;

//     // se vazio ou se não há espaço no nome
//     if (nome == "" || nome.indexOf(" ") == -1) {
//         alert("Informe o nome completo do participante...");
//         inNome.focus();
//         return;
//     }

//     var priEspaco = nome.indexOf(" "); // posição do primeiro espaço
//     var ultEspaco = nome.lastIndexOf(" "); // posição do último espaço
//     // copia nome e sobrenome usando os parâmetros do substr()

//     var cracha = nome.substr(0, priEspaco) + nome.substr(ultEspaco);
    
//     // altera o texto identificado na página por outCracha
//     outCracha.textContent = "Crachá: " + cracha;
// }

// // cria referência ao botão e após associa function ao evento click
// var btGerar = document.getElementById("btGerar");
// btGerar.addEventListener("click", gerarCracha);

// ----------------------------------------------------------

// function verSenha() {
//     // cria referência aos elementos da página
//     var inSenha = document.getElementById("inSenha");
//     var outResposta = document.getElementById("outResposta");

//     // obtém o conteúdo do campo de entrada
//     var senha = inSenha.value;

//     var erros = []; // vetor com erros

//     // verifica se o tamanho da senha é inválido
//     if (senha.length < 8 || senha.length > 15) {
//         erros.push("possuir entre 8 e 15 caracteres");
//     }

//     // verifica se não possui números
//     if (senha.match(/[0-9]/g) == null) {
//         erros.push("possuir números (no mínimo, 1)");
//     }

//     // verifica se não possui letras minúsculas
//     if (!senha.match(/[a-z]/g)) {
//         erros.push("possuir letras minúsculas (no mínimo, 1)");
//     }

//     // verifica se não possui letras maiúsculas ou se possui apenas 1
//     if (!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length == 1) {
//         erros.push("possuir letras maiúsculas (no mínimo, 2)");
//     }

//     // verifica se não possui símbolos ou "_"
//     if (!senha.match(/[\W|_]/g)) {
//         erros.push("possuir símbolos (no mínimo, 1)");
//     }

//     // se vetor está vazio (significa que não foram encontrados erros)
//     if (erros.length == 0) {
//         outResposta.textContent = "Ok! Senha Válida"
//     } else {
//         outResposta.textContent = "Erro... A senha deve " + erros.join(",");
//     }
// }
// // cria referência ao botão e após associa function ao evento click
// var btVerificar = document.getElementById("btVerificar");
// btVerificar.addEventListener("click", verSenha);

// ----------------------------------------------------------





