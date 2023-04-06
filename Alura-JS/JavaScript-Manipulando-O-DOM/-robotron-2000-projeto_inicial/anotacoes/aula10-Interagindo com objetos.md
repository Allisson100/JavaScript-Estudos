# Interagindo com objetos

Exemplo de como declarar um objeto com outros objetos dentro:

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

Se buscarmos lá no console a const peca, ele vai nos retornas todos os objetos na const, com isso podemos aprofundar mais e buscar algum valor exato, por exemplo:

    pecas.bracos

Vai nos retornar todos os objtos que compoe o objeto braco.

E se digitarmos:

    pecas.bracos.forca

Vamos ter exatamente o valor de 29, mas também podemos buscar o objeto braco com pecas["bracos"], que também nos retornará os objetos dentro de braco.

