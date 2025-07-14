module.exports = class Poster extends Product {
    constructor(name, description, height, width,price, instock = 0) {
        super(name,description,price,instock)
        this.height = height
        this.width = width
    }
}