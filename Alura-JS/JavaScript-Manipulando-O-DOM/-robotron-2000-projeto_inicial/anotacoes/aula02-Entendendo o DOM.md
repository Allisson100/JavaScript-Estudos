# Entendendo o DOM 1.06

Toda vez que o JavaScript vai interagir com o navegador, ele navega em uma coisa chamada DOM que é o Document Object Model, é o modelo de objeto do nosso documento.

O nosso HTML é um documento e o navegador para le-lo transforma isso em um objeto manipulavel.

O DOM (Document Object Model) e o JavaScript, juntos, possuem grande poder de modificar dinamicamente a estrutura de um documento HTML. Sendo possível, por exemplo:

    - Adicionar/modificar/remover tags, textos, imagens e qualquer elemento no HTML.
    - Alterar estilos CSS da página.
    - Criar novos eventos HTML.

### Métodos para selecionar elementos no HTML

    - document.getElementByID(id) - Selecionar um elemento pelo ID.
    - document.getElementsByTagName(name) - Selecionar um elemento pelo nome.
    - document.getElementsByClassName(name) - Selecionar um elemento pelo nome da classe.

### Propriedades e métodos para alterar elementos no HTML

    - element.innerHTML - Esta propriedade obtém ou altera qualquer elemento no HTML, inclusive tags.
    - element.innerText - Esta propriedade permite inserir textos no HTML.
    - element.attribute - Esta propriedade altera o valor de um elemento HTML
    - element.setAttribute(atributo, valor) - Este método altera o valor de um atributo de um elemento HTML.

### Adicionando e excluindo elementos

    - document.write() - Escreve no fluxo de saída do HTML.
    - document.appendChild() - Adiciona um elemento HTML.
    - document.removeChild() - Remove um elemento HTML.
    - document.replaceChild() - Substitui um elemento HTML.
    - document.createElement() - Cria um elemento HTML.