const App = require("./App")

App.createUser("sushi@email.com", "sushi cat")
App.createUser("sukita@email.com", "sukita dog")
App.createUser("kali@email.com", "kali cat")


App.deposit("sushi@email.com", 100)

App.transfer("sushi@email.com", "sukita@email.com", 20)

App.changeLoanFee(10)
App.takeLoan("kali@email.com", 2000, 24)

console.log(App.findUser("sushi@email.com"))
console.log(App.findUser("sushi@email.com").account)
console.log(App.findUser("sukita@email.com"))
console.log(App.findUser("sukita@email.com").account)
console.log(App.findUser("kali@email.com"))
console.log(App.findUser("kali@email.com").account)
console.log(App.findUser("kali@email.com").account.loans[0].installments)