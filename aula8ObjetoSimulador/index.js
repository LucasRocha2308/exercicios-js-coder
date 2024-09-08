class Simulador {
  constructor() {
    this.soma = 0;
    this.contador = 0;
    this.media = 0;
  }

  adicionarValor(valor) {
    this.soma += valor;
    this.contador++;
    this.calcularMedia();
  }

  calcularMedia() {
    this.media = this.soma / this.contador;
  }

  exibirResultado() {
    alert("Soma: " + this.soma + "\nMédia: " + this.media);
  }
}

let simulador = new Simulador();

let valores = parseInt(prompt("Digite um número:"));

while (valores !== 0) {
  simulador.adicionarValor(valores);
  simulador.exibirResultado();
  valores = parseInt(
    prompt("Digite um número ou 0 para finalizar o programa:")
  );
}

alert("Fim do programa.");
