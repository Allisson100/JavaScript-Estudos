# Funções com JavaScript

Para criarmos uma função anônima podemos digitar:

    robotron.addEventListener("click", function () {
        console.log("Oi");
    });

Ou podemos digitar da seguinte forma: (Conhecida também como arrow function).

    robotron.addEventListener("click", () => {
        console.log("Oi");
    });


Podemos passar também um parâmetro padrão que é "evento", exemplo:

    robotron.addEventListener("click", (evento) => {
            console.log("Oi");
    });

Toda vez que acontecer o clique ele vai retornar tudo o que aconteceu.




