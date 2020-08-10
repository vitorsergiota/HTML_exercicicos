function calc() {
    var num = document.querySelector(`#num1`).value
    var res = document.querySelector(`#res`)
    var numero = Number(num)
    if ( numero % 2 == 0 ) {
        res.innerText = `É um numero par.`
    } else {
        res.innerText = `É um numero ímpar.`
    }
}
function calc2() {
    var mas = document.querySelector(`#massa`).value
    var alt = document.querySelector(`#altura`).value
    var res1 = document.querySelector(`#res1`)
    var mass = Number(mas)
    var altu = Number(alt)
    var imc = mass / ( altu ^ 2 )    
    if ( imc >= 18.5 && imc <= 25 ) {
        res1.innerText = `Tem um IMC de ${imc.toFixed(2)} e está no peso ideal!`
    } else {
        res1.innerText = `Tem um IMC de ${imc.toFixed(2)} e não se encontra no peso ideal.`
    }
}