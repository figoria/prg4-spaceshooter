import {Background} from "./background.js";
import {UI} from "./score.js";
import {bullet} from "./bullet.js";
import {player} from "./player.js";
import {SpawnerTank} from "./spawnerTank.js";
import {SpawnerJeep} from "./spawnerJeep.js";
import {Spawnersoldier} from "./spawnerSoldier.js";
import {steen} from "./stone.js";
import {Engine, Input, Scene} from "excalibur";
import {ResourceLoader} from "./resources.js";


export class Start extends Scene {
    ui
    tank

    constructor() {
        super({width: 2050, height: 700})


    }

    onInitialize(Scene) {


        const background = new Background()
        this.add(background)


        this.ui = new UI()
        this.add(this.ui)




        const spawnTank = new SpawnerTank()
        this.add(spawnTank)

        const spawnJeep = new SpawnerJeep()
        this.add(spawnJeep)

        const spawnSoldier = new Spawnersoldier()
        this.add(spawnSoldier)


        const stone = new steen()
        this.add(stone)

    }
onActivate(_context) {
    this.tank = new player()
    this.add(this.tank)


}

    onPreUpdate(engine, delta) {


        if (
            engine.input.keyboard.wasPressed(
                Input.Keys.Space)) {
            console.log('klik');
            engine.add(new bullet(this.tank.pos.x + 100, this.tank.pos.y))
        }

        if(this.tank.isKilled()){
            engine.goToScene('dood')
        }

    }


}


