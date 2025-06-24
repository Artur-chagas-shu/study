import { Character } from "./Character.js"
export class Warrior extends Character {
    constructor(name, life , atk , def , shield , positionMode) 
    {
        super(name, life, atk, def)
        this.shield = shield
        this.positionMode = positionMode
    }

    SwitchPosition (){
        if (this.positionMode === 'defender'){
            console.log('Mudando para modo de ataque')
            this.def = this.def + this.shield
            this.positionMode = 'attacker'
        } else {
            console.log('Mudando para modo de defesa')
             this.def = this.def - this.shield
            this.positionMode = 'defender'
        }
    }

    atkTarget(target){
        if(this.positionMode === 'attacker'){
            const dmg = this.atk - target.def
            target.life -= dmg
            console.log(`${this.name} causou ${dmg} de dano em ${target.name}`)
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