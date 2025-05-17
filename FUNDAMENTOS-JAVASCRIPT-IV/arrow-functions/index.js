function normalSum (a,b){
    return a + b
}

console.log(`Soma normal: ${normalSum(2,2)}`)

const anonymousSum = function (a,b){
    return a + b
}

console.log(`Soma anõnima: ${anonymousSum(2,2)}`)   

const arrowSum = (a,b) => {
    return a + b
}

console.log(`Soma arrow: ${arrowSum(2,2)}`)