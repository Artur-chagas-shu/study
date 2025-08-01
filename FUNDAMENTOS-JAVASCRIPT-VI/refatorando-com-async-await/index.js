 async function  imcCalculator(weight,height){
        if(typeof weight !== 'number' || typeof height !== 'number'){
            return Promise.reject('weight and height must be numbers');
        }
        return  weight / (height * height);
       
 }

 
 async function imcTable(weight, height){
     try {
         console.log('working...')
         const imcResult = await imcCalculator(weight, height)
         console.log(`O seu IMC é ${imcResult.toFixed(2)}`)
         if(imcResult < 18.5 ) console.log('Status: Magreza')
         else if(imcResult < 25) console.log('Status: Normal')
         else if(imcResult < 30) console.log('Status: Sobrepeso')  
         else if(imcResult < 40) console.log('Status: Obesidade')
         else  console.log('Status: Obesidade Grave')
        
     } catch (error) {
        console.log(error)  
     }
    
}
 

 

imcTable(107, 1.65)
imcTable(48, 1.70)
imcTable(71, 'texto')
imcTable(120, 1.80)