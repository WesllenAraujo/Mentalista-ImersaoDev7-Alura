var numeroSecreto = parseInt(Math.random() * 1001);
var tentativas = 1;
while (chute != numeroSecreto) {
    var chute = prompt('Digite um número entre 0 e 1000');
        if (chute == numeroSecreto) {
            if (tentativas === 1) {
                alert(`Acertou em ${tentativas} tentativa!`)
            } else {
                alert(`Acertou em ${tentativas} tentivas!`)
            }
        } else if (chute > numeroSecreto) {
            tentativas++;
            alert(`Errou... o número secreto é menor. Você já errou ${tentativas} vezes!`);
        } else if (chute < numeroSecreto) {
            tentativas++;
            alert(`Errou... o número secreto é maior. Você já errou ${tentativas} vezes!`);
        }
}