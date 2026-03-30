let numeroSorteado = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Sorteador de Números');
exibirTextoNaTela('p', 'Clique no botão para sortear um número entre 1 e 100.');

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSorteado);
    console.log(numeroSorteado);
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10) + 1;
}