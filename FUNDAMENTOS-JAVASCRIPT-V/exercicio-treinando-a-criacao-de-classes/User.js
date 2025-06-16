class User {
    constructor (fullName, email, password){
        this.fullName = fullName
        this.email = email
        this.password = password
    }

    login(   email, password   ){
        if(password === this.password && email === this.email){
            console.log('Login realizado com sucesso!')
        }else {
            console.log('Falha ao fazer o login! Email ou senha incorretos!')
        }
    }
}

const artur = new User ('Artur', 'artur@artur', '123456')

artur.login( 'artur@artur', '123456' )