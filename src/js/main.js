var numeroSecreto = parseInt(Math.random() * 1001);
var tentativas = 0;
while (chute != numeroSecreto) {
  var chute = prompt("Digite um número entre 0 e 1000");
  if (chute == numeroSecreto) {
    break;
  } else if (chute > numeroSecreto) {
    tentativas++;
    alert(`Errou... o número secreto é menor. Você já errou ${tentativas} vezes!`);
  } else if (chute < numeroSecreto) {
    tentativas++;
    alert(`Errou... o número secreto é maior. Você já errou ${tentativas} vezes!`);
  }
}
let tentativasPalavra = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${tentativasPalavra}`);
