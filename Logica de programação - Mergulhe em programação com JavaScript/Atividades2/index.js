/* 1. Pergunte ao usuário qual é o dia da semana. 
Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".*/

let perguntaSemana = prompt('Qual é o dia da semana?');


if (perguntaSemana == 'Sabado' || perguntaSemana == 'Domingo') {
    alert('Bom final de semana!');
}
else {
    alert('Boa semana!');
}

/*2. Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando. */

numero = prompt("Digite um número positivo ou negativo!")
if (numero > 0) {
    alert("Número Positivo")
} else if (numero < 0) {
    alert("Número negativo")
} else {
    alert("O valor digitado é zero")
}

/*3. Crie um sistema de pontuação para um jogo.
Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.". */

pontuacao = 105;

if (pontuacao >= 100) {
    alert("Parabéns você venceu!")
} else {
    alert("Você perdeu, tente novamente para vencer.")
}

/*4. Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo */

let saldoDaConta = 356.00;
alert(`O saldo de sua conta é R$${saldoDaConta}`);

/*5. Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome. */

let nomeInserido = prompt('Insira o seu nome')
alert(`Boas vinda ${nomeInserido} :)`)