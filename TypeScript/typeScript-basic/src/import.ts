import { Spaceship } from './export'
import * as _ from "lodash"

interface BattleSpaceship extends Spaceship {
    weapons: number
}

let xwing: BattleSpaceship = {
    name: 'X-Wing',
    pilot: 'Luke Skywalker',
    spped: 50,
    weapons: 4
}



console.log(_.camelCase(xwing.pilot))