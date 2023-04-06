# Alterando vários componentes

Podemos usar o forEach par acessar todos os elementos deum array e fazer com execute uma função, exemplo:

    const subtrair = document.querySelector("#subtrair");
    const somar = document.querySelector("#somar");
    const braco = document.querySelector("#braco");

    const controle = document.querySelectorAll(".controle-ajuste");

    controle.forEach( (elemento) => {
        elemento.addEventListener("click", (evento) =>{
            manipulaDados(evento.target.textContent);
        })
    })

    function manipulaDados(operacao) {
        if (operacao === "-") {
                braco.value = parseInt(braco.value) - 1;
        } else {
                braco.value = parseInt(braco.value) + 1;
        }
    }

Nesse código utilizamos o event.target, ele é interessante, pois no firefox esse event retorna diversos valores e com isso podemos destrichar melhor o javascript e nesse caso utilizamos o event.target para retornar o input do botão e depois acrescentamos o .textContent ficando event.target.textContent e assim conseguimos obter o conteúdo dentro da tag dos inputs retornados, que no caso será "+" ou "-".