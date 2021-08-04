import {Spacecraft, Containership} from './base-ships'
import {MillenniumFalcon} from './starfighters'

import * as _ from 'lodash'
console.log(_.pad("Typescript Exemplos", 40, "="))

let ship = new Spacecraft('hiperdrive')
ship.jumpIntoHyperspace()


let falcon = new MillenniumFalcon()
falcon.jumpIntoHyperspace



let goodForTheJob = (ship: Containership) => ship.cargoContainers > 2
console.log(`É bom para o trabalho? ${goodForTheJob(falcon)? 'sim':'não'}`)