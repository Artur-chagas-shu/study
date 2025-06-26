class Wallet {
    #amount
    #username

    constructor(){
        this.#amount = 100.99 * 100
    }

    get amount(){
       return this.#amount / 100
    }
    
    
    set username(newUsername){
        if(typeof newUsername === 'string'){
        this.#username = newUsername
        }else {
        console.log('username must be of type string')
    }

    } 
    get username(){
        return this.#username
    }

}

const mywallet = new Wallet()
console.log(mywallet.amount)

mywallet.username = 'Artur'
mywallet.username += ' Chagas'

console.log(mywallet.username)

mywallet.username = 1
console.log(mywallet.username)