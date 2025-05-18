function sum (...numbers){
    return numbers.reduce ((accum, num)=> {
        return accum + num
    },0)

}

console.log(sum(1,1))
console.log(sum(2,2,2,2,2,2,))
console.log(sum(32,5,74,9,1,7,90))