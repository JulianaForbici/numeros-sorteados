function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Sorteador de Números');
exibirTextoNaTela('p', 'Clique no botão para sortear um número entre 1 e 100.');

function verificarChute() {
    console.log("Botão clicado!");
}