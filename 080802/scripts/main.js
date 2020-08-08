function calcularm() {
    var di1 = document.querySelector(`#disc1`).value
    var di2 = document.querySelector(`#disc2`).value
    var di3 = document.querySelector(`#disc3`).value
    var di4 = document.querySelector(`#disc4`).value
    var di5 = document.querySelector(`#disc5`).value
    var no1 = document.querySelector(`#nota1`).value
    var no2 = document.querySelector(`#nota2`).value
    var no3 = document.querySelector(`#nota3`).value
    var no4 = document.querySelector(`#nota4`).value
    var no5 = document.querySelector(`#nota5`).value
    var res = document.querySelector(`#res`)
    var n1 = Number(no1)
    var n2 = Number(no2)
    var n3 = Number(no3)
    var n4 = Number(no4)
    var n5 = Number(no5)
    var media = ((n1 + n2 + n3 + n4 + n5) / 5)
    res.innerHTML = `Nas disciplinas de ${di1}, ${di2}, ${di3}, ${di4}, ${di5} tiveste uma media de ${media}.`
}
