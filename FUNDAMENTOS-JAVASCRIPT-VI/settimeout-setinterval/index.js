console.log('Program started !')
/*


const timeOutId = setTimeout(()=>{
    console.log('three seconds passed  since program started !')
}, 1000 * 3)


  learTimeout(timeOutId) */

  let seconds = 0

 const intervalId = setInterval(()=>{
    seconds  += 3
    console.log(`Se passaram ${seconds} segundos.`)
    if(seconds > 10){
        clearInterval(intervalId)
        console.log('Tempo esgotado! Encerrando o programa !')
    }
  },1000 * 3)
