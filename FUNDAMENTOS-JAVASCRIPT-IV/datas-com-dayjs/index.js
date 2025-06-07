const dayjs = require('dayjs')


function birthdays (date) {
    const today = dayjs()
    const dayOfBirth = dayjs(date)
    const ageInYears = today.diff(dayOfBirth, 'year')
    const nextBirthdays = dayOfBirth.add(ageInYears + 1, 'year')

    const daysToNextBirthday = nextBirthdays.diff(today, 'day') + 1

  
    console.log(`Idade atual: ${ageInYears} anos`)
    console.log(`Proximo aniversário em ${daysToNextBirthday} dias`)
    console.log(`Data do proximo aniversario: ${nextBirthdays.format('DD/MM/YYYY')} `)
   
   

}


birthdays('2000/08/29')




