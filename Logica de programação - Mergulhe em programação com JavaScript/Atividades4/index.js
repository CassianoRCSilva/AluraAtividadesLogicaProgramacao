//1. Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log("Boas Vindas!");

//2. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let nomeLog = "Cassiano";

console.log("Olá, " + nomeLog + "!");

//3. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
let nome = "Cassiano";

console.log("Olá " + nome + "!");

//4. Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let pergunta = prompt("Qual é a linguagem de programação que você mais gosta?");
let resposta = pergunta;

console.log(resposta);

//5. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = 15;
let valor2 = 10;

let resultado1 = valor1 + valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual à ${resultado1}`);

//6. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
let valor3 = 5;
let valor4 = 50;

let resultado2 = valor3 - valor4;

console.log(`A diferença entre ${valor3} e ${valor4} é igual à ${resultado2}`);

//7. Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let perguntaidadeIdade = prompt("Qual a sua idade?");
let idade = (perguntaidadeIdade);

if (idade >= 18) {
    console.log("Você é maior de idade");
} else {
    console.log("Você é menor de idade");
}

//8. Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
let PerguntaNumero = prompt("Digite um número, podendo ser negativo:");
let numero = (PerguntaNumero);

if (numero > 0) {
    console.log("Este número é positivo");
} else if (numero < 0) {
    console.log("Este número é negativo")
} else {
    console.log("Este número é zero")
}

//9. Use um loop while para imprimir os números de 1 a 10 no console.
let contadorMaximo = 1;

while (contadorMaximo <= 10) {
    contadorMaximo++;
}
console.log(`O contador atual é ${contadorMaximo}`);

//10. Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = 8;

if (nota >= 7) {
    console.log("O aluno foi Aprovado.");
} else {
    console.log("O aluno foi Reprovado");
}
/*Operador Ternário
let palavraAprovado = nota >= 7 ? 'Aprovado' : 'Reprovado'; */ 

//11. Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
let numeroAleatorio = Math.random();
console.log(`O numero aleatório gerado foi ${numeroAleatorio}`);

//12. Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
let numeroInteiroDezena = parseInt(Math.random() * 10 + 1);
console.log(`O número gerado é ${numeroInteiroDezena}`);

//13.Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
let numeroInteiroMilhar = parseInt(Math.random() * 1000 + 1);
console.log(`O numero gerado é ${numeroInteiroMilhar}`);