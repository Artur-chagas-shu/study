const input = document.getElementById('input');

document.getElementById('value').addEventListener('click', function () {
    input.value =  'Ola mundo!';


    console.log(input.value )
    console.log( input.getAttribute('value'))
    
})

document.getElementById('type').addEventListener('click', function () {
    //input.type =  input.type !== 'date'? 'date': 'text';
    input.setAttribute('type', 'radio')
})

document.getElementById('placeholder').addEventListener('click', function () {
    input.placeholder = 'Digite algo...'
})

document.getElementById('disable').addEventListener('click', function () {
   input.setAttribute('disabled', !input.disabled)
})

document.getElementById('data').addEventListener('click', function () {
    const data = input.dataset.something
    console.log(`O valor do atributo data-something é: ${data} `)
    input.dataset.something = 'Outro valor'
    console.log(`O valor do atributo data-something agora é: ${input.dataset.something} `)


})

