# Cálculos dinâmicos

Entendendo o código:

    const controle = document.querySelectorAll("[data-controle]");
    const estatisticas = document.querySelectorAll("[data-estatistica]")
    const pecas = {
        "bracos": {
            "forca": 29,
            "poder": 35,
            "energia": -21,
            "velocidade": -5
        },
        "blindagem": {
            "forca": 41,
            "poder": 20,
            "energia": 0,
            "velocidade": -20
        },
        "nucleos": {
            "forca": 0,
            "poder": 7,
            "energia": 48,
            "velocidade": -4
        },
        "pernas": {
            "forca": 27,
            "poder": 21,
            "energia": -32,
            "velocidade": 43
        },
        "foguetes": {
            "forca": 0,
            "poder": 28,
            "energia": 0,
            "velocidade": -2
        }
    }

    controle.forEach( (elemento) => {
        elemento.addEventListener("click", (evento) =>{
            manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
            atualizaEstatisticas(evento.target.dataset.peca);
        })
    })

    function manipulaDados(operacao, controle) {

        const peca = controle.querySelector("[data-contador]");

        if (operacao === "-") {
                peca.value = parseInt(peca.value) - 1;
        } else {
                peca.value = parseInt(peca.value) + 1;
        }
    }

    function atualizaEstatisticas (peca) {

        estatisticas.forEach ( (elemento) => {
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
        })
    }

Primeiro criamos a const que contem os dados do que as partes do robo vão mudar em sua caracteristica.
Após isso acessamos os componentes do HTMl que tinham as estatisticas com a const estatisticas.
Depois acrescentamos uma função no clique, pois só queremos mudar a estatistica se houver um aumento de braço, perna,etc e colocamos como parâmetro evento.target.dataset.peca, que nos diz em qual peça eu cliquei se foi no braço, blindagem, etc. Após isso criamos uma função forEach para pegar todos os elementos de estatisticas e somar ele mesmo mais os valores que estão na const pecas com os valores corrrespondentes a cada peça.
No caso pecas[peca][elemento.dataset.estatistica]; significa que o número que vai ser somado será da const pecas no objeto [a peca que eu cliquei que está sendo passado como parametro pelo evento.target.dataset.peca] e dentro de peças acessamos outro elemento [elemento.dataset.estatistica] que nos diz se é a força, energia, poder ou velocidade que queremos.