function tabuada() {
    var num = document.querySelector(`#tab`)
    var res = document.querySelector(`#res`)
    var nume = Number(num.value)
    for (var c = 1; c <= 10; c++){
        var conta = c * nume
        res.innerHTML += `${c} X ${nume} = ${conta} <br> `
    }
}