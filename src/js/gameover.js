import {Actor, GraphicsGroup, Vector, Scene, Label, Font, FontUnit, Color, Input} from "excalibur";
import {ResourceLoader, Resources} from "./resources.js";
import {Background} from "./background.js";

export class Over extends Scene {

    offset
    constructor() {
        super({width: 2050, height: 700})
        const background = new Background()
        this.add(background)



    }
    onInitialize(engine){
            super.onInitialize(engine);
            this.title = new Label({
                text: 'Tank of Worlds',
                font: new Font({
                    unit: FontUnit.Px,
                    family: 'Impact',
                    size: 100,
                    color: Color.Black,
                }),
                pos: new Vector(800, 100)
            })
            this.add(this.title);

            this.subtitle = new Label({
                text: 'Druk op enter om opnieuw te beginnen!',
                font: new Font({
                    unit: FontUnit.Px,
                    family: 'Impact',
                    size: 28,
                    color: Color.Black,
                }),
                pos: new Vector(825, 600)
            })
            this.subtitle.actions.blink(500, 100, 500);
            this.add(this.subtitle);
        }

    onPreUpdate(engine, delta) {
        if (
            engine.input.keyboard.wasPressed(
                Input.Keys.Enter)) {
            console.log('start');
            engine.goToScene('startspel')
        }
    }
}