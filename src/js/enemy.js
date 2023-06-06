import * as ex from "excalibur";
import {Resources} from "./resources.js";
import {Actor, Vector} from "excalibur";
import {player} from "./player.js";
import {steen} from "./stone.js";


export class enemy extends Actor {
    constructor() {
        // collision box!
        super({ width: Resources.TankE.width, height: Resources.TankE.height })
    }


    onInitialize(engine) {

        const tankE = Resources.TankE.toSprite()
        this.enableCapturePointer = true;
        this.pointer.useGraphicsBounds = true;
        this.graphics.use(Resources.TankE.toSprite());
        this.rand = new ex.Random()
        let x = this.rand.integer(2100, 2150)
        let y = this.rand.integer(5, 670)
        this.pos = new Vector(x, y)
        this.vel = new Vector(Math.random() * 2 - 80, 0);
        this.on('collisionstart', (event) => this.hitSomething(event))

    }

    hitSomething(event){
        if (event.other instanceof player, steen) {
            console.log('hit enemy')
            event.other.kill()
        }
    }



}
