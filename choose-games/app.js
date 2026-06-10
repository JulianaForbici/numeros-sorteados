function alterStatus(id) {
    const gameChosed = document.getElementById(`game-${id}`);
    const image = gameChosed.querySelector('.dashboard__item__img');
    const button = gameChosed.querySelector('.dashboard__item__button');
    const status = gameChosed.querySelector('.dashboard__item__status');
    const isRented = image.classList.contains('dashboard__item__img--rented');

    if (isRented) {
        image.classList.remove('dashboard__item__img--rented', 'grayscale', 'brightness-50');
        button.classList.remove('from-rose-500', 'to-red-700', 'text-white');
        button.classList.add('from-emerald-400', 'to-green-600', 'text-emerald-950');
        status.classList.remove('bg-yellow-400', 'text-yellow-950');
        status.classList.add('bg-emerald-400', 'text-emerald-950');
        button.textContent = 'Alugar';
        status.textContent = 'Disponível';
    } else {
        image.classList.add('dashboard__item__img--rented', 'grayscale', 'brightness-50');
        button.classList.remove('from-emerald-400', 'to-green-600', 'text-emerald-950');
        button.classList.add('from-rose-500', 'to-red-700', 'text-white');
        status.classList.remove('bg-emerald-400', 'text-emerald-950');
        status.classList.add('bg-yellow-400', 'text-yellow-950');
        button.textContent = 'Devolver';
        status.textContent = 'Alugado';
    }
}