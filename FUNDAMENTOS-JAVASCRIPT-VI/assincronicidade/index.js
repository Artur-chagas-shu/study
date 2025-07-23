function step02(){
    console.log('Passo 02')
}

console.log('Passo 01')
step02()
console.log('Passo 03')


console.log('passo 04')
setTimeout(()=>{
    console.log('Passo 05')
},1000 * 2)

console.log('passo 06')