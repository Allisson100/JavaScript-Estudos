# Curso sobre arrays

    let livros = []

    const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

    getBuscarLivrosDaAPI()

    async function getBuscarLivrosDaAPI () {
        const res = await fetch(endpointDaAPI)
        livros = await res.json()
        console.table(livros);
    }

Criamos uma let livros que nada mais é que um array vazio.

A const endpointDaAPI nada mais é que um objeto de itens que está naquele link.

Depois criamos uma função e pedimos através da const res para requisitar os dados da API (link).

Lembrando que utilizamos o async functions para utilizar o await, o await serve para dizer ao código que queremos que ele espere até o fetch terminar as promisses e com isso jogamos no array livros os dados também com o await, pois demora um pouco para esse processo acontecer e depois usamos console.table para mostrar os dados através de uma tabela, se utilizar o console,log ele vai retornar um array normal no console.

------------------------------------------

    let livros = []

    const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

    getBuscarLivrosDaAPI()

    const elementoParaInserirLivros = document.getElementById('livros')



    async function getBuscarLivrosDaAPI () {
        const res = await fetch(endpointDaAPI)
        livros = await res.json()
        console.table(livros);

        exibirOsLivrosNaTela(livros)
    }

    function exibirOsLivrosNaTela(listaDeLivros) {
        listaDeLivros.forEach(livro => {
            elementoParaInserirLivros.innerHTML += `
                <div class="livro">
                <img class="livro__imagens" src="${livro.imagem}"
                alt="${livro.alt}"/>
                <h2 class="livro__titulo">
                ${livro.titulo}
                </h2>
                <p class="livro__descricao">${livro.autor}</p>
                <p class="livro__preco" id="preco">R$ ${livro.preco.toFixed(2)}</p>
                <div class="tags">
                <span class="tag">${livro.categoria}</span>
                </div>                                                
                </div>
            `
        })
    }

Criamos uma nova função passando como parâmetro o array de livros.

Nessa função utilizamos a função forEach, nela devemos utilizar uma arrow function e através de um template string criamos o código html para exibir na tela.

------------------------------------------

Fizemos uma pequena alteração no cóedigo. Separamos o comando do forEach em outro arquivo js e sepramos o comando mp() em outro:

Arquivo main.js:

    let livros = []

    const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

    getBuscarLivrosDaAPI()


    async function getBuscarLivrosDaAPI () {
        const res = await fetch(endpointDaAPI)
        livros = await res.json()
        let livrosComDesconto = aplicarDesconto(livros)

        exibirOsLivrosNaTela(livrosComDesconto)
    }

Arquivo metodoMap.js:


    function aplicarDesconto(livros) {
        const desconto = 0.3

        livrosComDesconto = livros.map(livro => {
            return {...livro, preco: livro.preco - (livro.preco * desconto)}
        })

        return livrosComDesconto
    }

No main.js estamos criando um novo array (let livrosComDesconto) e estamos dizendo que seu novo conteúdo vai sar o return da função aplicarDesconto(livros).

No metodoMap.js dizemos que o valor do desconto é 0.3 e dizemos que o array livrosComDesconto = o array de livros.map(). Lembrando que o método map() ele cria um novo array baseado em outro com as modificações que você passar, nesse caso nó dizemos que os objetos que estão no array livros vão se manter iguais {...livros,}, mas queremos uma modificação somente no preço que no caso vai ser o valor original - valor original * desconto. Então ele retorna esse novo array lembrando que usamos esse return, pois utilizamos esse método dos ..., e depois usamos outro return para retornar o valor do array na função.

------------------------------------------

### Método filter()

    const botoes = document.querySelectorAll('.btn')
    botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

    function filtrarLivros () {
        const elementoBtn = document.getElementById(this.id)
        const categoria = elementoBtn.value

        let livrosFiltrados = livros.filter(livro => livro.categoria == categoria)
        
        exibirOsLivrosNaTela(livrosFiltrados)
        console.table(livrosFiltrados)
    }

Temos alguns botões na página para utilizar como filtro e utilizamos o método filter() para filtrar as categorias de cada livro.

Nesse código utilizamos o querySelectorAll para pegar todos os botões e utilizamos o forEach para percorrer esse array de botões e chamar uma função caso algum deles for clicado.

Dentro da função através da const elementoBtn pegamos o id do botão clicado (this.id) e com isso pegamos seu value e basicamente criamos um novo array para os livros filtrados e chamamos a função que cria os elementos na tela, mas passando como parâmetros o array dos livros filtrados.

Lembrando que para dar certo isso, eu passei o inner.html da div que tem os livros como vazio antes da função criar realemnte os livros.

Arquivo metodoForEach.js :

    const elementoParaInserirLivros = document.getElementById('livros')

    function exibirOsLivrosNaTela(listaDeLivros) {

        elementoParaInserirLivros.innerHTML = ""

        listaDeLivros.forEach(livro => {
            elementoParaInserirLivros.innerHTML += `
                <div class="livro">
                <img class="livro__imagens" src="${livro.imagem}"
                alt="${livro.alt}"/>
                <h2 class="livro__titulo">
                ${livro.titulo}
                </h2>
                <p class="livro__descricao">${livro.autor}</p>
                <p class="livro__preco" id="preco">R$ ${livro.preco.toFixed(2)}</p>
                <div class="tags">
                <span class="tag">${livro.categoria}</span>
                </div>                                                
                </div>
            `
        })
    }


------------------------------------------

### Método Sort()

O método sort() não apresenta uma ordenação estável, para isso temos que passar uma arrow function para que a função ordenen o array de forma correta.

Exemplo:

array = [0, 1, 2, 3, 10]

array.sort()
// 0, 1, 10, 2, 3

Ele retona assim, pois ele compara uma unidade de cada vez, então o 1 do 10 é menor que o 2 por isso o 10 vem antes.

Para arrumar isso de vemos escrever:

array.sort((a, b) => a - b);

Desse forma retorna 0, 1, 2, 3, 10.

Isso porque nesse caso queremos em ordem crescente, ou seja, a função vai pegar dois valores e compara-los, 0 - 1, o resultado vai ser menor que 0 então o 0 fica antes do 1. 10 - 3, o resultado é maior que 0, então a funçõ entende que 10 é maior que 3 e assim sucessivamente. Caso quiser um array em ordem decrescente so trocar a - b por b - a.

Agora no arquivo metodoSort.js digitamos:

    let btnOrdenarPorPreco = document.getElementById("btnOrdenarPorPreco");
    btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco)

    function ordenarLivrosPorPreco () {
        let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
        exibirOsLivrosNaTela(livrosOrdenados)
    }

Basicamente adcionamos o evento de click no botão ordenar por preço e nele fizemos um sort no array livros e chamamos a função para exibir os livros na tela.

------------------------------------------

### Método reduce()

Ele pega os valores do array e combina eles, por exemplo:

    precos = [10, 70, 20]

    precoTotal  = precos.reduce((acc, atual) => acc + atual)

    console.log(precoTotal) //Retorna 100

Outro Exemplo:

    precos = [10, 70, 20]

    precoTotal  = precos.reduce((acc, atual) => acc > atual ? acc : atual)

    console.log(precoTotal) //Retorna 70

Ele basicamente compara os valores e retronar o maior valor do array.

No projeto utilizamos:

    function calcularValorTotalDeLivrosDisponiveis (livros) {
        return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2)
    }

Ele pega o acc (acumulador) e vai somando os preços dos livros nele (apenas os livros disponiveis) e aquele 0 serve para dizer para o acc começar com o valor de 0, caso mude para 10 por exemplo ele vai somar os valores dos livros mais esse 10.

------------------------------------------

### Método .concat()

[ 🏀 , 🏀 , 🏀 ].concat( [ ⚾ , ⚾ ] ) => [🏀 , 🏀 , 🏀, ⚾ , ⚾ ]

O método concat junta dois (ou mais) arrays em um novo array, sem alterar os já existentes.

### Método .pop()

[ 🏀 , 🏀 , 🏀, 🏀 , ⚽ ].pop() => [🏀 , 🏀 , 🏀, 🏀]

O método pop remove o último elemento de um array.

### Método .push()

[🏀 , 🏀 , 🏀].push(🏈) => [ 🏀 , 🏀 , 🏀, 🏈 ]

O método push adiciona um novo elemento no final do array, aumentando seu tamanho.

### Método .includes()

[ ⚾ , 🏈, ⚽, 🏀 ].includes( ⚽ ) => true

O método includes verifica se um elemento está contido em um array e retorna true se o elemento estiver contido ou false caso contrário.

### Método .fill()

[ ⚾ , 🏈, ⚽, 🏀 ].fill( ⚽, 1 ) => [ ⚾ , ⚽, ⚽, 🏀 ] 
[ ⚾ , 🏈, ⚽, 🏀 ].fill( ⚽ ) => [ ⚽, ⚽, ⚽, ⚽ ]

O método fill preenche os elementos especificados em um array com um determinado valor.

### Método .indexOf()

[ ⚾ , 🏈, ⚽, 🏀, ⚽ ].indexOf( ⚽ ) => 2

O método indexOf retorna o primeiro índice encontrado de um valor especificado. Se o valor não for encontrado o método retorna -1.

### Método .reverse()

[ ⚾ ,🏈, ⚽, 🏀 ].reverse( ) => [🏀, ⚽,🏈, ⚾]

O método reverse inverte a ordem dos elementos de um array e substitui o array original.

### Método .slice()

[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].slice( 1, 3 ) => [ 🏈, ⚽ ]

O método slice retorna elementos de um array, selecionados de determinada posição de início até determinada posição final. O elemento na posição final não é incluso.

### Método .some()

[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].some( ( 🏐 ) ⇒ { return bola === 🏐 } ) => true

O método some verifica se algum elemento do array passa em um teste. Esse teste é feito através de uma função callback. O método executa a função de callback para cada elemento uma vez e retorna true se o teste for true para um dos elementos, e false se o teste for false para todos os elementos. Além disso, o método não executa a função callback para arrays vazios e não altera o array.

### Método .join()

[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].join() ⇒ ⚾,🏈,⚽,🏀,🏐 
[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].join(‘ ’) ⇒ ⚾🏈⚽🏀🏐 
[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].join(‘-’) ⇒ ⚾-🏈-⚽-🏀-🏐

O método join puxa elementos de um array e lista no formato de string, o resultado da operação puxou as propriedades do array e as listou de acordo com o que foi determinado.

### Método .shift()

[⚽, 🏐 , 🏐 , 🏐, 🏐].shift( ) ⇒[🏐 , 🏐 , 🏐, 🏐]

O método shift é parecido com o método .pop() mas ao invés de remover o último elemento do array, ele é usado para remover o primeiro elemento do array.

### Método .unshift()

[🏀 , 🏀 , 🏀].unshift(🏐) ⇒ [ 🏐, 🏀 , 🏀 , 🏀]

O método unshift é parecido com o que método .push() realiza, mas ao invés de adicionar no final do array, ele é utilizado para adicionar um elemento no início de um array.

### Método .splice()

[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].splice( 1, 2, 🎱 ) ⇒ [⚾ ,🎱, 🏀, 🏐 ] 
[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].splice( 2, 3) ⇒ [⚾, 🏈 ]

Com o método splice conseguimos escolher um índice inicial e final para substituirmos valores no lugar deles. E também podemos remover itens, no segundo exemplo, foram removidos três elementos a partir da posição dois.

### Método .length()

[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].length(3) ⇒ ⚾ , 🏈, ⚽ 
[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].length() ⇒ 5

O método length define ou retorna o número de elementos em um array.

### Método .sort()
[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].sort() ⇒ ⚽,⚾,🏀,🏈,🏐

O método sort ordena os elementos do próprio array e retorna o array. A ordenação padrão é de acordo com a pontuação de código unicode.

### Método .toString()

[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].toString ⇒ ⚾,🏈,⚽,🏀,🏐

O método toString retorna uma string com todos os valores do array separados por vírgulas.

### Método .findIndex()
[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].findIndex(emoji => emoji === “⚽”) ⇒ 2

O método findIndex retorna o índice no array do primeiro elemento que satisfizer a função de teste provida. Caso contrário, retorna -1, indicando que nenhum elemento passou no teste.

### Método .find()

[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].find( bola ⇒ bola.formato === “redonda” ) => ⚾

O método find é utilizado para procurar um elemento dentro do array que atenda a condição atribuída a ele, que retornará o primeiro elemento encontrado. Ele percorre todo o array buscando o elemento que atenda a condição e retorna o primeiro que foi encontrado, caso não encontre retorna undefined. Este método não executa caso o array esteja vazio e não altera o array original.

### Método .at()

[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].at(-1) ⇒ 🏐 
[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].at(1) ⇒ 🏈

O at acessa os elementos de um array usando um índice inteiro positivo e negativo, sendo que o índice negativo enumera os itens de trás para frente, portando o 🏐 está posicionado no índice -1.

### Método .isArray()

var bolas = [ ⚾ , 🏈, ⚽, 🏀, 🏐 ] Array.isArray(bolas) ⇒ true

O método Array.isArray verifica se a variável é um array e retorna true ou false.

### Método .every()

[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].every( ( bola ) ⇒ { return bola === 🏐 } ) => false

O método every verifica se cada elemento do array passa em um teste. Esse teste é feito através de uma função callback. O método executa a função de callback para cada elemento uma vez e retorna true se o teste for true para todos os elementos, e false se o teste for false para pelo menos um elemento. Além disso, o método não executa a função callback para arrays vazios e não altera o array.

### Método .filter()

[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].filter( ( bola ) ⇒ { return bola !== 🏈 } ) => [ ⚾, ⚽, 🏀, 🏐 ]

O método filter usa uma função callback de teste e executa ela para cada elemento do array. Ele retorna um novo array com os elementos que passarem no teste.

### Método .map()

[🏀, 🏀,🏀,🏀 ].map( console.log(( bola ) ⇒ { return 🏈 }) ) => [ 🏈, 🏈, 🏈, 🏈 ]

O método map usa uma função callback de teste e executa ela para cada elemento do array, retornando um novo array modificado. Não executa a função de callback para arrays vazios.

### Método .forEach()

[🏀, 🏀,🏀,🏀 ].forEach( ( bola ) ⇒ { console.log( bola + ⚽)} ) => 🏀⚽🏀⚽🏀⚽

O método forEach usa uma função callback e executa ela para cada elemento do array. Não executa a função de callback para arrays vazios e não retorna um novo array, diferente do método map.

### Método .copyWithin()

[ ⚾ , 🏈, ⚽, 🏀 ].copyWithin(2,0) ⇒ [ ⚾ , 🏈, ⚾ , 🏈 ]

O método copyWithin copia os elementos do array para outra posição no array, ele não adiciona itens apenas substitui os valores existentes.

### Método .lastIndexOf()

[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].lastIndexOf(⚽) ⇒ 2

O método lastIndexOf retorna o valor do último índice especificado, se o valor não for encontrado ele retorna -1.

### Método .valueOf()

[ ⚽, ⚾ , 🏀, 🏐 ].valueOf() ⇒ [ ⚽, ⚾ , 🏀, 🏐 ]

O método valueOf é usado para retornar o array. É um método padrão do objeto Array. Este método retorna todos os itens na mesma matriz. Ele não altera o conteúdo original da matriz e não contém nenhum valor de parâmetro.

### Método .reduce()

[ 🥦, 🍅, 🥕, 🍆 ].reduce((valor, elemento) => valor + elemento, 0)) ⇒ 🥗

O método reduce executa uma função redutora para o elemento array, ele retorna um único valor que é o resultado acumulado da função. Ele não executa a função para elementos de array vazios e não altera a matriz original.

## Método .keys()

[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].keys() => ["0","1","2","3"]

O método keys retorna um novo array composto pelas chaves (posições) do array o qual ele foi aplicado.

FIM DO CURSO!!