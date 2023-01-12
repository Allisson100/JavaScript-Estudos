# Capítulo 1 - Introdução

Apenas uma introdução sobre a linguagem JavaScript e alguns conceitos sobre lógica de programação.

### Comandos

    alert("Bem-Vindo ao Mundo JavaScript!");

- Cria uma caixa de texto logo quando carrega a página.

Lembrando que o JavaScript é case sensitive, ou seja, diferencia letras maiúsculas de minúsculas.

- As variáveis são espaços alocados na memória do computador que permitem guardar informações e trabalhar com elas.

Em JavaScript, os nomes de variáveis não podem:

- Conter espaços;
- Começar por números;
- Conter caracteres especiais, como +,-,*, /, %, (,),{,},!,@,#;
- Utilizar nomes de palavras reservadas da linguagem, como function, var, new, for ou return.

Para declarar uma constante em um programa, utilize a palavra reservada const seguida pelo nome da constante e da atribuição de valor a ela. É padrão utilizar letras maiúsculas para nomear as constantes. Exemplo:

    const POLTRONAS = 240;

### Entrada de dados com prompt()

Para receber dados do usuário, uma das formas possíveis em JavaScript é utilizar o comand (método) prompt(), que exibe uma caixa com um texto e um espaço para digitação.

    var nome = prompt("Qual é o seu nome?");
    alert("Olá " + nome);

### Comentários

Caso precise comentar alguma coisa no código:

    // para comentários de uma linha

    /*
    para comentários de várias linhas
    */

###  Tipos de dados e conversões de tipos

As variáveis manipuladas em um programa são de um determinado tipo. Em JavaScript, os tipos principais de dados são strings (variáveis de texto), números e valores booleanos (true ou false).

    /*
    Operações envolvendo strings e números
    */

    var a = "20";
    var b = a * 2; // b = 40;
    var c = a / 2; // c = 10;
    var d = a - 2; // d = 18
    var e = a + 2; // e = 202 ???
    alert("e: " + e); // exibe o valor de uma variável

Nesse exemplo, temos uma variável do tipo string que recebe “20” (var a = "20"). Ela é entendida como sendo do tipo string por estar delimitada por aspas. Nas operações de multiplicação, divisão e subtração, a linguagem converte esse texto em número e o valor retornado está de acordo com o esperado. Contudo, quando realizamos a adição, o valor de retorno é diferente do padrão, pois a linguagem concatena (+) o texto com o número.

Para resolver esse problema, precisamos converter o texto em número. Isso pode ser feito, em JavaScript, pelos métodos Numbe (), parseInt() e parseDouble().

    /*
    Operações envolvendo strings e números
    */

    var a = "20";
    var b = a * 2; // b = 40
    var c = a / 2; // c = 10
    var d = a - 2; // d = 18
    var e = a + 2; // e = 202
    var f = Number(a);
    var g = f + 2; // g = 22
    alert("g: " + g); // exibe o valor de uma variável

As entradas de dados realizadas com o método prompt() criam variáveis do tipo String, exceto se houver uma função de conversão de dados como Number(). Exibir uma variável que não recebeu uma atribuição de valor vai gerar uma saída “undefined”.

### Tipos de variáveis

    var fruta = "Banana";
    var preco = 3.50;
    var levar = true;
    var novoValor;
    alert(fruta + " " + preco + " " + levar + " " + novoValor);

![Resultado do código](./img/01-cap1-Img.JPG)

### Exemplos de entrada, processamento e saída

<b>a)</b> Elaborar um programa que leia um número. Calcule e informe o dobro desse número.

- Entrada de dados: ler um número
- Processamento: calcular o dobro
- Saída: informar o dobro

Código:

    // lê um dado de entrada
    var num = prompt("Número: ");

    // calcula o dobro
    var dobro = num * 2;

    // exibe a resposta
    alert("Dobro é: " + dobro);

<b>b)</b> Elaborar um programa que leia dois números. Calcule e informe a soma desses números.

- Entrada de dados: ler dois números
- Processamento: calcular a soma
- Saída: informar a soma

Código:

    // lê os números
    var num1 = Number(prompt("1º Número: "));
    var num2 = Number(prompt("2º Número: "));

    // calcula a soma
    var soma = num1 + num2;

    // exibe o resultado
    alert("Soma é: " + soma);

<b>c)</b> Elaborar um programa que leia o valor de um jantar. Calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.

Código:

    // lê o valor do jantar
    var jantar = Number(prompt("Valor do Jantar R$ "));
    // calcula os dados
    var garcom = jantar * 0.10;
    var total = jantar + garcom;
    // apresenta as respostas
    alert("Taxa Garçom R$: " + garcom.toFixed(2) + "\nTotal R$: " +
    total.toFixed(2));

.tofixed(2): serve para limitar as casas decimais, nesse exemplos colocamos .toFixed(2), pois queriamos duas casas depois da vírgula;

<b>d)</b> Elaborar um programa que leia a duração de uma viagem em dias e horas. Calcule e informe a duração total da viagem em número de horas.

    // lê os dados de entrada
    var dias = Number(prompt("Nº Dias: "));
    var horas = Number(prompt("Nº Horas: "));

    // calcula a duração
    var total = (dias * 24) + horas;

    // exibe o total
    alert("Total de Horas: " + total);

### Exercícios

<b>a)</b> Elaborar um programa que leia um número. Calcule e informe os seus vizinhos, ou seja, o número anterior e posterior.

Exemplo:
Número: 15

Vizinhos: 14 e 16

<b>b)</b> Elaborar um programa para uma pizzaria, o qual leia o valor total de uma conta e quantos clientes vão pagá-la. Calcule e informe o valor a ser pago por cliente.

Exemplo:
Valor da Conta R$: 90.00
Número de Clientes: 3

Valor por cliente R$: 30.00

<b>c)</b> Elaborar um programa para uma loja, o qual leia o preço de um produto e informe as opções de pagamento da loja. Calcule e informe o valor para pagamento à vista com 10% de desconto e o valor em 3x.

Exemplo:
Preço R$: 60.00
À Vista R$: 54.00
Ou 3x de R$: 20.00

<b>d)</b>  Elaborar um programa que leia 2 notas de um aluno em uma disciplina.
Calcule e informe a média das notas.

Exemplo:
1ª Nota: 7.0
2ª Nota: 8.0

Média: 7.5

