const menorvalor = 1;
const maiorValor = 100;
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    //Retorna um número no intervalo de 0 (inclusive) a 1 (exclusive)
    return parseInt(Math.random() * maiorValor + 1);
    //O '+ 1' é para tornar o 0 exclusivo e o 'maiorValor' inclusivo
}

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorvalor;
const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;
console.log(numeroSecreto);