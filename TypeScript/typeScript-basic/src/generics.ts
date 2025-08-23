function first( array ){
    return array[0]
}

function last<ArrayType>( array:ArrayType[] ):ArrayType | undefined {
    return array[array.length - 1]
}


const pilots = [1,2,3,4,5]//['Luke', 'Biggs', 'Wedge', 'Han', 'Lando']

const firsPilot = first(pilots)
const lastPilot = last(pilots)

console.log(firsPilot)
console.log(lastPilot)