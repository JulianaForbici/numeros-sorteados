alert("Bem-vindo ao sorteio de números! Clique no botão para sortear um número entre 1 e 100.");

let numeroSecreto = 90; 
let chute = prompt("Digite um número entre 1 e 100 para tentar adivinhar o número secreto: ");

if (numeroSecreto == chute) {
    alert("Parabéns! Você acertou o número secreto!");
} else if (chute != numeroSecreto) {
    alert("Que pena! Você errou o número secreto. O número correto era: " + numeroSecreto);
}