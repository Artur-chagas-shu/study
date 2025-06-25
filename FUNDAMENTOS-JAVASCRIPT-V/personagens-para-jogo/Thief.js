const Character = require('./Character')

module.exports = class Thief extends Character {


    atkTarget (target){
        const dmg  =  (this.atk - target.def) * 2
        target.life -= dmg 
        console.log(`${this.name} causou ${dmg} de dano em ${target.name}`)
    }

}

