function calcular() {
    let num = document.querySelector(`#txtn`)
    let tab = document.querySelector(`#seltab`)
    if (num.value.lenght == 0 ) {
        window.alert(`Por favor, digite um numero!`)
    } else {
        let n = Number(num.value)
        let c = 1
        while ( c >= 10 ) {
            let item = document.createElement(`option`)
            item.text = `${num} x ${c} = ${num*c}`

        }
    }
}