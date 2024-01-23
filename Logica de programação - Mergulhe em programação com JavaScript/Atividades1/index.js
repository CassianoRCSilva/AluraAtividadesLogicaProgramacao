alert("Boas vindas ao nosso site!");

let nome = "Lua"
let idade = 25
let numeroDeVendas = 50
let saldoDisponivel = 1000

let mensagemDeErro = 'Erro! Preencha todos os campos';
alert(mensagemDeErro);

let perguntaNome = prompt("Qual o nome de usuário?");
let perguntaIdade = prompt("Qual a sua idade?");

if (idade >= 18) {
    alert("Pode tirar a habilitação");
} 
else {
    alert("VocÊ não tem idade para tirar a habilitação");
}