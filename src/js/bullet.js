import { Actor, Engine, Vector } from "excalibur"
import { Resources } from './resources'
import * as ex from "excalibur";
import {enemy} from "./enemy.js";
import {soldier} from "./soldier.js";
import {jeep} from "./jeep.js";
import {player} from "./player.js";
import {steen} from "./stone.js";
import {UI} from "./score.js";


export class bullet extends Actor {
    constructor(x,y) {
        super({width: 20, height: 20})
        this.pos= new Vector(x, y)
    }

    onInitialize(engine) {

        this.graphics.use(Resources.Bullet.toSprite())
        this.vel= new Vector(500 , 0)
        this.on('collisionstart', (event) => this.hitSomething(event,engine))


    }

    hitSomething(event, engine){
        if (event.other instanceof enemy,jeep, soldier) {
            console.log('hit enemy')
            event.other.kill()
            this.scene.ui.updateScore()
        }
    }

}