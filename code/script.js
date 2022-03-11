let fundoq = document.getElementById('int1')
let ligado = false

function onoff() {
    if (ligado == false)  {
        ligado = true
        fundoq.style.background = '#ffffff'
    } else if (ligado == true) {
        ligado = false
        fundoq.style.background = '#000000'
    }
}