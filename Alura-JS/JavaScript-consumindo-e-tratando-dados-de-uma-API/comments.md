### Síncrono ou Assíncrono

Por exemplo, quando você está em uma video chamada com alguem ou está fazendo uma reunião online com o pessoal do seu trabalho, isso é uma questão SÍNCRONA, ta todo mundo meio que falando ali ao mesmo tempo.

Por exemplo uma comunicação ASSÍNCRONO pode ser uma troca de mensagem de texto no WhatsApp.

No JavaScript um sistema SÍNCRONO que é o padrão tem uma tarefa conluída após a outra.

É possível também fazer um sistema ASSÍNCRONO, onde existe tarefas sendo comcluídas uma após outra, porém também tem tarefas sendo executadas em segundo plano.

------------------------------

    console.log("Mandando oi para o amigo!");

    function mandaMensagem () {
        console.log("Tudo Bem?");
        console.log("Vou te mandar uma solicitação");
        console.log("Solicitação recebida!");
    }

    mandaMensagem();

    console.log("FLW");

Quando chamamos o console.log("Mandando oi para o amigo!"); ele será enviado para o Call Stack.

Em seguida acontece a chamada da função, então a função mandaMensagem() fica lá no Call Stack até terminar todas suas tarefas que no caso é mandar três console.log

Porém aqui é o seguinte, a chamada da função mandaMensagem(); fica no Call Stack e nesse caso o console.log("Tudo Bem?"); vai para o Call Stack também executa e sair fora, depois emntra o console.log("Vou te mandar uma solicitação");executa e cai fora e por fim o console.log("Solicitação recebida!"); executa e cai fora. Sendo assim os três console.log da função já foram executados, ou seja, a função inteira já foi executada, então a função sai do Call Stack também e chamamos por fim o console.log("FLW");.

Isso tudo é o que acontece em sistema SÍNCRONO, ou seja, tarefas sendo concluídas após a outra.

O Event Loop fica monitorando e meio que "falando" quais serão as chamadas para o Call Stack, em que ordem serão executadas.

--------------------------------------

    console.log("Mandando oi para o amigo!");

    function mandaMensagem () {
        console.log("Tudo Bem?");
        console.log("Vou te mandar uma solicitação");
        console.log("Solicitação recebida!");
    }

    mandaMensagem();

    setTimeout(mandaMensagem, 5000);
    console.log("FLW");

Nesse caso o Event Loop vai chamar para o Call Stack o console.log("Mandando oi para o amigo!");, depois de finalizada vai sair essa terefa e o Event Loop vai chamar o setTimeout(mandaMensagem, 5000);, nesse caso como se trata de um timer ele vai executar as tarefas que no caso são três console.log diferentes, e vai mandar esse timer para outra fila conhecida como Task Queue. Então dessa maneira o setTimeout(mandaMensagem, 5000); sai do Call Stack mesmo precisando ser executado novamente daqui 5s e vai para a Task Queue para ser executado daqui 5s. Como a Call Stack está vazia então ele chama o último console.log("FLW"); e executa e tira do Call Stack. assim o Call Stack fica vazio novamente e depois dos 5s ele tira o setTimeout(mandaMensagem, 5000); da Task Queue e manda para o Call Stack de novo para ser executado.

Lembrando que nessa parte ele vai ser executado da mesma forma de antes, pimeiro entra a função junto com o console.log("Tudo Bem?");, sai esse console.log e entra console.log("Vou te mandar uma solicitação");, sai esse concole.log e entra console.log("Solicitação recebida!");, depois que termina ele sai e como a função foi finalizada a função sai também.

Basicamente a gente deixa esse função do timer de lado e depois chama ela de volta. Essa função mandaMensagem está sendo utilizada como um função do setTimeout e isso se chama Call Back.

-----------------------------------

Por padrão o JavaScript funciona de modo síncrono, executando as tarefas linha a linha. Funções como as descritas anteriormente podem atrasar essa execução por terem um tempo de espera relativo a fatores externos (como o usuário ou a API). Para isso não afetar o nosso projeto, temos o que é chamado de programação assíncrona.

A assincronicidade em programação é o ato de executar uma tarefa em “segundo plano”, para a execução das outras tarefas menores acontecerem enquanto a maior está sendo carregada, sem interromper o código. O javascript tem o comportamento de executar uma coisa por vez, mesmo se transformarmos trechos de código em assíncrono.

Podemos destrinchar o fluxo de execução de tarefas em JavaScript em três partes: Event Loop, Call Stack e Task Queue. O Event Loop é um ciclo que monitora e executa as ações que mandamos para o JavaScript. O processo de leitura do código só é finalizado quando não existem mais ações a serem executadas. A call stack é um mecanismo que organiza como irá funcionar o script quando existem muitas funções: qual função está sendo executada, quais estão sendo chamadas dentro de alguma função, etc. Por fim, a task queue é a fila de tarefas assíncronas. Se algo precisa ocorrer em segundo plano ou mais tarde, é nessa fila que ele será adicionado e executado mais tarde.

-----------------------------------

Exemplo de call back foi o da lasanha, coloca no microondas espera 5 min depois come.

As coisas que a gente faz que gera outras ações é chamda call backs.

Call backs são basicamentes funções que são enviadas como parâmetros para outras funções.

Exemplo:

setTimeout(mandaMensagem, 5000);

Usamos a função mandaMensagem como parâmetro da função seiTimeout.

Agora vamos consumir uma API de CEP(viacep.com.br) para nos ajudar no problema dos endereçoes do site Alura Books.

API - Interface de Programção de Aplicações

Uma API permite que dois componentes de software se comuniquem entre si. Chamamos esses dois ldos de cliente e servidor. Então a API fica no meio dos dois, o cliente faz uma solicitação para essa api e ela por sua vez pergunta para o servidor o que fazer e retorna ao usuário.

O código no script.js fica:

var consultaCEP = fetch(' viacep.com.br/ws/01001000/json/');

console.log(consultaCEP);

Esse log nos retorna uma promisse.

O método fetch é um método assíncrono wue ele tem como parâmetro obrigatório a url da API que no nosso caso é a url da viacep.

Como sabemos esse código nos retorna uma promisse.

Uma Promisse é uma "promessa" de que alguma coisa vai acontecer e o retorno dessa promise pode ser resolvida ou rejeitada e isso permite que métodos assíncronos se tornem sincronos, ou seja, ao invés de retornar uma valor específico / um valor final, ele retrona uma promessa que uma hora esse valor vai chegar.

### Anatomia da Promisse

const entrege = new promisse (function (resolve, reject) {
    if (recebeu == true) {
        resolve('Ana recebeu a encomenda!!')
    } else {
        reject('Não foi possível receber a encomenda!!')
    }
})

Na maioria dos casos a gente não constrói uma promisse do zero, ela é gerada a partir de alguma coisa síncrona que no nosso caso é o Fetch API.

-----------------------------------

Uma promisse vai nos reotrnar um objeto do tipo response, porém esse objeto não pode ser lido normalmente, ele tem que ser convertido então para isso utilizamos o then():

var consultaCEP = fetch('https://viacep.com.br/ws/01001000/json/').then(resposta => resposta.json());

console.log(consultaCEP);

Nesse caso estamos pegando esse objeto e passsando ele para a variável resposta e através da arrow function estamos transformando essa variável respostas no formato JSON para que podemos ler esse retorno da API.

Para que nosso log consultaCEP funcione precisamos digitar:

    var consultaCEP = fetch('https://viacep.com.br/ws/01001000/json/')
    .then(resposta => resposta.json())
    .then(r => console.log(r));

    console.log(consultaCEP);

Nesse caso ele armazena os dados e transforma em JSON na variável resposta e após isso ele pega esse valor armazena na variável r e mostra essa variavel através do console.log.

-----------------------------------

O método the() só funciona se tudo ocorrer bem com o código, caso acontecer algum e quisermos mostrar isso para o usuário temos que utilizar o catch().

    var consultaCEP = fetch('https://viacep.com.br/ws/01001000/json/')
    .then(resposta => resposta.json())
    .then(r => {
        if (r.erro) {
            throw Error('Esse CEP não existe')
        } else {
            console.log(r)
        }
        
    })
    .catch(erro => console.log(erro));

    console.log(consultaCEP);

No código acima acrescentamos um .catch() para obter esses erros caso ocorra. Utilizamos também uma condição no .then(), pois essa API não retorna um erro caso o CEP não exista, mas lá no site ele nos dizem que esse tipo de erro ver como rotrno true da variável erro.  Então utilizamos um if dizendo, caso r.erro for true jogue (throw) esse erro com a seguinte mensagem ('Esse CEP não existe') e com isso o catch consegue obter esse tipo de erro caso ocorra.

-----------------------------------

Temos também o método finally(), que funcioan após todo o processo for concluído, mesmo dando erro ou não e no nosso caso após o processo ser concluído ele manda no console a mensagem: Processamento concluído!

    var consultaCEP = fetch('https://viacep.com.br/ws/01001000/json/')
    .then(resposta => resposta.json())
    .then(r => {
        if (r.erro) {
            throw Error('Esse CEP não existe')
        } else {
            console.log(r)
        }
        
    })
    .catch(erro => console.log(erro))
    .finally(mensagem => console.log('Processamento concluído!'));

    console.log(consultaCEP);

-----------------------------------

Podemos utilizar outros métodos também para fazer funções assincronas:

    async function buscaEndereco() {
        var consultaCEP = await fetch('https://viacep.com.br/ws/01001000/json/');
        var consultaCEPConvertida = await consultaCEP.json();

        console.log(consultaCEPConvertida);
    }

    buscaEndereco();

Nesse caso criamos uma função assincrona com async function.

Vale lembrar que o await só funciona se você criar a função dizendo que é async.

Esse nosso código retorna os mesmos valores dos código acima em que tinha vários .then(), porém falta ainda tratar os erros com esse método.

-----------------------------------

    async function buscaEndereco() {

        try {
            var consultaCEP = await fetch('https://viacep.com.br/ws/01001000/json/');
            var consultaCEPConvertida = await consultaCEP.json();

            if (consultaCEPConvertida.erro) {
                throw Error('CEP não existente!!')
            }
        
            console.log(consultaCEPConvertida);
        } catch (erro) {
            console.log(erro)
        }
    }

    buscaEndereco();

Agora o código foi criado da maneira correta com o try e catch. O try tem a função semelhando ao then e o catch tem a mesma função que é pegar os erros.

-----------------------------------

    async function buscaEndereco(cep) {

        try {
            var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            var consultaCEPConvertida = await consultaCEP.json();

            if (consultaCEPConvertida.erro) {
                throw Error('CEP não existente!!')
            }
        
            console.log(consultaCEPConvertida);

            return consultaCEPConvertida;

        } catch (erro) {
            console.log(erro)
        }
    }

    let ceps = ['01001000', '01001001'];
    let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
    Promise.all(conjuntoCeps).then(respostas => console.log(respostas));

Esse código utilizamos ele para enter o Promise.All.

Basicamente nós criamos um array de ceps, depois criamos uma variével onde pegamos o array ceps e utilizamos a função map nele. Essa função map vai nor retornar um novo array com os valores processados da função buscaEndereço.

E depois basicamente a Promise.all vai resolver todas as promisses e nos retornar esse array com os dados dos endereços dos dois ceps e mostrar no console.log um array com as promisses resolvidas.

-----------------------------------

Site interessane da Aulra sobre Async/await no JavaScript: o que é e quando usar a programação assíncrona?

https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar

-----------------------------------

Agora vamos integrar o nosso código com o site da Alura Books.

Ficando com o código:

    async function buscaEndereco(cep) {

        try {
            var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            var consultaCEPConvertida = await consultaCEP.json();

            if (consultaCEPConvertida.erro) {
                throw Error('CEP não existente!!')
            }
        
            var cidade = document.getElementById("cidade");
            var logradouro = document.getElementById("endereco");
            var estado = document.getElementById("estado");

            cidade.value = consultaCEPConvertida.localidade;
            logradouro.value = consultaCEPConvertida.logradouro;
            estado.value = consultaCEPConvertida.uf;



            console.log(consultaCEPConvertida);

            return consultaCEPConvertida;

        } catch (erro) {
            console.log(erro)
        }
    }

    var cep = document.getElementById("cep");
    cep.addEventListener("focusout", () => buscaEndereco(cep.value));









