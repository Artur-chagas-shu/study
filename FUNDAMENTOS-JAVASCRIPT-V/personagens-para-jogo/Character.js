export class Character  {
    constructor (name, life, atk, def  ){
        this.name = name
        this.life = life
        this.atk = atk
        this.def = def
    }
    atkTarget(target){
        const dmg = this.atk - target.def
        target.life -= dmg
        console.log(this.name + ' causou ' + dmg + ' de dano em ' + target.name)

        
    }
}



