# Manipular um elemento 1.04

    document.getelementById("producao");

Esse código vai buscar o elemento com o id producao que no nosso caso é um botão e ele vai retornar o seguinte valor:

    <input type="submit" value="Iniciar produção" class="producao" id="producao">

E com isso podemos por exemplo trocar o valor do value fazendo o seguinte:
 
    document.getElementById("producao").value = "Teste JavaScript"

Podemos também buscar um elemento da páginas através da classe dele, exemplo:

    document.getElementByClassName("estatistica");

Nesse exemplo ele vai retornar uma coleções de elementos HTML, pois existe mais de um elemento com essa classe.

    HTMLCollection(4) [div.estatistica, div.estatistica, div.estatistica, div.estatistica]

Temos também outro comando para acessar algum elemento da página:

    document.querySelector("");
 
Se for uma classe passamos o nome da classe com o ponto antes:

    document.querySelector(".nome_da_classe");

Se for id:

    document.querySelector("#nome_do_id");

Se for tag passe apenas o nome da tag: 

    document.querySelector("div");





