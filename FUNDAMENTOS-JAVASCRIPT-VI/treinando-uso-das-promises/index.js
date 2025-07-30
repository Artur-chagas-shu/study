 function imcCalculator(weight,height){
   
    return new Promise((resolve, reject) => {
        
        if(typeof weight !== 'number' || typeof height !== 'number'){
            reject(new Error('weight and height must be numbers'));
            return;
        }
        const imc = weight / (height * height);
         resolve(imc);
    });
 }


 function imcTable(weight, height){

    console.log('Calculando IMC...')
    imcCalculator(weight, height).then((imcResult) => {
        console.log(`O seu IMC é ${imcResult.toFixed(2)}`)
      
        if(imcResult < 18.5 ){
            console.log('Status: Magreza')
        } else if(imcResult < 25){
            console.log('Status: Normal')
        } else if(imcResult < 30){
            console.log('Status: Sobrepeso')
        } else if(imcResult < 40){
            console.log('Status: Obesidade')
        } else {
            console.log('Status: Obesidade Grave')
        }
        
    }).catch((err) => {
        
        console.error(err)
    });
    console.log('working...')
}

 

imcTable(107, 1.65)