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
function troca1() {
    let imgteste = document.getElementById(`im1`)
    let meusrc = imgteste.getAttribute(`src`)
    if (meusrc === `images/blue.jpg`) {
        imgteste.setAttribute (`src`, `images/black.jpg`)
    } else {
        imgteste.setAttribute (`src`, `images/blue.jpg`)
    }
}
function troca2() {
    let img2 = document.getElementById(`im2`)
    let meusrc2 = img2.getAttribute(`src`)
    if (meusrc2 === `images/black.jpg`) {
        img2.setAttribute (`src`, `images/blue.jpg`)
    } else {
        img2.setAttribute (`src`, `images/black.jpg`)
    }
}
function troca3() {
    let img3 = document.getElementById(`im3`)
    let meusrc3 = img3.getAttribute(`src`)
    if (meusrc3 === `images/red.jpg`) {
        img3.setAttribute (`src`, `images/blue.jpg`)
    } else {
        img3.setAttribute (`src`, `images/red.jpg`)
    }
}