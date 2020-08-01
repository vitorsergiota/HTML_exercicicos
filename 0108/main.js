function calcular() {
    var txtv = window.document.getElementById(`txtvel`)
    var res = window.document.getElementById(`res`)
    var vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade atual é de ${vel} KM/H</p>`
    if (vel > 65) {
        res.innerHTML += `<p>Vocé vai ser <strong>multado</strong> por excesso de velocidade</p>`
    }
    res.innerHTML +=`<p>Diriga com cuidado!</p>`


}