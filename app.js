alert(`Bem-vindo ao sorteio de números!`);
let numeroMax = 100;
let numeroSecreto = parseInt(Math.random() * numeroMax) + 1;
console.log(`O número secreto é: ${numeroSecreto}`);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
  chute = prompt(
    `Digite um número entre 1 e ${numeroMax} para tentar adivinhar o número secreto: `,
  );

  if (numeroSecreto == chute) {
    break;
  } else {
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}`);
    } else {
      alert(`O número secreto é maior que ${chute}`);
    }
    tentativas++;
  }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(
  `Parabéns! O número secreto era ${numeroSecreto} e você acertou com ${tentativas} ${palavraTentativa}!`,
);