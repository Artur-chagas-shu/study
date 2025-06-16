class Product {
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addToStock =  (quantity)=>{
        this.inStock += quantity
    }

    calculateDiscount =  (percentage)=> {
        const discount = this.price * (percentage / 100)
        return `O preço do produto com um desconto de ${percentage}% é ${this.price - discount}`
    }
}

const product1 = new Product('Sapato','Sapato de corrida puma', 80)

console.log(product1)

product1.addToStock(10)

console.log(product1)

product1.addToStock(10)

console.log(product1)

console.log(product1.calculateDiscount(15))

