function calcular() {
    var ini = document.querySelector(`#incio`)
    var fim1 = document.querySelector(`#fim`)
    var pas1 = document.querySelector(`#passo`)
    var res = document.querySelector(`#res`)
    var inicio = Number(ini.value)
    var fim = Number(fim1.value)
    var pas = Number(pas1.value)
    if (inicio == 0 || fim == 0 || pas == 0) {
        window.alert(`Por favor faltam dados!`)
        res.innerHTML = `Insira dados.`
    } else {
        if ( inicio < fim) {
            for ( let c = inicio; c <= fim; c += pas) {
            res.innerHTML += `👉 ${c}`
        }
        } else {
            for ( let c = inicio; c >= fim; c -= pas) {
                res.innerHTML += `👉 ${c}`
            }            
        }
        res.innerHTML += `💩VERY NICE💩`
    }
    }