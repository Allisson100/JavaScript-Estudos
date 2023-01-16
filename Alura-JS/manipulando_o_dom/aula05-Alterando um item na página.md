# Alterando um item na página

Se utilizarmos:

    somar.addEventListener("click", (evento) => {
        braco.value += 1;
    })

Ele vai sempre colocar o número 1 na frente do zero lá na página, 00, 001, 0011.

Isso acontece, pois nosso número é do tipo string, então devemos determina-lo como um número e para isso utilizamos:

    somar.addEventListener("click", (evento) => {
        braco.value = parseInt(braco.value) + 1;
    })


