

module.exports = class Transfer {
    constructor( user, target,  amount,  ){
        this.user = user
        this.target = target
        this.amount = amount
        this.date = new Date()
    }
}