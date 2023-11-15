var numeroSecreto = parseInt(Math.random() * 1001);
var tentativas = 0;

while (chute != numeroSecreto) {
    var chute = prompt('Digite um número entre 0 e 1000');
    //se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert(`Acertou em ${tentativas} tentivas!`)
    } else if (chute > numeroSecreto) {
        tentativas++;
        alert(`Errou... o número secreto é menor. Você já errou ${tentativas} vezes!`);
    } else if (chute < numeroSecreto) {
        tentativas++;
        alert(`Errou... o número secreto é maior. Você já errou ${tentativas} vezes!`);
    }
}