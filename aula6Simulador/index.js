let valores = parseInt(prompt("Digite um número:"));

let soma = 0;
let media = 0;
let contador = 0;

while (valores !== 0) {
  soma += valores;
  contador++;
  media = soma / contador;
  alert("Soma: " + soma + "\nMédia: " + media);
  valores = parseInt(
    prompt("Digite um número ou 0 para finalizar o programa:")
  );
}

alert("Fim do programa.");
