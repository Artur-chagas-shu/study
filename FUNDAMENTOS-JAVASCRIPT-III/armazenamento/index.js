document.getElementById('sessionBtn').addEventListener('click', function () {
    const input = document.getElementById('session');
    sessionStorage.setItem('info',input.value)
    input.value = ''
})

document.getElementById('readSesssion').addEventListener('click', function () {
    const info = sessionStorage.getItem('info')
    alert('A informação Salva foi: ' + info)
})

document.getElementById('localBtn').addEventListener('click', function () {
    const input = document.getElementById('local');
   localStorage.setItem('text',input.value)
   input.value = ''
})

document.getElementById('readLocal').addEventListener('click', function () {
    const text = localStorage.getItem('text')
    alert('A informação Salva foi: ' + text)
})

document.getElementById('cookieBtn').addEventListener('click', function () {
    const input = document.getElementById('cookie');
    const cookie = 'info=' + input.value + ';'
    const expiration = 'expires=' + new Date(2025,9,9)+ ';'
    const path = 'path=/;'
    document.cookie = cookie + expiration + path
    input.value = ''
    console.log(document.cookie)
})

document.getElementById('cookie2Btn').addEventListener('click', function () {
    const input = document.getElementById('cookie2');
    const cookie = 'text=' + input.value + ';'
    const expiration = 'expires=' + new Date(2025, 8, 9)+ ';'
    const path = 'path=/;'
    document.cookie = cookie + expiration + path
    input.value = ''
    console.log(document.cookie)
})