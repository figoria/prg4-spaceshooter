import {Actor, GraphicsGroup, Input, Vector} from "excalibur";
import {Resources} from "./resources.js";
import {enemy} from "./enemy.js";
import {soldier} from "./soldier.js";
import {jeep} from "./jeep.js";
import {steen} from "./stone.js";
import {HealthBar} from "./healthbar.js";
import {Over} from "./gameover.js";
import {Sword} from "./sword.js";


export class player extends Actor {

    weapon

    constructor() {
        // collision box!
        super({ width: Resources.Tank.width, height: Resources.Tank.height })
        this.weapon = new Sword()
    }

    onInitialize(engine) {


        const player = Resources.TankE.toSprite()
            this.enableCapturePointer = true;
            this.pointer.useGraphicsBounds = true;
            this.graphics.use(Resources.Tank.toSprite());
            this.pos = new Vector(100, 100);
            let sc = Math.random() + 0.4;
    }
    attack(){
        this.weapon.attack()
    }

    onPreUpdate(engine) {
        let xspeed = 0
        let yspeed = 0

        let kb = engine.input.keyboard
        if (kb.isHeld(Input.Keys.W) || kb.isHeld(Input.Keys.Up)) {
            console.log('w')
            yspeed= -200
        }
        if (kb.isHeld(Input.Keys.S) || kb.isHeld(Input.Keys.Up)) {
            console.log('s')
            yspeed= 200
        }

        if (kb.isHeld(Input.Keys.D) || kb.isHeld(Input.Keys.Right)) {
            console.log('d')
            xspeed= 200
        }
        if (kb.isHeld(Input.Keys.A) || kb.isHeld(Input.Keys.Left)) {
            console.log('a')
            xspeed= -200
        }
        this.vel = new Vector(xspeed, yspeed)



    }



}

