import * as ex from "excalibur";
import {Resources} from "./resources.js";
import {Actor, Vector} from "excalibur";
import {player} from "./player.js";


export class soldier extends Actor {
    constructor() {
        // collision box!
        super({ width: Resources.Soldier.width, height: Resources.Soldier.height })
    }


    onInitialize(engine) {

        const soldier = Resources.Soldier.toSprite()
        this.enableCapturePointer = true;
        this.pointer.useGraphicsBounds = true;
        this.graphics.use(Resources.Soldier.toSprite());
        this.hand = new ex.Random()
        let x = this.hand.integer(2050, 2100)
        let y = this.hand.integer(5, 670)
        this.pos = new Vector(x, y)
        this.vel = new Vector(Math.random() * 2 - 40, 0);
        this.on('collisionstart', (event) => this.hitSomething(event))


    }
    hitSomething(event){
        if (event.other instanceof player) {
            console.log('hit enemy')
            event.other.kill()
        }
    }
}
