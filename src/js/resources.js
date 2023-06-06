import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import Background from '../images/background.png'
import themeSong from '../sounds/watertheme.mp3'
import tank from '../images/tank.png'
import steen from '../images/steen.png'
import jeep from '../images/jeep.png'
import tankE from '../images/tankE.png'
import soldier from '../images/soldier.png'
import bullet from '../images/bullet.png'
import over from '../images/game over.png'

const Resources = {
    Background: new ImageSource(Background),
    ThemeSong: new Sound(themeSong),
    Tank: new ImageSource(tank),
    Steen: new ImageSource(steen),
    Jeep: new ImageSource(jeep),
    TankE: new ImageSource(tankE),
    Soldier: new ImageSource(soldier),
    Bullet: new ImageSource(bullet),
    Over: new ImageSource(over)
}

const resourceArray = []
for (const key in Resources) {
    resourceArray.push(Resources[key])
}

const ResourceLoader = new Loader(resourceArray)

export { Resources, ResourceLoader }