const numeroSecreto = gerarNumeroAleatorio();
const box = document.querySelector('.box');
const botao = document.querySelector('.teste');

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 100);
}

botao.addEventListener('click', () => {
    console.log(gerarNumeroAleatorio())
});