function tabuada() {
    let num = document.querySelector(`#txtn`)
    let tab = document.querySelector(`#seltab`)
    // Verifica se o numero é igual a 0 e se dá erro
    if (num.value.lenght == 0 ) {
        window.alert(`Por favor, digite um numero!`)
    //Neste caso faz o calculo
    } else {
        let n = Number(num.value)
        let c = 1
        while ( c <= 10 ) {
            let item = document.createElement(`option`)
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}