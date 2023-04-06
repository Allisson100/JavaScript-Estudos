### Aula01

Evento de enviar é o submit.

    const form = document.getElementById("novoItem");

    form.addEventListener("submit", (evento) => {
        evento.preventDefault()
        console.log("FUNCIONOU");
    })

Nessa função eu estou passando um parâmetro chamado evento. Esse evento é basicamente todos os dados que estão sendo enviados nessa função submit.

Se colocarmos um console.log do evento ele vai nos retornar tudo o que está acontecendo ali naquele momento:

    const form = document.getElementById("novoItem");

    form.addEventListener("submit", (evento) => {
        evento.preventDefault()
        console.log(evento);
    })

-----------------------------------

evento.preventDefault();

Esse comando interrompe o processo de envio do fromulário até porque nesse momento do código os dados não estão sendo enviados para nenhum lugar.

Após o fim da aula temos como código final:

    const form = document.getElementById("novoItem");

    form.addEventListener("submit", (evento) => {
        evento.preventDefault();


        console.log(evento);
        console.log(evento.target.elements['nome'].value);
        console.log(evento.target.elements['quantidade'].value);
    })

Os comandos de console.log com target.elements nos retorna os valores obtidos dos inputs do formulário que no nossa caso é o nome e a quantidade.

-----------------------------------

### Aula02

const numeroItem = document.createElement('strong');
numeroItem.innerHTML = quantidade;

Essa linha de código cria um novo elemento que é a tag strong, mas com o inner.HTML nós acrescentamos entre as tags <strong>innerHTML</strong> o número da qua está na variável quantidade.

Temos como código final da aula02:

    const form = document.getElementById("novoItem");
    const lista =  document.getElementById("lista");

    form.addEventListener("submit", (evento) => {
        evento.preventDefault();

        let nome = evento.target.elements['nome'].value;
        let quantidade = evento.target.elements['quantidade'].value;

        criaElemento(nome, quantidade);
    })

    function criaElemento(nome, quantidade) {
        const novoItem = document.createElement('li')
        novoItem.classList.add("item");

        const numeroItem = document.createElement('strong');
        numeroItem.innerHTML = quantidade;

        novoItem.appendChild(numeroItem);
        novoItem.innerHTML += nome;

        lista.appendChild(novoItem);
    }

-----------------------------------

### Aula 03

Explica um pouco sobre o localStorage.

-----------------------------------

### Aula 04

Utilizamos o localStrage para armazenar o item:

    localStorage.setItem("nome", nome);
    localStorage.setItem("quantidade", quantidade);

Porém temos que adicionar múltiplos itens nele ainda.

-----------------------------------

### Aula 05

O localStorage só aceita elementos do tipo STRING.

Então para organizar os elementos criamos um objeto chamado itemAtual:

    const itemAtual = {
        "nome": nome,
        "quantidade": quantidade
    }

E criamos também um array:

    const itens = [];

Agora para gravar múltiplos itens nesse array utilizamos:

    itens.push(itemAtual);

E para gravar esse array no localStorage precisamos transformar os objetos presentes nele em uma String e para isso utilizamos:

    JSON.stringify(itens)

E temos como código final:

    const form = document.getElementById("novoItem");
    const lista =  document.getElementById("lista");
    const itens = [];

    form.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const nome = evento.target.elements['nome'];
        const quantidade = evento.target.elements['quantidade'];

        criaElemento(nome.value, quantidade.value);

        nome.value = "";
        quantidade.value = "";
    })

    function criaElemento(nome, quantidade) {
        const novoItem = document.createElement('li')
        novoItem.classList.add("item");

        const numeroItem = document.createElement('strong');
        numeroItem.innerHTML = quantidade;

        novoItem.appendChild(numeroItem);
        novoItem.innerHTML += nome;

        lista.appendChild(novoItem);

        const itemAtual = {
            "nome": nome,
            "quantidade": quantidade
        }

        itens.push(itemAtual);

        localStorage.setItem("item", JSON.stringify(itens));
    }

-----------------------------------

### Aula 06

Nessa aula criamos uma condição no array onde ele vai ter o valor vazio ou vai ter o valor do localStorage itens se ele existir:

const itens = JSON.parse(localStorage.getItem("itens")) || [];

Utilizamos o JSON.parse para transformar o que era STRING em Obejto novamente, pois ele sendo objeto conseguimos utilizar o forEach caso contrário ele mostra um erro no console.

    itens.forEach((elemento) => {
        console.log(elemento.nome, elemento.quantidade);
    })

Quando queremos fazer um operação de loop para percorrer os elementos de um array, podemos simplesmente utilizar o forEach, nesse nosso é basicamente, para cada item do arry itens fazer um console.log no elementoAtual.nome e elementoAtual.quantidade.

Muito  melhor do que utilizar uma estrutura de for padrão.

-----------------------------------

### Aula 07

Fizemos algumas refatoraçõe sno código para ele ficar mais dinamico.

O código até final dessa aula:

    const form = document.getElementById("novoItem");
    const lista =  document.getElementById("lista");
    const itens = JSON.parse(localStorage.getItem("itens")) || [];


    console.log(itens);

    itens.forEach((elemento) => {
        criaElemento(elemento)
    })

    form.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const nome = evento.target.elements['nome'];
        const quantidade = evento.target.elements['quantidade'];

        const itemAtual = {
            "nome": nome.value,
            "quantidade": quantidade.value
        }

        criaElemento(itemAtual);

        itens.push(itemAtual);

        localStorage.setItem("itens", JSON.stringify(itens));

        nome.value = "";
        quantidade.value = "";
    })

    function criaElemento(item) {
        const novoItem = document.createElement('li')
        novoItem.classList.add("item");

        const numeroItem = document.createElement('strong');
        numeroItem.innerHTML = item.quantidade;
        novoItem.appendChild(numeroItem);

        novoItem.innerHTML += item.nome;

        lista.appendChild(novoItem);    
    }

Cookies, localStorage e sessionStorage são formas de armazenar dados no navegador, porém existem diferenças na usabilidade de cada um. Vamos conferir estas diferenças abaixo:

- localStorage: guarda informações de forma persistente no navegador, sendo em média 5MB de armazenamento padrão, podendo variar dependendo do navegador utilizado. Este limite pode ser aumentado pelo usuário quando necessário, no entanto apenas alguns navegadores suportam isso. Os dados salvos são apenas do tipo string texto.

- Cookies: guardam informações de forma persistente no navegador, sendo até 4KB de armazenamento por Cookie, bem menos que localStorage. Cada cookie é como se fosse um arquivo criado que guarda as informações de acesso da pessoa usuária, por exemplo, de qual local o site foi acessado, qual e-mail foi utilizado ao realizar login no navegador, e quais produtos de um site foram clicados. Para acessá-los, muitas empresas criam pop ups para confirmar a autorização do uso dessas informações, pois são consideradas sensíveis.

- sessionStorage: é similar ao localStorage, sua diferença é que os dados não são salvos de forma persistente, ou seja, ao fechar o navegador eles são perdidos. Este tipo de armazenamento é utilizado quando queremos que a pessoa usuária utilize os dados apenas enquanto estiver com o site aberto.

-----------------------------------

### Aula 08

Nessa aula a gente adicionou uma função para atualizar a quantidade de algum elemento caso já tenha repetido.

Criamos a função :

    function atualizaElemento(item) {
        document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade;
    }

Ela basicamente pega o elemento através data id e diz q o novo valor (innerHtml) e fala que o novo valor é item.quantidade.

Para conseguirmos acessar o elemento correto criamos uma constante que compara os nomes:

    const existe = itens.find(elemento => elemento.nome === nome.value);

Essa constante nos retorna o elemento da comparação, ou seja, se eu digito camisa preta e ainda não tem esse item na lista a const existe me retorna undefined, mas caso já exista uma elemento na lista chamado camisa preta ela irá retornar a tag do item em si.

Depois criamos uma condição:

    if (existe) {
        itemAtual.id = existe.id

        atualizaElemento(itemAtual);
    } else  {

        itemAtual.id = itens.length;

        criaElemento(itemAtual);

        itens.push(itemAtual);
    }

Caso a const existe seja verdadeira então adicione um id ali no objeto itemAtual com o valor de arry.length e jogue os objetos itemAtual na função atualizaElemento.

Na função atualizaElemento:

    function atualizaElemento(item) {
        document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade;
    }

Ela pega o elemento através document.querySelector("[data-id='"+item.id+"']"), fala que queremos mexer no valor ali entre as tags (o innerHTML) e falamos que seu valor agora é item.quantidade, que nada mais é do que o valor novo que digitamos.

E voltando lá na condição, se não existir o elemento digitado (else) vamos cria-lo, então chamamos a função criaElemento(itemAtual); e itens.push(itemAtual);

Lá na função de criação dos li apenas adicionamos o numeroItem.dataset.id = item.id; para que o elemento novo criado tenha um data-id.

-----------------------------------

### Aula 09


Nessa aula eu arrumei o localStorage, pois no visual o código alterava o valor caso fosse um item repetido, mas no localStorage não arrumava.

    if (existe) {
        itemAtual.id = existe.id

        atualizaElemento(itemAtual);

        itens[existe.id] = itemAtual;
        
    } else

Com esse código eu apenas disse que, se já existir o elemento (Camisa preta por exemplo), ele vai no item do array itens através do existe.id e vou subescrever com o novo valor, depois desssa condiçõ utilizamos o  localStorage.setItem("itens", JSON.stringify(itens));para setar o valor do array atualizado.

-----------------------------------

### Aula 10

Arrow function não carrega o this.

Criamos uma função para a criação do botão deletar no html.

Como esse botão está sendo criado de acordo com as li, nnão é possível adicionar um addEventListener posteriormente, devemos utilizar o addEventListener já na criação do botão:

    function botaoDeleta() {
        const elementoBotao = document.createElement("button");
        elementoBotao.innerText = "X";

        elementoBotao.addEventListener("click", function() {
            console.log(this);
        })

        return elementoBotao;
    }

O console.log(this) nos retorna o botão deletar exato que foi clicado na página.

Agora adcionamos algumjas funções pra deletar o elemento li:

    function botaoDeleta() {
        const elementoBotao = document.createElement("button");
        elementoBotao.innerText = "X";

        elementoBotao.addEventListener("click", function() {
            deletaElemento(this.parentNode);
        })

        return elementoBotao;
    }

    function deletaElemento (tag) {
        tag.remove()
    }

deletaElemento(this.parentNode); - Nesse código eu chamo  afunção e passo como parâmetro a o pai da tag botão que foi clicado (this.parentNode).

E com a função deletarElemento eu utilizo o .remove() que serve para deletar oi elemento em questão.

-----------------------------------

### Aula 11

itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual;

Para entender esse código precisamos saber que o itens.findIndex(elemento => elemento.id === existe.id) nos retorna o valor no indice do array em que está o elemento comparado.

Eu estou dizendo que ele acesse o array iten (itens.) utilize a função findIndex() para encontrar dentro do array a posição do elemento (*itens.findIndex()*).

Qual elemento é esse? É o elemento que tenha o id igual ao id existe.id (elemento => elemento.id === existe.id), (*itens.findIndex(elemento => elemento.id === existe.id*)), então com esse código ele retorna exatamente o número do item no array (lembrando que zero é o primeiro) e com isso eu tenho com precisão o elemento que eu necessito alterar.

Temos como código final do projeto:

    const form = document.getElementById("novoItem");
    const lista =  document.getElementById("lista");
    const itens = JSON.parse(localStorage.getItem("itens")) || [];


    console.log(itens);

    itens.forEach((elemento) => {
        criaElemento(elemento)
    })

    form.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const nome = evento.target.elements['nome'];
        const quantidade = evento.target.elements['quantidade'];

        const existe = itens.find(elemento => elemento.nome === nome.value);

        const itemAtual = {
            "nome": nome.value,
            "quantidade": quantidade.value
        }

        if (existe) {
            itemAtual.id = existe.id

            atualizaElemento(itemAtual);

            itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual;
            console.log(itens.findIndex(elemento => elemento.id === existe.id));

        } else  {

            itemAtual.id = itens[itens.length - 1] ? (itens[itens.length - 1]).id + 1 : 0;

            criaElemento(itemAtual);

            itens.push(itemAtual);

        }



        localStorage.setItem("itens", JSON.stringify(itens));

        nome.value = "";
        quantidade.value = "";
    })

    function criaElemento(item) {
        const novoItem = document.createElement('li')
        novoItem.classList.add("item");

        const numeroItem = document.createElement('strong');
        numeroItem.innerHTML = item.quantidade;
        numeroItem.dataset.id = item.id;
        novoItem.appendChild(numeroItem);

        novoItem.innerHTML += item.nome;

        novoItem.appendChild(botaoDeleta(item.id));

        lista.appendChild(novoItem);    
    }

    function atualizaElemento(item) {
        document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade;
    }

    function botaoDeleta(id) {
        const elementoBotao = document.createElement("button");
        elementoBotao.innerText = "X";

        elementoBotao.addEventListener("click", function() {
            deletaElemento(this.parentNode, id);
        })

        return elementoBotao;
    }

    function deletaElemento (tag, id) {
        tag.remove()

        itens.splice(itens.findIndex(elemento => elemento.id === id), 1)

        localStorage.setItem("itens", JSON.stringify(itens));
    }











