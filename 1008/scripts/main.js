function carregar() {
var msg = document.querySelector(`#msg`)
var img = document.querySelector(`#imagem`)
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Neste momento são ${hora} horas.`
if ( hora >5 && hora <13 ) {
    img.src = `imagens/manha.png`
    document.body.style.background =`#ccc7a7`
} else if ( hora >13 && hora <20 ) {
    img.src = `imagens/tarde.png`
    document.body.style.background = `#bca200`
} else {
    img.src = `imagens/noite.png`
    document.body.style.background = `#3e2d2b`
}
}