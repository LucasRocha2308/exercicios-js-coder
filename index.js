const saudacao = "Olá, ";
const valor = 5;

const nome = prompt("Digite seu nome:");
const numero = Number(prompt("Digite um número que será somado com 5:"));

if (!isNaN(numero)) {
  alert(saudacao + nome);
  alert("A soma de 5 com " + numero + " é " + (numero + valor));
} else {
  alert("Por favor, insira um número válido.");
}
