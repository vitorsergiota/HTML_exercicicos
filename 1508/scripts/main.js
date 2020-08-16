function calcular() {
    var ini = document.querySelector(`#incio`)
    var fim = document.querySelector(`#fim`)
    var pas = document.querySelector(`#passo`)
    var res = document.querySelector(`#res`)
    var ini1 = Number(ini.value)
    var fim1 = Number(fim.value)
    var pas1 = Number(pas.value)
    if (ini1 <= 0 || fim1 <= 0) {
        window.alert(`Por favor coloque um numero acima de 0!`)
    } else {
    var resul = ini1 + pas1
    res.innerHTML +=`${ini1}`
    for (c = 1; resul <= fim1; c++) {
        res.innerHTML +=`👉 ${resul}`
        var res1 = resul + pas1
        resul = res1
    }
    res.innerHTML +=` 🖕`
    }
}