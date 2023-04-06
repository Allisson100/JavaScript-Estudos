    minlength="4"
    maxlength="14"

Esses comando servem para limitar a quantidade de cractere já no html.

É só colocar esses valores na tag de input por exemplo.

Nesse caso ele limitaria o campo com no mínimo 4 catracteres e no máximo 14 caracteres.

### Tipos de input

button - Define um botão clicável;
number - Define um campo para número inteiro;
text - Define um campo para texto que permite também números e caracteres especiais;
date - Define um campo para data;
checkbox - Define uma caixa de seleção para múltiplas opções;
radio - Define uma caixa de seleção para opção única;
password - Define um campo de senha;
submit - Define um botão para enviar os dados;
tel - Define um campo para telefone.

--------------------------

    pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}"

O pattern ele basicamente define um padrão no campo de input, no nosso caso utilizamos no campo de CPF e essa expressão acima signifca que primeiro teremos 3 digitos de 0 à 9, depois poderemos ter um ponto, sendo ele opcional, depois mais três digitos de 0 a 9, depois outro ponto opcional, depois mais três digitos, depois um  hífen que também é opcional e por fim dois digitos.

Isso se chama expressões regulares.

--------------------------

    export default function ehUmCPF(campo) {
        const cpf = campo.value.replace(/\.|-/g, "");
        validaNumerosRepetidos(cpf);

        console.log(validaNumerosRepetidos(cpf));
    }

    function validaNumerosRepetidos(cpf) {
        const numerosRepetidos = [
            '00000000000',
            '11111111111',
            '22222222222',
            '33333333333',
            '44444444444',
            '55555555555',
            '66666666666',
            '77777777777',
            '88888888888',
            '99999999999'
        ]

        return numerosRepetidos.includes(cpf);
    }

Nós utilizamos um array chamado numerosRepetidos para saber se o cpf não tem os 11 números repetidos.

E depois usamos o numerosRepetidos.includes(cpf). Essa função ela retorna true ou false, ou seja, ela vai comparar os numero repetidos com o número de cpf que foi passado como parâmetro, caso o número do cpf for igual a algum presente no array numerosRepetidos então ele vai retornar true e com isso conseguimos fazer uma verificação.

--------------------------

    campo.addEventListener("invalid", e => e.preventDefault());

Utilizamos esse código para tirar as mensagens padrões do navegardor quando ocorre um erro no campo do formulário.
Por exemplo quando colocamos no input do html um required caso quisermos apertar em um botão sem preencher esse campo, ele vai retornar um erro com um texto dizendo que aquele campo é obrigatório.

Com esse código acima podemos tirar essas mensagens padrões e customiza-las da nossa meneira.

--------------------------

Fizemos o envio dos dados do formulário para o localStorage:

    formulario.addEventListener("submit", e => {
        e.preventDefault();

        const listaRespostas = {
            "nome": e.target.elements["nome"].value,
            "email": e.target.elements["email"].value,
            "rg": e.target.elements["rg"].value,
            "cpf": e.target.elements["cpf"].value,
            "aniversario": e.target.elements["aniversario"].value,
        }

        localStorage.setItem("cadastro", JSON.stringify(listaRespostas));

        window.location.href = "./abrir-conta-form-2.html"
    })

Selecionamos os campos do formulario através da const listaRespostas e através do evento resgatamos os values de cada campo.

--------------------------

    const botaoIniciarCamera = document.querySelector("[data-video-botao]");
    const campoCamera = document.querySelector("[data-camera]");
    const video = document.querySelector("[data-video]");

    botaoIniciarCamera.addEventListener("click", async function () {
        const iniciarVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false});

        botaoIniciarCamera.style.display = "none";
        campoCamera.style.display = "block";

        video.scrObject = iniciarVideo;
    })

Esse código ele pede solicitação para abrir a camera do usuário para ele tirar uma foto.

Não esquecendo de passar o video.srcObject que faz referencia a tag video lá do html.

--------------------------

    botaoTirarFoto.addEventListener("click", function() {
        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.heigth);

        imagemURL = canvas.toDataURL("image/jpeg");

        campoCamera.style.display = "none";
        mensagem.style.display = "block";
    })

Esse código registra a foto tirada e posiciona ela no lugar do video.

A tag canvas serve para desenhar elementos nela, então dizemos para ela desenhar a imagem do video (PRINT) no lugar onde estava posicionado o video.

E usamos o imagemURL para armazenar a foto tirada.

--------------------------



