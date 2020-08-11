function validar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector(`#txtano`)
    var res = document.querySelector(`div#res`)
    if (fano.value.length == 0 || Number(fano.value) > ano ) {
        window.alert(`[ERRO] Verifique os dados e tente novamente`)
    }    else {
            var fsex = document.getElementsByName(`radsex`)
            var idade = ano - Number(fano.value)
            var genero = ` `
            var img = document.createElement(`img`)
            img.setAttribute(`id`, `foto`)
           
        } if ( fsex [0].checked ) {
                genero = `Homem`
                if ( idade >= 0 && idade <=10 ) {
                // criança
                img.setAttribute(`src`, `imagens/menino.png`)
                } else if ( idade >10 && idade <=18 ) {
                    // teenager 
                    img.setAttribute(`src`, `imagens/jovemh.png`)
                } else if ( idade >18 && idade <=60 ) {
                    // adulto
                    img.setAttribute(`src`, `imagens/homem.png`)
                } else {
                    // restante faixa idoso
                    img.setAttribute(`src`, `imagens/idoso.png`)
                }
            } else if ( fsex [1].checked ) {
                genero = `Mulher`
                }  if ( idade >= 0 && idade <= 10 ) {
                // criança menina
                img.setAttribute(`src`, `imagens/menina.png`)
                } else if ( idade >10 && idade <=18 ) {
                    // teenager 
                    img.setAttribute(`src`, `imagens/jovemm.png`)
                } else if ( idade >18 && idade <= 60 ) {
                    // mulher
                    img.setAttribute(`src`, `imagens/mulher.png`)
                } else {
                    // restante idosa
                    img.setAttribute(`src`, `imagens/idosa.png`)
                }
 
            res.style.textAlign = `center`
            res.innerText = `Calculamos ${genero} com ${idade} anos.` 
            res.appendChild(img)
}