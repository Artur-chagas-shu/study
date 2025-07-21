

function validateEmail(email){
    const emailRegex = /^\w{2,}@[a-zA-Z0-9]{2,}\.[a-zA-Z-]{2,}$/
    
    if(emailRegex.test(email)){

    }else {
        throw new Error("Email inválido")
    }
}

function validadePassword(passWord){
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/

    if(passwordRegex.test(passWord)){
        
    }else {
        throw new Error("Senha inválida")
    }

}


const button = document.getElementById('submit')
button.addEventListener('click', (event) => {
    event.preventDefault()
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const name = document.getElementById('name').value

    try {
        validateEmail(email)
        validadePassword(password)
    }
    catch(error){
        alert(error.message)
    }finally {
        console.table({name, email, password})
    }
})

    
