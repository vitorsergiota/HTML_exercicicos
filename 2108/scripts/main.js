function muda1() {
    // dar ao elemento var imagem1
    let imagem1 = document.getElementById(`img1`)
    // dar a variavel im1Src os atributos do elemento neste caso src
    let img1Src = imagem1.getAttribute(`src`)
    // verificar se src é a original e no caso trocar
    if (img1Src === `imagens/blue.jpg`) {
        imagem1.setAttribute(`src`, `imagens/red.jpg`)
    // neste caso voltar a original se ja tiver sido mudada
    } else {
        imagem1.setAttribute(`src`, `imagens/blue.jpg`)
    }
}
function muda2() {
    let imagem2 = document.getElementById(`img2`)
    let img2Src = imagem2.getAttribute(`src`)
    if (img2Src === `imagens/red.jpg`) {
        imagem2.setAttribute(`src`, `imagens/blue.jpg`)
    } else {
        imagem2.setAttribute(`src`, `imagens/red.jpg`)
    }
}