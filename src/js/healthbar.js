import { Actor, Vector, Color, Sprite, Rectangle, clamp } from 'excalibur'

export class HealthBar extends Actor {

    healthrectangle

    constructor() {
        super()
        this.healthrectangle = new Rectangle({
            width: 165,
            height: 30,
            color: Color.Red,
        })
        this.anchor = new Vector(0, 0)
        this.graphics.use(this.healthrectangle)
        this.pos = new Vector(850, 10)
    }

    resetHealth(){
        this.timerectangle.width = 165
    }

    loseHealth(damage) {
        this.healthrectangle.width = this.healthrectangle.width - damage

        if (this.healthrectangle.width <= 0) {
            console.log("game over")
        }
    }
}