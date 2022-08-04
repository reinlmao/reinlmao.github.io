import * as PIXI from "../node_modules/pixi.js/dist/browser/pixi.min.mjs";

let app = new PIXI.Application({
    width: 500,
    height: 500
});
let graphics = new PIXI.Graphics();

let circle = graphics.drawCircle(100, 100, 25);
app.stage.addChild(circle);
