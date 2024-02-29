
function trocarCor(){

    const idElemento = document.querySelector(`#elementoCor`).value
    const cor = document.querySelector("#corFundo").value
    const elemento = document.querySelector(`#${idElemento}`)
    elemento.className = cor
}