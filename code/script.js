/* Variaveis Lampada */
let fundoq = document.getElementById('int1')
let statusl = document.getElementById('status')
let botao = document.getElementById('botaol')
let res = document.getElementById('cliques')
let ligado = false
let cliques = 0
/* --------------------- */
/* Calculadora */
let n1 = document.getElementById('txtn1')
let n2 = document.getElementById('txtn2')
let calculo = document.getElementById('res')
/*----------------------------------------- */
/* Função da Lampada */
function onoff() {
    cliques += 1
    if (ligado == false)  {
        ligado = true;
        statusl.innerHTML = 'ACENDEU';
        botao.value = 'Desligar';
        fundoq.style.background = '#ffffff';

    } else if (ligado == true) {
        ligado = false;
        fundoq.style.background = '#000000';
        botao.value = 'Ligar';
        statusl.innerHTML = 'APAGOU';
    }
    if (cliques == 10) {
        window.alert('Ta marolando kkkkk já clicou 10x');
    } else if (cliques == 50) {
        window.alert('Coe, kkkkjs já clicou 50x mano, para');
    } else if (cliques == 100) {
        window.alert('Na moral, vou te tirar do site kkkkk 100 VEZES JÁ!')
    }
}

/* Função da Calculadora */
function finalizar() {
    let num1 = Number(n1.value)
    let num2 = Number(n2.value)
    calculo.innerHTML = `${num1} + ${num2} é igual á = ${num1 + num2}`
}