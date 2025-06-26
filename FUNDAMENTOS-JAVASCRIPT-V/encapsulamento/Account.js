class Account {
    #password
    #balance = 0
    constructor (user){
        this.email = user.email
        this.#password = user.password
        this.#balance = 0
    }

    getBalance (email, password){ 
        if(this.#authenticate(email, password)){
        return this.#balance
    }else {
        return null
    }  
  }

    #authenticate(email, password){
        return this.email === email && this.#password === password
    }


}

const user = {
    email: 'artur@artur',
    password: '123456',
}

myAccount = new Account(user)
console.log(myAccount)


console.log(myAccount)