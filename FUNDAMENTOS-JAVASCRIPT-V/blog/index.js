const Author = require('./Author.js')

const artur = new Author('Artur')

const post = artur.createPost (' A vida dos gatos,','Como gatos podem ser tao bonitos, post para descutirmos sobre isso')

post.addComment ('Artur', 'Gatos sao muito bonitos')

post.addComment ('Artur', 'Gatos sao muito bons')

post.addComment('Sushi', 'eu sou um gato e concordo')

console.log(artur.posts)

console.log(post)

