import { Character } from "./Character.js"

export class Thief extends Character {

    constructor(name, life, atk, def) {
        super(name, life, atk, def)
    }

    atkTarget (target){
        const dmg  =  (this.atk - target.def) * 2
        target.life -= dmg 
        console.log(`${this.name} causou ${dmg} de dano em ${target.name}`)
    }

}

