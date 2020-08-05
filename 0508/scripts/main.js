// criei a função verificar
function verificar() {
    
    // dei valor a nac atraves da var txtn e com o comando .value leva valor
    var nac = window.document.querySelector(`#txtn`).value
    
    // na div #res irei que agora tem var res irei colocar resultado
    var res = window.document.querySelector(`#res`)
    
    // condição sem o else não funcionava e utilizei os placeholders para entender se nac tinha valor e qual o tipo
    if (nac == `tuga`) {
        res.innerHTML = `És português!`
    } else {
        res.innerHTML = `És estrangeiro! ${nac}` + typeof(nac)
    }
}