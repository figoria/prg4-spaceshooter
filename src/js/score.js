import * as ex from "excalibur";
import {Color, Font, FontUnit, Label, ScreenElement, Vector} from "excalibur";


export class UI extends ScreenElement {

    score = 0
    scoreText

    constructor() {
        super()
    }

    onInitialize(engine) {
        this.scoreText = new Label({
            text: 'Score: 0',
            font: new Font({
                unit: FontUnit.Px,
                family: 'Impact',
                size: 28,
                color: Color.Black,
            }),
            pos: new Vector(1100, 35)
        })
        this.addChild(this.scoreText)
    }

    updateScore() {
        this.score++
        this.scoreText.text = `Score: ${this.score}`
    }
}