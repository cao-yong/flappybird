import {Sprite} from "../base/Sprite.js";
import {Director} from "../Director.js";

export class StartButton extends Sprite {
    constructor() {
        const image = Sprite.getImage('startButton');
        super(image,
            0, 0,
            image.width, image.height,
            (Director.getInstance().canvasWidth - image.width) / 2,
            (Director.getInstance().canvasHeight - image.height) / 2.5,
            image.width, image.height)
    }
}