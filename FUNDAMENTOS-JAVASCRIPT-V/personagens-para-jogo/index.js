const Mage = require('./Mage.js')
const Warrior = require('./Warrior.js')
const Thief = require('./Thief.js')

const arthur = new Mage('Arthur',90 , 4, 2, 14)
const beatrice  =  new Thief('Beatrice', 140, 22, 8,)
const cain = new Warrior('Cain', 200, 14, 12, 4)

console.table({arthur, beatrice, cain})
cain.SwitchStance()
arthur.atkTarget(cain)
beatrice.atkTarget(arthur)

console.table({arthur, beatrice, cain})

cain.SwitchStance()
cain.atkTarget(arthur)
arthur.heal(arthur)
beatrice.atkTarget(cain)

console.table({arthur, beatrice, cain})
