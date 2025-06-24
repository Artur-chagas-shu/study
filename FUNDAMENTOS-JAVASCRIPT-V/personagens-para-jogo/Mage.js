import { Character } from "./Character.js"
export class Mage extends Character {
    constructor(name,life,atk,def,mag){
        super(name,life,atk,def)
        this.mag = mag
    }

    atkTarget(target){
        const dmg = this.atk + this.mag - target.def
        target.life -= dmg
        console.log(`${this.name} causou ${dmg} de dano em ${target.name}`)
    }
    
    heal(target){
        target.life += this.mag * 2
        console.log(`${this.name} curou ${this.mag * 2} de vida em ${target.name}`)
    }
}
