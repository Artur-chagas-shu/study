const User = require("./entities/User")
const Account = require("./entities/Account")
const Deposit = require("./entities/Deposit")
const Loan = require("./entities/Loan")
const Transfer = require("./entities/Transfer")





module.exports = class App {
    static #users = []
    
   static findUser(email){
        const user = this.#users.find(user => user.email === email)
        return user ?? null
    }

    static createUser (email, fullName){
        const userExists = App.findUser(email)
        if(!userExists ){
            this.#users.push(new User(fullName, email))   
        }
    }

    static deposit (email, value) {
        const user = App.findUser(email)
        if(user){
            user.account.newDeposit(value)
        }
    }

    static transfer(fromUserEmail, toUserEmail, value){
        const fromUser = App.findUser(fromUserEmail)
        const toUser = App.findUser(toUserEmail)
        if(fromUser && toUser){
            const transfer = new Transfer(fromUser, toUser, value)
            fromUser.account.newTransfer(transfer)
            toUser.account.newTransfer(transfer)
        }
    }

    static takeLoan(email,value, numberOfInstallments){
        const user = App.findUser(email)
        if(user){
            user.account.newLoan(value, numberOfInstallments)
        }
    }

    static changeLoanFee(newFeePercentage){
        Loan.fee = newFeePercentage
    }      

}