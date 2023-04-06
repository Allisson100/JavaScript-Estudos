# JavaScript para Web: Crie páginas dinâmicas

querySelector() - serve para buscar um seletor no documento podendo ser uma classe, id ou o nome da tag.

- Se for Id fica querySelector('#nome_do_Id');
- Se for uma classe fica querySelector('.nome_da_classe');
- Se for uma tag fica querySelector('nome_da_tag').

Lembrando que precisamos colocar o document antes: document.querySelector('').

A tag button já tem como padrão uma interação com o teclado, apenas apetamos tab até o botão e clicamos no enter ou no espaço.

tecla.onkeydown - representa um evento de quando uma tecla é apertada.

tecla.onkeyup - representa um evento de quando a tecla não está mais pressionada.

tecla.classList.add('ativa') - aqui estamos acessando a lista da classes presentes na constante tecla e adicionando uma nova classe 'ativa'.

tecla.classList.remove('ativa') - aqui estamos acessando a lista da classes presentes na constante tecla e removendo a classe 'ativa'.


    tecla.onkeydown = function (evento) {

            if (evento.code === 'Space') {
                tecla.classList.add('ativa');
            }
        }

Nesse trecho de código estou dizendo que: quando eu apertar uma tecla no teclado, o programa vai comparar se essa tecla que eu apertei foi o Espaço (através do evento.code === 'Space'), pois nesse exemplo queremos somente que adicione a classe ativa quando pressionarmos a tecla Espaço.



