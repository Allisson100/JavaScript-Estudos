# Eventos com JavaScript 2.04

Podemos utilizar a função onclick no HTML para fazer eventos, exemplo:

    <img class="robo" src="img/robotron.png" alt="Robotron" onclick='alert("Oi")'>

Criando uma função:

    const robotron = document.querySelector(".robotron");

    robotron.addEventListener("click", dizOi);

    function dizOi () {
        console.log("oi");
    }

