const Comment = require('./Comment')
class Post {
    constructor(author,  title, content ){
        this.author =  author
        this.title = title
        this.content = content
        this.comments = []
        this.createdAt = new Date()
    }

    addComment (author, text){
        
        this.comments.push(new Comment(author, text))
    }

}

module.exports = Post