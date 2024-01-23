//1. Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador1 = 1;

while (contador1 <= 10) {
    contador1++;
}
//2. Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let contador2 = 10;

while (contador2 >= 0) {
    contador2--
}
//3. Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let contagemRegressiva = prompt("Digite um número para iniciar a contagem regressiva.");

while (contagemRegressiva <= 0) {
    contagemRegressiva--
}
alert(`A contagem atual está em ${contagemRegressiva}`);
//4. Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let numeroEscolhido = prompt("Digite um número para iniciar a contagem progressiva");
let contagem = 0

while (contagem <= numeroEscolhido) {
    contagem++
}