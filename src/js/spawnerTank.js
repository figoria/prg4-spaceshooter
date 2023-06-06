import {Actor, Random, Timer} from "excalibur";
import {enemy} from "./enemy.js";




export class SpawnerTank extends Actor{

    constructor() {
        super();

        this.random = new Random(1337)

    }

    onInitialize(engine) {
        this.timer = new Timer({
            fcn: () => this.spawn(engine),
            interval: 6000,
            repeats: true
        })
        engine.currentScene.add(this.timer)
        this.timer.start()
    }

    spawn(engine) {
        console.log("spawn")
        const TankE = new enemy(
            this.random.integer(0, 800),
            this.random.integer(0, 600)
        )

        engine.currentScene.add(TankE)



    }
}