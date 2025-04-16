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

function copiarresultado1() {
    var res1 = document.querySelector('div.res1')
    var elementoTemporario1 = document.createElement("textarea")

    elementoTemporario1.value = res1.innerText
    document.body.appendChild(elementoTemporario1)
    elementoTemporario1.select()
    document.execCommand("copy")
    document.body.removeChild(elementoTemporario1)

    mostrarToast("Resultado copiado!")
}

function copiarresultado2() {
    var res2 = document.querySelector('div.res2')

    var elementoTemporario2 = document.createElement("textarea")

    // Copia apenas o texto, sem HTML (se quiser com HTML, use res.innerHTML)
    elementoTemporario2.value = res2.innerText

    document.body.appendChild(elementoTemporario2)

    elementoTemporario2.select()

    document.execCommand("copy")

    document.body.removeChild(elementoTemporario2)

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

