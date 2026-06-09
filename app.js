<<<<<<< HEAD
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
=======
let numeroSorteado = gerarNumeroAleatorio();
let tentativas = 1;

>>>>>>> 0c86396fe14e86962bac8e940d067019bc6e9ccc
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial();
function verificarChute() {
    let chute = document.querySelector('input').value;
<<<<<<< HEAD
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 3 + 1);
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}
=======
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
>>>>>>> 0c86396fe14e86962bac8e940d067019bc6e9ccc
