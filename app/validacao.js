function verificaChuteValido(chute){
    const numero = +chute

    if(chuteInvalido(numero)){
        elementoChute.innerHTML += '<div>Não é um valor valido!!</div>'
        return
    }
    if(numeroMaiorOuMenor(numero)){
        elementoChute.innerHTML += `
        <div>Valor inválido!! O número Precisa estar entre ${menorValor} e ${maiorValor}<div>
        `
        return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
        <h2> Você Acertou!!!</h2>
        <h3> O número secreto era ${numeroSecreto}!!</h3>

        <button id= "jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    }

    else if (numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down-9-1"></i></div>`
    }

    else{
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up-9-1"></i></div>`
    }
}
function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenor(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
} )