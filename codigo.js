// Faz o cáculo dos planos de aula

function calculo() {
    var nomeAluno = document.getElementById('txtaluno').value.trim()
    var plano = Number(document.getElementById('txtplano').value)
    var meses = Number(document.getElementById('txtmeses').value)
    var desconto = Number(document.getElementById('txtdesconto').value)
    var somenteLetras = /^[A-Za-zÀ-ÿ\s]+$/
    var res = document.querySelector('div.res')

    var planoIndividualEscolhido = document.getElementById('planoindividual').checked

    if (planoIndividualEscolhido) {

        if (!somenteLetras.test(nomeAluno) || plano <= 0 || meses <= 0 || desconto <= 0) {
            window.alert('Insira os dados nos campos abaixo!')
        } else {
            var aulasIndividuais = plano * meses
            var aulasIndividuaisDesconto = (aulasIndividuais * desconto) / 100
            var aulasIndividuaisPrecoFinal = aulasIndividuais - aulasIndividuaisDesconto

            res.innerHTML = `<p>Opaaaa! E aí *${nomeAluno}* tudo bem?</p> 
        
            <p>Estou passando para te falar que o valor do *plano de ${meses} meses* com *${desconto}% de desconto* é *${formatarComoMoeda(aulasIndividuaisPrecoFinal)}*. Ou seja, você economiza *${formatarComoMoeda(aulasIndividuaisDesconto)}*.</p>
        
            <p>E aí bora fechar e começar sua saga do turco / inglês hoje mesmo? 😁</p>`
        }

    } else {

        if (!somenteLetras.test(nomeAluno) || plano <= 0 || meses <= 0) {
            window.alert('Insira os dados nos campos abaixo!')
        } else {
            var aulasDuplas = (plano * meses) / 2

            res.innerHTML = `<p>Opaaaa! E aí *${nomeAluno}* tudo bem?</p>
            
            <p>Estou passando para te falar que o valor do *plano de ${meses} meses* em dupla é *${formatarComoMoeda(aulasDuplas)}* para cada um.</p> 
            
            <p>E aí bora fechar e começar sua saga do turco / inglês hoje mesmo? 😁</p>`
        }
    }
}


// Copia a mensagem para o clipboard e abre a tela de compartilhamento em celulares

function compartilharOuCopiarResultado(seletor) {
    var elemento = document.querySelector(seletor)

    if (!elemento) {
        console.error("Elemento não encontrado:", seletor)
        return
    }

    var texto = elemento.innerText

    // Se o dispositivo suporta Web Share API (normalmente celulares)
    if (navigator.share) {
        navigator.share({
            title: "Mensagem de plano de aulas",
            text: texto,
        })
            .then(() => {
                mostrarToast("Compartilhamento finalizado!")
            })
            .catch((err) => {
                console.error("Erro ao compartilhar:", err)
                mostrarToast("Erro ao compartilhar!")
            });
    } else {
        // Fallback para copiar no desktop
        navigator.clipboard.writeText(texto)
            .then(() => {
                mostrarToast("Mensagem copiada!")
            })
            .catch((err) => {
                console.error("Erro ao copiar:", err)
                mostrarToast("Erro ao copiar!")
            });
    }
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
    var meses = document.getElementById('txtmeses')
    var desconto = document.getElementById('txtdesconto')
    var res = document.querySelector('div.res')

    nomeAluno.value = ''
    plano.value = ''
    meses.value = ''
    desconto.value = ''
    res.innerHTML = ''

    nomeAluno.focus()
}


// Trunca número para duas casas decimais sem arredondar (evita erro em valores monetários)

function truncarDoisDecimais(valor) {
    return Math.floor(valor * 100) / 100;
}


// Formata número como moeda brasileira (R$), truncando sem arredondar e garantindo duas casas decimais

function formatarComoMoeda(valor) {
    // Trunca usando sua função confiável
    let truncado = truncarDoisDecimais(valor);

    // Separa parte inteira e decimal
    let partes = truncado.toString().split('.');
    let parteInteira = partes[0];
    let parteDecimal = (partes[1] || '').padEnd(2, '0');

    // Adiciona separadores de milhar e vírgula decimal no estilo BR
    return 'R$ ' + parteInteira.replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ',' + parteDecimal;
}







