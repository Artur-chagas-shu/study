const Installment = require('./Installment')

module.exports = class Loan {
    static #fee = 1.05

    constructor( value, installments, ){
        this.value = value
        this.installments = []
        for(let i = 1; i <= installments; i++){
            this.installments.push(new Installment((value * Loan.#fee)/ installments, i))
        }
        this.date = new Date()
    
    }
    
    static get fee() {
        return this.#fee
    }

    static set fee(newFeePercentage) {
        this.#fee = 1 + (newFeePercentage/100)
    
    }
}