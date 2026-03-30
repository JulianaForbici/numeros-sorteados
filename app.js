let numeroSorteado = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Sorteador de Números');
exibirTextoNaTela('p', 'Clique no botão para sortear um número entre 1 e 100.');

function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSorteado) {
        exibirTextoNaTela('h1', 'Parabéns!');
        exibirTextoNaTela('p', 'Você acertou o número sorteado!');
    } else {
        if (chute < numeroSorteado) {
            exibirTextoNaTela('h1', 'Tente novamente!');
            exibirTextoNaTela('p', 'O número sorteado é maior do que o seu chute.');
        } else {
          exibirTextoNaTela('h1', 'Tente novamente!');
          exibirTextoNaTela('p', 'O número sorteado é menor do que o seu chute.');
        }
    }
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10) + 1;
}