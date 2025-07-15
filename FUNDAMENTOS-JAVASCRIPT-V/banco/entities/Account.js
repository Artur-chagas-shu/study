
const Deposit = require('./Deposit')
const Loan = require('./Loan')



module.exports = class Account {
    #balance 
    constructor ( user ){
        this.owner = user
        this.#balance = 0
        this.deposits = []
        this.loans = []
        this.transfers = []
    }

    get balance(){
        return this.#balance
    }

    newDeposit( value ){
        this.#balance += value
        this.deposits.push(new Deposit(value))
    }
    
    newLoan( value, installments){
        this.#balance += value
        this.loans.push(new Loan(value, installments))
    }

    newTransfer(transfer){
        if(transfer.toUser === this.owner.email){
            this.#balance += transfer.amount
            this.transfers.push(transfer)
        }else if (transfer.fromUser.email === this.owner.email){
            this.#balance -= transfer.amount
            this.transfers.push(transfer)
        }
    }

}