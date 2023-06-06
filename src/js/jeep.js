import * as ex from "excalibur";
import {Resources} from "./resources.js";
import {Actor, Vector} from "excalibur";
import {player} from "./player.js";
import {steen} from "./stone.js";


export class jeep extends Actor {
    constructor() {
        // collision box!
        super({ width: Resources.Jeep.width, height: Resources.Jeep.height })
    }


    onInitialize(engine) {

        const jeep = Resources.Jeep.toSprite()
        this.enableCapturePointer = true;
        this.pointer.useGraphicsBounds = true;
        this.graphics.use(Resources.Jeep.toSprite());
        this.sand = new ex.Random()
        let x = this.sand.integer(2100, 2150)
        let y = this.sand.integer(5, 670)
        this.pos = new Vector(x, y)
        this.vel = new Vector(Math.random() * 20 - 100, 0);
        this.on('collisionstart', (event) => this.hitSomething(event))

    }
    hitSomething(event){
        if (event.other instanceof player,steen) {
            console.log('hit enemy')
            event.other.kill()
        }
    }
}