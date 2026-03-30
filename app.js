alert(
  "Bem-vindo ao sorteio de números! Clique no botão para sortear um número entre 1 e 100.",
);

let numeroSecreto = 90;
console.log(`O número secreto é: ${numeroSecreto}`);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
  chute = prompt(
    "Digite um número entre 1 e 100 para tentar adivinhar o número secreto: ",
  );

  if (numeroSecreto == chute) {
    alert(`Parabéns! Você acertou o número secreto em ${tentativas} tentativas!`);
  } else {
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}`);
    } else {
      alert(`O número secreto é maior que ${chute}`);
    }
    tentativas++;
  }
}