class Comment {
    constructor(author,text){
        this.author = author
        this.text = text
        this.createdAt = new Date()
    }
}

module.exports = Comment

