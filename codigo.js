function calculo() {
    var nomeAluno = document.getElementById('txtaluno').value.trim()
    var plano = Number(document.getElementById('txtplano').value)
    var desconto = Number(document.getElementById('txtdesconto').value)
    var somenteLetras =  /^[A-Za-zÀ-ÿ\s]+$/
    var res1 = document.querySelector('div.res1')
    var res2 = document.querySelector('div.res2')


    if (!somenteLetras.test(nomeAluno) || plano <= 0 || desconto <= 0) {
        window.alert('Insira os dados nos campos abaixo!')
    } else {
        var aulasIndividuais = plano * 3
        var aulasIndividuaisDesconto = aulasIndividuais - (aulasIndividuais * 10 / 100)
        var aulasDuplas = (plano * 3) / 2

        res1.innerHTML = `<p>Fala, ${nomeAluno}! Tudo certo? Estou passando para te falar que o valor da aula individual com ${desconto}% de desconto será de R$${aulasIndividuaisDesconto}. Bora fechar este pacote?</p>`

        res2.innerHTML = `<p>Plano em dupla: R$${aulasDuplas}</p>`
    }
}

function copiarresultado1() {
    var res1 = document.querySelector('div.res1')

    var temporario = document.createElement("textarea")

    temporario.value = res1.innerText

    document.body.appendChild(temporario)

    temporario.select()

    document.execCommand("copy")

    document.body.removeChild(temporario)

    alert("Resultado copiado!")

}

