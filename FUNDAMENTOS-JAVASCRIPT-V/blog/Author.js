const Post = require('./Post.js')

class Author {
    constructor(name){
        this.name = name
        this.posts = []
    }

    createPost (  title, content){
        const post = new Post( this,title, content, )
        this.posts.push(post)
        return  post
    }
}

module.exports = Author