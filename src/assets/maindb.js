const btnMegusta = document.querySelector('#btnMegusta');
const contadorLikes = document.querySelector('#contadorLikes');

btnMegusta.addEventListener('click', () => {
    let actual = contadorLikes.innerHTML;
    contadorLikes.innerHTML = parseInt(actual) + 1;
});