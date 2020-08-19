function clicar() {
    var ima = document.getElementById(`imo`)
    ima.src = `images/electra.jpg`
}
function voltar() {
    var ima = document.getElementById(`imo`)
    ima.src = `images/gray.jpg`
}
function clica() {
    var img = document.getElementById(`imo`)
    img.src = `images/electra.jpg`
}
function teste() {
    let imgteste = document.getElementById(`teste`)
    let meusrc = imgteste.getAttribute(`src`)
    if (meusrc === `images/blue.jpg`) {
        imgteste.setAttribute (`src`, `images/black.jpg`)
    } else {
        imgteste.setAttribute (`src`, `images/blue.jpg`)
    }
}