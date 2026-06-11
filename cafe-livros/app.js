const formPedido = document.getElementById('form-pedido');
const selectCafe = document.getElementById('cafe');
const selectGrao = document.getElementById('grao');
const inputQuantidade = document.getElementById('quantidade');
const listaPedidos = document.getElementById('lista-pedidos');
const valorTotal = document.getElementById('valor-total');
const mensagemErro = document.getElementById('mensagem-erro');
const btnLimpar = document.getElementById('btn-limpar');

function formatarDinheiro(valor) {
    return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
}

function mostrarErro(erro) {
    if (!erro) {
        mensagemErro.classList.add('hidden');
        mensagemErro.textContent = '';
        return;
    }

    mensagemErro.classList.remove('hidden');
    mensagemErro.textContent = erro;
}

function preencherSelect(select, itens, placeholder) {
    select.innerHTML = `<option value="">${placeholder}</option>`;

    Object.entries(itens).forEach(([id, item]) => {
        const option = document.createElement('option');
        option.value = id;

        if (item.preco !== undefined) {
            option.textContent = `${item.nome} - ${formatarDinheiro(item.preco)}`;
        } else {
            option.textContent = `${item.nome} - adicional ${formatarDinheiro(item.adicional)}`;
        }

        select.appendChild(option);
    });
}

function renderizarPedido(itens, total) {
    listaPedidos.innerHTML = '';

    if (itens.length === 0) {
        listaPedidos.innerHTML = `
      <div class="rounded-2xl border border-dashed border-white/15 p-5 text-center text-sm text-stone-300">
        Nenhum café adicionado.
      </div>
    `;
    }

    itens.forEach((item) => {
        listaPedidos.innerHTML += `
      <section class="rounded-2xl border border-white/10 bg-stone-900/80 p-4">
        <div class="flex items-start justify-between gap-4">
          <div>
            <p class="font-bold text-white">${item.cafe}</p>
            <p class="mt-1 text-sm text-stone-300">Grãos: ${item.grao}</p>
            <p class="mt-1 text-sm text-stone-400">${item.quantidade}x ${formatarDinheiro(item.precoUnitario)}</p>
          </div>
          <p class="font-black text-amber-300">${formatarDinheiro(item.subtotal)}</p>
        </div>
      </section>
    `;
    });

    valorTotal.textContent = formatarDinheiro(total);
}

async function carregarDados() {
    const response = await fetch('./api.php');
    const data = await response.json();

    preencherSelect(selectCafe, data.cafes, 'Selecione um café');
    preencherSelect(selectGrao, data.graos, 'Selecione um grão');
    renderizarPedido(data.itens, data.total);
    mostrarErro(data.erro);
}

async function adicionarPedido(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('acao', 'adicionar');
    formData.append('cafe', selectCafe.value);
    formData.append('grao', selectGrao.value);
    formData.append('quantidade', inputQuantidade.value);

    const response = await fetch('./api.php', {
        method: 'POST',
        body: formData,
    });

    const data = await response.json();

    renderizarPedido(data.itens, data.total);
    mostrarErro(data.erro);

    if (!data.erro) {
        selectCafe.value = '';
        selectGrao.value = '';
        inputQuantidade.value = 1;
    }
}

async function limparPedido() {
    const formData = new FormData();
    formData.append('acao', 'limpar');

    const response = await fetch('./api.php', {
        method: 'POST',
        body: formData,
    });

    const data = await response.json();

    renderizarPedido(data.itens, data.total);
    mostrarErro(data.erro);
}

formPedido.addEventListener('submit', adicionarPedido);
btnLimpar.addEventListener('click', limparPedido);

carregarDados();