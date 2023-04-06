# Alterando o Elemento

Para saber qual é o pia do elemento que estamos clicando, utilizamos o evento.target.parentNode, exemplo:

    const controle = document.querySelectorAll(".controle-ajuste");

    controle.forEach( (elemento) => {
        elemento.addEventListener("click", (evento) =>{
            manipulaDados(evento.target.textContent, evento.target.parentNode);
        })
    })

    function manipulaDados(operacao, controle) {

        const peca = controle.querySelector(".controle-contador");

        if (operacao === "-") {
                peca.value = parseInt(peca.value) - 1;
        } else {
                peca.value = parseInt(peca.value) + 1;
        }
    }

Nesse código ele precisa identificar qual é o botão que estamos apertando se é o "+" ou o "-", para isso utlizamos evento.target.textContent e também precisamos saber se estamos apertando  o + ou - do braço ou da blindagem e para isso utilizamos o evento.target.parentNode, ele basicamente retorna a div pai que está o input que eu estou clicando, mesmo sem ter uma descrição clara de qual parte do robo estou clicando, ele consegue identificar corretamente qual é a parte do robo.



