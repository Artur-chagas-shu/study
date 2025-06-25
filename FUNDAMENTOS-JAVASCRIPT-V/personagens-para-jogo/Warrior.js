const Character = require('./Character')
module.exports = class Warrior extends Character {
    constructor(name, life , atk , def , shield  ) 
    {
        super(name, life, atk, def)
        this.shield = shield
        this.stance = 'attacker'
    }

    SwitchStance (){
        if (this.stance === 'defender'){
            console.log('Mudando para modo de ataque')
            this.def +=  this.shield
            this.stance = 'attacker'
        } else {
            console.log('Mudando para modo de defesa')
             this.def  -=  this.shield
            this.stance = 'defender'
        }
    }

    atkTarget(target){
        if(this.stance === 'attacker'){
           super.atkTarget(target)
            
        }else {
            console.log(`Impossivel atacar, atualmente esta no modo de defesa`)
        }
    }


}

const warrior1 = new Warrior('Gandalf', 100, 10, 15, 20, 'defender')
const warrior2 = new Warrior('Gimli', 100, 10, 15, 20, 'defender')
console.log(warrior1)
console.log(warrior2)
warrior1.atkTarget(warrior2)
warrior1.SwitchPosition()
warrior2.SwitchPosition()
warrior1.atkTarget(warrior2)