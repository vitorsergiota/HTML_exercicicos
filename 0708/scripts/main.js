function calcular() {
    var lada = window.document.querySelector(`#tri01`)
    var ladb = window.document.querySelector(`#tri02`)
    var ladc = window.document.querySelector(`#tri03`)
    var res = window.document.querySelector(`#res`)
    var lado1 = Number(lada.value)
    var lado2 = Number(ladb.value)
    var lado3 = Number(ladc.value)
    if ( lado1 == lado2 && lado2 == lado3) {
        res.innerHTML = `Este triângulo é Equilatero`
    } else if ( lado1 != lado2 && lado2 != lado3 && lado3 != lado1) {
        res.innerHTML = `Este triângulo é Escaleno`
    } else {
        res.innerHTML = `Este triângulo é Isósceles`
    }
}