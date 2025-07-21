function validadeEmail(email){
    if(!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)){
        const err = new Error('Email Invalido !')
        err.input = 'email'
        throw err
    }
}



const userInputs = {
    name: document.querySelector('#name'),
    email: document.querySelector('#email'),
    password: document.querySelector('#password')
}