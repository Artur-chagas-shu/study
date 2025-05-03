
function soma (){ 
    const num1 = parseInt(document.getElementById('number1').value) 
    const num2 = parseInt(document.getElementById('number2').value) 
    const result = num1 + num2

    document.getElementById('result').innerText = "Resultado da soma entre os 2 numeros: " + result ;
}

function subtrair (){
    const num1 = parseInt(document.getElementById('number1').value) 
    const num2 = parseInt(document.getElementById('number2').value) 
    const result = num1 - num2

    document.getElementById('result').innerText = "Resultado da subtracao entre os 2 numeros: " + result ;
}

function multiplicar (){
    const num1 = parseInt(document.getElementById('number1').value) 
    const num2 = parseInt(document.getElementById('number2').value) 
    const result = num1 * num2

    document.getElementById('result').innerText = "Resultado da multiplicacao entre os 2 numeros: " + result ;
}

function dividir (){
    const num1 = parseInt(document.getElementById('number1').value) 
    const num2 = parseInt(document.getElementById('number2').value) 
    const result = num1 / num2

    document.getElementById('result').innerText = "Resultado da divisao entre os 2 numeros: " + result ;
}
   

const button = document.getElementById('soma')
button.addEventListener('click', soma)

const button2 = document.getElementById('subtrair')
button2.addEventListener('click', subtrair)

const button3 = document.getElementById('multiplicar')
button3.addEventListener('click', multiplicar)

const button4 = document.getElementById('dividir')
button4.addEventListener('click', dividir)