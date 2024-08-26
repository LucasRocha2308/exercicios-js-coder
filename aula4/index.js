function pegarPreco() {
  let precoCusto = parseFloat(prompt("Digite o preço de custo do produto:"));
  return precoCusto;
}

function calcularICMS(precoCusto, aliquotaICMS = 0.18) {
  let valorICMS = precoCusto * aliquotaICMS;
  return valorICMS;
}

function calcularEExibirPrecoFinal(precoCusto, valorICMS) {
  let precoFinal = precoCusto + valorICMS;
  alert("O preço final do produto com ICMS é: R$ " + precoFinal.toFixed(2));
}

let precoCusto = pegarPreco();
let valorICMS = calcularICMS(precoCusto);
calcularEExibirPrecoFinal(precoCusto, valorICMS);
