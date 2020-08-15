function calcular() {
    var ini = document.querySelector(`#incio`)
    var fim = document.querySelector(`#fim`)
    var pas = document.querySelector(`#passo`)
    var res = document.querySelector(`#res`)
    var ini1 = Number(ini.value)
    var fim1 = Number(fim.value)
    var pas1 = Number(pas.value)
    var resul = ini1 + pas1
    for (c = 1; resul <= fim1; c++) {
        var res1 = resul + pas1
        resul = res1
        res.innerHTML = +` ${resul}`
    }
}