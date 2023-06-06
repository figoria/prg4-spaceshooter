import '../css/style.css'
import * as ex from "excalibur";
import { Resources, ResourceLoader } from './resources.js'
import { Background} from "./background.js";
import { enemy} from "./enemy.js";
import {player} from "./player.js";
import {Engine, Input} from "excalibur";
import {Start} from "./startgame.js";
import {Over} from "./gameover.js";
import {Load} from "./introgame.js";

export class Game extends Engine {




    constructor() {
        super({width: 2050, height: 700})
        this.start(ResourceLoader).then(() => this.startGame())
        this.showDebug(true);
        this.debug.transform.showAll = true;

    }

    startGame() {
        this.addScene( 'laad', new Load())
        this.addScene('startspel', new Start())
        this.addScene('dood', new Over())

        this.goToScene('laad')



    }

}


new Game()
