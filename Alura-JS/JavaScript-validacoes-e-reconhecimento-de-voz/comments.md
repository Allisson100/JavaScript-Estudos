### sites

- Para pegar icones:
    https://fontawesome.com/

- Pegar fonts:
    Padrão google fonts

- Escolher cores (esse site mostra as paleta de cores):
    https://colorhunt.co/

- Outro site para cores é o:
    https://color.adobe.com/pt/create/color-wheel


### Gerar número aleatório

Utilizamos o Math.randon(), essa função gera um número de 0 a 1, para ter um valor entre 0 e 100 é só multiplicar o valor por 100 exemplo:

    Math.randon() * 100

Isso não vai gerar nem o 0 nem o 100.

Para ter o valor inteiro sem as casas decimais somamos essa função junto com a função parseInt que nos retorna somente o número inteiro ficando:

    parseInt(Math.randon() * 100);

Se quisermos incluir o último número é só somar 1 ficando:

    parseInt(Math.randon() * (100 + 1));

Aqui retorna um valor entre 0 e 101, não incluindo o 101.


### Web Speech API

Essa API permite o reconhecimento de voz pelo microfone e também podem utiliza-la para ler algum texto da página por exemplo.

### Template String

É uma meneira interessante de colocar os elementos na tela usando a crase, exemplo:

    document.body.innerHTML = `
                <h2>Você acertou!</h2>
                <h3>O número secreto era ${numeroSecreto}</h3>
            `


Nesse código ele altera todo o body para esse h2 e h3.

Outro exemplo, agora somando as tags que já existem e adcionando uma nova com o +=:

    elementoChute.innerHTML += `
            <div>O número secreto é maior<i class="fa-solid fa-up-long"></i></div>
            `
        

### Outra maneira de criar eventos

    document.body.addEventListener("click", e => {
        if (e.target.id == 'jogar-novamente') {
            window.location.reload();
        }
    })

Aqui basicamente ele diz que, caso aconteça um evento de click na tela e na codição de if dizemos: Se esse botão clicado tiver o id == 'jogar novamente' (e.target.id == 'jogar-novamente'), então recarregue a página (window.location.reload()).


Site do jogo do Vercel:

https://jogo-reconhecimento-voz-correto-p5j2ze44i-allisson100.vercel.app/

