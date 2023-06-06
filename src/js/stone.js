import { Actor, Engine, Vector } from "excalibur"
import { Resources } from './resources'
import * as ex from "excalibur";
import {player} from "./player.js";
import {enemy} from "./enemy.js";
import {soldier} from "./soldier.js";
import {jeep} from "./jeep.js";

export class steen extends Actor {
    constructor(x, y) {
        super({x,y,width:Resources.Steen.width, height:Resources.Steen.height})
    }
    onInitialize(engine) {
        this.graphics.use(Resources.Steen.toSprite())
        this.sand = new ex.Random()
        let x = this.sand.integer(200, 500)
        let y = this.sand.integer(5, 670)
        this.pos = new Vector(x, y)
        this.on('exitviewport', () => this.resetPosition())
        this.on('collisionstart', (event) => this.hitSomething(event, engine))
    }

    hitSomething(event, engine){
        if (event.other instanceof enemy, soldier, jeep) {
            console.log('hit iets')
            event.other.kill()

        }
    }




}