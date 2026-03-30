let numeroSorteado = gerarNumeroAleatorio();
let tentativas = 1;

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
        let palavraTentiva = tentativas > 1 ? 'tentativas' : 'tentativa';
        mensagemTentiva = `O número sorteado foi ${numeroSorteado} e você acertou em ${tentativas} ${palavraTentiva}.`;
        exibirTextoNaTela('p', mensagemTentiva);
    } else {
        if (chute < numeroSorteado) {
            exibirTextoNaTela('p', 'O número sorteado é maior do que o seu chute.');
        } else {
          exibirTextoNaTela('p', 'O número sorteado é menor do que o seu chute.');
        }
        tentativas++;
        limparCampoDeChute();
    }
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10) + 1;
}

function limparCampoDeChute() {
  let chute = document.querySelector('input');
  chute.value = '';
}