import {enemy} from "./enemy.js";
import {soldier} from "./soldier.js";
import {jeep} from "./jeep.js";
import {Resources} from "./resources.js";
import {Actor} from "excalibur";


export class Sword extends Actor {
    constructor() {
        // collision box!
        super({ width: Resources.Sword.width, height: Resources.Sword.height })
    }



attack(){

    console.log('zwaard slag')


}
}