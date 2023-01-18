# Código à prova de falhas

Se o código precisar ser atualizado por algum motivo, mudando alguns nomes de classes ou nomes do campo, o código JS vai quebrar e não vai mais funcionar. Para corrigir isso podemos usar uma comando no HTML que é o data attribute, nele podemos passar um valor que nunca será alterado, mesmo mudando o nome de um campo ou mudando uma classe.

Então o código fica no HTML adicionando uma data attribute, (data-definimos_um_nome):

    <label for="" class="peca-titulo">Braços</label>
    <div class="controle">
        <buttom class="controle-ajuste" data-controle="-">-</buttom>
        <input type="text" class="controle-contador" value="00">
        <buttom class="controle-ajuste" data-controle="+">+</buttom>
    </div>

Código JS:

    const controle = document.querySelectorAll("[data-controle]");

    controle.forEach( (elemento) => {
        elemento.addEventListener("click", (evento) =>{
            manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        })
    })

    function manipulaDados(operacao, controle) {

        console.log(controle);
        const peca = controle.querySelector(".controle-contador");

        if (operacao === "-") {
                peca.value = parseInt(peca.value) - 1;
        } else {
                peca.value = parseInt(peca.value) + 1;
        }
    }

Lembrando que mudamos também o .textContent para .dataset.controle.

e para não termos erros nas classe vamos adicionar outro data-attribute e nesse caso não precisamos passar um valor para ele, ficando da seguinte forma.

Código HTML:

    <label for="" class="peca-titulo">Blindagem</label>
    <div class="controle">
        <buttom class="controle-ajuste" data-controle="-">-</buttom>
        <input type="text" class="controle-contador" value="00" data-contador>
        <buttom class="controle-ajuste" data-controle="+">+</buttom>
    </div>

E para buscar essa propriedade com querySelector utilizamos os []:

    const controle = document.querySelectorAll("[data-controle]");

