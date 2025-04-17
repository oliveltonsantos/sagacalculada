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

function copiarResultado(seletor) {
    var elemento = document.querySelector(seletor)
    var textareaTemporario = document.createElement("textarea")

    textareaTemporario.value = elemento.innerText
    document.body.appendChild(textareaTemporario)
    textareaTemporario.select()
    document.execCommand("copy")
    document.body.removeChild(textareaTemporario)

    mostrarToast("Resultado copiado!")
}

function mostrarToast(mensagem) {
    var toast = document.getElementById("toast")
    toast.innerText = mensagem
    toast.style.display = "block"

    setTimeout(function () {
        toast.style.display = "none"
    }, 2000) // esconde depois de 2 segundos
}

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

