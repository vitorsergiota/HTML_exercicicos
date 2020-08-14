function verificar() {
    var raca = document.getElementsByName(`race`)
    var res = document.querySelector(`#res`)
    if (raca[0].checked) {
        res.innerHTML = `Tu és um Alienigena!`
    } else if (raca[1].checked) {
        res.innerHTML = `Seu Humano mizarento!`
    } else {
        res.innerHTML = `Quem és tu???`
    }
}
