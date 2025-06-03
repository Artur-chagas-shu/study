
const average = (...numbers) => {
     const sum = numbers.reduce ((accum, num)=> accum + num, 0)
     return sum / numbers.length
}
console.log(`A media dos numeros é ${average(2,6,3,7,4)}`)


const  ponderadeAvarege = (...numbers) => {
  const sum = numbers.reduce ((accum, {n,p})=> accum + n * (p ?? 1), 0)
  const ponds = numbers.reduce ((accum, {p})=>  accum + (p ?? 1),0)
  return sum / ponds  
}

console.log(`A media ponderada é ${ponderadeAvarege({n:7, p: 2}, {n:9, p: 5}, {n:3, p:1})}`)


const median =  (...numbers)=> {
    const sorted = [...numbers].sort((a,b)=> a-b)
    const middle = Math.floor(sorted.length / 2)
    const secondMiddle =  middle - 1
    if (sorted.length % 2 === 0){
        return (sorted[middle] + sorted[secondMiddle]) / 2
    } else {
        return sorted[middle]
        
    }
    }
 
 

console.log(`A mediana dos numeros é ${median (2, 4, 5, 7, 42, 99)}`)
console.log(`A mediana dos numeros é ${median (15, 14, 8, 7, 3)}`)


const mode = (...numbers)=> {
    const quantities = numbers.map(num => [
        num,
        numbers.filter(n => num === n).length
    ] )
    quantities.sort((a,b)=> b[1] - a [1] )
    return quantities[0][0]
}


console.log(`Moda: ${mode(1, 1, 99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)