import { Actor, Engine, Vector, Sprite } from "excalibur"
import { Resources } from './resources'

export class Chicken extends Actor {
    sprite
    constructor(x,y) {
        super({x,y, width: Resources.Bird.width, height: Resources.Bird.height })
    }
    onInitialize(engine) {
        this.sprite = Resources.Bird.toSprite()
        this.graphics.use(this.sprite)
        this.sprite.flipHorizontal = true
    }

}