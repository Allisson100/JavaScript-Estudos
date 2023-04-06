O termo mockar vem da palavra MuckUp, que quer dizer +- um rascunho de algo que será feito futuramente. No nosso projeto vamos fazer um rascunho de uma API.

E vamos fazer isso com o json-server que é um pacote npm que simul um servidor local no nosso computador.

E precisamos instalar o Node.Js.

Node.js é um ambiente de execução JavaScript que permite executar aplicações desenvolvidas com a linguagem sem depender de um navegador. Com o Node.js podemos executar aplicações sem o uso do navegador. Além disso, com ele é possível criar praticamente qualquer tipo de aplicações web, desde APIs até servidores para sites estáticos e dinâmicos, como faremos no próximo vídeo.

---------------------------------

    async function listaVideos() {
        const conexao = await fetch("http://localhost:3000/videos")
        const conexaoConvertida = await conexao.json();

        return conexaoConvertida
    }

    export const conectaApi = {
        listaVideos
    }

Criamos a conexão com a API através da função assincrona e exportamos essa função com o export para podermos usar essa função em outros arquivos.

---------------------------------

    import { conectaApi } from "./conectaAPI.js"

    const lista = document.querySelector("[data-lista]")

    function constroiCard() {
        const video = document.createElement("li")
        video.className = "videos__item"
        video.innerHTML = `
            <iframe width="100%" height="72%" src="https://www.youtube.com/embed/pA-EgOaF23I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope picture-in-picture" allowfullscreen></iframe>

            <div class="descricao-video">
                <img src="./img/logo.png" alt="logo canal alura">
                <h3>Qual é o melhor hardware para programação com Mario Souto</h3>
                <p>236 mil visualizações</p>
            </div>
        `

        return video
    }

    async function listaVideo () {
        const lista = await conectaApi.listaVideos();
    }

Aqui criamos uma função responsavél em criar os cards no html e importamos a função que nos tras os dados da API, mas ainda falta colocar as variaveis no template string para ficar tudo certinho.

---------------------------------

    import { conectaApi } from "./conectaAPI.js"

    const lista = document.querySelector("[data-lista]")

    function constroiCard(titulo, descricao, url, imagem) {
        const video = document.createElement("li")
        video.className = "videos__item"
        video.innerHTML = `
            <iframe width="100%" height="72%" src="${url}" title="${titulo}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope picture-in-picture" allowfullscreen></iframe>

            <div class="descricao-video">
                <img src="${imagem}" alt="logo canal alura">
                <h3>${titulo}</h3>
                <p>${descricao}</p>
            </div>
        `

        return video
    }

    async function listaVideos() {
        const listaAPI = await conectaApi.listaVideos();
        listaAPI.forEach(elemento => lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));
    }

    listaVideos()

Colocamos as variáveis no template string. Dentro da função listaVideos() percorremos o array com forEach() e dizemos para cada elemento que a const lista é o appendChild da li criada. Essa li é criada dentro da função controiCard().

---------------------------------

    async function criaVideo(titulo, descricao, url, imagem) {
        const conexao = await fetch("http://localhost:3000/videos", {
            method: "POST",
            headers: {
                "Content-type": "aplication/json" //Serve para especificar que tipo de arquivo está sendo enviado.
            },
            body: JSON.stringify({
                titulo: titulo,
                descricao: `${descricao} mil vizualizações`,
                url: url,
                imagem: imagem
            })
        })

        const conexaoConvertida = await conexao.json();

        return conexaoConvertida
    }

    export const conectaApi = {
        listaVideos,
        criaVideo
    }

Criei outra função assincrona para onde pedimos a conexão da API, porém passsamos outro parâmetro  e com isso criamos todo uma estrutura de uma função assincrona que faz uma conexão com a API e cria uma requisição post, que nesse caso vai ser servir para cadastrar novos videos na API e expotamos essa função para ser utilizadas em outros arquivos.

Requisições do tipo POST são usadas para enviar dados para a API. Por exemplo, criar um novo registro de usuário com: nome, idade e endereço de e-mail.

Diferente de requisições do tipo GET, você precisará passar um objeto das opções de configuração como um segundo argumento em requisições POST.

---------------------------------

Criamos uma função para buscar videos na API.

    import { conectaApi } from "./conectaAPI.js";
    import constroiCard from "./mostrarVideos.js";

    async function buscarVideo(e) {
        e.preventDefault()

        const dadosDePesquisa = document.querySelector("[data-pesquisa]").value
        const busca = await conectaApi.buscaVideo(dadosDePesquisa)

        const lista = document.querySelector("[data-lista]")

        while (lista.firstChild) {
            lista.removeChild(lista.firstChild)  
        }

        busca.forEach(e => lista.appendChild(constroiCard(e.titulo, e.descricao, e.url, e.imagem)))

    }

    const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]")
    botaoDePesquisa.addEventListener("click", e => buscarVideo(e))

Primeiro ponto importante é que precisamos mostrar na tela somente o video com o filtro e oara isso exportamos a função do arquivo mostrarVideos.js:

    export default function constroiCard(titulo, descricao, url, imagem) {
        const video = document.createElement("li")
        video.className = "videos__item"
        video.innerHTML = `
            <iframe width="100%" height="72%" src="${url}" title="${titulo}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope picture-in-picture" allowfullscreen></iframe>

            <div class="descricao-video">
                <img src="${imagem}" alt="logo canal alura">
                <h3>${titulo}</h3>
                <p>${descricao}</p>
            </div>
        `

        return video
    }

Esse export default serve para exportar a função em específico, diferente do que eu fiz no arquivo conectaAPI.js onde eu atribui todas as funçãoes do arquivo em uma constante.

Feito isso eu impoortei a função constroiCArd dentro do arquivo buscarVideos.js:

    import constroiCard from "./mostrarVideos.js";

Então fizemos uma função onde eu pegava oi valor do input de busca e mandava esse valor como parâmetro da função buscarVideo que tem no arquico conectaAPI.js:

    async function buscaVideo(termoDeBusca) {
        const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)
        const conexaoConvertida = await conexao.json()

        return conexaoConvertida
    }

Essa função é interessante, pois atribuimos o valor do input dentro da url com o padrão ?q=${termoDeBusca} e com isso ele consegue fazer a busca através do termo de pesquisa e mostrar na tela so a busca em específico.

Criamos um laço de repetição também:

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild)  
    }

Ele serve para apagar os elemento filhos da ul para só depois através da função controiCard ele criar os videos que pesquisamos na busca.

---------------------------------

Mas o que é um endpoint? Basicamente, é a URL onde seu serviço pode ser acessado por uma aplicação.
