import {DataStore} from "../base/DataStore.js";
import {Director} from "../Director.js";

export class Score {
    constructor() {
        this.ctx = DataStore.getInstance().ctx;
        this.scoreNumber = 0;
        //控制加分
        this.isScore = true;
    }

    draw() {
        this.ctx.font = '25px Arial';
        this.ctx.fillStyle = '#482fff';
        this.ctx.fillText(
            '得分：'+this.scoreNumber,
            Director.getInstance().canvasWidth / 2.6,
            Director.getInstance().canvasHeight / 18,
            1000
        )
    }
}