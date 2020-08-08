function calcularv() {
    var velu = document.querySelector(`#vel1`).value
    var res1 = document.querySelector(`#res1`)
    var vel = Number(velu)
    if ( vel >= 50 ){
        res1.innerHTML = `Está em excesso de velocidade!. Vai ser multado. ${vel}` + typeof(vel)
    } else {
        res1.innerHTML = `Está dentro do limite de velocidade. Pode proseguir. ${vel}` + typeof(vel)    }
}

function resposta() {
    var resp = document.querySelector(`#cap`).value
    var res2 = document.querySelector(`#res2`)
    if ( resp == `Lisboa`){
        res2.innerHTML = `Muito bem! Acertaste na resposta. Ganhas-te um fabuloso conj. de chá chinês!. ${resp}` + typeof(resp)
    } else {
        res2.innerHTML = `Resposta errada!! ${resp}` + typeof(resp)
    }
}