// Faz o cáculo dos planos de aula

function calculo() {
    var nomeAluno = document.getElementById('txtaluno').value.trim()
    var plano = Number(document.getElementById('txtplano').value)
    var desconto = Number(document.getElementById('txtdesconto').value)
    var somenteLetras = /^[A-Za-zÀ-ÿ\s]+$/
    var res1 = document.querySelector('div.res1')
    var res2 = document.querySelector('div.res2')


    if (!somenteLetras.test(nomeAluno) || plano <= 0 || desconto <= 0) {
        window.alert('Insira os dados nos campos abaixo!')
    } else {
        var aulasIndividuais = plano * 3
        var aulasIndividuaisDesconto = aulasIndividuais * 10 / 100
        var aulasIndividuaisPrecoFinal = aulasIndividuais - aulasIndividuaisDesconto
        var aulasDuplas = (plano * 3) / 2

        res1.innerHTML = `<p>Opaaaa! E aí ${nomeAluno} tudo bem? Estou passando para te falar que o valor do plano trimestral com ${desconto}% de desconto é ${aulasIndividuaisPrecoFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}. Ou seja, você economiza ${aulasIndividuaisDesconto.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}. E aí bora fechar e começar sua saga do turco / inglês hoje mesmo? 😁</p>`

        res2.innerHTML = `<p>Opaaaa! E aí ${nomeAluno} tudo bem? Estou passando para te falar que o valor do plano trimestral em dupla é ${aulasDuplas.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} para cada um. E aí bora fechar e começar sua saga do turco / inglês hoje mesmo? 😁</p>`

    }
}


// Copia a mensagem para o clipboard

function copiarResultado(seletor) {
    var elemento = document.querySelector(seletor)

    if (!elemento) {
        console.error("Elemento não encontrado:", seletor)
        return
    }

    var texto = elemento.innerText

    navigator.clipboard.writeText(texto)
        .then(() => {
            mostrarToast("Resultado copiado!")
        })
        .catch((err) => {
            console.error("Erro ao copiar:", err)
            mostrarToast("Erro ao copiar!")
        })
}


// Mostra um aviso que a mensagem foi copiada com sucesso

function mostrarToast(mensagem) {
    var toast = document.getElementById("toast")
    toast.innerText = mensagem
    toast.style.display = "block"

    setTimeout(function () {
        toast.style.display = "none"
    }, 2000) // esconde depois de 2 segundos
}


// Limpa as informações inseridas nos campos

function limpar() {
    var nomeAluno = document.getElementById('txtaluno')
    var plano = document.getElementById('txtplano')
    var desconto = document.getElementById('txtdesconto')
    var res1 = document.querySelector('div.res1')
    var res2 = document.querySelector('div.res2')

    nomeAluno.value = ''
    plano.value = ''
    desconto.value = ''
    res1.innerHTML = ''
    res2.innerHTML = ''

    nomeAluno.focus()
}

