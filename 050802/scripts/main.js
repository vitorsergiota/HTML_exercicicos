function iddvoto() {
    var idd = window.document.querySelector(`#iddvt`)
    var res = window.document.querySelector(`#res`)
    var idd2 = Number(idd.value)
    if ( idd2 < 16 ) {
        res.innerHTML = `O cidadão não pode votar`
    } else if ( idd2 >= 18 && idd2 < 65) {
        res.innerHTML = `O cidadão tem obrigatoriedade de votar`
    } else {
        res.innerHTML = `O cidadão tem a opção de votar`
    }

}