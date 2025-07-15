

module.exports = class Transfer {
    constructor( fromUser, toUser,  amount,  ){
        this.fromUser = fromUser
        this.toUser = toUser
        this.amount = amount
        this.date = new Date()
    }
}