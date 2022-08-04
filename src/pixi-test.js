import * as PIXI from "../node_modules/pixi.js/dist/browser/pixi.min.mjs";

let app = new PIXI.Application({
    width: 500,
    height: 500,
    backgroundColor: 0x000000
});
document.body.appendChild(app.view);
let graphics = new PIXI.Graphics();

graphics.beginFill(0xffffff);
let circle = graphics.drawCircle(100, 100, 10);
graphics.endFill();

app.stage.addChild(graphics);
